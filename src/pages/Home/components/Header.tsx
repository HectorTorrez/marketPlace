import { useEffect, useState } from 'react'
import { NewItem } from './NewItem'
import { useClickedOutside } from '../../../hooks/useClose'
import { useDispatch, useSelector } from 'react-redux'
import { type RootState } from '../../../store'
import { Product } from './Product'
import { supabase } from '../../../supabase/client'
import { getProducts } from '../../../store/products/thunk'
import { type ThunkDispatch } from 'redux-thunk'
import { type Action } from '@reduxjs/toolkit'
import { filterByDate, filterByPrice } from '../../../store/products/productSlice'

interface product {
  name: string
  category: string
  price: number
  image: string
  created_at: string
}
interface Response {
  data: product[] | null
  error: any
}

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  const [selectDate, setSelectDate] = useState('')
  const [selectPrice, setSelectPrice] = useState('')

  const [clickedOutside, componentRef] = useClickedOutside({
    dependencies: [isActive]
  })

  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
  const stateData = useSelector((state: RootState) => state.product.products)
  const search = useSelector((state: RootState) => state.product.searchTerm)
  const category = useSelector((state: RootState) => state.product.category)
  const stateDate = useSelector((state: RootState) => state.product.date)
  const statePrice = useSelector((state: RootState) => state.product.price)
  const isSignedIn = useSelector((state: RootState) => state.auth.login)

  const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setSelectDate(event?.target.value)
  }

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setIsActive(false)
      }
    }
    window.addEventListener('keydown', handleEsc)
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

  const data = stateData.filter(item => {
    const byNames = item.name.toLowerCase().includes(search)
    const byCategory = item.category.includes(category)

    return byNames && byCategory
  })

  useEffect(() => {
    dispatch(filterByDate(selectDate))
    dispatch(filterByPrice(selectPrice))
  }, [selectDate, selectPrice])

  data.sort((a: product, b: product) => {
    if (statePrice === 'Low to High') {
      const priceSort = a.price - b.price
      if (priceSort !== 0) {
        return priceSort
      }
    } else if (statePrice === 'High to Low') {
      const priceSort = b.price - a.price
      if (priceSort !== 0) {
        return priceSort
      }
    }

    const dateA = new Date(a.created_at)
    const dateB = new Date(b.created_at)
    if (stateDate === 'Old') {
      return dateA.getTime() - dateB.getTime()
    } else if (stateDate === 'Recent') {
      return dateB.getTime() - dateA.getTime()
    }

    return 0
  })

  return (
    <header ref={componentRef} className="w-4/5 md:mx-2  items-center m-auto   md:w-screen ">
        <section className="flex justify-between mt-5 md:mt-12 ">
        <h2 className="font-bold text-3xl">Item</h2>
        {
          isSignedIn &&
            (
            <button disabled={!isSignedIn} onClick={() => { setIsActive(!isActive) }} className="bg-buttons text-white px-2  rounded-md text-sm">Create a new Item</button>
            )

          }
        </section>
        <form className="flex gap-5 mt-5">
            <select value={selectDate} onChange={handleSelect} className="bg-inputs px-2 py-1 rounded-md outline-none" name="date" title='Date'>
                <option value="">Date</option>
                <option value="Recent">Recent</option>
                <option value="Old">Old</option>
            </select>
            <select value={selectPrice} onChange={(e) => { setSelectPrice(e.target.value) }}className="bg-inputs px-2 py-1 rounded-md outline-none" name="price" id="">
                <option value="">Price</option>
                <option value="High to Low">High to Low</option>
                <option value="Low to High">Low to High</option>
            </select>
        </form>

        {
          isActive && <NewItem/>
        }

      <section className='grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-4xl m-auto mb-10'>

        {data.map(d => {
          return (<Product key={d.id} {...d} />)
        })}
      </section>

    </header>
  )
}
