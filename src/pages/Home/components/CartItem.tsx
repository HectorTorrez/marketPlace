import { useDispatch } from 'react-redux'
import { Chevrondown, Chevronup, Delete } from '../../../components/Icons'
import { removeItem, type cart, incrementQuantity, decrementQuantity } from '../../../store'
import { formatCurrency } from '../../../utilities/formatCurrency'

export const CartItem = ({ id, name, img, price, quantity }: cart): JSX.Element => {
  const dispatch = useDispatch()

  return (
        <div className="flex flex-col p-4 text-lg font-semibold shadow-md border rounded-sm w-full">
            <div className="flex flex-col md:flex-row gap-3 justify-between">

                <div className="flex flex-row gap-6 items-center">
                    <div className="w-28 h-28">
                        <img className="w-full h-full" src={img}/>
                    </div>
                    <div className="flex flex-col gap-1">
                        <p className="text-lg text-gray-800 font-semibold">{name}</p>
                    </div>
                </div>

                <div className="self-center text-center">

                    <p className="text-gray-800 font-normal text-xl">{formatCurrency(price)}</p>
                </div>

                <div className="self-center">
                    <button onClick={() => {
                      dispatch(removeItem(id))
                    }}>
                        <Delete/>
                    </button>
                </div>
            </div>

            <div className="flex flex-row self-center gap-1">
                <button onClick={() => {
                  dispatch(incrementQuantity(id))
                }}>
                    <Chevronup/>
                </button>
                <input type="text" readOnly value={quantity} className="w-8 h-8 text-center text-gray-900 text-sm outline-none border border-gray-300 rounded-sm"/>
                <button onClick={() => {
                  dispatch(decrementQuantity(id))
                }} >
                    <Chevrondown/>
                </button>
            </div>

        </div>

  )
}
