import HostsFig from "./HostFig";
import FavHostsFig from "./FavHostFig";


function Hosts() {
  return (
    <div className="flex w-full justify-center flex-wrap">
      <div className="w-auto p-8 m-5 rounded-lg bg-gray-100">
        <h2 className="text-xl font-semibold my-2">Hébergements à Marseille</h2>

        <HostsFig />

        <h3 className="font-semibold my-2">Afficher plus</h3>
      </div>

      <div className="w-auto p-8 m-5 rounded-lg bg-gray-100">
        <h2 className="text-xl font-semibold my-2">Les plus populaires</h2>

        <FavHostsFig />

      </div>
    </div>
  );
}

export default Hosts;
