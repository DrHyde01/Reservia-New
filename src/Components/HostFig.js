import { hosts } from "../Datas/HostsList";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function HostsFig() {
  const hostsList = hosts;
  const rateRange = [5];

  return (
    <div className="grid grid-cols-3 gap-8 py-4">
      {/*{console.log(hostsList)}*/}

      {hostsList.map(({ id, name, price, picture, rating }) => (
        <figure
          key={id}
          className="flex-col w-64 h-auto bg-white rounded-xl shadow-md shadow-gray-300 ease-in-out duration-500 hover:-translate-y-2"
        >
          <img
            src={picture}
            alt={name}
            className="w-64 h-32 object-cover rounded-t-xl border-4 border-white"
          />
          <figcaption className="flex flex-col p-3">
            <p className="font-semibold">{name}</p>
            <p className="text-sm">
              Nuit à partir de{" "}
              <em className="not-italic font-bold">{price} €</em>
            </p>

            <div className="flex py-2">
              {Array(rating).fill(
                <FontAwesomeIcon icon={faStar} className="text-blue-500" />
              )}
            </div>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

export default HostsFig;
