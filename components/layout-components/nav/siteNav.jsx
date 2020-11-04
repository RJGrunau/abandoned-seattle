import styles from './siteNav.module.scss'
import Link from 'next/link'


const SiteNav = () => {
    return ( 
        <nav className={styles.nav} role="main navigation">
            <ul className={styles.navList}>
                {/* <li>
                    <Link href="/">
                        <a>Home</a>
                    </Link>
                </li> */}
                <li>
                    <Link href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav> 
    );
}
 
export default SiteNav;