import HostsFig from "./HostFig";
import FavHostsFig from "./FavHostFig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartLine } from "@fortawesome/free-solid-svg-icons";


function Hosts() {
  return (
    <div id="hébergements" className="flex w-full justify-center flex-wrap-reverse md:flex-wrap">
      <div className="w-full md:w-auto  p-6 md:p-8 m-0 md:m-5 rounded-lg bg-white md:bg-gray-100">
        <h2 className="text-xl font-semibold my-2">Hébergements à Marseille</h2>

        <HostsFig />

        <h3 className="font-semibold my-2">Afficher plus</h3>
      </div>

      <div className="w-full md:w-auto p-6 md:p-8 m-0 md:m-5 md:rounded-lg bg-gray-100">
        <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold my-2">Les plus populaires</h2>
        <FontAwesomeIcon icon={faChartLine} className="text-2xl"/>
        </div>

        <FavHostsFig />

      </div>
    </div>
  );
}

export default Hosts;
