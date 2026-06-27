import React from 'react'

const Input = ({ type, placeholder, id, value, onChange, className }) => {
  return (
    <div>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  )
}

export default Input
