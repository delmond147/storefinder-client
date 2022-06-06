import React from 'react'
import Nav from '../../components/nav/Nav'
import Footer from '../../components/footer/Footer'

export default function SignUp() {
  return (
    <>
      <Nav />
      <div class="content">
        <div class="container">
          <div class="row">
            <div class="col-md-6">
              <img src="images/logo.svg" alt="" class="img-fluid" />
            </div>
            <div class="col-md-6 contents">
              <div class="row justify-content-center">
                <div class="col-md-8">
                  <div class="mb-4">
                    <h3>Sign Up</h3>
                    <p class="mb-4"></p>
                  </div>
                  <form action="#" method="post">
                    <div class="form-group first mb-2">
                      <label for="username">Username</label>
                      <input type="text" class="form-control" id="username" />
                    </div>

                    <div class="form-group first mb-2">
                      <label for="username">Email</label>
                      <input type="email" class="form-control" id="username" />
                    </div>

                    <div class="form-group last mb-4">
                      <label for="password">Password</label>
                      <input type="password" class="form-control" id="password" />

                    </div>

                    <div class="form-group last mb-4">
                      <label for="password">Comfirm Password</label>
                      <input type="password" class="form-control" id="password" />

                    </div>

                    <div class="d-flex mb-5 align-items-center">
                      <label class="control control--checkbox mb-0"><span class="caption">Remember me</span>
                        <input type="checkbox" checked="checked" />
                        <div class="control__indicator"></div>
                      </label>
                      <span class="ml-auto"><a href="/reset-password" class="forgot-pass m-5">Forgot Password</a></span>
                    </div>

                    <input type="submit" value="Sign Up" class="btn btn-block btn-primary" />

                    <span class="d-block text-left my-4 text-muted">&mdash; or sign up with &mdash;</span>

                    <div class="social-login">
                      <a href="facebook.com/delmond" class="facebook">
                        <span class="icon-facebook mr-3"></span>
                      </a>
                      <a href="twitter.com/delmondbongha" class="twitter">
                        <span class="icon-twitter mr-3"></span>
                      </a>
                      <a href="google.com/delmondbongha" class="google">
                        <span class="icon-google mr-3"></span>
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
