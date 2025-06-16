import { Link } from "react-router-dom";
//import { GithubIcon } from "../../assets/icons";
export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-300">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-between">
                    <div className="mb-6 md:mb-0">
                        <Link to="/" className="flex items-center">
                            <img
                                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                                className="mr-3 h-16 hover:scale-105 transition-transform"
                                alt="Logo"
                            />
                        </Link>
                    </div>
                    <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                        {/* ... other footer sections ... */}
                        <div>
                            <h2 className="mb-6 text-sm font-semibold text-white uppercase">Follow us</h2>
                            <ul className="text-gray-400 font-medium">
                                <li className="mb-4">
                                    <a 
                                        href="https://twitter.com/your_twitter_handle" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="hover:text-white transition-colors"
                                    >
                                        Twitter
                                    </a>
                                </li>
                                <li>
                                    <a 
                                        href="https://github.com/your_github_username" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="hover:text-white transition-colors"
                                    >
                                        Github
                                    </a>
                                </li>
                            </ul>
                        </div>
                
                        
                    </div>
                </div>
                <hr className="my-6 border-gray-700 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className="text-sm text-gray-400 sm:text-center">
                        {new Date().getFullYear()} <Link to="/" className="hover:underline">Your Company Name</Link>. All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}