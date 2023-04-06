import video from "../../assets/Video.png";

export default function Video() {
  return (
    <section className="py-20">
      {/* <video width="320" height="240" controls>
        <source src={video} />
      </video> */}
      <img src={video} alt="video" />
    </section>
  );
}
