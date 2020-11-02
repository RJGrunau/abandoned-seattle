import styles from './photoStream.module.scss'
import { request } from '../../libs/datoCms'
import PhotoCard from './photo-card/photoCard'


const PHOTOSTREAM_QUERY = `
    query PhotoStream {
        stream{
                responsiveImage(imgixParams: { fit: max, w: 960, h: 672, auto: format }) {
                srcSet
                webpSrcSet
                sizes
                src
                width
                height
                aspectRatio
                alt
                title
                base64
            }
        }
    }
`

export async function getStaticProps(){
    const data = await request({ 
        query: PHOTOSTREAM_QUERY,
       })
    return{
        props: {
            data
        }
    }
}
const PhotoStream = ({data}) => {
    let testPhoto = data.photoStream.stream[0]
    return ( 
        <div className="wrapper">
            <section className={styles.stream}>
                <PhotoCard img={testPhoto} alt={testPhoto.alt} caption={testPhoto.title}/>
            </section>
        </div>
     );
}
 
export default PhotoStream;