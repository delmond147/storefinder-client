import React from 'react'
import Nav from '../nav/Nav'
import Footer from '../footer/Footer'

export default function SignIn() {
  return (
    <>
      <Nav />
      <div className="content mt-5 ">
        
        <div className="container justify-content-center">
          <div className="row">
            <div className="col-md-6 p-3 mt-5 justify-content-center">
              <img src="images/logo.svg" alt="" className="img-fluid" />
            </div>
            <div className="col-md-6 contents">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="mb-4">
                    <h3 className="text-center">Sign In</h3>
                    <p className="mb-4 text-center">Welcome to "Finder" Sign In✌️</p>
                  </div>
                  <form action="#" method="post">
                    <div className="form-group first mb-2">
                      <label for="username">Username</label>
                      <input type="text" className="form-control py-3" id="username"/>

                    </div>
                    <div className="form-group last mb-4">
                      <label for="password">Password</label>
                      <input type="password" className="form-control py-3" id="password"/>

                    </div>

                    <div className="d-flex mb-5 justify-content-center">
                      <label className="control control--checkbox mb-0"><span className="caption">Remember me</span>
                        <input type="checkbox" checked="checked" />
                        <div className="control__indicator"></div>
                      </label>
                      <span className=""><a href="/reset-password" className="forgot-pass m-5">Forgot Password</a></span>
                    </div>

                    <div className="d-flex row">
                      <input type="submit" value="Sign In" className="btn btn-dark justify-content-center align-items-center" />
                    </div>
                    
                    <span className="d-block text-center my-4"><a href="/signup" className="">Don't have and account, SignUp</a></span>
                    <span className="d-block text-center my-4 text-muted">&mdash; or &mdash;</span>
                    
                    <div className="social-login">
                      <a href="facebook.com/delmond" className="facebook btn d-flex justify-content-center align-items-center">
                        <span className="icon-facebook mr-3"></span> SignIn with Facebook
                      </a>
  
                      <a href="google.com/delmondbongha" className="google btn d-flex justify-content-center align-items-center">
                        <span className="icon-google mr-3"></span> SignIn with Google
                      </a>
                    </div>
                  </form>
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}
