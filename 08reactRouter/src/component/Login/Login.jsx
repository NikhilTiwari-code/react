import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        const newErrors = {};
         
        // Email validation
        if (!email) {
            newErrors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "Email is invalid";
        }

        // Password validation
        if (!password) {
            newErrors.password = "Password is required";
        } else if (password.length < 6) {
            newErrors.password = "Password must be at least 6 characters";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (validateForm()) {
            // TODO: Implement actual login logic
            console.log("Login submitted", { email, password });
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-xl sm:rounded-lg sm:px-10">
                    <div className="sm:mx-auto sm:w-full sm:max-w-md mb-8">
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                            Sign in to your account
                        </h2>
                        <p className="mt-2 text-center text-sm text-gray-600">
                            Or{" "}
                            <Link 
                                to="/signup" 
                                className="font-medium text-orange-600 hover:text-orange-500"
                            >
                                create a new account
                            </Link>
                        </p>
                    </div>
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label 
                                htmlFor="email" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Email address
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={`
                                        appearance-none 
                                        block 
                                        w-full 
                                        px-3 
                                        py-2 
                                        border 
                                        rounded-md 
                                        shadow-sm 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-orange-500 
                                        sm:text-sm
                                        ${errors.email ? 'border-red-500' : 'border-gray-300'}
                                    `}
                                    placeholder="you@example.com"
                                />
                                {errors.email && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.email}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div>
                            <label 
                                htmlFor="password" 
                                className="block text-sm font-medium text-gray-700"
                            >
                                Password
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className={`
                                        appearance-none 
                                        block 
                                        w-full 
                                        px-3 
                                        py-2 
                                        border 
                                        rounded-md 
                                        shadow-sm 
                                        focus:outline-none 
                                        focus:ring-2 
                                        focus:ring-orange-500 
                                        sm:text-sm
                                        ${errors.password ? 'border-red-500' : 'border-gray-300'}
                                    `}
                                    placeholder="Enter your password"
                                />
                                {errors.password && (
                                    <p className="mt-2 text-sm text-red-600">
                                        {errors.password}
                                    </p>
                                )}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    name="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
                                />
                                <label 
                                    htmlFor="remember-me" 
                                    className="ml-2 block text-sm text-gray-900"
                                >
                                    Remember me
                                </label>
                            </div>

                            <div className="text-sm">
                                <a 
                                    href="#" 
                                    className="font-medium text-orange-600 hover:text-orange-500"
                                >
                                    Forgot your password?
                                </a>
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="
                                    w-full 
                                    flex 
                                    justify-center 
                                    py-2 
                                    px-4 
                                    border 
                                    border-transparent 
                                    rounded-md 
                                    shadow-sm 
                                    text-sm 
                                    font-medium 
                                    text-white 
                                    bg-orange-600 
                                    hover:bg-orange-700 
                                    focus:outline-none 
                                    focus:ring-2 
                                    focus:ring-offset-2 
                                    focus:ring-orange-500
                                "
                            >
                                Sign in
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Or continue with
                                </span>
                            </div>
                        </div>

                        <div className="mt-6 grid grid-cols-3 gap-3">
                            <div>
                                <a
                                    href="#"
                                    className="
                                        w-full 
                                        inline-flex 
                                        justify-center 
                                        py-2 
                                        px-4 
                                        border 
                                        border-gray-300 
                                        rounded-md 
                                        shadow-sm 
                                        bg-white 
                                        text-sm 
                                        font-medium 
                                        text-gray-500 
                                        hover:bg-gray-50
                                    "
                                >
                                    Google
                                </a>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="
                                        w-full 
                                        inline-flex 
                                        justify-center 
                                        py-2 
                                        px-4 
                                        border 
                                        border-gray-300 
                                        rounded-md 
                                        shadow-sm 
                                        bg-white 
                                        text-sm 
                                        font-medium 
                                        text-gray-500 
                                        hover:bg-gray-50
                                    "
                                >
                                    Facebook
                                </a>
                            </div>
                            <div>
                                <a
                                    href="#"
                                    className="
                                        w-full 
                                        inline-flex 
                                        justify-center 
                                        py-2 
                                        px-4 
                                        border 
                                        border-gray-300 
                                        rounded-md 
                                        shadow-sm 
                                        bg-white 
                                        text-sm 
                                        font-medium 
                                        text-gray-500 
                                        hover:bg-gray-50
                                    "
                                >
                                    GitHub
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}