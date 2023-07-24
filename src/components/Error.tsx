interface ErrorProps {
  text: string
}

export const Error = ({ text }: ErrorProps): JSX.Element => {
  return (
    <div className="bg-red-100 border border-red-400 text-red-700 px-10 py-10 rounded relative mb-5" role="alert">
    <strong className="font-bold mr-3">Holy smokes!</strong>
      <span className="block sm:inline">{text}</span>
      <span className="absolute top-0 bottom-0 right-0 px-4 py-3"></span>
  </div>
  )
}
