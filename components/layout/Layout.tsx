import Header from "../Header";
import ThemeTab from "../ThemeTab";
import SidebarLeft from "../SidebarLeft";
import Footer from "../Footer";
import Preloader from "../Preloader";
import SidebarRight from "../SidebarRight";
import Overlay from "../Overlay";
import Head from "next/head";

export default function Layout({children}: any) {
    return (
        <>
            <Head>
                <link rel="stylesheet" href={"assets/css/siqtheme.css"}/>
                <link rel="apple-touch-icon" sizes="76x76" href={"assets/img/apple-icon.png"}/>
                <link rel="icon" type="image/png" sizes="96x96" href={"assets/img/favicon.png"}/>
                <link rel="stylesheet" href={"assets/css/pages/dashboard1.css"}/>
            </Head>
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