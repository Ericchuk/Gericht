import cala  from '../../assets/cala.png';
import coquet from '../../assets/coquet.png';
import blackweel from '../../assets/blackweel.png';

export default function Photos(){

    const imgData =[
        {
            id:0,
            img:cala,
        },
        {
            id:1,
            img:coquet,
        },
        {
            id:2,
            img:blackweel,
        },
    ]

    const img = imgData.map((item) => {
        return(
            <div key={item.id} >
                <img src={item.img} alt={`photo ${item.id}`} />
            </div>
        )
    })

    return(
        <aside className="flex justify-between items-center">
            {img}
        </aside>
    )
}