// ErrorPage.jsx
import { useRouteError, Link } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="max-w-md p-8 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-4xl font-bold text-red-600 mb-4">Oops!</h1>
        <p className="text-gray-700 text-lg mb-4">
          Sorry, an unexpected error has occurred.
        </p>
        <p className="text-gray-500 italic">
          {error.statusText || error.message}
        </p>
        <Link
          to="/"
          className="mt-6 inline-block px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
}