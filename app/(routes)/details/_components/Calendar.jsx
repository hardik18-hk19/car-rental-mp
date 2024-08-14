// SingleDatePicker.jsx
import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SingleDatePicker = ({ startDate, endDate, setStartDate, setEndDate }) => {
  const formatDate = (date) => {
    if (!date) return "";
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  return (
    <div>
      <DatePicker
        selected={startDate}
        startDate={startDate}
        endDate={endDate}
        onChange={(dates) => {
          const [start, end] = dates;
          setStartDate(start);
          setEndDate(end);
        }}
        selectsRange
        inline
      />
      <div style={{ marginTop: "20px" }}>
        <p style={{ color: "#7f57f1" }}>
          <strong>Selected Start Date:</strong> {formatDate(startDate)}
        </p>
        <p style={{ color: "#7f57f1" }}>
          <strong>Selected End Date:</strong> {formatDate(endDate)}
        </p>
      </div>
    </div>
  );
};

export default SingleDatePicker;
