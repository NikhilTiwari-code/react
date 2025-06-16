import React from "react";
import { Link } from "react-router-dom";
export default function About() {
    return (
        <div className="py-16 bg-white">
            <div className="container m-auto px-4 sm:px-6 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:flex-col lg:flex-row md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:w-full lg:w-5/12 mb-6 lg:mb-0">
                        <img
                            src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png"
                            alt="image"
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-full lg:w-6/12">
                        <h2 className="text-2xl text-center lg:text-left text-gray-900 font-bold md:text-4xl mb-4">
                            React development is carried out by passionate developers
                        </h2>
                        <div className="space-y-4">
                            <p className="text-gray-600 text-base md:text-lg text-center lg:text-left">
                                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                                accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                                aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                            </p>
                            <p className="text-gray-600 text-base md:text-lg text-center lg:text-left">
                                Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                                Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}