import { Dropdown } from '.'
import { categories } from '../data/categories'

export const MenuLeft: React.FC = () => {
  return (
    <aside className='sm:mx-16 mx-8 md:mx-5 pt-10 flex flex-col items-start w-32 gap-2  '>
        {
            categories.map((categorie, i) => {
              return <Dropdown key={i} categorie={categorie} />
            })
        }
    </aside>
  )
}
