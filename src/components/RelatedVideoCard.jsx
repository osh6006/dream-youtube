import React from "react";
import { Link } from "react-router-dom";

export default function RelatedVideoCard({ video }) {
  const data = video?.snippet;
  return (
    <div className="w-full text-white cursor-pointer transition-transform hover:scale-105">
      <Link
        className="flex w-full gap-5"
        to={`/videos/videoDetail/${video?.id}`}
      >
        <img
          className="flex-1 aspect-video"
          src={data?.thumbnails?.default?.url}
          alt="thumbnail"
        />
        <div className="flex-1">
          <h1 className="font-bold">
            {data?.title.length > 50
              ? `${data?.title.slice(0, 50)}..`
              : data?.title}
          </h1>
          <p>{data?.channelTitle}</p>
          <p>{data?.publishedAt}</p>
        </div>
      </Link>
    </div>
  );
}
