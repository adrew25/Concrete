import React from "react";

interface ContentProps {
  title: string;
  text: string;
}

const Content: React.FC<ContentProps> = ({ title, text }) => {
  return (
    <section className="flex flex-col justify-center items-center h-screen bg-gray-100 bg-opacity-70 text-center p-5">
      <div className="w-1/2 h-1/2  rounded-lg p-5">
        <h2 className="text-2xl md:text-4xl lg:text-6xl text-gray-700 mb-5">
          {title}
        </h2>
        <hr className="border-2 border-gray-700 w-1/2 mx-auto mb-5" />
        <p className="text-lg md:text-xl lg:text-2xl text-gray-600">{text}</p>
      </div>
    </section>
  );
};

export default Content;
