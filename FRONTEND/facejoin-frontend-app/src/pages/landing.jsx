import React from 'react';;
import "../App.css"
import { Link } from 'react-router-dom';

export default function LandingPage() {
    return (
        <div className='landingPageContainer'>
            {/* NAVBAR  */}
            
            <nav>
                <div className='navHeader'>
                   <h2>FaceJoin</h2> 
                </div>
                <div className='navlist'>
                    <p>Join as Guest</p>
                    <p>Register</p>
                    <div role='button'>
                        <p>Login</p>
                    </div>
                </div>
            </nav>
            
            {/* MAIN SECTION */}

            <div className="landingMainContainer">
                <div>
                    <h1><span style={{ color: "orange" }}>Connect</span> with your loved Ones</h1>
                    
                    <p>Cover a distance by FaceJoin</p>
                    <div role='button'>
                      <Link to={"/home"}>Get Started </Link>
                    </div>
                </div>
                {/* image section */}

                <div>
                    <img src="/mobile.png" alt="vedio call image" />
                </div>
            </div>
        </div>
    )
}