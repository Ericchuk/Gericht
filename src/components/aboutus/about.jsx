import AboutCom from "./aboutCom";
import History from "./history";
import  knife from "../../assets/knife (1).png";
// import  bg from "../../assets/BG.png";


export default function About(){
    return(
        <section className="relative flex justify-center items-center py-20 px-10 bg-hero">
            <AboutCom />
            <b className="block text-[480px] absolute opacity-10">G</b>
            <img src={knife} alt="" className="z-10 w-16"/>
            <History />
        </section>
    )
}