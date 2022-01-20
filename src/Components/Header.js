import logo from "../Assets/logo/Reservia@3x.png";

//console.log(logo)

function Header() {
  return (
    <div className="flex justify-between md:justify-around items-center flex-wrap md:px-10 bg-white w-100 h-auto md:h-28 ">
      <img
        className="mt-10 ml-10 md:ml-0 md:mt-0 h-12 order-1"
        src={logo}
        alt="logo_Reservia"
      />
      <nav className="w-full md:w-auto md:h-full mt-2 md:mt-0 ml-auto items-center order-3 md:order-2">
        <ul className="flex flex-row justify-between items-center md:w-auto h-full mx-0 md:mx-16 border-b-4 border-gray-100 md:border-b-0 ">
          <li className="flex justify-center items-end md:items-center px-14  md:px-10 py-2 md:py-0 h-14 md:h-full border-t-2 border-transparent ease-in-out duration-500 hover:text-blue-600 hover:border-blue-600">
            <a href="#hébergements">Hébergements</a>
          </li>
          <li className="flex justify-center items-end md:items-center px-14 md:px-10 py-2 md:py-0 h-14 md:h-full border-t-2 border-transparent ease-in-out duration-500 hover:text-blue-600 hover:border-blue-600">
            <a href="#activités">Activités</a>
          </li>
        </ul>
      </nav>

      <a
        className="order-2 mt-10 mr-10 md:mr-0 md:mt-0 md:order-3 font-bold text-blue-600 "
        href="#"
      >
        S'inscrire
      </a>
    </div>
  );
}
export default Header;
