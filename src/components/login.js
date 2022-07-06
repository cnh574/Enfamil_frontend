
// import { render } from '@testing-library/react'
import React, {Component} from 'react'

class Login extends Component =  {

    state = {
        credentials:{
            username: " ", password: ""
        }
    }

login = event => {
    console.log ('this.state.credentials')
}

inputChanged = event => {
    const cred = this.state.credentials;
    cred[event.target.name] = event.target.value ; 
    this.setState({credtials: cred}) 
}
    render () {
      return (
    <div>
      <h1> Login user form </h1>
      <label>
          Username:
          <input type="text" name="username" value= {this.state.credentials.username} onChange={this.inputChanged} />
      </label>
      <label>
          Password:
          <input type="password" name="password" value= {this.state.credentials.password} onChange={this.inputChanged}/>
      </label>
<button onClick= {this.login}>Login</button>
    </div>
  )
}  
    }
  

export default login
