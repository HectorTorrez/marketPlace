import { HiOutlineMail } from 'react-icons/hi'
import { BiWallet, BiNotification } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import ReactNiceAvatar, { type AvatarFullConfig, genConfig } from 'react-nice-avatar'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../../store'
import { useState } from 'react'
import { supabase } from '../../../supabase/client'
import { logOut } from '../../../store/auth/thunk'
import { type ThunkDispatch } from 'redux-thunk'
import { type Action } from '@reduxjs/toolkit'

const config: AvatarFullConfig = {
  sex: 'woman',
  faceColor: '#F9C9B6',
  earSize: 'big',
  eyeStyle: 'smile',
  noseStyle: 'round',
  mouthStyle: 'smile',
  shirtStyle: 'short',
  glassesStyle: 'none',
  hairColor: '#000',
  hairStyle: 'womanLong',
  hatStyle: 'none',
  hatColor: '#fff',
  eyeBrowStyle: 'upWoman',
  shirtColor: '#F4D150',
  bgColor: '#FFEDEF'
}
export const DesktopNavbar: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false)

  const myConfig = genConfig(config)
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
    <header className='flex justify-between pt-4 px-5 shadow-md items-center'>
        <section className='flex gap-8 h-14 items-center  list-none cursor-pointer font-bold'>
            <NavLink to={'/'} className={({ isActive }) => isActive ? 'pb-4 border-b-2  border-b-buttons' : 'pb-4 hover:border-b-2'}>Dashboard</NavLink>
            <NavLink to={'/about-us'} className={({ isActive }) => isActive ? 'pb-4 border-b-2  border-b-buttons' : 'pb-4 hover:border-b-2'}>About Us</NavLink>
            <NavLink to={'/faq'} className={({ isActive }) => isActive ? 'pb-4 border-b-2  border-b-buttons' : 'pb-4 hover:border-b-2'}>FAQ</NavLink>
        </section>

        <section className='flex cursor-pointer pb-4 gap-5'>
            <section className='flex items-center gap-2 bg-inputs w-80 p-2 rounded-xl'>
                <CiSearch/>
            <input className='bg-inputs outline-none border-none' type="text" name="search" id="search" placeholder="Search an item" />
            </section>
          <section className=' flex list-none gap-3 items-center '>
              <li className='p-2 rounded-full bg-inputs'><HiOutlineMail/></li>
              <li className='p-2 rounded-full bg-inputs'><BiNotification/></li>
              <li className='p-2 rounded-full bg-inputs'><BiWallet/></li>
          </section>

            {
              (login)
                ? (
                <section onClick={handleClip} className='flex gap-2 items-center relative hover:shadow-lg'>
                <ReactNiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />

                  <p className='text-sm font-bold'>{email}</p>
                    {
                      isHovered && (
                        <div className='absolute -bottom-10 right-0 shadow-lg rounded-md w-full text-center h-full bg-white'>
                          <button className='flex items-center justify-between w-full h-full font-bold p-2 shadow-xl border-t' onClick={handleLogout}>
                          Logout
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                          </svg>

                            </button>
                          </div>
                      )
                    }

                </section>
                  )
                : (
                <section className='flex gap-2 items-center'>

                  <Link to={'/login'} className='text-sm font-bold'>Login</Link>

                </section>
                  )
            }
          </section>

    </header>
  )
}
