import { SuccessMessage } from './Icons'

interface SuccessProps {
  text: string
}

export const Success = ({ text }: SuccessProps): JSX.Element => {
  return (
    <div className="flex flex-col absolute items-center gap-3 bg-green-100 border border-green-400 text-green-700 px-10  rounded top-10 md:mb-5" role="alert">
    <strong className="font-bold  flex items-center">
      <SuccessMessage/>
      {text}</strong>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
  </div>
  )
}
