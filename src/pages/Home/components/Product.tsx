interface ProductProps {
  name: string
  category: string
  price: number
  image: string
}

export const Product = ({ name, category, image, price }: ProductProps): JSX.Element => {
  const CNDURL = 'https://omznsctbhdxpwaoxyyck.supabase.co/storage/v1/object/public/images/'

  const format = price?.toLocaleString()
  return (
    <section className="max-w-[258px] h-[331px] max-h-[331px] flex flex-col items-center m-auto mt-10 shadow-lg rounded-lg ">
        <div className="w-full h-full ">
            <img className="max-h-[200px] rounded-t-lg w-[258px] h-[200px] bg-cover m-auto" src={CNDURL + image} alt="#" />
        </div>
        <section className="w-full h-full flex flex-col justify-between">
            <section className="flex flex-col align-middle  self-start pt-3 px-3  border-b w-full h-full">
                <h3 className="font-bold">{name}</h3>
                <p className="text-buttons">{category}</p>
            </section>
            <section className="flex items-center  justify-between pt-3 px-3 w-full h-full">
                <p className="font-bold">Price</p>
                <button className="border border-black px-5 py-1 rounded-xl outline-none   ">${format}</button>
            </section>
        </section>

    </section>
  )
}
