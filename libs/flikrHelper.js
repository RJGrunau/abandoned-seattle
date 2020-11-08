export async function flikrHelper (){

    try {
        const response = await fetch(`https://www.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${process.env.FLIKR_API}&photoset_id=${process.env.ABAND_ALBUM}&user_id=190565882%40N05&extras=url_s%2Curl_m%2Curl_o&media=&format=json&nojsoncallback=1`)
                                .then(res => res.json());
    } catch (error) {
        console.error('flikr error: ', error);
    }
    
}