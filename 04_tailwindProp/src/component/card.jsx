import React from 'react';

// Card Component


const Card = ({ title, description, imageUrl, buttonText }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full" src={imageUrl} alt={title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-700 text-base">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-blue-700 font-bold py-2 px-4 rounded">
          {buttonText}
        </button> 
      </div>
    </div>
  );
};




export default Card;