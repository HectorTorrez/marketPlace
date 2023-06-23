import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import { checkingAuthentication } from '../../store/auth/thunk'
import { useDispatch } from 'react-redux'

export const Login: React.FC = () => {
  const { formState, handleChange } = useForm(
    {
      displayName: 'Hector',
      email: 'hector@correo.com',
      password: '123456'
    }
  )

  const dispatch = useDispatch()

  const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault()

    dispatch(checkingAuthentication())

    console.log(formState)
  }
  // const handleGoogleSignIn = () => {
  //   dispatch(startGoogleSignIn())
  // }

  return (
    <section className="h-screen  flex items-center justify-center">
      <section className="flex flex-col text-center lg:w-1/2 w-auto  justify-center items-center align-middle  bg-indigo-50 py-10 lg:py-32 max-w-3xl  rounded-md">
        <section className="pb-10 px-10">
          <h2 className="font-bold text-3xl lg:text-7xl mb-4">Welcome Back</h2>
          <p className="text-xl text-slate-400">
            Enter your credentials to access your account
          </p>
        </section>

        <form onSubmit={handleSubmit} className="flex justify-center flex-col gap-10 w-4/5 ">
          <label
            htmlFor="email"
            className=" bg-white rounded-md flex items-center justify-center pl-2"
          >
            {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            <input
              className="p-2  w-full outline-none border-none lg:text-xl"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
            />
          </label>
          <label
            htmlFor="password"
            className="bg-white rounded-md flex items-center justify-center pl-2"
          >
            {/* <FontAwesomeIcon icon={faLock} /> */}
            <input
              className="p-2  w-full outline-none border-none lg:text-xl "
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
            />
          </label>

          <section className="flex flex-col gap-5">
            <button
              type='submit'

              className="bg-buttons text-xl py-2 rounded-md hover:opacity-70 "
            >
              Sign In
            </button>
            {/* <button
              onClick={handleGoogleSignIn}
              className="bg-white  hover:opacity-70 text-xl py-2 rounded-md"
            >
              Login with Google
            </button> */}
          </section>
        </form>
        <Link className="mt-3 text-blue-700" to="/reset-password">
          <p>Forgot your password?</p>
        </Link>

        <section className="mt-10 flex justify-end w-4/5 ">
          <p className=" text-slate-400">
            Don't have an Account? {''}
            <Link className="text-blue-700" to="/register">
              Register
            </Link>
          </p>
        </section>
      </section>
    </section>
  )
}
