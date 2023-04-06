import spoon from '../../assets/Vector.svg';


export default function PhotoDesc(){
    return(
        <aside className="flex justify-start items-start flex-col w-2/4">
            <h5 className="text-[23px] font-h4 py-2">Instagram</h5>
            <img src={spoon} alt="spoon" className="my-2"/>
            <h2 className="font-h2 text-[64px] text-[#DCCA87]">Photo Gallery</h2>
            <p className="text-base">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
            <button className="bg-[#DCCA87] text-black font-h4 font-semibold py-2 px-4 my-2">View More</button>
        </aside>
    )
}