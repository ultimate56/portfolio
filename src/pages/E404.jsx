import { Link } from "react-router";

const E404 = () => {
  return (
    <div className="h-screen bg-[#ECE7E1] flex justify-center items-center">
      <div className="w-full h-full flex flex-col justify-center items-center">
        <img
          src="/404.jpg"
          alt="404 - Page Not Found"
          className="w-full h-80 max-w-3xl mx-auto my-10 object-contain rounded-lg"
        />
        {/* <Link
          to="/"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Go Home
        </Link> */}
      </div>
    </div>
  );
};

export default E404;
