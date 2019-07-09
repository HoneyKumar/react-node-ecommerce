import React from 'react';

class Login extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    state={email:"",password:"",islogin:false,error:{
        email : '',
        password: ''
    }};
    handleChange(event){
        const target = event.target;
        const value = target.type ==='checkbox' ? target.checked : target.value;
        const name= target.name;
        this.setState({[name]:value});
    }

    formvalidation = ()=>{
        let error ={}
        let isformValid = true;
            if(!this.state.email){
                error['email'] = 'email is Required';
                isformValid = false;
            }
            else if(typeof this.state.email !== 'undefined'){
                let lastAtPos = this.state.email.lastIndexOf('@');
                let lastDotPos = this.state.email.lastIndexOf('.');
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && this.state.email.indexOf('@@') === -1 && lastDotPos > 2 && (this.state.email.length - lastDotPos) > 2)) {
                    isformValid = false;
                    error["email"] = "Email is not valid";
                }
            }
            if(!this.state.password){
                error['password'] = 'Password Is Required';
                isformValid = false;
            }
            this.setState({error});
            console.log('aaa');
    }

   handleSubmit(event){
        event.preventDefault();
        if(this.formvalidation()){

        }
        else{

        }
   }
    render(){
        let message;
        if(this.props.location.state !== undefined && this.props.location.state.message){
            message = this.props.location.state.message;
        }
        
     
        return(
           
            <div>
                <div>
                    {message}
                </div>
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