import "./heroBlock.module.scss"
import { Image } from 'react-datocms';
const HeroBlock = ({image}) => {
    return (  
        <section className="hero">
            <div className="wrapper hero-grid">

                <Image className="hero-image" data={image}/>
            </div>
        </section>
    );
}
 
export default HeroBlock;