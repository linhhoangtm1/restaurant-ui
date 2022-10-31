import VerticalWithAlternateImageAndText from "components/features/VerticalWithAlternateImageAndText";
import React from "react";
import API from "service";
import useSWR from "swr";
import { IPost, IRecipe } from "types";

const fetcherPopular = () => {
  return API.getBlogPopular({size: 3}).then(res => res)
}

const RecipeDetail = ({ data }: Record<string, IRecipe | IPost[]>) => {
  
  const resPopular = useSWR("/api/posts/popular", fetcherPopular);
  const { data: popularPosts } = resPopular
  return <VerticalWithAlternateImageAndText data={data} posts={popularPosts} />;
};

export default RecipeDetail;

export async function getStaticPaths() {
  const data = await API.getRecipeList();
  const paths = data?.meals?.map((n: IRecipe) => ({
    params: { id: n.idMeal },
  }));
  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }: any) {
  const recipes = await API.getRecipeDetail(params.id)
  return {
    props: {
      data: recipes.meals?.[0],
    }
  }
}
