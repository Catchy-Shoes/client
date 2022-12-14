import React from 'react'
import { Link } from 'react-router-dom'

import '../../App.css'

const ForgetPasswordPage=()=> {
    return (
        <div className="text-center m-5-auto" id="reset">
            <h1>Reset your password</h1>
            <h5>Enter your email address and we will send you a new password</h5>
            <form action="/login" id="reset2">
                <p>
                    <label id="reset_pass_lbl" >Email address</label><br/>
                    <input type="email" name="email" required  id="reset_pass_lbl2" />
                </p>
                <p>
                    <button id="sub_btn" type="submit">Send password reset email</button>
                </p>
            </form>
            <footer>
                <p>First time? <Link to="/register">Create an account</Link>.</p>
                <p><Link to="/">Back to Homepage</Link>.</p>
            </footer>
        </div>
    )
}
export {ForgetPasswordPage}
