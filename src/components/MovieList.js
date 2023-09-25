// Tạo một tệp mới: src/components/MovieList.js
import React from "react";

function MovieList() {
  // Logic để hiển thị danh sách phim
  return (
    <div className="mb-4">
      <label
        htmlFor="movie"
        className="block text-sm font-medium text-gray-700"
      >
        Chọn Phim
      </label>
      <select
        id="movie"
        className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-200"
      >
        Hi
      </select>
    </div>
  );
}

export default MovieList;
