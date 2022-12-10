import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import { AuthContext } from '@src/context/AuthContext'

interface Props {
  children: JSX.Element
}

export function RequireAuth ({ children }: Props) {
  const location = useLocation()
  const { isAuthenticated } = useContext(AuthContext)

  if (!isAuthenticated) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace/>
  }

  return children
}
