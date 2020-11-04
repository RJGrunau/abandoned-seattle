import Head from 'next/head';
import GlobalFooter from '../footer/footer';
import GlobalHeader from '../header/header';
import styles from './layout.module.scss';


const GlobalLayout = ({children}) => {
    return ( <div className={styles.mainLayout}>
        <GlobalHeader/>
        
        <main id="main-content">
            {children}
        </main>
        <GlobalFooter/>
    </div> );
}
 
export default GlobalLayout;