import { Image } from 'react-datocms';
import styles from "./heroBlock.module.scss"
const HeroBlock = ({image}) => {
    return (  
        <div className="wrapper">
            <section className={styles.hero }>
                <div className={styles.backing}>
                    <Image data={image} style={{objectFit: "cover"}}/>
                    <div>
                        <h2>Abandoned Seattle:</h2>
                        <p>A photographic essay of Seattle's abandoned buildings before they become appartments</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
 
export default HeroBlock;