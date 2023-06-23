import MenuItem from './MenuItem'

const Menu = ({ menuItems }) => {
  return (
    <section className="section-center">
      {menuItems.map((item) => (
        <MenuItem item={item} key={item.id} />
      ))}
    </section>
  )
}
export default Menu
