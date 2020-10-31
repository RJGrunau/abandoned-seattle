import './layout.module.scss';


const GlobalLayout = ({children}) => {
    return ( <div className="main-layout">
        <main id="main-content">
            {children}
        </main>
    </div> );
}
 
export default GlobalLayout;