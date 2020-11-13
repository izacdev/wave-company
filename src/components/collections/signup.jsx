import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Form from '@material-ui/core/FormControl';

const formValid = ({ formErrors, ...rest }) => {
    let valid = true;
    Object.values(formErrors,).forEach(val => {
        val.length > 0 && (valid = false)});

        Object.values(rest).forEach(val => {
            val === null && (valid = false)
        });
        return valid
}


export class signup extends Component {
    constructor(props){
        super(props)
        this.state = {
        email: null,
        password: null,
        formErrors: {
            email: "",
            password: ""
        }
    }
    }
    hundleSubmit = (e) => {
        e.preventDefault()
       if(formValid(this.state)){
           alert(`${this.state.email} thanks will contact you soon`)
           console.log(
               `--submitting--
               Email: ${this.state.email}
               password: ${this.state.password}
               `
           );
       }else{
           console.error('Invalid Form has errors')
       }
    }
    hundleChange = (e) => {
        e.preventDefault();
        const {name, value} = e.target
        let formErrors = this.state.formErrors;

        // console.log("name: ", name);
        // console.log("values: ", value);

        switch (name) {
            case "email":
                formErrors.email = value.length < 9 ? "Valid Email Address required" : "";
                break;
            case "password":
                formErrors.password = value.length < 6 ? "Password required" : "";
            break;
            default:
        }
        this.setState({ formErrors, [name]:  value}, () => console.log(this.state))
    }
    render() {
        const { formErrors } = this.state;
        return (
            <div>
                <AppBar style={AppStyle}>Wave Software Company</AppBar>
                <br/>
                <br/>
                <div className="form">
                <h1>Please Signup For easy reachout</h1>
                <form onSubmit={this.hundleSubmit}>
                    <Form>
                    <div>
                    {formErrors.email.length > 0 && (
                        <span className="error">{formErrors.email}</span>
                    )}
                    <br/>
                    <TextField 
                    className={formErrors.email > 0 ? "error" : null}
                    label="Email" 
                    type="email" 
                    name="email" 
                    onChange={this.hundleChange} 
                    noValidate
                    />
                    </div>
                    <br/>
                    <br/>
                    <div>
                    <TextField label="Password" type="password" name="password" onChange={this.hundleChange}
                    className=""
                    noValidate
                    />
                    <br/>
                    {formErrors.password.length > 0 && (
                        <span className="error">{formErrors.password}</span>
                    )}
                    </div>
                    </Form>
                    <br/>
                    <br/>
                    <Link to="/home">
                    <Button type="submit" 
                    style={buttonStyle}>
                    Submit
                    </Button>
                    </Link>
                </form>
                </div>
                <br/>
            </div>
        )
    }
}
const AppStyle = {
    height: "40px",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "16px"
}
const buttonStyle = {
    backgroundColor: "#3f51b5",
    color: "#fff",
    marginBottom: "10px",
    paddingLeft: "80px",
    paddingRight: "80px",
}

export default signup
