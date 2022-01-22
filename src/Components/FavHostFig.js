import { favHosts } from "../Datas/FavHostsList";
import HostsRate from "./HostsRate";

function FavHostsFig() {
  return (
    <div className="flex flex-col md:flex-none md:grid md:grid-cols-3 md:gap-8 lg:gap-0 lg:flex items-center justify-center align-center flex-wrap pt-10 ">
      {favHosts.map(({ id, name, price, picture, rating }) => (
        <a href="#">
          <figure
            key={id}
            className="flex md:flex-col lg:flex-row  w-80 md:w-auto lg:w-80 sm:h-32 md:h-64 lg:h-32 mb-8 bg-white rounded-xl shadow-md shadow-gray-300 ease-in-out duration-500 hover:-translate-y-2"
          >
            <img
              src={picture}
              alt={name}
              className="w-32 md:w-full lg:w-32 h-32 object-cover rounded-l-xl border-4 border-white"
            />
            <figcaption className="flex md:h-full flex-col md:justify-between py-2 p-3">
              <div>
              <p className="font-semibold">{name}</p>
              <p className="text-sm">
                Nuit à partir de{" "}
                <em className="not-italic font-bold">{price} €</em>
              </p>
              </div>

              <div className="mt-4 md:mt-0 lg:mt-4">
                <HostsRate rating={rating} />
              </div>
              
            </figcaption>
          </figure>
        </a>
      ))}
    </div>
  );
}
export default FavHostsFig;
