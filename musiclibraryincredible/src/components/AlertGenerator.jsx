import React, {Component} from 'react';

class AlertGenerator extends Component {
    constructor(props) {
        super(props);
        this.state = {            
        }
    }
}

handleChange = (event) => {
    this.setState({
        [event.target.name]: event.target.value
    })
  }
  
handleSubmit = (event) => {
      event.preventDefault();
      //Calling a function passed via props
        //pass in this.state
  
  } 

render() {
    return ( <div>
         <h2>Hello, I am the alert generator</h2>





    </div>)






}

