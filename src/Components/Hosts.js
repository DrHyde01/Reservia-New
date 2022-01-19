import HostsFig from "./HostFig";

function Hosts() {
  return (
    <div className="flex justify-center flex-wrap">
      <div className="w-6/8 p-8 m-5 rounded-lg bg-gray-100">
        <h2 className="text-xl font-semibold my-2">Hébergements à Marseille</h2>

        <HostsFig />

        <h3 className="font-semibold my-2">Afficher plus</h3>
      </div>
    </div>
  );
}

export default Hosts;
