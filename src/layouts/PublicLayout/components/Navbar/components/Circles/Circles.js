import { images } from "../../../../../../constants";

const Circles = () => {
  const { ajio, beardo, mamaearth, myntra } = images;
  const brandCircles = [ajio, beardo, mamaearth, myntra];

  return (
    <div className="flex space-x-8">
      {brandCircles.map((el, index) => (
        <div className=" rounded-2xl p-0.5" key={index}>
          <img className="h-10 object-cover rounded-2xl" src={el} />
        </div>
      ))}
    </div>
  );
};

export default Circles;
