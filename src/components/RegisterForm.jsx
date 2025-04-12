import React from 'react'

function RegisterForm() {
  return (
    <div>
        <form action="form">
            <label htmlFor="">UserName</label>
            <input type="text" name="user" id="user" />
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
            <label htmlFor="pass">Password</label>
            <input type="password" name="password" id="password" />
            <button type='submit'>Register</button>
        </form>
    </div>
  )
}

export default RegisterForm