
export const MobileNavbar = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <section className='z-50 absolute w-72 right-0 bg-white  flex flex-col items-center align-middle gap-10 px-4 py-4 min-w-60 md:hidden'>
    { children }
    </section>
  )
}
