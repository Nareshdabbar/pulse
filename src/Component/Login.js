import React from 'react'

function Login() {
  return (
    <div>
        <form>
            <div>
                <label>User Name</label>
                <input placeholder='User name'></input>
            </div>
            <div>
                <label type="password">Password</label>
                <input placeholder='Enter Password'></input>
            </div>
            <button type='submit '>Login</button>
            <button type='submit'>Cancel</button>
                  
        </form>
        <div>
          <input id='rem' type='checkbox'></input>
          <label for='rem'>Remember me</label>
        </div>
        <div>
          <button type='submit'>forgot</button>
        </div>
        <button>helo</button>
    </div>
  )
}

export default Login