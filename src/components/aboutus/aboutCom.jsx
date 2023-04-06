import spoon from '../../assets/Vector.svg';

export default function AboutCom(){
    return(
        <aside className="flex flex-col justify-end items-end w-1/2 pr-24 text-right">
            <h1 className='text-[64px] text-[#DCCA87]'>About Us</h1>
            <img src={spoon} alt="spoon" className='-rotate-180 my-2'/>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <button className='capitalize my-4 px-10 py-5 text-black bg-[#DCCA87] '>Know more</button>
        </aside>
    )
}