import React from "react";
import "../App.css";

function Slots() {
  return (
    <div className="slots-container">
      <h1>Slot Booking</h1>

      <p>
        This is the slot booking page. Here, you will be able to book parking
        slots using gesture control (coming soon 🚀).
      </p>

      {/* Demo Slot Layout */}
      <div className="slots-grid">
        <div className="slot available">Slot 1</div>
        <div className="slot booked">Slot 2</div>
        <div className="slot available">Slot 3</div>
        <div className="slot available">Slot 4</div>
      </div>
    </div>
  );
}

export default Slots;
