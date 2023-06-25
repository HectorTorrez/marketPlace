import { DesktopNavbar, Header, MenuLeft } from './components'
export const Home: React.FC = () => {
  return (
    <>
    {/* <MobileNavbar/> */}
    <DesktopNavbar/>
    <section className='flex'>
    <MenuLeft/>
    <Header/>

    </section>
    </>
  )
}
