import { favHosts } from "../Datas/FavHostsList";
import HostsRate from "./HostsRate";

function FavHostsFig() {
    return (
        <div className="flex flex-col justify-center align-center flex-wrap pt-10 ">
        {favHosts.map(({ id, name, price, picture, rating }) => (
          <a href="#">
            <figure
              key={id}
              className="flex w-full md:w-80 h-32 mb-8 bg-white rounded-xl shadow-md shadow-gray-300 ease-in-out duration-500 hover:-translate-y-2"
            >
              <img
                src={picture}
                alt={name}
                className="w-32 h-32 object-cover rounded-l-xl border-4 border-white"
              />
              <figcaption className="flex flex-col py-2 p-3">
                <p className="font-semibold">{name}</p>
                <p className="text-sm">
                  Nuit à partir de{" "}
                  <em className="not-italic font-bold">{price} €</em>
                </p>

                <div className="mt-4">
                <HostsRate rating={rating} />
                </div>
              </figcaption>
            </figure>
            </a>
          ))}
        </div>
    )
}
export default FavHostsFig