"use client";

import React from 'react';

const WiseguyVideo = () => {
  return (
    <main className="relative bg-white dark:bg-gray-900">
      <div className="h-auto mt-28 flex flex-col w-full p-4">
        <h1 className="text-accent dark:text-text-primary-dark font-bold text-center text-4xl m-10">Wiseguy App Video</h1>
        <div className="w-[90%] md:w-[70%] mx-auto m-10 p-4">
          <p
            className="text-xl mx-auto text-accent dark:text-text-primary-dark"
          >
            This video is a demonstration of how the app works. I did not make the app available
            to the public because of the cost of tokens each time it is run. All the code is available on&nbsp;
            <a
            href="https://github.com/WarrenPaschetto/wiseguy-siri.git"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline dark:text-blue-400"
          >
            GitHub
            </a>
            .
          </p>
        </div>
        <div className="w-[90%] md:w-[70%] mx-auto m-10 p-4">
          <div className="relative pb-[56.25%] h-0 overflow-hidden">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/Dvllxk4jTs0"
              title="Wiseguy App Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
};

export default WiseguyVideo;
