import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../../supabase/client'
import { Email, Password } from '../../components/Icons'
import { Error } from '../../components/Error'

interface RegisterProps {
  email: string
  password: string
}

export const Register: React.FC = () => {
  const [register, setRegister] = useState<RegisterProps>({
    email: '',
    password: ''
  })

  const [newError, setNewError] = useState('')

  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setRegister({
      ...register,
      [name]: value
    })
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    try {
      const { error } = await supabase.auth.signUp({
        email: register.email,
        password: register.password
      })
      if (error != null) {
        setNewError(error?.message); return
      }
      setRegister({
        email: '',
        password: ''
      })
      navigate('/login')
    } catch (error: any) {
      setNewError(error.message)
    }
  }

  return (
    <section className="h-screen  flex items-center justify-center">

    <form
      onSubmit={handleSubmit}
      className="flex flex-col text-center lg:w-1/2 w-auto  justify-center items-center align-middle  bg-indigo-50 py-10 lg:py-32 max-w-3xl rounded-md "
    >
       {
        (newError.length > 0) && (
          <Error text = {newError}/>
        )
      }
      <section className="pb-10 px-10">
        <h2 className="font-bold text-3xl lg:text-7xl mb-4">Register</h2>
        <p className="text-xl text-slate-400">
          Enter your credentials to register
        </p>
      </section>

      <section className="flex  flex-col gap-10 w-4/5 ">

        <label
          htmlFor="email"
          className=" bg-white rounded-md flex items-center justify-center pl-2"
        >
          <Email/>
          <input
            onChange={handleChange}
            className="p-2  w-full outline-none border-none lg:text-xl"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={register.email}
            required

          />
        </label>
        <label
          htmlFor="password"
          className="bg-white rounded-md flex items-center justify-center pl-2"
        >
          <Password/>
          <input
            onChange={handleChange}
            className="p-2  w-full outline-none border-none lg:text-xl "
            type="password"
            placeholder="Enter your password"
            name="password"
            value={register.password}
            autoComplete="current-password"
            required
          />
        </label>

        <button className="bg-buttons text-white hover:opacity-70 text-xl py-2 rounded-md ">
          Register
        </button>
      </section>

      <section className="mt-10 flex justify-end w-4/5  ">
        <p className=" text-slate-400">
          Already have an Account?{' '}
          <Link className="text-blue-700" to="/login">
            Login
          </Link>
        </p>
      </section>
    </form>
  </section>
  )
}
