import { useDispatch } from 'react-redux'
import { addToCart } from '../../../store'
import { useEffect, useState } from 'react'

interface ProductProps {
  id: null
  name: string
  category: string
  price: number
  image: string
}

export const Product = ({ id, name, category, image, price }: ProductProps): JSX.Element => {
  const dispatch = useDispatch()

  const [img, setImg] = useState('')

  const CNDURL = 'https://omznsctbhdxpwaoxyyck.supabase.co/storage/v1/object/public/images/'
  useEffect(() => {
    setImg(CNDURL + image)
  }, [image])

  const format = price?.toLocaleString()
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
                <span className="font-normal text-buttons">{format}</span>
                </p>

                <button onClick={() => {
                  dispatch(addToCart({
                    id, name, img, format
                  }))
                }} className="border border-buttons px-5 py-1 rounded-3xl outline-none text-buttons font-bold hover:bg-buttons hover:text-white hover:border-white min-w-24  ">BUY</button>
            </section>
        </section>

    </section>
  )
}
