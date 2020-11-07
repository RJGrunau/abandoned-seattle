import { request } from "../libs/datoCms"
import React, {useEffect, useState} from 'react'
import GalleryComponent from "../components/gallery-components/gallery-component/galleryComponent";
import GlobalLayout from "../components/layout-components/global-layout/layout";

const GALLERY_QUERY = `
    query GalleryPage{
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
    }
`

const GalleryPage = ({data}) => {
    
    const gallery = data.photoStream.stream
    
    return ( 
        <GlobalLayout>
            <GalleryComponent gallery={gallery}/>
        </GlobalLayout>
     );
}
 
export async function getStaticProps(){
    const data = await request({
        query: GALLERY_QUERY
    })

    return {
        props: {
            data
        }
    }
}
export default GalleryPage;