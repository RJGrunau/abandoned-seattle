import GlobalLayout from '../components/layout-components/global-layout/layout'
import { request } from '../libs/datoCms'


const ABOUT_QUERY = `
    query AboutPage{
        page(filter: {title: {eq: "About - Abandoned Seattle"}}){
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
        query: ABOUT_QUERY,
        variables: {limit: 1}
       })
    return{
        props: {
            data
        }
    }
}

const AboutPage = ({data}) => {
    return ( 
        <GlobalLayout>
            <div className="wrapper">
                <article>
                    <h1>{data.page.title}</h1>
                    about
                </article>
            </div> 
        </GlobalLayout>
    );
}
 
export default AboutPage;