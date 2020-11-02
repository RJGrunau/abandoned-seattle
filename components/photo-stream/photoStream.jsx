import styles from './photoStream.module.scss'
import { request } from '../libs/dataCms'


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
        query: PHOTOSTREAM_QUERY
    })
    return{
        props: {
            data
        }
    }
}

const PhotoStream = ({data}) => {
    return ( 
        <div className="wrapper">
            <section className={styles.stream}>

            </section>
        </div>
     );
}
 
export default PhotoStream;