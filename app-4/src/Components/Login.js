import React, {Component} from 'react';

class Login extends Component{
  constructor(){
    super(); 

      this.state = {
        username: '',
        password: ''
      };
      this.handleLogin = this.handleLogin.bind(this);
  }

  handleUsername(val){
    this.setState({username: val})
  }

  handlePassword(val){
    this.setState({password: val})
  }

  handleLogin(){
    alert(`Username: ${this.state.username} Password: ${this.state.password}` );
  }


  render(){
    return(
      <div>
        <input onChange={(e) => this.handleUsername(e.target.value)} type="text"/>
        <input onChange={(e) => this.handlePassword(e.target.value)} type="text"/>
        <button onClick={this.handleLogin}>Login</button>
      </div>


    );
  }

}
export default Login




