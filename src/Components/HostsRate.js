import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

// This component display stars according to rating in HostsList
function hostsRate({ rating }) { // Props for parent elm HostFig
  return (
    <div className="flex py-2">
      {[...Array(5)].map((star, index) => { // Short version of array.from, to create a array with 5 stars elm
        const ratingValue = index + 1; 
        return (
          <FontAwesomeIcon
            key={index}
            icon={faStar}
            className={ratingValue > rating ? "text-gray-200 text-sm" : "text-blue-600 text-sm"} 
          />
        );
      })}
    </div>
  );
}
export default hostsRate;
