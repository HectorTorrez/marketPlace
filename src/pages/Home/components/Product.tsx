import { useDispatch, useSelector } from 'react-redux'
import { type RootState, addToCart, removeItem } from '../../../store'
import { useEffect, useState } from 'react'
import { formatCurrency } from '../../../utilities/formatCurrency'
import { Delete } from '../../../components/Icons'
import { supabase } from '../../../supabase/client'

interface ProductProps {
  id: string
  name: string
  category: string
  price: number
  image: string
}

export const Product = ({ id, name, category, image, price }: ProductProps): JSX.Element => {
  const cart = useSelector((state: RootState) => state.cart.cart)
  const product = useSelector((state: RootState) => state.product.products)
  const userId = useSelector((state: RootState) => state.auth.userId)
  const dispatch = useDispatch()

  const [img, setImg] = useState('')

  const checkProductInCart = (id: string): boolean => {
    return cart.some((item) => item.id === id)
  }

  const checkUser = (id: string): boolean => {
    return product.some((item) => item.user_id === id)
  }

  const deleteProduct = async (id: string, img: string): Promise<void> => {
    try {
      const choose = confirm('Are you sure you want to delete this product?')
      if (!choose) {
        return
      }
      const { data, error } = await supabase
        .from('product')
        .delete()
        .eq('id', id)

      const { error: StorageError } = await supabase.storage
        .from('images')
        .remove([img])
      console.log(StorageError)
      if (error != null) {
        console.log(error)
      }
      console.log(data)
      if (data != null) {
        dispatch(removeItem(id))
      }
    } catch (error) {
      console.log(error)
    }
  }

  const CNDURL = 'https://omznsctbhdxpwaoxyyck.supabase.co/storage/v1/object/public/images/'
  useEffect(() => {
    setImg(CNDURL + image)
  }, [image])

  const isProductInCart = checkProductInCart(id)
  const isUser = checkUser(userId)
  return (
    <section className=" max-w-[258px] h-[331px] max-h-[331px] flex flex-col items-center m-auto mt-10 shadow-lg rounded-lg ">

        <div className="relative w-full h-full ">
            <img className="max-h-[200px] rounded-t-lg w-[258px] h-[200px] bg-cover m-auto" src={img} alt="#" />
            {
        isUser && (
          <div className="absolute top-0 right-0 ">
            <button onClick={async () => { await deleteProduct(id, image) }} className="bg-red-400 text-white px-2 py-1 rounded-lg"><Delete/></button>
          </div>
        )
      }
        </div>
        <section className="w-full h-full flex flex-col justify-between">
            <section className="flex flex-col align-middle  self-start pt-3 px-3  border-b w-full h-full">
                <h3 className="font-bold">{name}</h3>
                <p className="text-buttons">{category}</p>
            </section>
            <section className="flex items-center  justify-between pt-3 px-3 w-full h-full">
                <p className="font-bold flex items-center gap-2">Price
                <span className="font-normal text-buttons">{formatCurrency(price)}</span>
                </p>

                  <button disabled={isUser} onClick={() => {
                    isProductInCart
                      ? dispatch(removeItem(id))
                      : dispatch(addToCart({
                        id, name, img, price
                      }))
                  }} className={`${isProductInCart ? ' border border-red-400 px-5 py-1 rounded-3xl outline-none text-red-400 font-bold hover:bg-red-400 hover:text-white hover:border-white min-w-24' : 'border border-buttons px-5 py-1 rounded-3xl outline-none text-buttons font-bold hover:bg-buttons hover:text-white hover:border-white min-w-24'}`}>{isProductInCart ? 'Delete' : 'Add'}</button>

            </section>
        </section>

    </section>
  )
}
