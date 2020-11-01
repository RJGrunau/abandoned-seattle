import {Image} from "react-datocms"
import styles from "./aboutBlock.module.scss"


const AboutBLock = ({img, text}) => {
    return ( 
        <section className={styles.aboutSection}>
            <div>
                <Image data={img} style={{objectFit: "cover"}} explicitWidth="100%"/>
            </div>
            <div>
                <p>{text}</p>
            </div>
        </section>
     );
}
 
export default AboutBLock;