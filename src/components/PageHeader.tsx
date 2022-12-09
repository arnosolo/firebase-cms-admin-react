import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup'
import { Sidebar } from 'primereact/sidebar'
import MenuItems from '@src/components/MenuItems'

function PageHeader () {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    setVisible(!visible)
  }

  const confirm: React.MouseEventHandler<HTMLElement> = (event) => {
    confirmPopup({
      target: event.currentTarget,
      message: 'Are you sure you want to proceed?',
      icon: 'pi pi-exclamation-triangle',
      accept: () => console.log(123),
      reject: () => console.log(12345)
    })
  }

  return (
    <div className='h-12'>
      <div className='fixed top-0 w-full h-12 px-4 md:px-6 py-2 flex items-center justify-between bg-white shadow-sm'>
        <div className='flex items-center gap-4'>
          <button onClick={toggleVisible}>
            <i className={'pi pi-align-left text-6 text-gray-700 lg:hidden'}/>
          </button>
          <Link to='/'>
            <img className='w-8 h-8' src='/logo.svg' alt="logo" />
          </Link>
        </div>
        <i className="pi pi-user text-6 text-gray-700" onClick={confirm}/>
        <ConfirmPopup />
      </div>
      <Sidebar visible={visible} onHide={() => setVisible(false)} position="left">
        <MenuItems />
      </Sidebar>
    </div>
  )
}

export default PageHeader
