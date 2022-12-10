import { Link, useNavigate } from 'react-router-dom'
import { useState, useContext } from 'react'
import { useAuth } from '@src/hooks/useAuth'
import { AuthContext } from '@src/context/AuthContext'
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup'
import { Sidebar } from 'primereact/sidebar'
import { Button } from 'primereact/button'
import MenuItems from '@src/components/MenuItems'

function PageHeader () {
  const navigate = useNavigate()
  const { logout } = useAuth()
  const [sidebarVisible, setSidebarVisible] = useState(false)
  const { isAuthenticated } = useContext(AuthContext)

  const toggleVisible = () => {
    setSidebarVisible(!sidebarVisible)
  }

  const logoutConfirm: React.MouseEventHandler<HTMLElement> = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: 'Are you sure you want to logout?',
      icon: 'pi pi-exclamation-triangle',
      accept: async () => { await logout() },
      reject: () => {}
    })
  }

  return (
    <div className='h-14'>
      <div className='fixed top-0 w-full h-14 px-4 md:px-6 py-2 flex items-center justify-between bg-white shadow-sm'>
        <div className='flex items-center gap-4'>
          <button onClick={toggleVisible}>
            <i className={'pi pi-align-left text-6 text-gray-700 lg:hidden'}/>
          </button>
          <Link to='/'>
            <img className='w-8 h-8' src='/logo.svg' alt="logo" />
          </Link>
        </div>
        {isAuthenticated
          ? <i className="pi pi-user text-6 text-gray-700" onClick={logoutConfirm}/>
          : <Button label='Login' onClick={() => navigate('/login')} className="p-button-sm" />}
        <ConfirmPopup />
      </div>
      <Sidebar visible={sidebarVisible} onHide={() => setSidebarVisible(false)} position="left">
        <MenuItems />
      </Sidebar>
    </div>
  )
}

export default PageHeader
