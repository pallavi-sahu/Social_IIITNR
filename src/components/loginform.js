import React, { useState } from "react"
import "./loginform.css"

const Loginform = () => {

    return (
        <div className="cover">
          <div className="outercover">
          <div className="innercover">
            <img className="userlogo" src="pictures/test-account.png" alt="userlogo"></img>
             <h1 className="logintext">Login</h1> 
             <h3 className="logintext"><p>To IIITNR</p></h3>
             <button className="login-btn">
              {/* <img className="googlelogo" src="pictures/googlelogo.png"></img> */}
              <p>Continue with Institute Email</p>
            </button>
          </div>
          </div>
        </div>
        
    )
}
 
export default Loginform;