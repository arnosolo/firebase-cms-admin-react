import { useState, useContext, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '@src/context/AuthContext'
import { Password } from 'primereact/password'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'

export function AuthPage () {
  const navigate = useNavigate()
  const location = useLocation()
  const { isAuthenticated, login } = useContext(AuthContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  let fromPath = '/'
  if (location.state !== null) {
    const { from } = location.state
    if (from !== undefined) {
      fromPath = from
    }
  }

  useEffect(() => {
    if (isAuthenticated) {
      navigate(fromPath)
    }
  }, [isAuthenticated])

  async function handleLoginClick () {
    setLoading(() => true)
    await login(username, password)
    setLoading(() => false)
  }

  return (
    <div className="flex justify-center pt-12 w-full h-screen">
      <div>
        <div className='flex flex-col gap-6 pt-8 pb-8 px-12 bg-white rounded-lg'>
          <h2 className='text-center font-sans text-gray-700'>Please login first</h2>
          <span className="p-float-label">
            <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label htmlFor="username" className='font-mono'>Username</label>
          </span>
          <span className="p-float-label">
            <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            <label htmlFor="password" className='font-mono'>Password</label>
          </span>
          <Button label='Login' onClick={handleLoginClick} loading={loading}/>
        </div>
      </div>
    </div>
  )
}
