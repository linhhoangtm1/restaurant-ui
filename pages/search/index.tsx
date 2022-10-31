import TabCardGrid from "components/cards/TabCardGrid";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import API from "service";
import { getRecipeList, updateRecipeList } from "store/slice/recipe.slice";

const RecipeSearchList = (props: any) => {
  const data = props.data || []
  const dispatch = useDispatch();
  const list = useSelector(getRecipeList)

  useEffect(() => {
    dispatch(updateRecipeList(data));
  }, [data]);
  return <TabCardGrid data={list} heading="Checkout the recipes" />;
};

export default RecipeSearchList

export async function getServerSideProps(context: any) {
  const s = context.query?.s;
  const res = await API.getRecipeList({ search: s });
  return {
    props: {
      data: res.meals
    }
  }
}
