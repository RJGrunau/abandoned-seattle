import {Image} from "react-datocms"
import styles from "./aboutBlock.module.scss"


const AboutBLock = ({img, text}) => {
    return ( 
        <div className="wrapper">
            <section className={styles.aboutSection}>
                <div className={styles.imageHolder}>
                    <Image data={img} style={{objectFit: "cover"}} explicitWidth="100%"/>
                </div>
                <div className={styles.pageInfo} dangerouslySetInnerHTML={{__html: text}}/>
                    
        
            </section>
        </div>
     );
}
 
export default AboutBLock;