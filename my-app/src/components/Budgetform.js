import React from 'react'
import Button from 'react-bootstrap/Button';
import Firebase from 'firebase';
import config from "./config.js";
import { getDatabase, ref, set, onValue, get, child} from "firebase/database";
 import { render as renderJSX,ReactDom } from 'react-dom';

class Budgetform extends React.Component{
  constructor(props){
    super(props);
    this.initialize = this.initialize.bind(this);
    this.setCash = this.setCash.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.setTemp = this.setTemp.bind(this);
    this.addCash = this.addCash.bind(this);
    this.state = {cash:'Click the any button to Initialize program', temp:0};
    if (!Firebase.apps.length) {
      Firebase.initializeApp({});
   }else {
      Firebase.app(); // if already initialized, use that one
   }

  }  
  setCash (event) {
    this.setState({cash: this.state.temp});
    const db = getDatabase();
  set(ref(db),{
    cash: this.state.temp,
});

  }

  initialize (event) {
    //use get to read the value
    const x = Number(this.state.cash); 
    console.log(x);
    this.setState({cash: x});
    
  }
  setTemp (event) {
    this.setState({temp: event.target.value});

  }
  handleSubmit(event) {
    //return (<h1>{this.state.cash}</h1>);
    event.preventDefault();
  }
  addCash (event) {
    const x = Number(this.state.cash) + 1
    console.log(x);
    this.setState({cash: x});
    const db = getDatabase();
  set(ref(db),{
    cash: Number(x),
});

  }
  
  
  render(){
    const db = getDatabase();
    const dref = ref(db, '/cash');
    onValue(dref, (snapshot) => {
      this.state.cash = snapshot.val();
      //console.log(data);
      //const x = int(data);
      
});

      //DatabaseReference ref = users.child("GTjrWgpKjoeXUt4JdBJTYP1JkVT2/fnBOM...`");

      /*
      const dbRef = ref(getDatabase());
    get(child(dbRef, `cash/`)).then((snapshot) => {
  if (snapshot.exists()) {
    console.log(snapshot.val());
    const money = snapshot.val();
    console.log(money);
    
    x = 1;
  } 
  else{
    const money = this.state.cash;
    x = 1;
  }
});
    }
    */
    const money = this.state.cash;
    const temp = this.state.temp;
    const mystyle = {
      color: "white",
      padding: "100px",
      fontFamily: "Arial"
    };
    const button = {
      padding: ""
      
    };
    const butt2 = {
      padding: "100px"
    }
  return(
    <div className="cashForm"> 
    <h1 style={mystyle}>Monthly Budget:{money}</h1> 
    <Button type ={butt2}variant="primary"onClick={this.addCash} onChange={this.initialize}>Add Cash</Button>
    <Button style={button}variant="primary"onClick={this.setCash}>Set Cash</Button>
    <input type="number" placeholder="Enter Cash Amount" value={temp} onChange={this.setTemp}/>
    </div>
    )
}
}

export default Budgetform;