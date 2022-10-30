import React from "react";
import tw, { styled } from "twin.macro";
import { SectionHeading } from "components/misc/Headings";
import ThreeColSimpleWithImage from "components/blogs/ThreeColSimpleWithImage";

const Container = tw.div`relative`;
const TwoColumn = tw.div`flex flex-col md:flex-row justify-between max-w-screen-xl mx-auto py-20 md:py-24`;
const Column = tw.div`w-full max-w-md mx-auto md:max-w-none md:mx-0`;
const ImageColumn = tw(Column)`md:w-6/12 lg:w-5/12 flex-shrink-0 h-80 md:h-auto`;
const TextColumn: any = styled(Column)((props: any) => [
  tw`md:w-6/12 mt-8 md:mt-0`,
  props.textOnLeft ? tw`md:mr-8 lg:mr-16 md:order-first` : tw`md:ml-8 lg:ml-16 md:order-last`
]);

const Image: any = styled.div((props: any) => [
  `background-image: url("${props.imageSrc}");`,
  tw`rounded bg-cover bg-center h-full`,
]);
const TextContent = tw.div`lg:py-8`;

const Heading = tw(SectionHeading)`text-left text-3xl sm:text-4xl lg:text-5xl text-center md:text-left leading-tight`;
const Description = tw.p`text-center md:text-left text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 mt-4`

const Statistics = tw.div`mt-6 lg:mt-8 xl:mt-16 flex flex-wrap`
const Statistic = tw.div`text-lg sm:text-2xl lg:text-3xl w-1/2 mt-4 lg:mt-10 text-center md:text-left`
const Value = tw.div`font-bold text-primary-500`
const Key = tw.div`font-medium text-gray-700`

export default ({textOnLeft = false, data, posts }: any) => {
  const { title, description, imageSrc } = data;
  const statistics = [
    {
      key: "People like this",
      value: Math.floor(Math.random() * 10000) + 1,
    },
  ]

  return (
    <Container>
      <TwoColumn>
        <ImageColumn>
          <Image imageSrc={imageSrc} />
        </ImageColumn>
        <TextColumn textOnLeft={textOnLeft}>
          <TextContent>
            <Heading>{title}</Heading>
            <Description>
              {description}
            </Description>
            <Statistics>
              {statistics.map((statistic, index) => (
              <Statistic key={index}>
                <Value>{statistic.value}</Value>
                <Key>{statistic.key}</Key>
              </Statistic>
              ))}
            </Statistics>
          </TextContent>
        </TextColumn>
      </TwoColumn>
      <ThreeColSimpleWithImage data={posts} />
    </Container>
  );
};
