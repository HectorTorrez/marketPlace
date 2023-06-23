import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { startCreatingUserWithEmailPassword } from '../../store/auth/thunk'
import { useDispatch } from 'react-redux'

interface FormState {

  email: string
  password: string
}

type handleChangeType = (event: React.ChangeEvent<HTMLInputElement>) => void

interface FormValue {

  email: string
  password: string
  formState: FormState
  handleChange: handleChangeType
}

export const Register: React.FC = () => {
  const { email, password, formState, handleChange }: FormValue = useForm({
    email: 'hector@correo.com',
    password: '123456'
  })

  const dispatch = useDispatch()

  // const handleSubmit = (event: React.ChangeEvent): void => {
  //   event.preventDefault()
  //   dispatch(startCreatingUserWithEmailPassword(email, password))
  //   console.log(formState)
  // }

  return (
    <section className="h-screen  flex items-center justify-center">

    <form
      // onSubmit={handleSubmit}
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
          htmlFor="displayName"
          className=" bg-white rounded-md flex items-center justify-center pl-2"
        >
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          <input
            // onChange={handleChange}
            className="p-2  w-full outline-none border-none lg:text-xl"
            type="text"
            placeholder="Enter your name"
            name="displayName"
            value={displayName}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="email"
          className=" bg-white rounded-md flex items-center justify-center pl-2"
        >
          {/* <FontAwesomeIcon icon={faEnvelope} /> */}
          <input
            // onChange={handleChange}
            className="p-2  w-full outline-none border-none lg:text-xl"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label
          htmlFor="password"
          className="bg-white rounded-md flex items-center justify-center pl-2"
        >
          {/* <FontAwesomeIcon icon={faLock} /> */}
          <input
            // onChange={handleChange}
            className="p-2  w-full outline-none border-none lg:text-xl "
            type="password"
            placeholder="Enter your password"
            name="password"
            value={password}
            onChange={handleChange}
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
