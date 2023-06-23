import { useState } from 'react'
import { SubDropdown } from './subDropdown'
import { BsArrowDownShort } from 'react-icons/bs'

interface Prop {
  label: string
  status: boolean
}

interface subCategory {
  name: string
  category: Prop[]
}

type Categories = subCategory[]

export const Dropdown: React.FC = ({ categorie }: Categories) => {
  const { name } = categorie
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='flex flex-col items-start border-b-inputs border-b-2 font-bold'>
        <button className='flex justify-between w-full items-center py-2' onClick={() => { setIsOpen(!isOpen) }}>
            {name}
            <BsArrowDownShort/>
        </button>
        {
            isOpen && (
                <>
                {

                   categorie.category.map((data, i) => {
                     return <SubDropdown key={i} label={data.label} status={data.status} />
                   })

                }

                </>
            )
        }
    </section>
  )
}
