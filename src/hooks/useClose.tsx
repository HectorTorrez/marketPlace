import { useEffect, useRef, useState } from 'react'

interface Props {
  dependencies: React.DependencyList
}

  type UseClickedOutsideReturn = [
    boolean,
    React.MutableRefObject<HTMLDivElement | null>,

  ]

export const useClickedOutside = ({
  dependencies
}: Props): UseClickedOutsideReturn => {
  const componentRef = useRef<HTMLDivElement | null>(null)
  const [clickedOutside, setClickedOutside] = useState(false)

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent): void => {
      const clickOutside =
          ((componentRef.current != null) &&
            !componentRef.current.contains(event.target as Node)) ||
          false

      setClickedOutside(clickOutside)
    }
    document.addEventListener('click', handleClickOutside)

    return () => {
      document.removeEventListener('click', handleClickOutside)
    }
  }, [...dependencies])

  return [clickedOutside, componentRef]
}
