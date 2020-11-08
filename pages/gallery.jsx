import { request } from "../libs/datoCms"
import React, {useEffect, useState} from 'react'
import GalleryComponent from "../components/gallery-components/gallery-component/galleryComponent";
import GlobalLayout from "../components/layout-components/global-layout/layout";

const GALLERYPAGE_QUERY = `
    query GalleryPage{
        page(filter: {title: {eq: "Gallery"}}){
            title
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

const GalleryPage = ({data}) => {
    const title = data.page.title;
    const assets = data.page.assets
    return ( 
        <GlobalLayout>
            <GalleryComponent title={title} assets={assets}/>
        </GlobalLayout>
     );
}
 
export async function getStaticProps(){
    const data = await request({
        query: GALLERYPAGE_QUERY
    })

    return {
        props: {
            data
        }
    }
}
export default GalleryPage;