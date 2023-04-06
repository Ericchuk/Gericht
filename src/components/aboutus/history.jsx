import spoon from '../../assets/Vector.svg';

export default function History(){
    return(
        <aside className="flex flex-col justify-start items-start w-1/2 pl-24">
            <h1 className='text-[64px] text-[#DCCA87]'>Our History</h1>
            <img src={spoon} alt="spoon" className='my-2' />
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <button className='capitalize my-4 px-10 py-5 text-black bg-[#DCCA87]'>Know more</button>
        </aside>
    )
}