import { useSelector } from 'react-redux'
import { DesktopNavbar } from '.'
import { type RootState } from '../../../store/store'
import { CartItem } from './CartItem'

export const Cart = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.cart)

  const getTotal = (): { totalQuantity: number, totalPrice: number } => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((item) => {
      console.log(item)
      totalQuantity += item.quantity
      totalPrice += item.pricetoInt * item.quantity
    })

    return { totalQuantity, totalPrice }
  }
  return (
    <section>
      <DesktopNavbar/>
      <section className='max-w-4xl flex flex-col m-auto mt-3 justify-center'>
      {
        cart.map(item => {
          return <CartItem key={item.id} {...item}/>
        })
      }
      <p>
        total ({getTotal().totalQuantity} items)
        : <strong>${getTotal().totalPrice}</strong>
      </p>
      </section>
    </section>

  )
}
