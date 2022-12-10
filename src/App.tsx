import { BrowserRouter } from 'react-router-dom'
import PageHeader from '@src/components/PageHeader'
import { RouteView } from './router'
import { FirebaseProvider } from '@src/context/FirebaseContext'
import { AuthProvider } from '@src/context/AuthContext'
import { MenuItemsSidebar } from '@src/components/MenuItemsSidebar'
import { useAuth } from './hooks/useAuth'

function App () {
  const { login } = useAuth()

  async function handleLoginClick () {
    await login('arno756@outlook.com', 'aFlJTC9Vve1eDikAxbbNrqpc')
  }

  return (
    <BrowserRouter>
      <FirebaseProvider>
        <AuthProvider>
          <div className="App">
            <PageHeader />
            <div className='flex gap-6 py-6 px-4 md:px-6 bg-lightViolet'>
              <MenuItemsSidebar />
              <RouteView />
            </div>
          </div>
        </AuthProvider>
      </FirebaseProvider>
    </BrowserRouter>
  )
}

export default App
