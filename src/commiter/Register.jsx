import React, { useState } from 'react'
import Input from './Input'
import Button from './Button'
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const navigate = useNavigate()

  const userDetails = {
    name: '',
    email: '',
    password: ''
  }

  const [data, setData] = useState(userDetails)

  const handleInput = (e) => {
    const { id, value } = e.target
    setData({ ...data, [id]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!data.name || !data.email || !data.password) {
      alert('Please fill all the fields')
      return
    }

    const getData = JSON.parse(localStorage.getItem('users') || '[]')
    const arr = [...getData, data]
    localStorage.setItem('users', JSON.stringify(arr))
    alert('Registration success')
    navigate('/login')
  }

  return (
    <div className='h-screen bg-amber-200 flex justify-center items-center rounded-md'>
      <div className='h-100 w-100 bg-amber-50 p-6 rounded-lg shadow'>
        <form onSubmit={handleSubmit} className='space-y-4'>
          <label className='block'>
            <span>Name</span>
            <Input
              id='name'
              type='text'
              placeholder='Enter your name'
              value={data.name}
              onChange={handleInput}
              className='w-full border rounded px-3 py-2 mt-1'
            />
          </label>

          <label className='block'>
            <span>Email</span>
            <Input
              id='email'
              type='email'
              placeholder='Enter your email'
              value={data.email}
              onChange={handleInput}
              className='w-full border rounded px-3 py-2 mt-1'
            />
          </label>

          <label className='block'>
            <span>Password</span>
            <Input
              id='password'
              type='password'
              placeholder='Enter your password'
              value={data.password}
              onChange={handleInput}
              className='w-full border rounded px-3 py-2 mt-1'
            />
          </label>

          <Button
            type='submit'
            text='Register'
            className='w-full bg-amber-400 text-white py-2 rounded hover:bg-amber-500'
          />
        </form>
      </div>
    </div>
  )
}

export default Register

