import React, { useMemo } from "react";
import tw from "twin.macro";
import styled from "styled-components";
import SvgDotPatternIcon from "../../../public/images/dot-pattern.svg";
import { SectionHeading as HeadingTitle } from "../misc/Headings";
import ThreeColSimpleWithImage from "components/blogs/ThreeColSimpleWithImage";
import { IIngredient } from "types";

const Container = tw.div`relative`;

const SingleColumn = tw.div`max-w-screen-xl mx-auto pt-20 lg:pt-24`;

const HeadingInfoContainer = tw.div`flex flex-col items-center`;
const HeadingDescription = tw.p`mt-4 font-medium text-gray-600 text-center`;

const Content = tw.div``;

const Card: any = styled.div((props: any) => [
  tw`mb-10 mt-24 md:flex justify-center items-center`,
  props.reversed ? tw`flex-row-reverse` : "flex-row",
]);
const Image: any = styled.div((props: any) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded md:w-1/2 lg:w-5/12 xl:w-1/3 flex-shrink-0 h-80 md:h-144 bg-cover bg-center mx-4 sm:mx-8 md:mx-4 lg:mx-8`,
]);
const Subtitle = tw.div`flex items-center text-gray-900 tracking-wide`;

const SvgDotPattern1 = tw(
  SvgDotPatternIcon
)`absolute top-0 left-0 transform -translate-x-20 rotate-90 translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern2 = tw(
  SvgDotPatternIcon
)`absolute top-0 right-0 transform translate-x-20 rotate-45 translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern3 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 left-0 transform -translate-x-20 rotate-45 -translate-y-8 -z-10 opacity-25 text-primary-500 fill-current w-24`;
const SvgDotPattern4 = tw(
  SvgDotPatternIcon
)`absolute bottom-0 right-0 transform translate-x-20 rotate-90 -translate-y-24 -z-10 opacity-25 text-primary-500 fill-current w-24`;

const VerticalWithAlternateImageAndText = ({ data, posts }: any) => {
  const { strMeal, strInstructions, strMealThumb } = data;

  const ingredients = useMemo(() => {
    const arr: IIngredient[] = [];
    for (let i = 1; i <= 20; i++) {
      const title = data[`strIngredient${i + 1}`];
      if(title){
        arr.push({
          title: data[`strIngredient${i + 1}`],
          measure: data[`strMeasure${i + 1}`],
        });
      }
    }
    return arr;
  }, [data]);

  return (
    <Container>
      <SingleColumn>
        <HeadingInfoContainer>
          <HeadingTitle>{strMeal}</HeadingTitle>
          <HeadingDescription>{strInstructions}</HeadingDescription>
        </HeadingInfoContainer>

          <Card>
            <Image imageSrc={strMealThumb} />
          </Card>
        <HeadingInfoContainer>
          <HeadingTitle>Ingredients</HeadingTitle>
          {ingredients.map((el, i) => (
            <Content key={i}>
              <Subtitle>{el.title}: {el.measure}</Subtitle>
            </Content>
          ))}
        </HeadingInfoContainer>
      </SingleColumn>
      <ThreeColSimpleWithImage data={posts} />
      <SvgDotPattern1 />
      <SvgDotPattern2 />
      <SvgDotPattern3 />
      <SvgDotPattern4 />
    </Container>
  );
};

export default VerticalWithAlternateImageAndText;
