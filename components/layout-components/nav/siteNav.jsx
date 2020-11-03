import styles from './siteNav.module.scss'
import Link from 'next/link'


const SiteNav = () => {
    return ( <nav>
        <ul>
            <li>
                <Link href="/about">
                    <a>About</a>
                </Link>
            </li>
        </ul>
    </nav> );
}
 
export default SiteNav;