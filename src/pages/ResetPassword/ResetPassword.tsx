export const ResetPassword = (): JSX.Element => {
  return (
    <section className="h-screen  flex items-center justify-center">
    <form
    //   onSubmit={handleResetPassword}
      className="flex flex-col text-center lg:w-1/2 w-auto  justify-center items-center align-middle  bg-indigo-50 py-10 lg:py-32 max-w-3xl  rounded-md"
    >
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
            // onChange={handleChange}
          />
        </label>

        <section className="flex flex-col gap-5">
          <button className="bg-buttons text-xl py-2 rounded-md hover:opacity-70 font-semibold">
            SEND
          </button>
        </section>
      </section>
    </form>
  </section>
  )
}
