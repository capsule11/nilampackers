import { PackageSearch } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const NotFoundPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="flex flex-col items-center">
          <PackageSearch className="h-24 w-24 text-blue-600" />
          <h1 className="mt-6 text-4xl font-extrabold text-gray-900 sm:text-5xl">
            404 - Page Not Found
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Oops! It looks like the box you're looking for has been misplaced.
          </p>
        </div>
        <div className="mt-8 space-y-4 flex flex-col justify-center items-center">
          <Link
            to="/"
            className="w-full p-3 rounded-lg bg-blue-700 text-white font-semibold"
          >
            Return to Home
          </Link>

          <Link
            to="/products"
            className="w-full p-3 rounded-lg border bg-white"
          >
            Browse Our Products
          </Link>
        </div>
        <p className="mt-6 text-base text-gray-500">
          If you believe this is an error, please{" "}
          <Link
            to="/contact"
            className="font-medium text-blue-600 hover:text-blue-500"
          >
            contact our support team
          </Link>
          .
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
