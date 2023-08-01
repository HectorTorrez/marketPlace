import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { type ThunkDispatch } from 'redux-thunk'
import { type RootState } from '../../../store'
import { filterByCategory } from '../../../store/products/productSlice'
import { type Action } from '@reduxjs/toolkit'

interface Props {
  label: string
}

export const SubDropdown: React.FC<Props> = ({ label }: Props) => {
  const [category, setCategory] = useState('')
  const [status, setStatus] = useState(false)

  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()

  const handleChange = (): void => {
    setStatus(!status)
  }

  useEffect(() => {
    if (status) {
      dispatch(filterByCategory(category))
    } else {
      dispatch(filterByCategory(''))
    }
  }, [status])

  return (
    <section className="flex gap-5 text-sm font-normal">
        <input onClick={handleChange} onChange={(e) => { setCategory(e.target.value) } } value={label} type="checkbox" name="status" checked={status}/>
        <span>{label}</span>
    </section>
  )
}
