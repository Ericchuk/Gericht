export default function MenuLeft(){
    const menuData = [
        {
            id:0,
            name:"Chapel Hill Shiraz",
            price:"$56",
            countryOfMake:"AU | Bottle",
        },
        {
            id:1,
            name:"Catena Malbec",
            price:"$59",
            countryOfMake:"AR | Bottle",
        },
        {
            id:2,
            name:"La Vieille Rosé",
            price:"$44",
            countryOfMake:"FR | 750 ml",
        },
          {
            id:3,
            name:"Rhino Pale Ale",
            price:"$31",
            countryOfMake:"CA | 750 ml",
        },
        {
            id:4,
            name:"Irish Guinness",
            price:"$26",
            countryOfMake:"IE | 750 ml ",
        }
    ];

    const menuItem = menuData.map((item) => {
        return(
            <div key={item.id} className="my-5">
                <div className="flex justify-between items-center">
                   <h5 className="text-[#DCCA87] text-[23px]">{item.name}</h5> 
                   <h5 className="flex justify-center items-center text-white text-[23px]"><hr className="w-20 bg-white py-1/2 mx-3" /> {item.price}</h5>
                </div>
                <p className="opacity-30 my-2">{item.countryOfMake}</p>

            </div>
        )
    })

    return(
        <aside className="w-1/2 pr-10">
            <h3 className="capitalize text-white py-5 text-center text-[45px]">Wine & beer</h3>
            <section className="text-left">
                {menuItem}
            </section>
        </aside>
    )
}