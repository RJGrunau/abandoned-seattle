import { Image } from 'react-datocms';
import styles from "./heroBlock.module.scss"
const HeroBlock = ({image}) => {
    return (  
        <div className="wrapper">
            <section className={styles.hero }>
                <div className={styles.backing}>
                    <div className={styles.imageHolder}>
                        <Image data={image} style={{objectFit: "cover"}} explicitWidth="100%"/>
                    </div>
                    <div className={styles.heroText}>
                        <h4>A photographic essay of Seattle's abandoned buildings before they become condos</h4>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default HeroBlock;