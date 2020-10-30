import './heroBlock.module.scss'
import { Image } from 'react-datocms';
const HeroBlock = ({image}) => {
    return (  
        <section>
            <Image data={image}/>
        </section>
    );
}
 
export default HeroBlock;