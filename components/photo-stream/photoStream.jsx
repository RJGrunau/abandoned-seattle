import styles from './photoStream.module.scss'
import { request } from '../../libs/datoCms'
import PhotoCard from './photo-card/photoCard'

const PHOTO_QUERY = `
photoStream{
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
        query: PHOTO_QUERY,
        variables: {limit: 1}
       })
    return{
        props: {
            data
        }
    }
}
const PhotoStream = ({data}) => {
    console.log(data);
    return ( 
        <div className="wrapper">
            <section className={styles.stream}>
                {/* <PhotoCard img={testPhoto} alt={testPhoto.alt} caption={testPhoto.title}/> */}
            </section>
        </div>
     );
}
 
export default PhotoStream;