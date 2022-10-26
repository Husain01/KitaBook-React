import React from 'react'
import { CartState } from '../../context/Context'
import './Toast.css'

export const Toast = () => {
    const {state: {toastContent}} = CartState()
  return (
    <div className='toast normal-shadow'>
        <span></span>
        <p>{toastContent}</p>
    </div>
  )
}
