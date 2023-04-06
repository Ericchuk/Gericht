import spoon from '../../assets/Vector.svg';


export default function Contact(){
    return(
        <aside>
            <h5 className="font-h2 text-[23px] ">Contact</h5>
            <img src={spoon} alt="spoon"  className="my-2"/>
            <h2 className="font-h2 text-[#DCCA87] py-4 text-[64px]">Find Us</h2>
            <p className="opacity-80 py-5">Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <h4 className="text-[#DCCA87] font-h2 text-[23px] my-2">Opening Hours</h4>
            <p className="py-3 text-base font-h4">Mon - Fri: 10:00 am - 02:00 am</p>
            <p className="text-base py-3 font-h4">Sat - Sun: 10:00 am - 03:00 am</p>
            <button className='px-4 py-2 bg-[#DCCA87] text-black my-5 font-h2 font-bold'>Visit Us</button>
        </aside>
    )
}