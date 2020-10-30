
import { Image } from 'react-datocms';
const HeroBlock = ({image}) => {
    return (  
        <section className="hero">
            <div className="wrapper hero-grid">
                <Image pictureClassName="hero-image" className="hero-image" data={image} explicitWidth="100%"/>
            </div>
        </section>
    );
}
 
export default HeroBlock;