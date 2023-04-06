import rectangle from '../../assets/Rectangle 21.png'

export default function Intro2({food}){
    return(
        <aside className='relative flex justify-center items-center py-5'>
            <img src={rectangle} alt="rectangle" className='absolute -top-3 right-10 w-80' />
            <img src={food} alt="food" className='relative z-50 w-9/12' />
            <img src={rectangle} alt="rectangle" className='absolute -bottom-3 left-10 w-80' />
        </aside>
    )
}