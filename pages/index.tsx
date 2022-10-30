import React, { useEffect } from "react";
import tw from "twin.macro";
import Hero from "components/hero/TwoColumnWithVideo";
import Features from "components/features/ThreeColSimple";
import MainFeature2 from "components/features/TwoColSingleFeatureWithStats2";
import TabCardGrid from "components/cards/TabCardGrid";
import PopularAndRecentPostsBlog from "components/blogs/PopularAndRecentBlogPosts";
import API from "service";
import { getRecipeList, updateRecipeList } from "store/slice/recipe.slice";
import { useDispatch, useSelector } from "react-redux";

const Subheading = tw.span`tracking-wider text-sm font-medium`;
const HighlightedText = tw.span`bg-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const imageCss = tw`rounded-4xl`;

export default ({ data, recentPosts, popularPosts }: any) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateRecipeList(data));
  }, [data]);
  const list = useSelector(getRecipeList)
  return (
    <div>
      <Hero
        heading={
          <>
            Delicious & Affordable{" "}
            <HighlightedText>Meals Near You.</HighlightedText>
          </>
        }
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        imageSrc="https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=768&q=80"
        imageCss={imageCss}
        imageDecoratorBlob={true}
        primaryButtonText="See Now"
        watchVideoButtonText="Meet The Chefs"
      />
      <TabCardGrid
        data={list}
        heading={
          <>
            Checkout <HighlightedText>recipes.</HighlightedText>
          </>
        }
      />
      <Features
        heading={
          <>
            Amazing <HighlightedText>Services.</HighlightedText>
          </>
        }
        cards={[
          {
            imageSrc: "images/recipe.png",
            title: "230+ Recipes",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://google.com",
          },
          {
            imageSrc: "images/chef.png",
            title: "Professional Chefs",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://timerse.com",
          },
          {
            imageSrc: "images/celebration.png",
            title: "Prizes",
            description: "Lorem ipsum donor amet siti ceali placeholder text",
            url: "https://reddit.com",
          },
        ]}
        imageContainerCss={tw`p-2!`}
        imageCss={tw`w-20! h-20!`}
      />
      <MainFeature2
        subheading={<Subheading>A Reputed Brand</Subheading>}
        heading={
          <>
            Why <HighlightedText>HomeKitchen ?</HighlightedText>
          </>
        }
        statistics={[
          {
            key: "Recipes",
            value: "100000+",
          },
          {
            key: "Users",
            value: "11000+",
          },
          {
            key: "Professional Chefs",
            value: "1500+",
          },
        ]}
        primaryButtonText="Explore"
        primaryButtonUrl="https://order.now.com"
        imageInsideDiv={false}
        imageSrc="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEzNzI2fQ&auto=format&fit=crop&w=768&q=80"
        imageCss={Object.assign(tw`bg-cover`, imageCss)}
        imageContainerCss={tw`md:w-1/2 h-auto`}
        imageDecoratorBlob={true}
        imageDecoratorBlobCss={tw`left-1/2 md:w-32 md:h-32 -translate-x-1/2 opacity-25`}
        textOnLeft={true}
      />
      <PopularAndRecentPostsBlog
        recentPosts={recentPosts}
        popularPosts={popularPosts}
      />
    </div>
  );
};

export async function getStaticProps() {
  const data = await API.getRecipeList();
  const popularPosts = await API.getBlogPopular({ size: 2 });
  const recentPosts = await API.getBlogRecent({ size: 5 });

  return {
    props: {
      data: data?.meals,
      recentPosts,
      popularPosts,
    },
  };
}
