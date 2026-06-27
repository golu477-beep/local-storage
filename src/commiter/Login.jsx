import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'

const  Login = () => {

  const userDetails = {
    email: '',
    password: ''
  }
  const [data, setData] = useState(userDetails)
   
  const handleInput = (e) => {
    const { id, value } = e.target
    setData({ ...data, [id]: value })
  }

  const handleSubmit = () => {
    const getData = JSON.parse(localStorage.getItem('users') || '[]')
    const foundUser = getData.find(
      (user) =>
        user.email === data.email &&
        user.password === data.password
    )
    if (foundUser) {
      alert('Login Successful')
    } else {
      alert('Invalid Email or Password')
    }
  }
  const submit =  () => {
    const getData =JSON.parse(localStorage.stateItem('user') || '[]')
    console.log(users)
  }
  return (
    <div className='h-screen bg-amber-300 flex justify-center items-center'>
       <div  className='h-60 w-100 border rounded-4xl'>
         <label className='block p-3'>
            <span>Email :</span>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
               value={data.email}
               onChange={handleInput}
              className='w-full border rounded px-3 py-2 mt-1'
            />
          </label>

          <label className='block p-3'>
            <span>Password :</span>
            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              value={data.password}
              onChange={handleInput}
              className='w-full border rounded px-3 py-2 mt-1 '
            />
          </label>
          <div className='flex justify-center  p-5 '>
           <button type='button' onClick={handleSubmit} className='border  bg-cyan-400  active:bg-blue-50'>submit</button>

          </div>
       </div>
    </div>
  )
}

export default Login
   
