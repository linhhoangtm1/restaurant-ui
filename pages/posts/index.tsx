import React, { useState } from "react";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import tw from "twin.macro";
import styled, { css } from 'styled-components';
import { SectionHeading } from "components/misc/Headings";
import PrimaryButton from "components/misc/Buttons";
import { IPost } from "types";
import useSWR from "swr";
import Link from "next/link";

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer: any = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8`}
  ${(props: any) =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post: any = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image: any = styled.div`
  ${(props: any) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info: any = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl text-gray-900 group-hover:text-primary-500 transition duration-300`;
const Description: any = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

const fetcher = (url: string) => {
  return fetch(url).then((res) => {
      return res.json()
  })
}

export default ({
  headingText = "Blog Posts",
}: any) => {
  const [visible, setVisible] = useState(7);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };
  const res = useSWR("/api/posts", fetcher);
  const { data, error } = res
  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>

  return (
    <Container>
      <ContentWithPaddingXl>
        <HeadingRow>
          <Heading>{headingText}</Heading>
        </HeadingRow>
        <Posts>
          {data?.slice(0, visible).map((post: IPost, index: number) => (
            <PostContainer key={index} featured={post.featured}>
              <Link href={`posts/${post.id}`}>
              <Post className="group">
                <Image imageSrc={post.imageSrc} />
                <Info>
                  <Category>{post.category}</Category>
                  <CreationDate>{post.date}</CreationDate>
                  <Title>{post.title}</Title>
                  {post.featured && post.description && (
                    <Description>{post.description}</Description>
                  )}
                </Info>
              </Post>
              </Link>
            </PostContainer>
          ))}
        </Posts>
        {visible < data.length && (
          <ButtonContainer>
            <LoadMoreButton onClick={onLoadMoreClick}>Load More</LoadMoreButton>
          </ButtonContainer>
        )}
      </ContentWithPaddingXl>
    </Container>
  );
};

