import React, {useEffect, useState} from 'react'
import {flikrHelper} from '../libs/flikrHelper';
import GalleryComponent from "../components/gallery-components/gallery-component/galleryComponent";


const GalleryPage = (photos) => {
    const [ gallery, setGallery ] = useState(null)
    // const [ loading, setLoading ] = useState({loading: false})
    // const gallery = photos.gallery.photoset.photo
    useEffect(() => {
        const photoGallery = photos.gallery.photoset.photo
        setGallery({gallery: photoGallery})
    }, []);

    return ( 
        <GalleryComponent/>
     );
}
 
GalleryPage.getInitialProps = async (ctx) => {
    try {
        const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${process.env.FLIKR_API}&photoset_id=${process.env.ABAND_ALBUM}&user_id=190565882%40N05&extras=url_s%2Curl_m%2Curl_o&media=&format=json&nojsoncallback=1`)
        const json = await response.json()
        
        return{
            photos: json
        }


    } catch (error) {
        console.error('flikr error: ', error);
    }
}
export default GalleryPage;