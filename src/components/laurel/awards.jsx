import spoon from '../../assets/Vector.svg';
import award1 from '../../assets/Group 26.png';
import award2 from '../../assets/Group 27.png';
import award3 from '../../assets/Group 25.png';
import award4 from '../../assets/Group 26 (1).png';


export default function Awards(){
    const awardsData = [
        {
            id:0,
            img:award4,
            title:"Bib Gourmond",
            description:"Lorem ipsum dolor sit amet, consectetur.",
        },
        {
            id:1,
            img:award1,
            title:"Rising Star",
            description:"Lorem ipsum dolor sit amet, consectetur.",
        },
        {
            id:3,
            img:award2,
            title:"Outstanding Chef",
            description:"Lorem ipsum dolor sit amet, consectetur.",
        },
        {
            id:2,
            img:award3,
            title:"AA Hospitality ",
            description:"Lorem ipsum dolor sit amet, consectetur.",
        },
        
    ]

    const award = awardsData.map((item) => {
        return(
            <div key={item.id} className='flex justify-center items-center gap-5 py-5 w-[46%] my-2 mx-3'>
                <img src={item.img} alt={item.title} className='w-2/5' />
                <figcaption>
                    <h4 className='text-[23px] text-[#DCCA87] py-2 font-h2'>{item.title}</h4>
                    <p className='text-base font-h4'>{item.description}</p>
                </figcaption>
            </div>
        )
    })


    return(
        <aside className='w-2/4 pt-10'>
            <p className='text-[23px] font-bold py-2 font-h4'>Awards & Recognition</p>
            <img src={spoon} alt="spoon" />
            <h2 className='text-[#DCCA87] text-[64px] font-h2'>Our Laurels</h2>
            <section className='flex justify-center items-center flex-wrap'>
                {award}
            </section>
        </aside>
    )
}