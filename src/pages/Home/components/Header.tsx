import { useEffect, useState, useMemo } from 'react'
import { NewItem } from './NewItem'
import { useClickedOutside } from '../../../hooks/useClose'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../../store'
import { Product } from './Product'
import { supabase } from '../../../supabase/client'
import { getProducts } from '../../../store/products/thunk'
import { type ThunkDispatch } from 'redux-thunk'
import { type Action } from '@reduxjs/toolkit'

interface product {
  name: string
  category: string
  price: number
  image: string
}
interface Response {
  data: product[] | null
  error: any
}

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [clickedOutside, componentRef] = useClickedOutside({
    dependencies: [isActive]
  })

  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
  const stateData = useSelector((state: RootState) => state.product)

  useEffect(() => {
    if (isActive && clickedOutside) {
      setIsActive(!isActive)
    }
  }, [clickedOutside])

  useEffect(() => {
    const getData = async (): Promise<product[] | null> => {
      const { data, error }: Response = await supabase
        .from('product')
        .select()
      if (error != null) {
        console.error(error)
      }

      return data
    }

    void getData().then(async data => {
      await dispatch(getProducts(data))
    })
  }, [])

  return (
    <header ref={componentRef} className="w-4/5 md:mx-2  items-center m-auto   md:w-screen ">
        <section className="flex justify-between mt-5 md:mt-12 ">
        <h2 className="font-bold text-3xl">Item</h2>
        <button onClick={() => { setIsActive(!isActive) }} className="bg-buttons text-white px-2  rounded-md text-sm">Create a new Item</button>
        </section>
        <form className="flex gap-5 mt-5">
            <select className="bg-inputs px-2 py-1 rounded-md outline-none" name="date" id="">
                <option value="">Date</option>
                <option value="Recent">Recent</option>
                <option value="Old">Old</option>
            </select>
            <select className="bg-inputs px-2 py-1 rounded-md outline-none" name="price" id="">
                <option value="">Price</option>
                <option value="">High to Low</option>
                <option value="">Low to High</option>
            </select>
        </form>

        {
          isActive && <NewItem/>
        }

<section className='grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-4xl m-auto'>

{stateData.map(d => {
  return (<Product key={d.id} {...d} />)
})}
</section>

    </header>
  )
}
