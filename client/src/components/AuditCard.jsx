import {
  CheckCircleIcon,
  ExclamationTriangleIcon,
  XCircleIcon,
} from "@heroicons/react/24/solid";

const AuditCard = ({ title, items }) => {
  const getIcon = (status) => {
    switch (status) {
      case "success":
        return (
          <CheckCircleIcon className="w-6 h-6 text-green-500 flex-shrink-0" />
        );

      case "warning":
        return (
          <ExclamationTriangleIcon className="w-6 h-6 text-yellow-500 flex-shrink-0" />
        );

      case "error":
        return (
          <XCircleIcon className="w-6 h-6 text-red-500 flex-shrink-0" />
        );

      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100">

      <h2 className="text-2xl font-bold text-gray-800 mb-6">
        {title}
      </h2>

      <div className="space-y-4">

        {items.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition"
          >
            <div className="flex items-center gap-3">
              {getIcon(item.status)}

              <div>
                <h4 className="font-semibold text-gray-800">
                  {item.title}
                </h4>

                <p className="text-sm text-gray-500">
                  {item.message}
                </p>
              </div>
            </div>

            {item.value && (
              <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                {item.value}
              </span>
            )}
          </div>
        ))}

      </div>
    </div>
  );
};

export default AuditCard;