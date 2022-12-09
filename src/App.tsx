import { BrowserRouter as Router } from 'react-router-dom'
import PageHeader from '@src/components/PageHeader'
import { RouteView } from './router'
import { MenuItemsSidebar } from '@src/components/MenuItemsSidebar'

function App () {
  return (
      <Router>
        <div className="App">
          <PageHeader />
          <div className='flex gap-6 py-6 px-4 md:px-6 bg-lightViolet'>
            <MenuItemsSidebar />
            <RouteView />
          </div>
        </div>
      </Router>
  )
}

export default App
