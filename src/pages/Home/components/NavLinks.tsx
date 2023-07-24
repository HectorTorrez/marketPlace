import { NavLink } from 'react-router-dom'

interface NavLinksProps {
  mobile: string
  desktop: string
}

export const NavLinks = ({ mobile, desktop }: NavLinksProps): JSX.Element => {
  return (

    <section className={` ${mobile}  ${desktop} gap-5 md:w-2/4  items-center  list-none cursor-pointer font-bold `}>
    <NavLink to={'/'} className={({ isActive }) => isActive ? 'pb-4 border-b-2  border-b-buttons' : 'pb-4 hover:border-b-2'}>Dashboard</NavLink>
    <NavLink to={'/faq'} className={({ isActive }) => isActive ? 'pb-4 border-b-2  border-b-buttons' : 'pb-4 hover:border-b-2'}>FAQ</NavLink>
    <NavLink to={'/about-us'} className={({ isActive }) => isActive ? 'pb-4 border-b-2  border-b-buttons' : 'pb-4 hover:border-b-2'}>About Us</NavLink>
    </section>

  )
}
