import styles from './layout.module.scss';


const GlobalLayout = ({children}) => {
    return ( <div className={styles.mainLayout}>
        <main id="main-content">
            {children}
        </main>
    </div> );
}
 
export default GlobalLayout;