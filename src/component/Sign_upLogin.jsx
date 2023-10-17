import React from 'react'
import  { useState } from "react";
import axios from 'axios';
export default function Sign_upLogin() {
    const [displ,setDispl]=useState({display:"none"})
    const [disps,setDisps]=useState({display:"block"})
    const toggle_signup_login=()=>{
        if(displ.display=="none" && disps.display=="block"){
            setDispl({display:"block"})
            setDisps({display:"none"})
        }else{
            setDispl({display:"none"})
            setDisps({display:"block"})
        }  
    }
    const [sta,setSta]=useState();
    const [sdata,setSdata]=useState({
        first_name:"",
        last_name:"",
        email:"",
        password:"",
        confirm_password:""
    })
    const handleChange=(e)=>{
        const value=e.target.value;
        setSdata({
            ...sdata,
            [e.target.name]:value
        })

    }
    const handleSubmit=(e)=>{
             e.preventDefault();
             const userData={
                fname:sdata.first_name,
                lname:sdata.last_name,
                email:sdata.email,
                password:sdata.password,
                cpassword:sdata.confirm_password,
             }
              axios.post("http://127.0.0.1:8000/api/user", userData).then((response)=>{
                       setSta(response.status);
                       console.log(sta);
              })
    }
    if(sta==201){
        return(
            <h2>Successfully Register!</h2>
        )
    }
    return (
        <div className='container-fluid'>
            <form action="" style={disps} method="post">
                <h2>Register</h2>
                <p className="hint-text">Create your account. It's free and only takes a minute.</p>
                <div className="form-group">
                    <div className="row">
                        <div className="col"><input type="text" className="form-control"  value={sdata.first_name} onChange={handleChange} name="first_name" placeholder="First Name" required="required" /></div>
                        <div className="col"><input type="text" className="form-control"  value={sdata.last_name} onChange={handleChange} name="last_name" placeholder="Last Name" required="required" /></div>
                    </div>
                </div>
                <div className="form-group">
                    <input type="email" className="form-control"  value={sdata.email} onChange={handleChange} name="email" placeholder="Email" required="required" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control"  value={sdata.password} onChange={handleChange} name="password" placeholder="Password" required="required" />
                </div>
                <div className="form-group">
                    <input type="password" className="form-control"  value={sdata.confirm_password} onChange={handleChange} name="confirm_password" placeholder="Confirm Password" required="required" />
                </div>
                <div className="form-group">
                    <label className="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
                </div>
                <div className="form-group">
                    <button type="submit" onClick={handleSubmit} className="btn btn-success btn-lg btn-block">Register Now</button>
                </div>
            </form>
            <div className="text-center" style={disps}>Already have an account? <a href="#" onClick={toggle_signup_login}>Sign in</a></div>
            <form action="" style={displ} method="post">
                <h2 class="text-center">Login</h2>
                <div class="form-group has-error">
                    <input type="text" class="form-control" name="username" placeholder="Username" required="required" />
                </div>
                <div class="form-group">
                    <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary btn-lg btn-block">Sign in</button>
                </div>
                <p><a href="#">Lost your Password?</a></p>
                <p><a href="#" onClick={toggle_signup_login}>Don't have account?</a></p>
            </form>



        </div >
    )
}
