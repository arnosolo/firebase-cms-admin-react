import { Link, useLocation } from 'react-router-dom'
import reactLogo from '@src/assets/react.svg'
import { ConfirmPopup, confirmPopup } from 'primereact/confirmpopup'
import { useMenuItems } from '@src/composables/useMenuItems'

export default function SideBar () {
  const { menuItems } = useMenuItems()

  const { pathname } = useLocation()

  return (
    <ul className='flex flex-col gap-4' >
      {menuItems.map(section => (
        <li key={section.id} className="flex flex-col gap-4">
          <h2 className='font-bold font-sans text-1rem'>{section.label}</h2>
          <ul className='flex flex-col gap-2 '>
            {section.items.map(it => (
              <li key={it.label} className="py-2 pl-6 pr-8 hover:bg-lightViolet rounded-lg">
                <Link to={it.link}
                  className={`flex items-center gap-2  ${pathname === it.link ? 'text-blue-500' : 'text-gray-600'}`}
                >
                  <i className={`${it.icon}`} />
                  <h3 className='font-medium font-sans text-1rem'>{it.label}</h3>
                </Link>
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  )
}
