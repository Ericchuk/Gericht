import spoon from '../../assets/Vector.svg'

export default function Intro1(){
    return(
        <aside className='w-2/4'>
            <p className='my-2'>Chase the new Flavour</p>
            <img src={spoon} alt='spoon' />
            <h1 className='text-[90px] font-bold text-[#DCCA87] pr-40'>The key to Fine dining</h1>
            <p className='w-2/3 text-base'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
            <button className='bg-[#DCCA87] text-black capitalize p-3 mt-5'>Explore More</button>
        </aside>
    )
}