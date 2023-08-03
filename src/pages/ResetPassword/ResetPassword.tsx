import { useState } from 'react'
import { supabase } from '../../supabase/client'
import { Error } from '../../components/Error'
import { Success } from '../../components/Success'
import { useNavigate } from 'react-router-dom'

export const ResetPassword = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [newError, setNewError] = useState('')
  const [isSent, setIsSent] = useState(false)
  const navigate = useNavigate()

  const handleResetPassword = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: 'http://localhost:5173/change-password'
      })
      if (error != null) {
        setNewError(error.message); return
      }
      console.log(data)
      setIsSent(true)
      navigate('/login')
    } catch (error: any) {
      setNewError(error.message)
    }
  }

  return (
    <section className="h-screen  flex items-center justify-center ">

    <form
      onSubmit={handleResetPassword}
      className="flex flex-col relative h-2/3 text-center lg:w-1/2 w-auto  justify-center items-center align-middle   bg-indigo-50 py-10 lg:py-32 max-w-3xl  rounded-2xl"
    >
      {
        (newError.length > 0) &&
          (
          <section className='absolute top-5'>
            <Error text={newError}/>
          </section>
          )
      }

      {
        (isSent && (
          <Success text='Email sent'/>
        ))
      }
      <section className="pb-10 px-10">
        <h2 className="font-bold text-3xl lg:text-7xl mb-4">
          Recover Password
        </h2>
      </section>

      <section className="flex  flex-col gap-10 w-4/5 ">
        <label
          htmlFor="email"
          className=" bg-white rounded-md flex items-center justify-center pl-2"
        >
          👀
          <input
            className="p-2  w-full outline-none border-none lg:text-xl"
            type="email"
            placeholder="Enter your email"
            name="email"
            onChange={(e) => { setEmail(e.target.value) }}
          />
        </label>

        <section className="flex flex-col gap-5">
          <button className="bg-buttons text-xl text-white py-2 rounded-md hover:opacity-70 font-semibold">
            SEND
          </button>
        </section>
      </section>
    </form>
  </section>
  )
}
