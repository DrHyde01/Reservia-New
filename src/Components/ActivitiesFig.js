/* eslint-disable jsx-a11y/anchor-is-valid */
import { activities } from "../Datas/ActivitiesList";

function ActivitiesFig() {
  const activitiesList = activities;

  return (
    <div
      id="activités"
      className="flex flex-col md:grid md:grid-cols-3 md:grid-rows-2 lg:grid lg:grid-cols-4  grid-flow-col lg:grid-rows-6 gap-8 lg:h-128 2xl:h-160 py-4"
    >
      {activitiesList.map(({ id, name, picture, gridSize }) => (
        <figure
          key={id}
          className={`flex-col w-full ${gridSize} relative overflow-hidden bg-white rounded-lg shadow-md shadow-gray-300`}
        >
          <a href="#">
            <img
              src={picture}
              alt={name}
              className="w-full h-48 lg:h-full  object-cover 
             rounded-t-lg"
            />
            <figcaption className="flex flex-col w-full md:h-2/6 lg:h-auto p-3 z-10 absolute bottom-0 bg-white">
              <p className="font-semibold">{name}</p>
            </figcaption>
          </a>
        </figure>
      ))}
    </div>
  );
}

export default ActivitiesFig;
