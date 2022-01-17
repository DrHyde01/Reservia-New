import logo from "../Assets/logo/Reservia@3x.png";

//console.log(logo)

function Header() {
  return (
    <div className="flex justify-around items-center flex-wrap px-10 bg-white h-28 ">
      <img className="h-12 order-1" src={logo} alt="logo_Reservia" />
      <nav className="w-auto h-full ml-auto items-center order-2">
        <ul className="flex justify-around items-center flex-wrap h-full mx-16">
          <li className="flex items-center px-10 h-full border-t-2 border-transparent ease-in-out duration-500 hover:text-blue-600 hover:border-blue-600">
            <a href="#hébergements">Hébergements</a>
          </li>
          <li className="flex items-center px-10 h-full border-t-2 border-transparent ease-in-out duration-500 hover:text-blue-600 hover:border-blue-600">
            <a href="#activités">Activités</a>
          </li>
        </ul>
      </nav>

      <a className="order-3 font-bold text-blue-600 " href="#">
        S'inscrire
      </a>
    </div>
  );
}
export default Header;
