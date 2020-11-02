import styles from './photoStream.module.scss'
import PhotoCard from './photo-card/photoCard'


const PhotoStream = ({photos}) => {
    
    return ( 
        <div className="wrapper">
            <section className={styles.stream}>
                <h2>Photo Stream</h2>
                {photos.map((photo,i) => (
                    <PhotoCard key={i} img={photo}/>
                ))}
            </section>
        </div>
     );
}
 
export default PhotoStream;