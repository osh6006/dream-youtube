import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import RelatedVideoCard from "../../components/RelatedVideoCard";

export default function VideoDetail() {
  const { videoId } = useParams();
  const {
    isLoading,
    error,
    data: video,
  } = useQuery(["videoDetail"], async () => {
    return fetch(`/data/Video.json`).then(res => res.json());
  });

  // `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`;

  const channelData = useQuery(["videoDetail"], async () => {
    return fetch(`/data/Video.json`).then(res => res.json());
  });

  const relatedVideos = useQuery(["relatedVideo"], async () => {
    return fetch(`/data/relatedVideo.json`).then(res => res.json());
  });

  console.log(relatedVideos.data);

  const videoItem = video?.items[0].snippet;

  return (
    <section className="flex w-full my-4 text-white gap-2">
      <div className="flex-1 space-y-5">
        <div className=" aspect-video bg-slate-600"></div>
        <h1 className="text-xl font-bold">{videoItem?.title}</h1>
        <div></div>
        <p className="">{videoItem?.description}</p>
      </div>
      <div className="flex-initial w-96 space-y-1">
        {relatedVideos?.data?.items?.map(el => (
          <RelatedVideoCard key={el.id.videoId} video={el} />
        ))}
      </div>
    </section>
  );
}
