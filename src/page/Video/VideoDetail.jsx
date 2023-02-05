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
    // `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`;
    return fetch(`/data/Video.json`).then(res => res.json());
  });

  const channel = useQuery(["channel"], async () => {
    return fetch(`/data/channel.json`).then(res => res.json());
  });

  const relatedVideos = useQuery(["relatedVideo"], async () => {
    return fetch(`/data/relatedVideo.json`).then(res => res.json());
  });

  const videoItem = video?.items[0].snippet;
  const channelData = channel?.data?.items[0].snippet;

  console.log(channelData);

  return (
    <section className="flex w-full my-4 text-white gap-2">
      <div className="flex-1 space-y-5">
        <div className=" aspect-video bg-slate-600"></div>
        <h1 className="text-xl font-bold">{videoItem?.title}</h1>
        <div className="flex items-center gap-5">
          <img
            className="w-10 h-10 rounded-full"
            src={channelData?.thumbnails?.default?.url}
            alt="channel"
          />
          <p>{channelData?.title}</p>
        </div>
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
