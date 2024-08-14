"use client";
import React, { useState, useContext } from "react";
import {
  GoogleMap,
  Marker,
  InfoWindow,
  useJsApiLoader,
} from "@react-google-maps/api";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TableDemo } from "./ui/location-table";

const containerStyle = {
  height: "100%",
};

const center = {
  lat: 55.890524554287445,
  lng: -3.962391835527037,
};

const locations = [
  {
    position: { lat: 56.140329460259395, lng: -3.9284515332014083 },
    description: "Airthrey Rd, Stirling, Scotland FK9 5JP",
    name: "Wallace High School",
  },
  {
    position: { lat: 56.11897131396835, lng: -3.912918855291855 },
    description: "Springkerse, Stirling FK7 7UJ",
    name: "Forthbank Performance Centre",
  },
  {
    position: { lat: 55.94529376098116, lng: -4.00248839884399 },
    description: "Dowanfield Road, Cumbernauld, G67 1LA",
    name: "Ravenswood Playing Fields",
  },
  {
    position: { lat: 55.93363615653315, lng: -3.290043525850762 },
    description: "208 Broomhouse Rd, Edinburgh EH12 9AD",
    name: "St Augustines 3G",
  },
];

const Map = () => {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_API_KEY || "",
  });

  const [selectedLocation, setSelectedLocation] = useState<null | {
    position: { lat: number; lng: number };
    description: string;
    name: string;
  }>(null);
  const [mapRef, setMapRef] = useState<google.maps.Map | null>(null);

  const handleMapLoad = (map: google.maps.Map) => {
    setMapRef(map);
  };

  const handleLocationClick = (location: any) => {
    if (mapRef) {
      mapRef.panTo(location.position);
      mapRef.setZoom(12);
    }
    setSelectedLocation(location);
  };

  const { ref: sectionRef, inView: isSectionVisible } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section ref={sectionRef} className="bg-gray-50 dark:bg-background">
      <motion.div
        className="md:grid md:grid-cols-2 gap-8 mx-auto max-w-screen-xl px-4 py-4 sm:px-6 sm:py-12 lg:px-8"
        initial={{ opacity: 0, y: 50 }}
        animate={{
          opacity: isSectionVisible ? 1 : 0,
          y: isSectionVisible ? 0 : 50,
        }}
        transition={{ duration: 1.5 }}
      >
        <motion.div
          className="col-span-1 h-[400px] md:h-[500px] w-full mx-auto mb-10 md:mb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSectionVisible ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={8}
            onLoad={handleMapLoad}
          >
            {locations.map((location, index) => (
              <Marker
                key={index}
                position={location.position}
                onClick={() => setSelectedLocation(location)}
              >
                {selectedLocation === location && (
                  <InfoWindow onCloseClick={() => setSelectedLocation(null)}>
                    <div className="flex flex-col justify-center items-center text-black">
                      <h1 className="font-bold text-md">{location.name}</h1>
                      <p className="line-clamp-1">{location.description}</p>
                    </div>
                  </InfoWindow>
                )}
              </Marker>
            ))}
          </GoogleMap>
        </motion.div>
        <motion.div
          className="flex flex-col justify-center items-center  gap-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSectionVisible ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 1 }}
        >
          <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0">
            Training Locations
          </h2>
          <TableDemo onLocationClick={handleLocationClick} />
        </motion.div>
        <motion.div
          className="col-span-2 flex justify-center mt-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: isSectionVisible ? 1 : 0 }}
          transition={{ duration: 1.5, delay: 1.5 }}
        ></motion.div>
      </motion.div>
    </section>
  );
};

export default Map;
