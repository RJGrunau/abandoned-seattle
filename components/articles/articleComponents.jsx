import styles from './articleComponent.module.scss'
import {Image} from 'react-datocms'

const ArticleComponent = ({asset, title, copy}) => {
    return ( 
        <div className="wrapper">
            <article className={styles.article}>
                <div className={styles.imageHolder}>
                    <Image data={asset.responsiveImage} style={{objectFit: "cover"}} explicitWidth="100%"/>
                </div>
                <div tabindex="0" className={styles.titleHolder}>
                    <h1>{title}</h1>
                </div>
                <div tabIndex="0" className={styles.bodyCopy} dangerouslySetInnerHTML={{__html: copy}}/>
            </article>
        </div>
    );
}
 
export default ArticleComponent;