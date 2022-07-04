import React from 'react'
import GoogleButton from 'react-google-button'
import { FacebookLoginButton } from 'react-facebook-login-button'
import { GitHubButton } from 'react-github-button';

function Login() {
  return (
    <div className="p-4 box">
      <h1>Hello</h1>
      <GoogleButton />
      <FacebookLoginButton />
      <GitHubButton />
    </div>
  )
}

export default Login
