import Head from 'next/head'
import GlobalLayout from '../components/layout-components/global-layout/layout'
import { request } from '../libs/datoCms'
import markdownToHtml from '../libs/markdownToHTML'

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
    const assets = data.page.assets[0]
    const copy = await markdownToHtml(data.page.pageText)
    const title = data.page.title
    return{
        props: {
            assets,
            copy,
            title
        }
    }
}

const AboutPage = ({assets, copy, title}) => {
    return ( 
        <GlobalLayout>
            <Head>
                <title>{title}</title>
            </Head>
            <div className="wrapper">
                <article>
                    
                    <div dangerouslySetInnerHTML={{ __html: copy }}/>
                </article>
            </div> 
        </GlobalLayout>
    );
}
 
export default AboutPage;