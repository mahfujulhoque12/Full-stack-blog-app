import React from 'react';
import { posts } from '../data/posts';

const Posts = () => {
  return (
    <div className="max-w-7xl mx-auto p-4">
      {posts.map((data) => {
        const isEven = data.id % 2 === 0;

        return (
          <div
            key={data.id}
            className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center my-12"
          >
            {/* Image Part */}
            <div className={`${isEven ? 'order-2' : 'order-1'} flex justify-center`}>
              <div className="relative group">
                {/* Image */}
                <img
                  src={data.img}
                  alt=""
                  className="relative z-20 rounded-lg w-full max-w-md"
                />
                {/* Left + Bottom background */}
                <div className="absolute -bottom-5 -left-5 w-full h-full bg-green-100 rounded-lg z-10"></div>
              </div>
            </div>

            {/* Text Part */}
            <div className={`${isEven ? 'order-1' : 'order-2'} text-center sm:text-left`}>
              <h2 className="text-3xl font-bold mb-4 text-green-800">{data.title}</h2>
              <p className="text-gray-700 mb-6">{data.des}</p>
              <button className="px-6 py-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 text-white rounded-full hover:scale-105 transition duration-300">
                Learn More
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Posts;
