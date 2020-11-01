import Image from "react-datocms"
import styles from "./aboutBlock.module.scss"


const AboutBLock = ({img, text}) => {
    return ( 
        <section className={styles.aboutSection}>
            <Image data={img} style={{objectFit: "cover"}} explicitWidth="100%"/>
            <div>
                {text}
            </div>
        </section>
     );
}
 
export default AboutBLock;