import { HiOutlineMail } from 'react-icons/hi'
import { BiWallet, BiNotification } from 'react-icons/bi'
import { CiSearch } from 'react-icons/ci'
import ReactNiceAvatar, { type AvatarFullConfig, genConfig } from 'react-nice-avatar'
import { Link, NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { type RootState } from '../../../store'

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
  const { login, email } = useSelector((state: RootState) => state.auth)

  const myConfig = genConfig(config)
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
                <section className='flex gap-2 items-center'>
                <ReactNiceAvatar style={{ width: '2rem', height: '2rem' }} {...myConfig} />
                  <p className='text-sm font-bold'>{email}</p>

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
