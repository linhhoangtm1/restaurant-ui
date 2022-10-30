import VerticalWithAlternateImageAndText from "components/features/VerticalWithAlternateImageAndText";
import React from "react";
import API from "service";
import { IPost, IRecipe } from "types";

const RecipeDetail = ({ data, posts }: Record<string, IRecipe | IPost[]>) => {
  return <VerticalWithAlternateImageAndText data={data} posts={posts} />;
};

export default RecipeDetail;

export async function getStaticPaths() {
  const data = await API.getRecipeList();
  const paths = data?.meals?.map((n: IRecipe) => ({
    params: { id: n.idMeal },
  }));
  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: any) {
  const recipes = await API.getRecipeDetail(params.id)
  const posts = await API.getBlogPopular({ size: 3 })
  return {
    props: {
      data: recipes.meals?.[0],
      posts
    }
  }
}
