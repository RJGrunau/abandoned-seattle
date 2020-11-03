import styles from './header.module.scss'
import Link from 'next/link'

const GlobalHeader = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1>Abandoned Seattle</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/about">
                                <a>About</a>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
     );
}
 
export default GlobalHeader;