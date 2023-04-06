import Intro1 from "./intro1";
import Intro2 from "./intro2";
import food from '../../assets/food.png'

export default function Intro(){

    const numbers = [
        {
            number:"01",
        },
        {
            number:"02",
        },
        {
            number:"03",
        },
        {
            number:"04",
        },
    ];

    const number = numbers.map((item) => {
        return(
            <li className="flex items-center" key={item.number}>
                {item.number}
               {item.number !== "04" ?  <hr className="w-3 mx-1" /> : ""}
            </li>
        )
    })

    return(
        <section className="w-4/4 flex justify-center flex-col items-center">
            <section className="w-4/4 flex justify-between items-center py-5 px-10">
                 <div className="flex justify-between items-center w-10 -rotate-90 pb-10">
                <small className="mr-10">#Bar</small>
                <small>#Gericht</small>
            </div>
            <Intro1 className="w-6/12"/>
            <Intro2 className="w-6/12" food={food}/>
            </section>
           <ul className="flex py-4">
            {number}
           </ul>
        </section>
    )
}