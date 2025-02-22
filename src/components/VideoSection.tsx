import React from "react";

interface VideoSectionProps {
  videoId: string;
  title: string;
  description: string;
}

const VideoSection: React.FC<VideoSectionProps> = ({
  videoId,
  title,
  description,
}) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16 lg:gap-32 w-full max-w-screen-2xl 3xl:max-w-screen-3xl">
      <div className="video-wrapper flex w-full md:w-1/2">
        <video
          autoPlay
          muted
          playsInline
          loop
          className="w-full rounded-md shadow-md"
        >
          <source src={`/videos/spotify/${videoId}.mp4`} type="video/mp4" />
        </video>
      </div>
      <div className="video-description flex flex-col w-full md:w-1/2 md:text-left gap-2">
        <p className="font-medium">{title}</p>
        <p className="font-light text-lightgray">{description}</p>
      </div>
    </div>
  );
};

export default VideoSection;
