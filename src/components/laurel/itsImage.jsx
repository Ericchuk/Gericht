import food from '../../assets/awaedFood.png';

export default function ItsImage(){
    return(
        <aside className='relative ml-10 w-1/4 flex justify-center items-center'>
            <img src={food} alt="dinner" className="w-2/2"/>
            <span className='block text-[380px] normal absolute -left-8 top-6 opacity-10'>G</span>
        </aside>
    )
}