import { useSelector } from 'react-redux'
import { DesktopNavbar } from '.'
import { type RootState } from '../../../store/store'
import { CartItem } from './CartItem'
import { formatCurrency } from '../../../utilities/formatCurrency'
import { useNavigate } from 'react-router-dom'

export const Cart = (): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.cart)

  const navigate = useNavigate()

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
      <section className='md:flex md:w-full md:max-w-6xl md:m-auto'>
        <section className='max-w-4xl h-full items-center flex flex-col m-auto mt-3 justify-center'>
          {
            cart.map(item => {
              return <CartItem key={item.id} {...item}/>
            })
          }
        </section>

      <section className="flex flex-col w-full md:w-2/3 h-fit gap-4 p-4">
        <p className="text-blue-900 text-xl font-extrabold">Purchase Resume</p>
        <div className="flex flex-col p-4 gap-4 text-lg font-semibold shadow-md border rounded-sm">
            <div className="flex flex-row justify-between">
                <p className="text-gray-600">Subtotal ({getTotal().totalQuantity} Items)</p>
                <p className="text-end font-bold">{formatCurrency(getTotal().totalPrice)}</p>
            </div>

            {/* <div className="flex flex-row justify-between">
                <p className="text-gray-600">Discount Coupon</p>
                <a className="text-gray-500 text-base underline" href="#">Add</a>
            </div> */}
            <hr className="bg-gray-200 h-0.5"/>
            <div className="flex flex-row justify-between">
                <p className="text-gray-600">Total</p>
                <div>
                <p className="text-end font-bold">{formatCurrency(getTotal().totalPrice)}</p>
                </div>
            </div>
            <div className="flex gap-2">
                <button className="transition-colors text-sm bg-blue-600 hover:bg-blue-700 p-2 rounded-sm w-full text-white text-hover shadow-md">
                        FINISH
                </button>
                <button onClick={() => { navigate('/') }} className="transition-colors text-sm bg-white border border-gray-600 p-2 rounded-sm w-full text-gray-700 text-hover shadow-md">
                        ADD MORE PRODUCTS
                </button>
            </div>
        </div>
    </section>

      </section>
    </section>

  )
}
