import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state={email:"",password:"",islogin:false};
    handleChange(event){
        const target = event.target;
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name= target.name;
        this.setState({[name]:value});
    }

   handleSubmit(event){
    event.preventDefault();
        this.setState({islogin:true })
   }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit} >
                <label>Email <input type="text" name="email" value={this.state.name} onChange={this.handleChange}/></label><br />
                <label>Password <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></label><br />
                <input type="submit" value="Login" />
                </form>
            </div>
        )
    }

}

export default Login;