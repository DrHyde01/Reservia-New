import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faInfo } from "@fortawesome/free-solid-svg-icons";
import { filters } from "../Datas/Filters";

function Search() {
  const filtersList = filters;

  return (
    <div className="p-10">
      <h1 className="text-xl font-semibold my-2">
        Trouvez votre hébergement pour des vacances de rêve
      </h1>
      <h2 className="text-base font-normal my-2">
        En plein centre ville ou en pleine nature
      </h2>

      <form className="flex justify-start items-center w-6/12 h-12 my-6">
        <div className="flex justify-center items-center w-12 h-full rounded-l-lg bg-gray-100">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
        </div>

        <input
          type="text"
          name="ville"
          placeholder="Marseille, France"
          className="w-2/5 h-full pl-6 border-y font-semibold"
        />
        <button
          type="submit"
          className="rounded-r-lg bg-blue-600 h-full px-3 ease-in-out duration-500 hover:bg-blue-500"
        >
          <span className="text-white">Rechercher</span>
        </button>
      </form>

      <div className="flex items-center py-3">
        <h2 className="font-semibold">Filtres</h2>
        <div className="flex flex-wrap">
          {/* Create elements with data comming from Filters file */}
          {filtersList.map(({ id, name, icon }) => (
            <div
              key={id}
              className="flex items-center mx-4 border rounded-l-full rounded-r-full cursor-pointer ease-in-out duration-500 hover:bg-gray-100"
            >
              <div className="flex justify-center items-center w-12 h-full bg-blue-100 rounded-l-full rounded-r-full">
                <FontAwesomeIcon
                  icon={icon}
                  className="text-blue-600 text-xl h-12"
                />
              </div>
              <p className="font-semibold text-center px-4">{name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center py-4">
        <div className="flex justify-center items-center h-6 w-6 border-2 rounded-full">
          <FontAwesomeIcon icon={faInfo} className="text-xs text-blue-500" />
        </div>
        <p className="ml-2 text-gray-500">
          Plus de 500 logements sont disponibles dans cette ville
        </p>
      </div>
    </div>
  );
}

export default Search;
