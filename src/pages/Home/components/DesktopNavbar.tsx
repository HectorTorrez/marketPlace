
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../../store'
import { useState, useEffect } from 'react'
import { supabase } from '../../../supabase/client'
import { logOut } from '../../../store/auth/thunk'
import { type ThunkDispatch } from 'redux-thunk'
import { type Action } from '@reduxjs/toolkit'
import { Profile } from './Profile'
import { MobileNavbar } from '.'
import { NavLinks } from './NavLinks'
import { Letter, Store } from '../../../components/Icons'
import { filterProduct } from '../../../store/products/productSlice'

export const DesktopNavbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)
  const [navbar, setNavbar] = useState(false)
  const [search, setSearch] = useState('')

  const { login, email } = useSelector((state: RootState) => state.auth)

  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()

  const handleLogout = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut()
    console.log(error)
    void dispatch(logOut())
  }

  const handleShowNav = (): void => {
    setNavbar(!navbar)
  }

  const handleClip = (): void => {
    setIsHovered(!isHovered)
  }
  useEffect(() => {
    void dispatch(filterProduct(search.toLowerCase()))
  }, [search])
  return (
    <header className='flex flex-col  w-full  items-center  md:pt-4  shadow-md  md:flex-row md:justify-between md:px-2  '>
      <section className='md:max-w-6xl m-auto w-full flex flex-col'>
       <button onClick={handleShowNav} className='my-4 self-end mr-6 md:hidden'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
      </svg>
      </button>
    {
      navbar && (
        <MobileNavbar>
        <button onClick={handleShowNav} className='my-4 self-end '>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
        </svg>

        </button>
        <Profile login={login} isHovered={isHovered} handleClip={handleClip} email={email} handleLogout={handleLogout}/>
        <NavLinks mobile='flex flex-col' desktop=''/>
      </MobileNavbar>
      )
    }
      <section className=' w-full xl:max-w-6xl flex justify-center m-auto'>

           <NavLinks mobile='hidden' desktop='md:flex justify-start'/>
        <section className='flex flex-col w-screen items-center align-middle m-auto  cursor-pointer pb-4 gap-5  md:flex-row md:justify-end'>
            <section className='flex items-center gap-2 bg-inputs w-72 md:w-1/3 p-2 rounded-xl'>

            <input onChange={(e) => { setSearch(e.target.value) }} className='bg-inputs outline-none border-none w-full' type="text" name="search" id="search" placeholder="Search" />
            </section>
          <section className=' flex list-none gap-3 items-center '>
              <li className='p-2 rounded-full bg-inputs'><Letter/></li>
              <li className='p-2 rounded-full bg-inputs'><Store/></li>
          </section>
            <section className='hidden md:flex'>
            <Profile login={login} isHovered={isHovered} handleClip={handleClip} email={email} handleLogout={handleLogout}/>
            </section>
          </section>
        </section>
        </section>
    </header>
  )
}
