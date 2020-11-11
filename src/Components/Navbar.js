import Link from 'next/link'
import styles from '../../styles/navbar.module.css'

const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-light'>
      <div className={styles.navbar_wrapper}>
        <Link href='/'><a className='navbar-brand'>NextJS + Bootstrap</a></Link>
        <ul className={`navbar-nav ${styles.navbar_links}`}>
          <li className={`navbar-item ${styles.navbar_item_custom}`}>
            <Link href='/'><a className='nav-link'>Link 1</a></Link>
          </li>
          <li className={`navbar-item ${styles.navbar_item_custom}`}>
            <Link href='/'><a className='nav-link'>Link 2</a></Link>
          </li>
          <li className={`navbar-item ${styles.navbar_item_custom}`}>
            <Link href='/'><a className='nav-link'>Link 3</a></Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar