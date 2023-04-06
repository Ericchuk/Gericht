import spoon from "../../assets/Vector.svg";

export default function NewLetter() {
  return (
    <section className="w-8/12 border border-[#DCCA87] flex justify-center items-center flex-col py-10 bg-[
        #0C0C0C]">
      <h5 className="font-h2 text-white text-[23px] font-bold mb-2">Newsletter</h5>
      <img src={spoon} alt="spoon" className="mb-2" />
      <h2 className="text-[64px] text-[#DCCA87] font-h2">Subscribe to our newsletter</h2>
      <p className="py-5">And never miss latest updates!</p>
      <div className="flex justify-center items-center my-3 w-11/12">
        <input
          type="text"
          placeholder="Email address"
          className="border border-white w-9/12 h-[50px] bg-transparent px-2 py-3 text-base"
        />
        <button className="py-3 ml-5 px-2 text-black font-bold bg-[#DCCA87]">Subscribe</button>
      </div>
    </section>
  );
}
