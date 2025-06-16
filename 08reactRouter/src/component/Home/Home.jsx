import { Link } from "react-router-dom";




export default function Home() {
  return (
      <div className="mx-auto w-full max-w-7xl">
          <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 to-gray-800 text-white rounded-xl sm:mx-16 mx-2 sm:py-16">
              <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
                  <div className="max-w-xl space-y-8 text-center sm:text-right sm:ml-auto">
                      <h2 className="text-4xl font-bold sm:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-orange-600">
                          Transform Your Digital Experience
                          <span className="block text-3xl mt-4 text-gray-300">Premium Solutions for Modern Needs</span>
                      </h2>
                      <Link
                          className="inline-flex items-center px-8 py-4 font-semibold bg-orange-600 rounded-lg hover:bg-orange-700 transition-colors group"
                          to="/"
                      >
                          <span className="absolute left-0 w-full h-0.5 -bottom-px bg-orange-600 group-hover:h-0.5"></span>
                          <span className="relative">Get Started</span>
                      </Link>
                  </div>
              </div>
              <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full opacity-20">
                  <img className="w-96 mx-auto" src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="hero" />
              </div>
          </section>

          {/* ... rest of home page with similar styling improvements ... */}
      </div>
  );
}
