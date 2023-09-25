import "./App.css";
import "./input.css";
import MovieList from "./components/MovieList";
// import BookingForm from "./components/BookingForm";

function App() {
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl font-semibold mb-4">Đặt Vé Xem Phim</h1>
        <MovieList />

        {/* Chọn ngày */}
        <div className="mb-4">
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Chọn Ngày
          </label>
          <input
            type="date"
            id="date"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Chọn giờ */}
        <div className="mb-4">
          <label
            htmlFor="time"
            className="block text-sm font-medium text-gray-700"
          >
            Chọn Giờ
          </label>
          <input
            type="time"
            id="time"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Số ghế */}
        <div className="mb-4">
          <label
            htmlFor="seats"
            className="block text-sm font-medium text-gray-700"
          >
            Số Ghế
          </label>
          <input
            type="number"
            id="seats"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
          />
        </div>
        {/* Nút Đặt Vé */}
        <button
          className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300"
          type="button"
        >
          Đặt Vé
        </button>
      </div>
    </div>
  );
}

export default App;
