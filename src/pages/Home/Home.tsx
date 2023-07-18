import { useDispatch } from 'react-redux'
import { DesktopNavbar, Header, MenuLeft } from './components'
import { useEffect } from 'react'
import { supabase } from '../../supabase/client'
import { getSession } from '../../store/auth/thunk'
import { type Session } from '@supabase/supabase-js'
import { type ThunkDispatch, type Action } from '@reduxjs/toolkit'
import { type RootState } from '../../store'

export const Home: React.FC = () => {
  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()

  useEffect(() => {
    void supabase.auth.getSession().then(({ data: { session } }) => {
      void dispatch(getSession(session))
    })
    supabase.auth.onAuthStateChange((_event, session: Session | null) => {
      void dispatch(getSession(session))
    })
  }, [])

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
