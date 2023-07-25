import { useDispatch, useSelector } from 'react-redux'
import { DesktopNavbar, Header, MenuLeft } from './components'
import { useEffect } from 'react'
import { supabase } from '../../supabase/client'
import { getSession } from '../../store/auth/thunk'
import { type Session } from '@supabase/supabase-js'
import { type ThunkDispatch, type Action } from '@reduxjs/toolkit'
import { type RootState } from '../../store'
import { getProducts } from '../../store/products/thunk'
import { Product } from './components/Product'

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
  const data = useSelector((state: RootState) => state.product)
  console.log(data)

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
    if (error != null) {
      console.error(error)
    }

    return data
  }
  useEffect(() => {
    void getData().then(async data => { await dispatch(getProducts(data)) })
  }, [])

  return (
    <>
    {/* <MobileNavbar/> */}
    <DesktopNavbar/>
    <section className='flex flex-col md:flex-row  md:max-w-6xl md:m-auto '>
    <MenuLeft/>
    <Header/>
    </section>
      <section>

        {data.map(d => {
          return (<Product key={d.id} {...d} />)
        })}
      </section>
    </>
  )
}
