import { useState } from 'react'
import { SubDropdown } from './SubDropdown'
import { Arrow } from '../../../components/Icons'

interface Prop {
  id: string
  label: string
}

interface subCategory {
  categorie: {
    name: string
    category: Prop[]
  }
}

export const Dropdown = ({ categorie }: subCategory): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='flex flex-col items-start border-b-inputs border-b-2 font-bold'>
        <button className='flex justify-between w-full items-center py-2' onClick={() => { setIsOpen(!isOpen) }}>
            {categorie.name}
          <Arrow/>
        </button>
        {
            isOpen && (
                <>
                {

                   categorie.category.map((data: Prop) => {
                     return <SubDropdown key={data.id} label={data.label} />
                   })

                }

                </>
            )
        }
    </section>
  )
}
