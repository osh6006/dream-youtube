import React from "react";
import { useQuery } from "react-query";
import VideoCard from "../components/VideoCard";

export default function Home() {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["mostPopular"], async () => {
    return fetch(`data/mostPopular.json`).then(res => res.json());
  });

  return (
    <>
      <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-5 gap-2">
        {videos?.items?.map(el => (
          <VideoCard key={el.id} video={el} />
        ))}
      </div>
      ;
    </>
  );
}
