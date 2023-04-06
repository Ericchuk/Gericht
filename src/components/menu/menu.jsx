import spoon from "../../assets/Vector.svg";
import mixer from "../../assets/mixer.png";
import MenuLeft from "./menuLeft";
import MenuRight from "./menuRight";

export default function Menu() {
  return (
    <section className="text-center flex flex-col justify-center items-center py-20">
      <h4 className="capitalize text-[23px]">Menu that fits you palatte</h4>
      <img src={spoon} alt="spoon" className="my-4" />
      <h1 className="capitalize my-4 text-[64px] text-[#DCCA87]">Today’s Special</h1>

      <section className="flex justify-center items-center py-4">
        <MenuLeft />
        <img src={mixer} alt="mixer" className="w-100"/>
        <MenuRight />
      </section>

      <button className='capitalize my-4 px-10 py-5 text-black bg-[#DCCA87]'>View more </button>
    </section>
  );
}
