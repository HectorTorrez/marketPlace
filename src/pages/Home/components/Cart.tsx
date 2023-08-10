import { useSelector } from 'react-redux'
import { DesktopNavbar } from '.'
import { type RootState } from '../../../store/store'
import { CartItem } from './CartItem'
import { formatCurrency } from '../../../utilities/formatCurrency'

export const Cart = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.cart)

  const getTotal = (): { totalQuantity: number, totalPrice: number } => {
    let totalQuantity = 0
    let totalPrice = 0
    cart.forEach((item) => {
      totalQuantity += item.quantity
      totalPrice += item.price * item.quantity
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
      <section className='fixed bottom-0 h-24 w-full flex flex-col justify-center border border-t-gray-200 items-center'>
        <p>ORDER SUMARY</p>
      <p>
        total ({getTotal().totalQuantity} items)
        : <strong>{formatCurrency(getTotal().totalPrice)}</strong>
      </p>
      </section>
      </section>
    </section>

  )
}
