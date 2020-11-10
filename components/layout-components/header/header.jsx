import styles from './header.module.scss'
import Link from 'next/link'
import SiteNav from '../nav/siteNav'

const GlobalHeader = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <div>
                    <Link href="/">
                        <a aria-label="Abandoned Seattle">
                            <h1>Abandoned Seattle</h1>
                        </a>
                    </Link>
                </div>
                <SiteNav/>
            </div>
        </header>
     );
}
 
export default GlobalHeader;