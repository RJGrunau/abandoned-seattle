import styles from './socialComponent.module.scss'
import {SocialIcon} from 'react-social-icons'

const SocialComponent = () => {
    return ( 
        <div className={styles.socialDiv}>
            <SocialIcon url="https://www.instagram.com/abandonedseattle/" bgColor="rgb(248, 246, 246)" fgColor="#000000"/>
            <SocialIcon url="https://twitter.com/AbandonedSeatt1" bgColor="rgb(248, 246, 246)" fgColor="#000000"/>
            <SocialIcon url="https://www.flickr.com/photos/190565882@N05/albums/72157716666800038" bgColor="rgb(248, 246, 246)" fgColor="#000000"/>
        </div>
     );
}
 
export default SocialComponent;