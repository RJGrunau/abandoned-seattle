import {Image} from "react-datocms"
import styles from "./aboutBlock.module.scss"


const AboutBLock = ({img, text}) => {
    return ( 
        <div className="wrapper">
            <section className={styles.aboutSection}>
                <div>
                    <Image data={img} style={{objectFit: "cover"}} explicitWidth="100%"/>
                </div>
                <div>
                    <p>{text}</p>
                </div>
            </section>
        </div>
     );
}
 
export default AboutBLock;