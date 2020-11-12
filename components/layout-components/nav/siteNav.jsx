import styles from './siteNav.module.scss'
import Link from 'next/link'


const SiteNav = () => {
    return ( 
        <nav className={styles.nav} role="main navigation">
            <ul className={styles.navList}>
                <li>
                    <Link aria-label="link to gallery page" href="/gallery">
                        <a>Gallery</a>
                    </Link>
                </li>
                <li>
                    <Link aria-label="link to about page" href="/about">
                        <a>About</a>
                    </Link>
                </li>
            </ul>
        </nav> 
    );
}
 
export default SiteNav;