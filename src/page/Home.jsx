import React, { useState } from "react";
import { useQuery } from "react-query";

export default function Home() {
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["mostPopular"], async () => {
    return fetch(`data/mostPopular.json`).then(res => res.json());
  });

  return <div>homegg</div>;
}
