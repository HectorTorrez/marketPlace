
export const MobileNavbar = ({ children }: { children: React.ReactNode }): JSX.Element => {
  return (
    <section className='absolute right-0 bg-white h-80 flex flex-col gap-10 px-4  md:hidden'>
    { children }
    </section>
  )
}
