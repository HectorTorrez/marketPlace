import { useState } from 'react'
import { SubDropdown } from './SubDropdown'
import { Arrow } from '../../../components/icons'

interface Prop {
  label: string
  status: boolean
}

interface subCategory {
  name: string
  category: Prop[]
}

export const Dropdown = ({ categorie }): JSX.Element => {
  const { name } = categorie
  const [isOpen, setIsOpen] = useState(false)

  return (
    <section className='flex flex-col items-start border-b-inputs border-b-2 font-bold'>
        <button className='flex justify-between w-full items-center py-2' onClick={() => { setIsOpen(!isOpen) }}>
            {name}
          <Arrow/>
        </button>
        {
            isOpen && (
                <>
                {

                   categorie.category.map((data: Prop, i: number) => {
                     return <SubDropdown key={i} label={data.label} status={data.status} />
                   })

                }

                </>
            )
        }
    </section>
  )
}
