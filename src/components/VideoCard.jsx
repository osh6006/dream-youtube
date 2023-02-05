import React from "react";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  const data = video?.snippet;
  return (
    <div className="flex flex-col text-white cursor-pointer transition-transform hover:scale-105">
      <Link to={`/videos/videoDetail/${video?.id}`}>
        <img src={data?.thumbnails?.medium?.url} alt="" />
        <h1 className="font-bold">
          {data?.title.length > 50
            ? `${data?.title.slice(0, 50)}...`
            : data?.title}
        </h1>
        <p>{data?.channelTitle}</p>
        <p>{data?.publishedAt}</p>
      </Link>
    </div>
  );
}
