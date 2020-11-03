import request from "graphql-request";
import markdownToHtml from '../libs/markdownToHTML'
import GlobalLayout from "../components/layout-components/global-layout/layout";
import Head from "next/head";


const ABOUT_QUERY = `
    query AboutPage {
        page{
            title
            pageText
            assets{
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
    const data = await request({query: ABOUT_QUERY})
    let pageTitle = data.page.title
    let pageAssets = data.page.pageAssets
    let pageText = await markdownToHtml(data.page.pageText)

    return {
        props: {
            pageTitle,
            pageAssets,
            pageText
        }
    }
}

const AboutPage = ({pageText,pageTitle,pageAssets}) => {
    return ( 
        <GlobalLayout>
            <Head>
                <title>About</title>
            </Head>
            <div>
                about
            </div>
        </GlobalLayout>
     );
}
 
export default AboutPage;