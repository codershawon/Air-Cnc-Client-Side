import React from "react";
import Container from "../../components/Shared/Container";
import Header from "../../components/Rooms/Header";
import RoomInfo from "../../components/Rooms/RoomInfo";
import RoomReservation from "../../components/Rooms/RoomReservation";
import { useLoaderData } from "react-router-dom";

const RoomDetails = () => {
  const roomData=useLoaderData()
    console.log(roomData)
  
  return (
    <Container>
      <div className="max-w-screen-lg mx-auto">
        <div className="flex flex-col gap-4">
          <div>
            <Header roomData={roomData} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-7 md:gap-6 mt-6">
            <RoomInfo roomData={roomData} />
           <div className="mb-3 md:col-span-3 order-first md:order-last"> <RoomReservation roomData={roomData}/></div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default RoomDetails;
