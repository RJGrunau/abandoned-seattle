import styles from './header.module.scss'


const GlobalHeader = () => {
    return ( 
        <header className={styles.header}>
            <div className={styles.headerContainer}>
                <h1>Abandoned Seattle</h1>
            </div>
        </header>
     );
}
 
export default GlobalHeader;