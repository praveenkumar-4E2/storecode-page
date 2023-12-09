import React from 'react'
import './InputField.css'

const InputField = ({type, placeholder, value}) => {
  return (
      <div className='input-border border-gradient gradient-right'>
          <input className='input-field'
           type={type}
           placeholder={placeholder}
              value={value}
          />
      </div>
  )
}

export default InputField