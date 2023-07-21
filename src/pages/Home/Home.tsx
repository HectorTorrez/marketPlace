import { useDispatch } from 'react-redux'
import { DesktopNavbar, Header, MenuLeft } from './components'
import { useEffect } from 'react'
import { supabase } from '../../supabase/client'
import { getSession } from '../../store/auth/thunk'
import { type Session } from '@supabase/supabase-js'
import { type ThunkDispatch, type Action } from '@reduxjs/toolkit'
import { type RootState } from '../../store'
import { getProducts } from '../../store/products/thunk'

interface product {
  name: string
  category: string
  image: string
}
interface Response {
  data: product[] | null
  error: any
}
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
  const getData = async (): Promise<product[] | null> => {
    const { data, error }: Response = await supabase
      .from('product')
      .select()
    console.log(error)

    return data
  }
  useEffect(() => {
    void getData().then(async data => { await dispatch(getProducts(data)) })
  }, [])

  return (
    <>
    {/* <MobileNavbar/> */}
    <DesktopNavbar/>
    <section className='flex flex-col md:flex-row'>
    <MenuLeft/>
    <Header/>

    </section>
    </>
  )
}
