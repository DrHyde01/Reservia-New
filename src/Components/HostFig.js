/* eslint-disable jsx-a11y/anchor-is-valid */
import { hosts } from "../Datas/HostsList";
import HostsRate from "./HostsRate";

function HostsFig() {
  const hostsList = hosts;

  return (
    <div className="flex flex-col md:grid grid-cols-3 gap-8 py-4">
      {/*{console.log(hostsList)}*/}

      {hostsList.map(({ id, name, price, picture, rating }) => (
        <figure
          key={id}
          className="flex-col lg:w-64 sm:h-auto md:h-64 lg:h-auto bg-white rounded-xl shadow-md shadow-gray-300 ease-in-out duration-500 hover:-translate-y-2"
        >
          <a href="#">
            <img
              src={picture}
              alt={name}
              className="w-full lg:w-64 h-32 object-cover rounded-t-xl border-4 border-white"
            />
            <figcaption className="flex flex-col md:h-32 lg:h-auto md:justify-between  py-2 px-3">
              <div>
                <p className="font-semibold">{name}</p>
                <p className="text-sm">
                  Nuit à partir de{" "}
                  <em className="not-italic font-bold">{price} €</em>
                </p>
              </div>

              <HostsRate rating={rating} />
            </figcaption>
          </a>
        </figure>
      ))}
    </div>
  );
}

export default HostsFig;
