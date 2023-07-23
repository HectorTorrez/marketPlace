import { useState } from 'react'
import { NewItem } from './NewItem'

export const Header: React.FC = () => {
  const [isActive, setIsActive] = useState(false)
  return (
    <header className="w-4/5 md:mx-2  items-center m-auto  md:w-screen">
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

    </header>
  )
}
