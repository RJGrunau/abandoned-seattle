import styles from './photoStream.module.scss'
import PhotoCard from './photo-card/photoCard'


const PhotoStream = ({photos}) => {
    
    return ( 
        <div className="wrapper">
            <section className={styles.stream}>
                {photos.map(photo => {
                    <div className={styles.card}>
                    <h1>Hello</h1>
                    {/* <div className={styles.imageHolder}>
                        <Image data={img} alt={alt}/>
                    </div>
                    {/* <div className={styles.caption}>
                        <p>{caption}</p>
                    </div> */} 
                </div>
                })}
            </section>
        </div>
     );
}
 
export default PhotoStream;