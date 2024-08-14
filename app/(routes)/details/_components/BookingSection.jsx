import React, { useEffect, useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  SheetFooter,
} from "/components/ui/sheet";

import SingleDatePicker from "./Calendar";
import { Button } from "/components/ui/button";
import GlobalApi from "../../../_services/GlobalApi";
import { useSession } from "next-auth/react";
import { toast } from "sonner";

function BookingSection({ children, business }) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [bookedDates, setBookedDates] = useState([]);
  const { data } = useSession();

  useEffect(() => {
    if (startDate && endDate) {
      getBookedDates();
    }
  }, [startDate, endDate]);

  const getBookedDates = () => {
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    if (!formattedStartDate || !formattedEndDate) {
      console.error("Invalid date format:", startDate, endDate);
      return;
    }

    GlobalApi.BusinessBookedSlot(
      business.id,
      formattedStartDate,
      formattedEndDate
    )
      .then((resp) => {
        console.log("Booked dates response:", resp);
        setBookedDates(resp.bookings);
      })
      .catch((error) => {
        console.error("Error fetching booked dates:", error);
        toast.error("Failed to fetch booked dates. Please try again later.");
      });
  };

  const formatDate = (date) => {
    if (!date) return null;
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`; // YYYY-MM-DD format
  };

  const saveBooking = () => {
    const formattedStartDate = formatDate(startDate);
    const formattedEndDate = formatDate(endDate);
    if (!formattedStartDate || !formattedEndDate || !data?.user) {
      toast.error(
        "Please select start and end dates and ensure you are logged in."
      );
      return;
    }

    console.log("Booking details:", {
      businessId: business.id,
      startDate: formattedStartDate,
      endDate: formattedEndDate,
      userEmail: data.user.email,
      userName: data.user.name,
    });

    GlobalApi.createNewBooking(
      business.id,
      formattedStartDate,
      formattedEndDate,
      data.user.email,
      data.user.name
    ).then(
      (resp) => {
        if (resp) {
          toast.success("Service Booked Successfully");
        }
      },
      (e) => {
        toast.error("Error while creating booking");
        console.error(e);
      }
    );
  };

  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>{children}</SheetTrigger>
        <SheetContent className="fixed inset-y-0 right-0 w-[600px] z-50 bg-inherit text-gray-700 p-4 overflow-auto">
          <SheetHeader>
            <SheetTitle className="text-primary font-semibold">
              Book a Service!
            </SheetTitle>
            <SheetDescription>
              Select the start and end dates to book a service
              <div>
                <h2 className="mt-5 font-bold mb-2">Select Date Range</h2>
                <SingleDatePicker
                  startDate={startDate}
                  endDate={endDate}
                  setStartDate={setStartDate}
                  setEndDate={setEndDate}
                />
              </div>
              <SheetClose>
                <SheetFooter>
                  <div className="flex gap-5">
                    <Button
                      variant="destructive"
                      className="m-2 text-white bg-red-500 border p-2"
                    >
                      Cancel
                    </Button>
                    <Button
                      className="m-2 text-white p-2"
                      disabled={!startDate || !endDate}
                      onClick={saveBooking}
                    >
                      Book
                    </Button>
                  </div>
                </SheetFooter>
              </SheetClose>
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default BookingSection;
