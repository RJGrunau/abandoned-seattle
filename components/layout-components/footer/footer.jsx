import styles from './footer.module.scss'
import { SocialIcon } from 'react-social-icons'
const GlobalFooter = () => {
    return ( 
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <SocialIcon url="https://www.instagram.com/abandonedseattle/" bgColor="rgb(248, 246, 246)" fgColor="#000000"/>
            </div>
        </footer> 
    );
}
 
export default GlobalFooter;