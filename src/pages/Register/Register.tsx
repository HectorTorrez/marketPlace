import { Link } from 'react-router-dom'
import { useState } from 'react'
import { supabase } from '../../supabase/client'

interface RegisterProps {
  email: string
  password: string
}

export const Register: React.FC = () => {
  const [register, setRegister] = useState<RegisterProps>({
    email: '',
    password: ''
  })

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
      const { data, error } = await supabase.auth.signUp({
        email: register.email,
        password: register.password
      })
      console.log(data)
      console.log(error)
      setRegister({
        email: '',
        password: ''
      })
    } catch (error) {
      console.log(error)
    }
  }

  console.log(register)

  return (
    <section className="h-screen  flex items-center justify-center">

    <form
      onSubmit={handleSubmit}
      className="flex flex-col text-center lg:w-1/2 w-auto  justify-center items-center align-middle  bg-indigo-50 py-10 lg:py-32 max-w-3xl rounded-md "
    >
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
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          <input
            onChange={handleChange}
            className="p-2  w-full outline-none border-none lg:text-xl"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={register.email}

          />
        </label>
        <label
          htmlFor="password"
          className="bg-white rounded-md flex items-center justify-center pl-2"
        >
          {/* <FontAwesomeIcon icon={faLock} /> */}
          <input
            onChange={handleChange}
            className="p-2  w-full outline-none border-none lg:text-xl "
            type="password"
            placeholder="Enter your password"
            name="password"
            value={register.password}
            autoComplete="current-password"
          />
        </label>

        <button className="bg-buttons hover:opacity-70 text-xl py-2 rounded-md ">
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
