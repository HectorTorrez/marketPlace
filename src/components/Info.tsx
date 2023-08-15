interface InfoProps {
  text: string
}

export const Info = ({ text }: InfoProps): JSX.Element => {
  return (
    <div className="flex  justify-center items-center h-60">
        <h3 className="font-bold text-buttons text-6xl text-center ">{text}</h3>
    </div>
  )
}
