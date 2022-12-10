import { createContext } from 'react'
import { User } from '@firebase/auth'
import { useAuth } from '@src/hooks/useAuth'

interface Props {
  children: JSX.Element
}

interface AuthContextType {
  user: User | null
  isAuthenticated: boolean
  login: (email: string, password: string) => void
  logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {}
})

export const AuthProvider = ({ children }: Props) => {
  const { user, isAuthenticated, login, logout } = useAuth()

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}
