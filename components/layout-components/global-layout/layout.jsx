import './layout.module.scss';


const GlobalLayout = () => {
    return ( <div className="main-layout">
        <main>
            {children}
        </main>
    </div> );
}
 
export default GlobalLayout;