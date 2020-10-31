import { Image } from 'react-datocms';
const HeroBlock = ({image}) => {
    return (  
        <section className="hero">
            <div className="backing">
                <Image className="hero-image" className="hero-image" data={image} style={{objectFit: "cover"}}/>
                <div className="page-text">
                    <h2>Abandoned Seattle:</h2>
                    <p>A photographic essay of Seattle's abandoned buildings before they become appartments</p>
                </div>
            </div>
        </section>
    );
}
 
export default HeroBlock;