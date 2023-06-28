import { itemCategories } from '../data/categories'

export const NewItem: React.FC = () => {
  return (
    <form className='flex flex-col absolute h-fit left-0 right-0 top-0 bottom-0  max-w-md py-20 m-auto items-center gap-10 shadow-2xl'>
        <label className='flex flex-col gap-2 justify-center font-bold text-xl' htmlFor="name">
            Name
            <input className='bg-inputs w-80  p-2 rounded-xl text-base font-normal' type="text" name="name" id="name" placeholder="Name" />
        </label>
        <label className='flex flex-col gap-2 font-bold text-xl' htmlFor="category">
                Category
            <select className='bg-inputs w-80 p-2 rounded-xl text-base font-normal' name="category" id="category">
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
            <input className='bg-inputs w-80 p-2 rounded-xl text-base font-normal' type="file" name="image" id="image" />
        </label>

        <button className='bg-green text-white px-4 py-2 rounded-md text-sm w-1/3' type='submit'>Add Item</button>
    </form>
  )
}
