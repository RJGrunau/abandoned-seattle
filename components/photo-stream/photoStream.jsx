import styles from './photoStream.module.scss'
import { request } from '../../libs/datoCms'
import PhotoCard from './photo-card/photoCard'


const PhotoStream = ({data}) => {
    // console.log(data);
    return ( 
        <div className="wrapper">
            <section className={styles.stream}>
                {/* <PhotoCard img={testPhoto} alt={testPhoto.alt} caption={testPhoto.title}/> */}
            </section>
        </div>
     );
}
 
export default PhotoStream;