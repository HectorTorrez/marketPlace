import { Dropdown } from '.'
import { categories } from '../data/categories'

export const MenuLeft: React.FC = () => {
  return (
    <aside className='px-5 pt-10 flex flex-col w-52 gap-1  '>
        {
            categories.map((categorie, i) => {
              return <Dropdown key={i} categorie={categorie} />
            })
        }
    </aside>
  )
}
