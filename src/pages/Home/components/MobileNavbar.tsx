
import { HiOutlineMail } from 'react-icons/hi'

export const MobileNavbar: React.FC = () => {
  return (
    <header className='flex '>
      <section>
        <section className='flex flex-col list-none'>
            <li>Dashboard</li>
            <li>About Us</li>
            <li>FAQ</li>
        </section>

      </section>

        <section>
            <input type="text" name="search" id="search" placeholder="Search an item" />
          <section>
              <li><HiOutlineMail/></li>
              <li><HiOutlineMail/></li>
              <li><HiOutlineMail/></li>
          </section>
        </section>

    </header>
  )
}
