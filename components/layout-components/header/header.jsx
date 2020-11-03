import styles from './header.module.scss'
import Link from 'next/link'
import SiteNav from '../nav/siteNav'

const GlobalHeader = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1>Abandoned Seattle</h1>
                <SiteNav/>
            </div>
        </header>
     );
}
 
export default GlobalHeader;