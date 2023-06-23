const Categories = ({ uniqueCategories, filterItems }) => {
  return (
    <nav className="btn-container">
      {uniqueCategories.map((category, index) => {
        return (
          <button
            className="btn"
            key={index}
            onClick={() => filterItems(category)}
          >
            {category}
          </button>
        )
      })}
    </nav>
  )
}
export default Categories
