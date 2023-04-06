import spoon from "../../assets/Vector.svg";
import faceBook from "../../assets/Vector (4).png";
import twitter from "../../assets/Vector (5).png";
import instagram from "../../assets/Vector (6).png";

export default function Footer() {
  const footerData = [
    {
      id: 0,
      header: "Contact Us",
      content: {
        address: "9 W 53rd St, New York, NY 10019, USA",
        phone1: "+1 212-344-1230",
        phone2: "+1 212-555-1230",
      },
    },
    {
      id: 1,
      logo: "GERICHT",
      content: {
        desc: '"The best way to find yourself is to lose yourself in the service of others.”',
        img: spoon,
      },
      icons: [faceBook, twitter, instagram],
    },
    {
      id: 2,
      header: "Working Hours",
      content: {
        weekdays: "Monday-Friday:",
        weekTime: "08:00 am -12:00 am",
        weekend: "Saturday-Sunday:",
        weekendTime: "07:00am -11:00 pm",
      },
    },
  ];

  const data = footerData.map((item) => {
    return (
      <aside key={item.id}>
        <h4>{item.header}</h4>
        <h2>{item.logo}</h2>
        <p>{item.content.desc}</p>
        <p>{item.content.address}</p>
        <p>{item.content.phone1}</p>
        <p>{item.content.phone2}</p>
        <img src={item.content.img} />
        { <img
          src="git add ."
        /> }
        <p>{item.icons}</p>
        {/* map through item.icons */}
      </aside>
    );
  });

  return <section>{data}</section>;
}
