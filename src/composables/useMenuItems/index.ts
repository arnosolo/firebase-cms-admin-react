interface MenuItem {
  label: string
  icon: string
  link: string
}

interface Section {
  id: string
  label: string
  items: MenuItem[]
}

export function useMenuItems () {
  const menuItems: Section[] = [
    {
      id: 'home',
      label: 'Home',
      items: [
        { label: 'Dashboard', icon: 'pi pi-home', link: '/' }
      ]
    },
    {
      id: 'site',
      label: 'Site',
      items: [
        { label: 'Metadata', icon: 'pi pi-info-circle', link: '/metadata' },
        { label: 'Banners', icon: 'pi pi-image', link: '/banners' },
        { label: 'Menus', icon: 'pi pi-list', link: '/menus' }
      ]
    },
    {
      id: 'product',
      label: 'Product',
      items: [
        { label: 'Products', icon: 'pi pi-shopping-bag', link: '/products' },
        { label: 'Categories', icon: 'pi pi-folder', link: '/categories' }
      ]
    },
    {
      id: 'content',
      label: 'Content',
      items: [
        { label: 'News', icon: 'pi pi-file', link: '/news' },
        { label: 'Pages', icon: 'pi pi-book', link: '/pages' }
      ]
    }
  ]

  return {
    menuItems
  }
}
