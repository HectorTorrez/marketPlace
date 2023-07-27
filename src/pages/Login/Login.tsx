import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../../supabase/client'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { getUser } from '../../store/auth/thunk'
import { type RootState } from '../../store/store'
import { type ThunkDispatch, type Action } from '@reduxjs/toolkit'
import { Email, Password } from '../../components/Icons'
import { Error } from '../../components/Error'

export const Login: React.FC = () => {
  const [loginUser, setLoginUser] = useState({
    email: '',
    password: ''
  })
  const [newError, setNewError] = useState('')

  const dispatch: ThunkDispatch<RootState, unknown, Action> = useDispatch()
  const navigate = useNavigate()

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target
    setLoginUser({
      ...loginUser,
      [name]: value
    })
  }

  const handleSubmit = async (event: React.ChangeEvent<HTMLFormElement>): Promise<void> => {
    event.preventDefault()

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: loginUser.email,
        password: loginUser.password

      })
      if (error != null) {
        setNewError(error?.message); return
      }
      const { email, id } = data.user
      console.log(email, id)
      void dispatch(getUser(email, id))
      navigate('/')
    } catch (error: any) {
      setNewError(error.message)
    }
  }

  return (
    <section className="h-screen  flex flex-col items-center justify-center">

      <section className="flex flex-col text-center lg:w-1/2 w-auto  justify-center items-center align-middle  bg-indigo-50 py-10  max-w-3xl  rounded-md">
        {
          (newError.length > 0) && (
            <>
              <Error text={newError}/>
            </>
          )
        }

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
              <Email/>
            <input
              className="p-2  w-full outline-none border-none lg:text-xl"
              type="email"
              placeholder="Enter your email"
              name="email"
              onChange={handleChange}
              required
            />
          </label>
          <label
            htmlFor="password"
            className="bg-white rounded-md flex items-center justify-center pl-2"
          >
            <Password/>
            <input
              className="p-2  w-full outline-none border-none lg:text-xl "
              type="password"
              placeholder="Enter your password"
              name="password"
              onChange={handleChange}
              required
            />
          </label>

          <section className="flex flex-col gap-5">
            <button
              type='submit'

              className="bg-buttons text-xl text-white py-2 rounded-md hover:opacity-70 "
            >
              Sign In
            </button>

          </section>
        </form>
        <Link className="mt-3 text-blue-700" to="/reset-password">
          <p>Forgot your password?</p>
        </Link>

        <section className="mt-10 flex justify-end w-4/5 ">
          <p className=" text-slate-400">
            Don&apos;t have an Account? {''}
            <Link className="text-blue-700" to="/register">
              Register
            </Link>
          </p>
        </section>
      </section>
    </section>
  )
}
