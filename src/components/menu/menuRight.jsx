export default function MenuRight(){
    const menuData = [
        {
            id:0,
            name:"Aperol Spritz",
            price:"$20",
            countryOfMake:"Aperol | Villa Marchesi prosecco | soda | 30ml",
        },
        {
            id:1,
            name:"Dark 'N' Stormy            ",
            price:"$16",
            countryOfMake:"Dark rum | Ginger beer | Slice of lime. ",
        },
        {
            id:2,
            name:"Daiquiri            ",
            price:"$10",
            countryOfMake:"Rum | Citrus juice | Sugar",
        },
          {
            id:3,
            name:"Old Fashioned            ",
            price:"$31",
            countryOfMake:"Bourbon | Brown sugar | Angostura Bitters",
        },
        {
            id:4,
            name:"Negroni",
            price:"$26",
            countryOfMake:"Gin | Sweet Vermouth | Campari | Orange garnish",
        }
    ];

    const menuItem = menuData.map((item) => {
        return(
            <div key={item.id}  className="my-5">
                <div className="flex justify-between items-center">
                   <h5 className="text-[#DCCA87] text-[23px]">{item.name}</h5> 
                  
                   <h5 className="flex justify-center items-center text-white text-[23px]"> <hr className="w-20 bg-white py-1/2 mx-3"/> {item.price}</h5>
                </div>
                <p className="opacity-30 my-2 text-left">{item.countryOfMake}</p>

            </div>
        )
    })

    return(
        <aside className="w-1/2 pl-10">
            <h3 className="capitalize text-white py-5 text-center text-[45px]">Cocktails</h3>
            <section>
                {menuItem}
            </section>
        </aside>
    )
}