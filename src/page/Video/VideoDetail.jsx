import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import RelatedVideoCard from "../../components/RelatedVideoCard";
import YouTube from "react-youtube";

export default function VideoDetail() {
  const { videoId } = useParams();
  const {
    isLoading,
    error,
    data: video,
  } = useQuery(["videoDetail"], async () => {
    // `${process.env.REACT_APP_API_ADRESS}videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${process.env.REACT_APP_API_KEY}`;
    return fetch(`/data/Video.json`).then(res => res.json());
  });

  const channel = useQuery(
    ["channel"],
    async () => {
      //`${process.env.REACT_APP_API_ADRESS}channels?part=snippet%2CcontentDetails%2Cstatistics&id=UC_x5XG1OV2P6uZZ5FSM9Ttw&key=${process.env.REACT_APP_API_KEY}`
      return fetch(`/data/channel.json`).then(res => res.json());
    },
    { enabled: !!video }
  );

  const relatedVideos = useQuery(["relatedVideo"], async () => {
    //`${process.env.REACT_APP_API_ADRESS}search?part=snippet&maxResults=25&relatedToVideoId=Ks-_Mh1QhMc&type=video&key=key=${process.env.REACT_APP_API_KEY}`

    return fetch(`/data/relatedVideo.json`).then(res => res.json());
  });

  const videoItem = video?.items[0].snippet;
  const channelData = channel?.data?.items[0].snippet;

  console.log(video);

  return (
    <section className="flex w-full my-4 text-white gap-2">
      <div className="flex-1 space-y-5">
        <div className=" aspect-video">
          <iframe
            className="w-full h-full"
            src={`https://www.youtube.com/embed/${video?.items[0].id}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
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
