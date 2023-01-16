import React from "react";

const Map = () => {
  return (
    <div className="mt-14">
      <h1 className="text-3xl lg:text-4xl font-semibold text-green-900 dark:text-gray-300 text-center my-4">
        Our Location
      </h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3521.0061827044187!2d82.40274091667037!3d28.054835835277796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399792927093222b%3A0xad5f10fd0847973!2sShine%20Resunga%20Development%20Bank%20Limited!5e0!3m2!1sen!2snp!4v1659947117533!5m2!1sen!2snp"
        title="google map"
        className="w-full h-[350px] md:h-[500px] lg:h-[550px] border-0 my-10"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
