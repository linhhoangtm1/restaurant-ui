import TwoColSingleFeatureWithStats from "components/features/TwoColSingleFeatureWithStats";
import { useRouter } from "next/router";
import React from "react";
import useSWR from 'swr';

const fetcher = (url: string) => {
  return fetch(url).then((res) => {
    return res.json();
  });
};

const PostDetail = () => {
    const { query } = useRouter()

  const res = useSWR(`/api/posts/${query.id}`, fetcher);
  const resPost = useSWR(`/api/posts/popular`, fetcher);
  const { data, error } = res;
  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return <TwoColSingleFeatureWithStats data={data} posts={resPost.data} />;
};

export default PostDetail;
