import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import FacebookIcon from "../../../public/images/facebook-icon.svg";
import TwitterIcon from "../../../public/images/twitter-icon.svg";
import YoutubeIcon from "../../../public/images/youtube-icon.svg";
import { default as NextLink } from 'next/link'

const Container = tw.div`relative bg-gray-200 -mx-8 -mb-8 px-8`;
const FiveColumns = tw.div`max-w-screen-xl mx-auto py-16 lg:py-20 flex flex-wrap justify-between`;

const Column = tw.div`md:w-1/5`;
const WideColumn = tw(
  Column
)`text-center md:text-left w-full md:w-2/5 mb-10 md:mb-0`;

const ColumnHeading = tw.h5`font-bold`;

const LinkList = tw.ul`mt-4 text-sm font-medium`;
const LinkListItem = tw.li`mt-3`;
const Link = tw.a`cursor-pointer border-b-2 border-transparent hocus:text-primary-500 hocus:border-primary-500 pb-1 transition duration-300`;

const LogoContainer = tw.div`flex items-center justify-center md:justify-start`;
const LogoImg = tw.img`w-12`;
const LogoText = tw.h5`ml-2 text-xl font-black text-primary-500`;

const CompanyDescription = tw.p`mt-4 max-w-xs font-medium text-sm mx-auto md:mx-0 md:mr-4 `;

const SocialLinksContainer = tw.div`mt-4 `;
const SocialLink = styled.a`
  ${tw`cursor-pointer inline-block p-2 rounded-full bg-gray-700 text-gray-100 hover:bg-gray-900 transition duration-300 mr-4`}
  svg {
    ${tw`w-4 h-4`}
  }
`;

export default () => {
  return (
    <Container>
      <FiveColumns>
        <WideColumn>
          <LogoContainer>
            <LogoImg src={"/images/logo.jpg"} />
            <LogoText>HomeKitchen Inc.</LogoText>
          </LogoContainer>
          <CompanyDescription>HomeKitchen description</CompanyDescription>
          <SocialLinksContainer>
            <SocialLink target={'_blank'} href="https://facebook.com">
              <FacebookIcon />
            </SocialLink>
            <SocialLink target={'_blank'} href="https://twitter.com">
              <TwitterIcon />
            </SocialLink>
            <SocialLink target={'_blank'} href="https://youtube.com">
              <YoutubeIcon />
            </SocialLink>
          </SocialLinksContainer>
        </WideColumn>
        <Column>
          <ColumnHeading>Quick Links</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <NextLink href=""><Link>Blog</Link></NextLink>
            </LinkListItem>
            <LinkListItem>
              <NextLink href=""><Link>FAQs</Link></NextLink>
            </LinkListItem>
            <LinkListItem>
              <NextLink href=""><Link>Support</Link></NextLink>
            </LinkListItem>
            <LinkListItem>
              <NextLink href=""><Link>About Us</Link></NextLink>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Product</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <NextLink href=""><Link>Personal</Link></NextLink>
            </LinkListItem>
            <LinkListItem>
              <NextLink href=""><Link>Business</Link></NextLink>
            </LinkListItem>
            <LinkListItem>
              <NextLink href=""><Link>Team</Link></NextLink>
            </LinkListItem>
          </LinkList>
        </Column>
        <Column>
          <ColumnHeading>Legal</ColumnHeading>
          <LinkList>
            <LinkListItem>
              <NextLink href=""><Link>GDPR</Link></NextLink>
            </LinkListItem>
            <LinkListItem>
              <NextLink href=""><Link>Privacy Policy</Link></NextLink>
            </LinkListItem>
            <LinkListItem>
              <NextLink href=""><Link>Terms of Service</Link></NextLink>
            </LinkListItem>
            <LinkListItem>
              <NextLink href=""><Link>Disclaimer</Link></NextLink>
            </LinkListItem>
          </LinkList>
        </Column>
      </FiveColumns>
    </Container>
  );
};
