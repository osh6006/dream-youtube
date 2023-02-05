import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import VideoCard from "../../components/VideoCard";

export default function SearchResult() {
  const { videoId } = useParams(); // 중요코드
  // const {
  //   isLoading,
  //   error,
  //   data: videos,
  // } = useQuery(["searchResult"], async () => {
  //   return fetch(
  //     `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${videoId}&type=video&key=${process.env.REACT_APP_API_KEY}`
  //   ).then(res => res.json());
  // });

  return (
    <div className="w-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-5 gap-2">
      {/* {videos?.items?.map(el => (
        <VideoCard key={el.id.videoId} video={el} />
      ))} */}
    </div>
  );
}
