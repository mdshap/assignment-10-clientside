import React from "react";

const About = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto mb-20 px-6 2xl:px-0">
      <h3 className="text-2xl font-semibold  text-white mb-7">
        <span className="text-white bg-secondary pt-2 pb-1 px-4 inline-block  clip-trapezium">
          About Us
        </span>
        <div className="w-full bg-secondary h-0.5 -mt-0.5"></div>
      </h3>

      <div
      className="relative mx-auto w-full rounded-xl min-h-80"
      style={{
        backgroundImage: "url('about.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <div className="absolute inset-0 bg-black/40 rounded-xl"></div>
      
      <div className="relative w-full max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 py-16 text-center bg-pink-600/10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
          About <span className="text-secondary">The Book Haven</span>
        </h2>

        <p className="max-w-3xl mx-auto text-gray-200 leading-relaxed text-sm sm:text-md">
          The Book Haven is a warm and welcoming space designed for readers,
          collectors, and creators. Here, you can explore a diverse range of
          books, discover hidden gems, and organize your personal collection
          with ease. Whether you're browsing new titles, sharing your own work,
          or simply enjoying the world of literature — The Book Haven brings
          every book lover one step closer to the stories they cherish.
        </p>
      </div>
    </div></div>
    
  );
};

export default About;
