import { useDispatch } from 'react-redux'
import { Chevrondown, Chevronup, Delete } from '../../../components/Icons'
import { removeItem, type cart, incrementQuantity, decrementQuantity } from '../../../store'

export const CartItem = ({ id, name, img, pricetoInt, quantity }: cart): JSX.Element => {
  const dispatch = useDispatch()

  return (
   <section className='grid mx-2 gap-2 '>
    <h3></h3>
    <p></p>
    <section className='flex  items-center'>
        <div className='w-fit h-full'>
            <img className='max-h-[100px] w-[100px] ' src={img} alt={name} />
        </div>
        <section className=' grid grid-cols-4 gap-3 items-center justify-items-center w-full ml-1'>
            <div className=''>
                <h4>{name}</h4>
            </div>
            <div className='flex items-center'>
                {quantity}
                <div className='flex flex-col'>
                    <button onClick={() => {
                      dispatch(incrementQuantity(id))
                    }}>
                        <Chevronup/>
                    </button>
                    <button onClick={() => {
                      dispatch(decrementQuantity(id))
                    }}>
                        <Chevrondown/>
                    </button>
                </div>
            </div>
            <div className='flex'>
                <p>${pricetoInt}</p>
            </div>
            <div>
                <button onClick={() => {
                  dispatch(removeItem(id))
                }}>
                    <Delete/>
                </button>
            </div>
        </section>
    </section>
   </section>
  )
}
