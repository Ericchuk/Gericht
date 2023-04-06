import Contact from './contact';
import Intro2 from '../introductorySection/intro2';
import verse from '../../assets/verse.png';

export default function FindUs(){
    return(
        <section className="flex justify-center items-center py-20 gap-5">
            <Contact />
            <Intro2 food={verse} />
        </section>
    )
}