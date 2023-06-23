import { useState } from 'react'
import data from './data'

import Title from './Title'
import Menu from './Menu'
import Categories from './Categories'

const categories = data.map((item) => item.category)
const uniqueCategories = Array.from(new Set(categories).add('all')).sort()

const App = () => {
  const [menuItems, setMenuItems] = useState(data)

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data)
      return
    }
    const filteredItems = data.filter((item) => item.category === category)

    setMenuItems(filteredItems)
  }
  return (
    <main>
      <section className="menu">
        <Title text="Our Menu" />
        <Categories
          uniqueCategories={uniqueCategories}
          filterItems={filterItems}
        />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  )
}
export default App
