import Intro2 from "../introductorySection/intro2";
import chef from '../../assets/chef.png'
import ChefWord from "./chefWord";

export default function Believe(){
    return(
        <section className="flex justify-center items-end py-20">
            <Intro2 food={chef} className=""/>
            <ChefWord />
        </section>
    )
}