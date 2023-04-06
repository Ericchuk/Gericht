import NewLetter from "./newLetter";
import Footer from './footer';

export default function FooterPage(){
    return(
        <footer className="flex justify-center items-center flex-col py-5">
            <NewLetter />
            <Footer />
        </footer>
    )
}