import Header from "../Header";
import ThemeTab from "../ThemeTab";
import SidebarLeft from "../SidebarLeft";
import Footer from "../Footer";
import Preloader from "../Preloader";
import SidebarRight from "../SidebarRight";
import Overlay from "../Overlay";

export default function Layout({children}: any) {
    return (
        <>
            <div className="grid-wrapper sidebar-bg bg1">
                <ThemeTab/>
                <Header/>
                <SidebarLeft/>
                <div className="main">
                    {children}
                </div>
                <Footer/>
                <Preloader/>
                <SidebarRight/>
                <Overlay/>
            </div>
        </>
    )
}