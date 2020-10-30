import {request} from '../libs/datoCms'
import {renderMetaTags} from 'react-datocms'
import Head from 'next/head'

import HeroBlock from "../components/index-page/hero-block/heroBlock"

const HOMEPAGE_QUERY = `
    query HomePage($limit: IntType){
        blog{
          seo: _seoMetaTags {
            attributes
            content
            tag
          }
        }
        allPosts(first: $limit){
          id
          title
          slug
          date
          coverImage{
                  responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
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
                  responsiveImage(imgixParams: { fit: crop, w: 300, h: 300, auto: format }) {
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
function HomePage ({data}) {
let coverImage = data.page.assets[0]
return (
    <div>
        <HeroBlock image={coverImage.responsiveImage}/>  
    </div>
)
}

export default HomePage