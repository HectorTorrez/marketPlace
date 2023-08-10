import { useSelector } from 'react-redux'
import { DesktopNavbar } from '.'
import { type RootState } from '../../../store/store'
import { CartItem } from './CartItem'

export const Cart = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  return (
    <section>
      <DesktopNavbar/>
      <section className='max-w-4xl flex flex-col m-auto mt-3 justify-center'>
      {
        cart.map(item => {
          return <CartItem key={item.id} {...item}/>
        })
      }

      </section>
    </section>

  )
}
