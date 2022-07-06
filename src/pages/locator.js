import React from "react";
import {
  useJsApiLoader,
  Marker,
  GoogleMap,
  Autocomplete,
  DirectionsRenderer,
} from "@react-google-maps/api";
import { useRef, useState } from "react";
import { FaLocationArrow, FaTimes } from "react-icons/fa";

const center = { lat: 39.768402, lng: -86.158066 };

const Locator = () => {
  const [libraries] = useState(["places"]);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: "AIzaSyDAuyBiMJVDZGrMjL1vUkV9uZgzpSLUnIU",
    libraries,
  });
  // const { isLoaded } = useJsApiLoader({
  //   googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
  //   libraries: ["places"],
  // });

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [directionsResponse, setDirectionsResponse] = useState(null);
  const [distance, setDistance] = useState("");
  const [duration, setDuration] = useState("");
  /** @type React.MutableRefObject<HTMLInputElement> */
  const originRef = useRef();
  /** @type React.MutableRefObject<HTMLInputElement> */
  const destiantionRef = useRef();

  if (!isLoaded) {
    return <h1>Loading ...</h1>;
  }
  async function calculateRoute() {
    if (originRef.current.value === "" || destiantionRef.current.value === "") {
      return;
    }
    // eslint-disable-next-line no-undef
    const directionsService = new google.maps.DirectionsService();
    const results = await directionsService.route({
      origin: originRef.current.value,
      destination: destiantionRef.current.value,
      // eslint-disable-next-line no-undef
      travelMode: google.maps.TravelMode.DRIVING,
    });
    setDirectionsResponse(results);
    setDistance(results.routes[0].legs[0].distance.text);
    setDuration(results.routes[0].legs[0].duration.text);
  }

  function clearRoute() {
    setDirectionsResponse(null);
    setDistance("");
    setDuration("");
    originRef.current.value = "";
    destiantionRef.current.value = "";
  }

  return (
    <div>
      <h1 className="text-yellow-500  text-center mt-10 mb-40  font-bold text-5xl">
        Where To Buy Enfamil{" "}
      </h1>
      <div className="container">
        <p className="mt-20 mb-5 text-bold-300 text-ellipsis overflow-hidden ...  w-50  hover:indent-8 underline hover:decoration-dashed text-xl">
          Check out our Store Locator below where you can find your local
          grocery store to restock!
        </p>
      </div>
      <div className="  flex flex-col ml-10 mt-10  content-center ">
        <div className=" items-center ml:0 mt:0 h-96 w-96 border-4 border-blue-600  ">
          {/* Google Map Box */}
          <GoogleMap
            center={center}
            zoom={15}
            mapContainerStyle={{ width: "100%", height: "100%" }}
            options={{
              zoomControl: false,
              streetViewControl: false,
              mapTypeControl: false,
              fullscreenControl: false,
            }}
            onLoad={(map) => setMap(map)}
          >
            <Marker position={center} />
            {directionsResponse && (
              <DirectionsRenderer directions={directionsResponse} />
            )}
          </GoogleMap>
        </div>
        <div className=".rounded-sm shadow-md w-96 bg-blue-100 z-10">
          <div className="tracking-wider space-y-0">
            <div className=" ml-5">
              <Autocomplete>
                <input type="text" placeholder="Origin" ref={originRef} />
              </Autocomplete>
            </div>
            <div className="flex-grow-1 ml-5">
              <Autocomplete>
                <input
                  type="text"
                  placeholder="Destination"
                  ref={destiantionRef}
                />
              </Autocomplete>
            </div>

            <div>
              <button
                className="content-center ml-10 mb-5 py-2 px-2 mt-5 bg-pink-500 rounded-sm text-3xt
            hover:bg-gray-100 transition duration-300 ease-in-out flex items-center"
                type="submit"
                onClick={calculateRoute}
              >
                Calculate Route
              </button>
              <div
                aria-label="center back"
                icon={<FaTimes />}
                onClick={clearRoute}
              />
            </div>
          </div>
          <div spacing={4} mt={4} justifyContent="space-between">
            <h6>Distance: {distance} </h6>
            <h6>Duration: {duration} </h6>
            <div
              aria-label="center back"
              icon={<FaLocationArrow />}
              isRound
              onClick={() => {
                map.panTo(center);
                map.setZoom(15);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locator;
