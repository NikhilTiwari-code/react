import { Link } from "react-router-dom";
export default function Contact() {
  return (
    <div className="relative flex items-top justify-center min-h-[700px] bg-gray-50 sm:items-center sm:pt-0 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-6xl mx-auto">
            <div className="mt-8 overflow-hidden shadow-xl sm:rounded-2xl">
                <div className="grid grid-cols-1 md:grid-cols-2 bg-white">
                    <div className="p-6 mr-2 bg-gray-100 flex flex-col justify-center">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl text-gray-800 font-extrabold tracking-tight text-center md:text-left mb-4">
                            Get in Touch
                        </h1>
                        <div className="flex justify-center md:justify-start mb-4">
                            <svg
                                fill="none"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                                viewBox="0 0 24 24"
                                className="w-8 h-8 text-gray-500"
                            >
                                {/* SVG paths */}
                            </svg>
                        </div>
                    </div>
                    <form className="p-6 flex flex-col space-y-4">
                        <div className="flex flex-col">
                            <label htmlFor="name" className="text-gray-700 font-medium mb-2">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                placeholder="Your Name"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="email" className="text-gray-700 font-medium mb-2">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                placeholder="your.email@example.com"
                            />
                        </div>
                        <div className="flex flex-col">
                            <label htmlFor="message" className="text-gray-700 font-medium mb-2">
                                Message
                            </label>
                            <textarea
                                id="message"
                                rows="4"
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all"
                                placeholder="Write your message here..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-orange-700 transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  );
}