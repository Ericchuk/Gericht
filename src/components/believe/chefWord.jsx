import signature from "../../assets/signature.png";
import spoon from "../../assets/Vector.svg";
import quote from "../../assets/quote.png";

export default function ChefWord(){
    return(
        <section className="w-2/5 mx-5 px-5 ">
            <p className="text-[23px]">Chef's word</p>
            <img src={spoon} alt="spoon" className="py-2" />
            <h2 className="text-[#DCCA87] text-[56px] py-1">What we believe in</h2>

            <div>
                <p className="flex justify-start items-end my-2 text-base"><img src={quote} alt="quote" className="w-10"/><i className="opacity-60 ml-2 italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit.</i></p>
                <p className="text-base opacity-60 italic pr-10 my-2">
                auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.
            </p>
            </div>
            
            <div className="pt-8 pb-4">
                <h4 className="text-[23px] text-[#DCCA87]">Kevin Luo</h4>
                <p className="my-2">Chef & Founder</p>
                <img src={signature} alt="signature" className="py-10 w-40" />
            </div>
        </section>
    )
}