import styles from './photoStream.module.scss'
import PhotoCard from './photo-card/photoCard'


const PhotoStream = ({}) => {
    return ( 
        <div className="wrapper">
            <section className={styles.stream}>
                {/* {photos.map(photo => {
                    <PhotoCard img={photo} />
                })} */}
            </section>
        </div>
     );
}
 
export default PhotoStream;