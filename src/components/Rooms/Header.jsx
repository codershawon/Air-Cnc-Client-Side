import React from "react";
import Heading from "../Heading/Heading";

const Header = ({roomData}) => {
  return (
    <div>
      <Heading
        title={roomData.title}
        subtitle={roomData.location}
      ></Heading>
      <div className="w-full md:h-[60vh] overflow-hidden rounded-xl">
        <img className="object-cover w-full" src={roomData.image} alt="" />
      </div>
    </div>
  );
};

export default Header;
