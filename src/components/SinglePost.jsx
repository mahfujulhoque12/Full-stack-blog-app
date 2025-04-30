import React from 'react';
import img from '/public/4.jpg';
import img1 from '/public/5.jpg';
import img2 from '/public/6.jpg';
import img3 from '/public/7.jpg';

// Posts data
export const posts = [
  {
    id: 1,
    title: "Lorem Main Img 1",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: img1,
  },
  {
    id: 2,
    title: "Lorem Main Img 2",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: img2,
  },
  {
    id: 3,
    title: "Lorem Main Img 3",
    des: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    img: img3,
  },
];

const SinglePost = () => {
  return (
    <div className="bg-gradient-to-r from-green-200 via-green-300 to-green-400 py-16 px-6 my-16">
      {/* Post Container */}
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column - Single Post */}
        <div className="col-span-2">
          <div className="relative">
            <img
              src={img}
              alt="Nature"
              className="w-full h-96 object-cover rounded-lg"
            />
            <div className="absolute bottom-4 left-4 bg-green-600 text-white px-6 py-2 rounded-full shadow-lg">
              <span className="text-xl font-semibold">Nature's Beauty</span>
            </div>
          </div>

          <h1 className="text-4xl font-bold text-green-800 mt-6">Exploring the Beauty of Nature</h1>
          <p className="text-gray-700 mt-4 text-lg leading-relaxed">
            Nature is a powerful source of inspiration and healing. From the towering mountains to the calming oceans, nature has the ability to restore our minds and souls. It is an essential part of our lives and holds a special place in our hearts. This post will delve into the wonders of nature, exploring its diverse beauty and profound impact on our well-being.
          </p>

          {/* Actions (Edit and Delete) */}
          <div className="flex justify-between items-center mt-8">
            <button className="bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition duration-300">
              Edit
            </button>
            <button className="bg-gradient-to-r from-red-500 to-red-600 text-white px-6 py-3 rounded-lg hover:scale-105 transition duration-300">
              Delete
            </button>
          </div>
        </div>

        {/* Right Column - Related Posts */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-green-800">Related Posts</h2>
          {posts.map((post) => (
            <div key={post.id} className="flex items-center space-x-4">
              <img
                src={post.img}
                alt={post.title}
                className="w-24 h-24 object-cover rounded-lg shadow-md"
              />
              <div>
                <h3 className="text-xl font-bold text-green-800">{post.title}</h3>
                <p className="text-gray-700 text-sm">{post.des.substring(0, 80)}...</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;
