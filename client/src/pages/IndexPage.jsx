import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Image from "../pageComponents/Image";

export default function IndexPage() {
  const [places, setPlaces] = useState([]);
  useEffect(() => {
    axios.get("/places").then((res) => {
      res.data;
      setPlaces(res.data);
    });
  }, []);
  return (
    <div className="mt-8 gap-x-6 gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {places.length > 0 &&
        places.map((place, index) => (
          <Link to={"/place/" + place._id} key={index}>
            <div className=" flex mb-2 bg-gray-500 rounded-2xl">
              {place.photos.length > 0 && (
                <Image
                  className="rounded-2xl aspect-square object-cover"
                  src={place.photos[0]}
                  alt=""
                />
              )}
            </div>

            <h2 className="font-bold">{place.address}</h2>
            <h3 className="text-sm  text-gray-500">{place.title}</h3>
            <div className="mt-1">
              <span className="font-bold">${place.price}</span> per night
            </div>
          </Link>
        ))}
    </div>
  );
}
