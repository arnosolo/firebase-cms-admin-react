import MenuItems from '@src/components/MenuItems'

export function MenuItemsSidebar () {
  return (
    <div className='lt-lg:hidden'>
      <div className='py-6 pl-8 pr-8 bg-white rounded-2xl'>
        <MenuItems />
      </div>
    </div>
  )
}
