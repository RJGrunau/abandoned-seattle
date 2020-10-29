import {request} from '../libs/datoCms'
import {Image, renderMetaTags} from 'react-datocms'
import Head from 'next/head'

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
return (<div>
    <section>
        <Image data={data.page.assets.responsiveImage}/>
    </section>
</div>)
}

export default HomePage