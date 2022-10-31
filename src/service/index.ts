import { IPaginate, IPost, IRecipe } from "types";
import { posts } from "../../pages/api/mockData";
import serviceHandler from "./serviceHandler";

const API = {
  getRecipeList: async (props?: IPaginate) => {
    const { search } = props || {};
    const data = await serviceHandler(() =>
      fetch(
        `https://www.themealdb.com/api/json/v1/1/search.php?${
          search ? `s=${search}` : `f=b`
        }`
      )
    );
    return data;
  },
  getRecipeDetail: async (id: IRecipe["idMeal"]) => {
    const data = await serviceHandler(() =>
      fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
    );
    return data;
  },
  getBlogList: async () => {
    const data = await serviceHandler(() =>
      fetch("http://localhost:3000/api/posts")
    );
    return data;
  },
  getBlogDetail: async (id: IPost["id"]) => {
    let data = {};
    if (process.env.NODE_ENV === "production") {
      data = posts.find((el) => el.id === Number(id)) || {};
    } else
      data = await serviceHandler(() =>
        fetch(`http://localhost:3000/api/posts/${id}`)
      );
    return data;
  },
  getBlogPopular: async (props?: IPaginate) => {
    const { size } = props || {};
    let data = [];
    if (process.env.NODE_ENV === "production") {
      data = posts.slice(0, size);
    } else
      data = await serviceHandler(() =>
        fetch(
          "http://localhost:3000/api/posts/popular?" +
            new URLSearchParams({
              size: String(size),
            })
        )
      );
    return data;
  },
  getBlogRecent: async (props?: IPaginate) => {
    const { size } = props || {};
    let data = [];
    if (process.env.NODE_ENV === "production") {
      data = posts.slice(0, size);
    } else
      data = await serviceHandler(() =>
        fetch(
          "http://localhost:3000/api/posts/recent?" +
            new URLSearchParams({
              size: String(size),
            })
        )
      );
    return data;
  },
};

export default API;
