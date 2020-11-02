import {request} from '../libs/datoCms'
// import {renderMetaTags} from 'react-datocms'
import Head from 'next/head'

import HeroBlock from "../components/index-page/hero-block/heroBlock"
import GlobalLayout from '../components/layout-components/global-layout/layout'
import AboutBLock from '../components/index-page/about-block/aboutBlock'
import PhotoStream from '../components/photo-stream/photoStream'

const HOMEPAGE_QUERY = `
    query HomePage($limit: IntType){
        blog{
          seo: _seoMetaTags {
            attributes
            content
            tag
          }
        }
        photoStream {
          stream {
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
        allPosts(first: $limit){
          id
          title
          slug
          date
          coverImage{
                  responsiveImage(imgixParams: { fit: max, w: 300, h: 300, auto: format }) {
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
        page{
          title
          pageText
          assets {
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
      }
`
export async function getStaticProps(){
    const data = await request({ 
        query: HOMEPAGE_QUERY,
        variables: {limit: 1}
       })
    return{
        props: {
            data
        }
    }
}
const HomePage = ({data}) => {
    let coverImage = data.page.assets[0]
    let aboutImage = data.page.assets[1]
    let photoStream = data.photoStream.stream
    return (
        <GlobalLayout>
            <Head>
                <title>Abandoned Seattle</title>
            </Head>
            <HeroBlock image={coverImage.responsiveImage}/>  
            <AboutBLock img={aboutImage.responsiveImage} text={data.page.pageText}/>
            <div className="wrapper">
              {photoStream.map(photo => {
                <div >
                <h1>Hello</h1>
                {/* <div className={styles.imageHolder}>
                    <Image data={img} alt={alt}/>
                </div>
                {/* <div className={styles.caption}>
                    <p>{caption}</p>
                </div> */} 
            </div>
              })}
            </div>
        </GlobalLayout>
        
    )
}

export default HomePage