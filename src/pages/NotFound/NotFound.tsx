import { useNavigate } from 'react-router-dom'

export const NotFound = (): JSX.Element => {
  const navigate = useNavigate()
  return (
    <section className="h-screen w-screen flex flex-col items-center justify-center">
      <h3 className="font-bold text-4xl">This route doesn&apos;t exits</h3>
      <div>
      <button onClick={() => { navigate('/') }} className="bg-buttons text-white px-16 py-2 rounded-xl mt-10">Home</button>
      </div>
    </section>
  )
}
