import React from 'react';
import {Link,Redirect} from 'react-router-dom';
import serverApi from '../api/server';
import '../css/register.css';
class Register extends React.Component{
    state = {
        fields:{
            email: '',
            password : '',
            cnf_password : ''
        },
        errors:{
           
        },
        message: '',
        redirect : false
    }
    

    handleValidation(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;
        if(!fields['email']){
            formIsValid = false;
            errors['email'] = 'Email is required';
        }

        if(typeof fields['email'] !== 'undefined'){
            let lastAtPos = fields["email"].lastIndexOf('@');
            let lastDotPos = fields['email'].lastIndexOf('.');
            if (!(lastAtPos < lastDotPos && lastAtPos > 0 && fields["email"].indexOf('@@') === -1 && lastDotPos > 2 && (fields["email"].length - lastDotPos) > 2)) {
                formIsValid = false;
                errors["email"] = "Email is not valid";
            }

        }

        if(!fields['password']){
            errors["password"] = 'Password Is Required';
            formIsValid=false;
        }

        if(!fields['cnf_password']){
            errors['cnf_password'] = 'Confirm Password is Required';
            formIsValid = false;
        }

        if(fields['password'] && fields['cnf_password']){
            if(fields['password'] !== fields['cnf_password']){
                errors['cnf_password'] = 'Password and Confirm Password should be same';
                formIsValid=false;
            }   
        }

        this.setState({errors});
        
        return formIsValid;
    }

    submitHandler = async (event) =>{
        
        event.preventDefault();
        if(this.handleValidation()){
           await serverApi.post('register/user',{
                        user : this.state.fields
            }).then((response) =>{
                
                this.setState({message : response.data.message,redirect:true});
               
                
            });
            
            
        }
        else{
            console.log('FOrm is Not submitted');
        }
    }

    changeHandler  = (event)=>{
        const name = event.target.name;
        const value = event.target.value;
        let fields = this.state.fields;
        fields[name] = value;
        this.setState({fields});
    }
    resetform = () =>{
        this.setState({
            fields: {                   // object that we want to update
                 // keep all other key-value pairs
                email: '',
                password:'',
                cnf_password:''       // update the value of specific key
            }
        })
        //this.setState({...fields, email:'',password:'', cnf_password:''})
    }
    componentDidMount(){
        console.log(this.state.fields);
    }
    render(){
       const { redirect } = this.state;
       if(redirect){
            return <Redirect to={{
                pathname : '/login',
                state : {message: this.state.message}
            }} />;
       }
        return(
            <div>
                <form onSubmit={this.submitHandler}>
                    <div className="container">
                        <h1>Register</h1>
                        <p>Please fill in this form to create an account.</p>
                        <hr/>
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Enter Email" onChange={this.changeHandler} value={this.state.fields.email} autoComplete="off" />
                        <span style={{color: "red"}}>{this.state.errors.email}</span><br />
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Enter Password" onChange={this.changeHandler} value={this.state.fields.password} autoComplete="off"  />
                        <span style={{color: "red"}}>{this.state.errors.password}</span><br />
                        <label htmlFor="Confirm password">Confirm PAssword</label>
                        <input type="password" name="cnf_password" placeholder="Confirm Password" onChange={this.changeHandler} value={this.state.fields.cnf_password} autoComplete="off" />
                        <span style={{color: "red"}}>{this.state.errors.cnf_password}</span><br />
                        <hr />
                        <p>By creating an account you agree to our <Link to="#">Terms & Privacy</Link>.</p>
                        <button type="submit" className="registerbtn">Register</button>
                    </div>
                    <div className="container signin">
                        <p>Already have an account? <Link to="#">Sign in</Link>.</p>
                    </div>
                </form>

            </div>
        )
    }
}

export default Register;