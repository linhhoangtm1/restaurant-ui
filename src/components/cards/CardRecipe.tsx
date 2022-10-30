import React from "react";
import { motion } from "framer-motion";
import tw, { styled, css } from "twin.macro";
import { IRecipe } from "types";
import Link from "next/link";
import HeartIcon from "feather-icons/dist/icons/heart.svg";
import { useDispatch } from "react-redux";
import { updateFavoriteList } from "store/slice/recipe.slice";

const CardContainer = styled.div`
${(props: any) => props.itemsPerRow === 4 ? tw`sm:w-1/2 md:w-1/3 lg:w-1/4 sm:pr-10 md:pr-6 lg:pr-12` : tw`sm:w-1/2 lg:w-1/3  sm:pr-5 lg:pr-6`}
${tw`mb-5 w-full`}
`;
const Card = tw(
  motion.a
)`relative bg-gray-200 rounded-b block max-w-xs mx-auto sm:max-w-none sm:mx-0`;
const CardImageContainer: any = styled.div`
  ${(props: any) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-56 xl:h-64 bg-center bg-cover rounded-t`}
`;
const CardHeartContainer = tw.div`cursor-pointer leading-none absolute inline-flex bg-gray-100 top[20px] left-0 ml-4 mb-4 rounded-full px-1 py-1 items-end`;
const CardHeart = styled.div`
  ${tw`text-sm font-bold flex items-end`}
  svg {
    ${tw`w-6 h-6 fill-current text-gray-400`}
    ${(props: any) => props.liked && tw`text-red-600`}
  }
`;

const CardText = tw.div`cursor-pointer p-4 text-gray-900`;
const CardTitle = tw.h5`text-lg font-semibold group-hover:text-primary-500`;
const CardContent = tw.p`mt-1 text-sm font-medium text-gray-600 line-clamp-3`;

const CardRecipe = ({ data, itemsPerRow = 4 }: Record<string, any>) => {
  const dispatch = useDispatch();
  const toFavoriteList = (item: IRecipe) => {
    dispatch(updateFavoriteList(item));
  };
  return (
    <CardContainer itemsPerRow={itemsPerRow}>
      <Card className="group" initial="rest" whileHover="hover" animate="rest">
        <CardImageContainer imageSrc={data.strMealThumb}></CardImageContainer>
        <CardHeartContainer>
          <CardHeart liked={data.liked} onClick={() => toFavoriteList(data)}>
            <HeartIcon />
          </CardHeart>
        </CardHeartContainer>
        <Link href={`recipes/${data.idMeal}`}>
          <CardText>
            <CardTitle>{data.strMeal}</CardTitle>
            <CardContent>{data.strInstructions}</CardContent>
          </CardText>
        </Link>
      </Card>
    </CardContainer>
  );
};

export default CardRecipe;
