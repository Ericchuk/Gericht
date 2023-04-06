import Header from "../components/navbar/header";
import Intro from '../components/introductorySection/introductorySection'
import About from "../components/aboutus/about";
import Menu from "../components/menu/menu";
import Believe from "../components/believe/believe";
import Laurel from "../components/laurel/laurel";
import PhotoGallery from '../components/photoGallery/photoGalleryPage'
import FindUs from "../components/findUs/findUs";
import Video from "../components/video/video";
import FooterPage from "../components/footer/footerPage";

export default function LandingPage() {
    return (
        <section className="font-h4 bg-hero">
             <Header />
             <Intro />
             <About />
             <Menu />
             <Believe />
             <Video />
             <Laurel />
             {/* <PhotoGallery /> */}
             <FindUs />
             <FooterPage />
        </section>
    );
}