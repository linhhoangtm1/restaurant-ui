import TabCardGrid from "components/cards/TabCardGrid";
import React, { useEffect } from "react";
import API from "service";
import { IRecipe } from "types";
import { useDispatch, useSelector } from "react-redux";
import { getRecipeList, updateRecipeList } from "store/slice/recipe.slice";

const RecipeList = ({ data }: Record<string, IRecipe[]>) => {
  const dispatch = useDispatch();
  const listData = useSelector(getRecipeList)

  useEffect(() => {
    dispatch(updateRecipeList(data));
  }, [data]);

  return <TabCardGrid data={listData} heading="Checkout the recipes" />;
};

export default RecipeList;

export async function getStaticProps() {
  const data = await API.getRecipeList();
  return {
    props: {
      data: data?.meals,
    },
  };
}
