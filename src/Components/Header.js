import logo from "../Assets/logo/Reservia@3x.png";

//console.log(logo)

function Header() {
  return (
    <div className="flex justify-between lg:justify-around items-center flex-wrap lg:px-10 bg-white w-100 h-auto lg:h-28 ">
      <img
        className="mt-10 ml-6 lg:ml-0 lg:mt-0 h-12 order-1"
        src={logo}
        alt="logo_Reservia"
      />
      <nav className="w-full lg:w-auto lg:h-full mt-2 lg:mt-0 ml-auto items-center order-3 lg:order-2">
        <ul className="flex flex-row justify-between items-center lg:w-auto h-full mx-0 lg:mx-16 border-b-4 border-gray-100 lg:border-b-0 ">
          <li className="flex justify-center items-end lg:items-center  px-10 py-2 lg:py-0 w-1/2 h-14 lg:h-full border-b-2 lg:border-b-0 lg:border-t-2 border-transparent ease-in-out duration-500 hover:text-blue-600 hover:border-blue-600">
            <a href="#hébergements">Hébergements</a>
          </li>
          <li className="flex justify-center items-end lg:items-center px-10 py-2 lg:py-0 w-1/2  h-14 lg:h-full border-b-2 lg:border-b-0 lg:border-t-2 border-transparent ease-in-out duration-500 hover:text-blue-600 hover:border-blue-600">
            <a href="#activités">Activités</a>
          </li>
        </ul>
      </nav>

      <a
        className="order-2 mt-10 mr-6 lg:mr-0 lg:mt-0 lg:order-3 font-bold text-blue-600 "
        href="#"
      >
        S'inscrire
      </a>
    </div>
  );
}
export default Header;
