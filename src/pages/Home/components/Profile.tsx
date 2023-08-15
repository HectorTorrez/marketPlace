import { Link } from 'react-router-dom'
import { Chevrondown } from '../../../components/Icons'

interface profileProps {
  login: boolean
  isHovered: boolean
  handleClick: () => void
  email: string | null
  handleLogout: () => void
}

export const Profile = ({ login, isHovered, handleClick, email, handleLogout }: profileProps): JSX.Element => {
  return (
    <>
    {
              (login)
                ? (
                <section onClick={handleClick} className='flex gap-2 items-center relative '>

                  <p className='text-sm font-bold'>{email}</p>
                  <Chevrondown/>
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
                <section className='flex gap-2 items-center justify-center '>

                  <Link to={'/login'} className='text-base md:text-xl font-bold'>Login</Link>

                </section>
                  )
            }
    </>
  )
}
