import { ErrorMessage } from './icons'

interface ErrorProps {
  text: string
}

export const Error = ({ text }: ErrorProps): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-3 bg-red-100 border border-red-400 text-red-700 px-10 py-5 rounded relative md:mb-5" role="alert">
    <strong className="font-bold mr-3 flex items-center">
      <ErrorMessage/>
      Error Message</strong>
      <span className="block sm:inline">{text}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
  </div>
  )
}
