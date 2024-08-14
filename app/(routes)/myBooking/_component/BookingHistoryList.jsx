import { Calendar, Car, Clock, MapPin, Navigation, User } from "lucide-react";
import Image from "next/image";
import React from "react";
import { GiPriceTag } from "react-icons/gi";

function BookingHistoryList({ bookingHistory }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      {bookingHistory.map((booking, index) => (
        <div key={index} className="flex gap-4 border rounded-lg p-4 mb-5">
          {booking?.businessList?.name && (
            <Image
              src={booking?.businessList?.images[0]?.url}
              alt="image"
              width={120}
              height={120}
              className="rounded-lg object-cover"
            />
          )}
          <div className="flex flex-col gap-2">
            <h2 className="font-bold"> {booking.businessList.name}</h2>
            <h2 className="flex gap-2 text-primary">
              <Car /> {booking.businessList.carName}
            </h2>
            <h2 className="flex gap-2 text-red-700">
              <GiPriceTag /> {"₹"}
              {booking.businessList.price}
              {" /day "}
            </h2>
            <h2 className="flex gap-2 text-gray-500">
              <Calendar className="text-primary" /> Service from :{" "}
              <span className="text-black">{booking.date}</span>
            </h2>
            <h2 className="flex gap-2 text-gray-500">
              <Calendar className="text-primary" /> Service to :{" "}
              <span className="text-black">{booking.endDate}</span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
}

export default BookingHistoryList;
