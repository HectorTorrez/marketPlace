import { useState } from 'react'
import { itemCategories } from '../data/categories'
import { supabase } from '../../../supabase/client'
import { useSelector } from 'react-redux'
import { type RootState } from '../../../store'

interface productProps {
  name: string
  category: string
  image: File | null
}

export const NewItem: React.FC = () => {
  const [product, setProduct] = useState<productProps>({
    name: '',
    category: '',
    image: null
  })

  const [isLoading, setIsLoading] = useState(false)

  const { userId } = useSelector((state: RootState) => state.auth)

  // const CNDURL = 'https://omznsctbhdxpwaoxyyck.supabase.co/storage/v1/object/public/images/'

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
    // const { error } = await supabase
    //   .from('product')
    //   .insert({ name: product.name, category: product.category, image: product.image, user: userId })

    // console.log(error)
    try {
      setIsLoading(true)
      const { data: storageData, error: storageError } = await supabase.storage
        .from('images')
        .upload(userId ?? '/' + crypto.randomUUID(), product.image)

      if (storageError != null) {
        console.error('Error uploading image:', storageError.message)
        return
      }

      const imageUrl = storageData.path

      const { error } = await supabase.from('product').insert([
        { name: product.name, category: product.category, image: imageUrl }
      ])

      if (error != null) {
        console.error('Error inserting data:', error.message)
        return
      }
      setProduct({
        ...product,
        name: '',
        category: ''
      })
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col absolute h-fit left-0 right-0 top-0 bottom-0  max-w-md py-20 m-auto items-center gap-10 shadow-2xl'>
        <label className='flex flex-col gap-2 justify-center font-bold text-xl' htmlFor="name">
            Name
            <input onChange={handleChange} value={product.name} className='bg-inputs w-80  p-2 rounded-xl text-base font-normal' type="text" name="name" id="name" placeholder="Name" />
        </label>
        <label className='flex flex-col gap-2 font-bold text-xl' htmlFor="category">
                Category
            <select onChange={handleChange} className='bg-inputs w-80 p-2 rounded-xl text-base font-normal' name="category" id="category">
                {
                    itemCategories.map(categori => {
                      return (
                            <option key={categori.id} value={categori.category}>{categori.category}</option>
                      )
                    })
                }
            </select>
        </label>

        <label className='flex flex-col gap-2 font-bold text-' htmlFor="image">

          Upload Image

            <input onChange={handleFile} className='bg-inputs w-80 p-2 rounded-xl text-base font-normal' type="file" name="image" id="image" />
        </label>

        <button className='bg-green text-white px-4 py-2 rounded-md text-sm w-1/3' type='submit'> {
            isLoading ? 'Send' : 'Add Item'
          }</button>
    </form>
  )
}
