export const Header: React.FC = () => {
  return (
    <header className="w-full mx-5">
        <section className="flex justify-between mt-12 ">
        <h2 className="font-bold text-3xl">Item</h2>
        <button className="bg-buttons text-white px-4 py-0 rounded-md text-sm">Create a new Item</button>
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
    </header>
  )
}
