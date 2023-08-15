import { useSelector } from 'react-redux'
import { DesktopNavbar } from '.'
import { Product } from './Product'
import { type RootState } from '../../../store'
export const MyProducts = (): JSX.Element => {
  const product = useSelector((state: RootState) => state.product.products)
  const id = useSelector((state: RootState) => state.auth.userId)

  return (
    <>
      <DesktopNavbar/>
      <section className='grid  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 max-w-4xl m-auto mb-10'>
      {
        product.map(item => {
          if (item.user_id === id) {
            return <Product key={item.id} {...item}/>
          }
          return null
        }
        )
      }
      </section>
    </>
  )
}
