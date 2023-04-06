export default function Header() {
  const navdata = [
    {
      id: 0,
      name: "Home",
      path: "/",
    },
    {
      id: 1,
      name: "Pages",
      path: "/pages",
    },
    {
      id: 2,
      name: "Contact Us",
      path: "/contact-us",
    },
    {
      id: 3,
      name: "Blog",
      path: "/blog",
    },
    {
      id: 4,
      name: "Landing",
      path: "/landing",
    },
  ];

  const eachNavData = navdata.map((item) => {
    return (
      <li className="text-white text-base" key={item.id}>
        <a href={item.path} className="no-underline text-white">
          {item.name}
        </a>
      </li>
    );
  });

  return (
    <header className="flex justify-between items-center w-4/4 py-5 px-5">
      <h2 className="uppercase text-xl text-white w-1/4 py-3">gericht</h2>

      <nav className="flex justify-between items-center w-3/4">
        <ul className="flex justify-between items-center w-2/4 py-3">{eachNavData}</ul>

        <ul className="flex justify-between items-center w-1/4 py-3">
          <li className="text-white text-base">
            <a href="/log-in" className="no-underline text-white">
              Login / Registration
            </a>
          </li>
          <hr className="w-5 rotate-90 bg-white" />
          <li className="text-white text-base">
            <a href="/book-table" className="no-underline text-white">
              Book toble
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
