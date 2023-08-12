import { useState, useEffect } from 'react'
import { itemCategories } from '../data/categories'
import { supabase } from '../../../supabase/client'
import { useSelector } from 'react-redux'
import { type RootState } from '../../../store'
import { Error } from '../../../components/Error'
import { Success } from '../../../components/Success'

interface productProps {
  name: string
  category: string
  price: number
  image: File | any
}

export const NewItem: React.FC = () => {
  const [product, setProduct] = useState<productProps>({
    name: '',
    category: '',
    price: 0,
    image: ''
  })
  const [newError, setNewError] = useState('')

  const [isLoading, setIsLoading] = useState(false)
  const [isSend, setIsSend] = useState(false)

  const { userId } = useSelector((state: RootState) => state.auth)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>): void => {
    const { name, value } = event.target

    setProduct({
      ...product,
      [name]: value
    })
  }

  const handleFile = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const file = event.target.files?.[0]
    setProduct({
      ...product,
      image: file
    })
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()
    try {
      setIsLoading(true)
      if (userId === null) {
        setNewError('Please login')
        setIsLoading(false)
        return
      }
      const newId: string = crypto.randomUUID()
      const { data: storageData, error: storageError } = await supabase.storage
        .from('images')
        .upload(userId + '/' + newId, product.image)

      if (storageError != null) {
        setNewError(storageError.message); return
      }

      const imageUrl = storageData.path
      const { error } = await supabase.from('product').insert([
        { name: product.name, category: product.category, image: imageUrl, user_id: userId, price: product.price }
      ])

      if (error != null) {
        setNewError(error.message)
        return
      }
      setProduct({
        ...product,
        name: '',
        category: '',
        price: 0,
        image: null
      })
      setIsLoading(false)
      setIsSend(true)
    } catch (error: any) {
      setNewError(error)
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSend(false)
    }, 2000)

    return () => { clearTimeout(timer) }
  }, [isSend])

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-4/5 left-0 right-0  top-40  absolute md:h-fit md:left-0 md:right-0 md:top-0 md:bottom-0  max-w-md py-10 md:py-20 m-auto items-center gap-10 shadow-2xl z-50 bg-white rounded-lg'>
      {
        (newError.length > 0) && (
          <Error text={newError}/>
        )
      }
      {
        isSend && (
          <Success text={'Uploaded Correctly'}/>
        )
      }
        <label className='flex flex-col w-full items-center gap-2 justify-center font-bold text-xl' htmlFor="name">
            Name
            <input maxLength={25} required onChange={handleChange} value={product.name} className='bg-inputs md:w-80 w-4/5 p-2 rounded-xl text-base font-normal' type="text" name="name" id="name" placeholder="Name" />
        </label>
        <label className='flex flex-col w-full items-center gap-2 font-bold text-xl' htmlFor="category">
                Category
            <select required onChange={handleChange} value={product.category} className='bg-inputs md:w-80 w-4/5 p-2 rounded-xl text-base font-normal' name="category" id="category">
            <option value=''>Choose One</option>
                {
                    itemCategories.map(categori => {
                      return (
                            <option key={categori.id} value={categori.category}>{categori.category}</option>
                      )
                    })
                }
            </select>
        </label>
        <label className='flex flex-col w-full items-center gap-2 justify-center font-bold text-xl' htmlFor="name">
            Price
            <input type="number" min={1} max={100000000} required onChange={handleChange} value={product.price} className='bg-inputs md:w-80 w-4/5 p-2 rounded-xl text-base font-normal' name="price" id="price" placeholder="Price" />
                <p className='font-normal text-base text-red-500'>Max price $100,000,000</p>
        </label>
        <label className='flex flex-col w-full items-center gap-2 font-bold text-' htmlFor="image">

          Upload Image

            <input required onChange={handleFile} accept='png, jpg' className='bg-inputs  md:w-80 w-4/5 p-2 rounded-xl text-base font-normal' type="file" name="image" id="image" />
        </label>

        {
          isLoading
            ? (
              <div className="flex">
                <div className="w-4 h-4 border-2 border-t-2 border-blue-500 rounded-full animate-spin"></div>
              </div>
              )
            : (
           <></>
              )
        }

        <button className='bg-buttons text-white px-10 py-2 md:px-4 md:py-2 rounded-md text-sm md:w-1/3' type='submit' disabled={isLoading}>  {
            isLoading ? 'Send' : 'Add Item'
          }</button>
    </form>
  )
}
