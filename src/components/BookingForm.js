import React, { useState } from "react";

function BookingForm() {
  const [movie, setMovie] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [seats, setSeats] = useState("");

  const handleMovieChange = (event) => {
    setMovie(event.target.value);
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleSeatsChange = (event) => {
    setSeats(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Xử lý việc đặt vé ở đây (gửi dữ liệu lên máy chủ hoặc thực hiện các xử lý cần thiết)
    console.log("Đã đặt vé:", { movie, date, time, seats });
  };

  return (
    <div>
      <h2>Đặt Lịch Vé Xem Phim</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Phim:</label>
          <input type="text" value={movie} onChange={handleMovieChange} />
        </div>
        <div>
          <label>Ngày:</label>
          <input type="date" value={date} onChange={handleDateChange} />
        </div>
        <div>
          <label>Giờ:</label>
          <input type="time" value={time} onChange={handleTimeChange} />
        </div>
        <div>
          <label>Số ghế:</label>
          <input type="number" value={seats} onChange={handleSeatsChange} />
        </div>
        <button type="submit">Đặt Vé</button>
      </form>
    </div>
  );
}

export default BookingForm;
