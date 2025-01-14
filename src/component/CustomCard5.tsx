import React from "react";

const CustomCard5 = () => {
  return <div className="w-full max-w-[544px] h-[448px] bg-green-300">
  <video
        className="rounded-lg shadow-lg w-full max-w-lg"
        controls
      >
        <source src="your-video-file.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
  </div>
};

export default CustomCard5;
