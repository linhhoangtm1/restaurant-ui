import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import { motion } from "framer-motion";
import { SectionHeading } from "components/misc/Headings";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import { IPost } from "types";
import Link from "next/link";

const Row = tw.div`flex flex-col lg:flex-row -mb-10`;
const Heading = tw(SectionHeading)`text-left lg:text-4xl xl:text-5xl`;

const PopularPostsContainer = tw.div`lg:w-2/3`;
const PostsContainer: any = tw.div`mt-12 flex flex-col sm:flex-row sm:justify-between lg:justify-start`;
const Post: any = tw(
  motion.a
)`block sm:max-w-sm cursor-pointer mb-16 last:mb-0 sm:mb-0 sm:odd:mr-8 lg:mr-8 xl:mr-16`;
const Image: any = styled(motion.div)((props: any) => [
  `background-image: url("${props.$imageSrc}");`,
  tw`h-64 bg-cover bg-center rounded`,
]);
const Title: any = tw.h5`line-clamp-2 mt-6 text-xl font-bold transition duration-300 group-hover:text-primary-500`;
const Description = tw.p`line-clamp-3 mt-2 font-medium text-secondary-100 leading-loose text-sm`;
const AuthorInfo = tw.div`mt-6 flex items-center`;
const AuthorImage = tw.img`w-12 h-12 rounded-full`;
const AuthorNameAndProfession = tw.div`ml-4`;
const AuthorName: any = tw.h6`font-semibold text-lg`;
const AuthorProfile = tw.p`text-secondary-100 text-sm`;

const RecentPostsContainer = styled.div`
  ${tw`mt-24 lg:mt-0 lg:w-1/3`}
  ${PostsContainer} {
    ${tw`flex flex-wrap lg:flex-col`}
  }
  ${Post} {
    ${tw`flex justify-between mb-10 max-w-none w-full sm:w-1/2 lg:w-auto sm:odd:pr-12 lg:odd:pr-0 mr-0`}
  }
  ${Title} {
    ${tw`text-base xl:text-lg mt-0 mr-4 lg:max-w-xs`}
  }
  ${AuthorName} {
    ${tw`mt-3 text-sm text-secondary-100 font-normal leading-none`}
  }
  ${Image} {
    ${tw`h-20 w-20 flex-shrink-0`}
  }
`;
const PostTextContainer = tw.div``;

export default ({ popularPosts, recentPosts }: any) => {
  // This setting is for animating the post background image on hover
  const postBackgroundSizeAnimation = {
    rest: {
      backgroundSize: "100%",
    },
    hover: {
      backgroundSize: "110%",
    },
  };

  return (
    <Container>
      <ContentWithPaddingXl>
        <Row>
          <PopularPostsContainer>
            <Heading>Table talks</Heading>
            <PostsContainer>
              {popularPosts?.map((post: IPost, index: number) => (
                <Link key={index} href={`/posts/${post.id}`}>
                  <Post
                    className="group"
                    initial="rest"
                    whileHover="hover"
                    animate="rest"
                  >
                    <Image
                      transition={{ duration: 0.3 }}
                      variants={postBackgroundSizeAnimation}
                      $imageSrc={post.imageSrc}
                    />
                    <Title>{post.title}</Title>
                    <Description>{post.description}</Description>
                    <AuthorInfo>
                      <AuthorImage src={post.author?.imageSrc} />
                      <AuthorNameAndProfession>
                        <AuthorName>{post.author?.name}</AuthorName>
                        <AuthorProfile>{post.author?.profile}</AuthorProfile>
                      </AuthorNameAndProfession>
                    </AuthorInfo>
                  </Post>
                </Link>
              ))}
            </PostsContainer>
          </PopularPostsContainer>
          <RecentPostsContainer>
            <Heading>Recent Posts</Heading>
            <PostsContainer>
              {recentPosts?.map((post: IPost, index: number) => (
                <Link key={index} href={`/posts/${post.id}`}>
                <Post href={post.id} className="group">
                  <PostTextContainer>
                    <Title>{post.title}</Title>
                    <AuthorName>{post.author?.name}</AuthorName>
                  </PostTextContainer>
                  <Image $imageSrc={post.imageSrc} />
                </Post>
                </Link>
              ))}
            </PostsContainer>
          </RecentPostsContainer>
        </Row>
      </ContentWithPaddingXl>
    </Container>
  );
};
