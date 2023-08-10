import { useDispatch, useSelector } from 'react-redux'
import { type RootState, addToCart, removeItem } from '../../../store'
import { useEffect, useState } from 'react'

interface ProductProps {
  id: null
  name: string
  category: string
  price: number
  image: string
}

export const Product = ({ id, name, category, image, price }: ProductProps): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const dispatch = useDispatch()

  const [img, setImg] = useState('')

  const checkProductInCart = (id: null): boolean => {
    return cart.some((item) => item.id === id)
  }

  const CNDURL = 'https://omznsctbhdxpwaoxyyck.supabase.co/storage/v1/object/public/images/'
  useEffect(() => {
    setImg(CNDURL + image)
  }, [image])

  const priceFormatted = price.toLocaleString()
  const pricetoInt = parseInt(priceFormatted)
  const isProductInCart = checkProductInCart(id)
  return (
    <section className="max-w-[258px] h-[331px] max-h-[331px] flex flex-col items-center m-auto mt-10 shadow-lg rounded-lg ">
        <div className="w-full h-full ">
            <img className="max-h-[200px] rounded-t-lg w-[258px] h-[200px] bg-cover m-auto" src={img} alt="#" />
        </div>
        <section className="w-full h-full flex flex-col justify-between">
            <section className="flex flex-col align-middle  self-start pt-3 px-3  border-b w-full h-full">
                <h3 className="font-bold">{name}</h3>
                <p className="text-buttons">{category}</p>
            </section>
            <section className="flex items-center  justify-between pt-3 px-3 w-full h-full">
                <p className="font-bold flex items-center gap-2">Price
                <span className="font-normal text-buttons">{priceFormatted}</span>
                </p>

                <button onClick={() => {
                  isProductInCart
                    ? dispatch(removeItem(id))
                    : dispatch(addToCart({
                      id, name, img, pricetoInt
                    }))
                }} className={`${isProductInCart ? ' border border-red-400 px-5 py-1 rounded-3xl outline-none text-red-400 font-bold hover:bg-red-400 hover:text-white hover:border-white min-w-24' : 'border border-buttons px-5 py-1 rounded-3xl outline-none text-buttons font-bold hover:bg-buttons hover:text-white hover:border-white min-w-24'}`}>{isProductInCart ? 'Delete' : 'Add'}</button>
            </section>
        </section>

    </section>
  )
}
