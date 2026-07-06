import { FaGlobe } from "react-icons/fa";

const WebsiteCard = ({ url, status }) => {

  return (
    <div className="bg-gradient-to-r from-indigo-700 to-blue-600 rounded-xl shadow-xl p-8 text-white">

      <div className="flex justify-between">

        <div>

          <div className="flex items-center gap-3">

            <FaGlobe size={30}/>

            <h1 className="text-3xl font-bold">
              Website Analysis
            </h1>

          </div>

          <p className="mt-5 text-lg">
            {url}
          </p>

        </div>

        <div>

          <span className="bg-green-500 px-4 py-2 rounded-full font-semibold">
            {status}
          </span>

        </div>

      </div>

    </div>
  );
};

export default WebsiteCard;