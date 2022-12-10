import { useMemo, useState } from 'react'
import { onAuthStateChanged, signInWithEmailAndPassword, signOut, User, getAuth } from '@firebase/auth'

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null)

  const isAuthenticated = useMemo(
    () => user !== null,
    [user]
  )

  const login = async (email: string, password: string) => {
    await firebaseSignInWithEmailAndPassword(email, password)
    await updateAuthState()
  }

  const logout = async () => {
    await firebaseSignOut()
    await updateAuthState()
  }

  async function firebaseSignInWithEmailAndPassword (email: string, password: string) {
    await signInWithEmailAndPassword(getAuth(), email, password)
  }

  async function firebaseSignOut () {
    await signOut(getAuth())
  }

  async function updateAuthState () {
    return await new Promise((resolve) => {
      onAuthStateChanged(getAuth(), (user) => {
        setUser(user)
        resolve(user !== null)
      })
    })
  }

  return { user, isAuthenticated, login, logout }
}
