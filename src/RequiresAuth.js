import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { CartState } from './context/Context';

const RequiresAuth = ({children}) => {
    const location = useLocation();
    const {authState: {token}} = CartState()
  return token ? (children): (
      <Navigate to='/login' state={{from: location}} replace />
  )
}

export default RequiresAuth