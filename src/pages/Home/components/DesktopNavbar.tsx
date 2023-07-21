import { HiOutlineMail } from 'react-icons/hi'
import { BiWallet, BiNotification } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import { NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../../store'
import { useState } from 'react'
import { supabase } from '../../../supabase/client'
import { logOut } from '../../../store/auth/thunk'
import { type ThunkDispatch } from 'redux-thunk'
import { type Action } from '@reduxjs/toolkit'
import { Profile } from './Profile'

export const DesktopNavbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  const { login, email } = useSelector((state: RootState) => state.auth)

  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()

  const handleLogout = async (): Promise<void> => {
    const { error } = await supabase.auth.signOut()
    console.log(error)
    void dispatch(logOut())
  }

  const handleClip = (): void => {
    setIsHovered(!isHovered)
  }

  return (
    <header className='flex flex-col  w-screen items-center  pt-4  shadow-md  md:flex-row md:justify-between md:px-2  '>
        <section className='hidden gap-5 h-14 w-2/4 items-center  list-none cursor-pointer font-bold md:flex'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'pb-4 border-b-2  border-b-buttons' : 'pb-4 hover:border-b-2'}>Dashboard</NavLink>
            <NavLink to={'/faq'} className={({ isActive }) => isActive ? 'pb-4 border-b-2  border-b-buttons' : 'pb-4 hover:border-b-2'}>FAQ</NavLink>
            <NavLink to={'/about-us'} className={({ isActive }) => isActive ? 'pb-4 border-b-2  border-b-buttons' : 'pb-4 hover:border-b-2'}>About Us</NavLink>
        </section>

        <section className='flex flex-col w-screen items-center align-middle m-auto  cursor-pointer pb-4 gap-5  md:flex-row md:justify-center'>
            <section className='flex items-center gap-2 bg-inputs w-72 md:w-1/3 p-2 rounded-xl'>
                <CiSearch/>
            <input className='bg-inputs outline-none border-none w-full' type="text" name="search" id="search" placeholder="Search" />
            </section>
          <section className=' flex list-none gap-3 items-center '>
              <li className='p-2 rounded-full bg-inputs'><HiOutlineMail/></li>
              <li className='p-2 rounded-full bg-inputs'><BiNotification/></li>
              <li className='p-2 rounded-full bg-inputs'><BiWallet/></li>
          </section>
            <section className='hidden md:block'>
            <Profile login={login} isHovered={isHovered} handleClip={handleClip} email={email} handleLogout={handleLogout}/>
            </section>
          </section>

    </header>
  )
}
