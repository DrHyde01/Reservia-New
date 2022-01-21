import { activities } from "../Datas/ActivitiesList";

function ActivitiesFig() {
  const activitiesList = activities;

  return (
    <div
      id="activités"
      className="grid grid-cols-4  grid-flow-col grid-rows-6 gap-8 h-128 py-4"
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
              className="w-full h-full  object-cover 
             rounded-t-lg"
            />
            <figcaption className="flex flex-col w-full p-3 z-10 absolute bottom-0 bg-white">
              <p className="font-semibold">{name}</p>
            </figcaption>
          </a>
        </figure>
      ))}
    </div>
  );
}

export default ActivitiesFig;
