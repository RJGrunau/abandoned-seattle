import Link from 'next/link'
import styles from './photoStream.module.scss'
import PhotoCard from './photo-card/photoCard'

const PhotoStream = ({photos}) => {
    return ( 
        <div className="wrapper">
            <section className={styles.stream}>
                <div>
                    {photos.map((photo,i) => (
                        <PhotoCard key={i} img={photo}/>
                    ))}
                </div>
                <div className={styles.moreButton}>
                    <Link href="/gallery">
                        <a>
                            More of Abandoned Seattle
                        </a>
                    </Link>
                </div>
            </section>
        </div>
     );
}
 
export default PhotoStream;