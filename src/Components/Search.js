import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMapMarkerAlt,
  faInfo,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { filters } from "../Datas/Filters";

function Search() {
  const filtersList = filters;

  return (
    <div className="md:flex md:flex-col md:items-center lg:items-start mt-5 px-4 lg:px-10 2xl:px-32 lg:mt-0">
      <h1 className="text-xl font-semibold my-2">
        Trouvez votre hébergement pour des vacances de rêve
      </h1>
      <h2 className="text-base font-normal my-2">
        En plein centre ville ou en pleine nature
      </h2>

      <form className="flex justify-center lg:justify-start items-center w-full lg:w-6/12 h-12 my-6">
        <div className="flex justify-center items-center w-16 lg:w-12 h-full rounded-l-lg bg-gray-100">
          <FontAwesomeIcon icon={faMapMarkerAlt} className="text-xl" />
        </div>

        <input
          type="text"
          name="ville"
          placeholder="Marseille, France"
          className="md:w-4/12 lg:w-2/5 h-full pl-4 border-y font-semibold"
        />
        <button
          type="submit"
          className="flex justify-center items-center rounded-r-lg bg-blue-600 w-16 lg:w-auto h-full px-3 ease-in-out duration-500 hover:bg-blue-500"
        >
          <span className=" hidden lg:block text-white">Rechercher</span>
          <FontAwesomeIcon
            icon={faSearch}
            className=" block lg:hidden text-white"
          />
        </button>
      </form>

      <div className="flex flex-col flex-wrap lg:flex-row items-start md:items-center py-3">
        <h2 className="font-semibold">Filtres</h2>
        <div className="flex flex-col justify-center flex-wrap md:flex-row">
          {/* Create elements with data comming from Filters file */}
          {filtersList.map(({ id, name, icon }) => (
            <div
              key={id}
              className="flex items-center mt-3 md:mt-6 lg:mt-0 mx-0 md:mx-4 w-fit border rounded-l-full rounded-r-full cursor-pointer ease-in-out duration-500 hover:bg-gray-100"
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
        <div className="flex justify-center items-center h-6 w-8 lg:w-6 border-2 rounded-full">
          <FontAwesomeIcon icon={faInfo} className="text-xs text-blue-500" />
        </div>
        <p className="ml-4 lg:ml-2 text-gray-500">
          Plus de 500 logements sont disponibles dans cette ville
        </p>
      </div>
    </div>
  );
}

export default Search;
