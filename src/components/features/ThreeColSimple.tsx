import React from "react";
import tw from "twin.macro";
import styled from "styled-components";
import {
  SectionHeading,
  Subheading as SubheadingBase,
} from "components/misc/Headings";
import { SectionDescription } from "components/misc/Typography";
import { Container, ContentWithPaddingXl } from "components/misc/Layouts";
import ArrowRightIcon from "../../../public/images/arrow-right-icon.svg";
import SupportIconImage from "../../../public/images/support-icon.svg";
import ShieldIconImage from "../../../public/images/shield-icon.svg";
import CustomizeIconImage from "../../../public/images/customize-icon.svg";
import SvgDecoratorBlob3 from "../../../public/images/svg-decorator-blob-3.svg";
import { IThreeColSimple } from "types";
import Link from "next/link";

const Heading = tw(SectionHeading)``;
const Subheading = tw(SubheadingBase)`text-center mb-3`;
const Description = tw(SectionDescription)`text-center mx-auto`;
const ThreeColumnContainer = styled.div`
  ${tw`mt-10 flex flex-col items-center lg:items-stretch lg:flex-row flex-wrap lg:justify-center max-w-screen-lg mx-auto`}
`;
const Column = styled.div`
  ${tw`lg:w-1/3 max-w-xs`}
`;

const Card = styled.div`
  ${tw`flex flex-col items-center text-center h-full mx-4 px-4 py-8 rounded transition-transform duration-300 hover:cursor-pointer transform hover:scale-105 `}
  .imageContainer {
    ${tw`text-center rounded-full p-4 bg-gray-100`}
    img {
      ${tw`w-8 h-8`}
    }
  }

  .title {
    ${tw`mt-4 font-bold text-xl leading-none`}
  }

  .description {
    ${tw`mt-4 text-sm font-medium text-secondary-300`}
  }

  .link {
    ${tw`mt-auto inline-flex items-center pt-5 text-sm font-bold text-primary-300 leading-none hocus:text-primary-900 transition duration-300`}
    .icon {
      ${tw`ml-2 w-4`}
    }
  }
`;
const DecoratorBlob = styled(SvgDecoratorBlob3)`
  ${tw`pointer-events-none absolute right-0 bottom-0 w-64 opacity-25 transform translate-x-32 translate-y-40`}
`;

const ImageContainer: any = styled.span`
  ${(props: any) => props.css}
`;

const ThreeColSimple = ({
  cards = [
    {
      imageSrc: ShieldIconImage,
      title: "Secure",
      description:
        "We strictly only deal with vendors that provide top notch security.",
      url: "https://timerse.com",
    },
    {
      imageSrc: SupportIconImage,
      title: "24/7 Support",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://google.com",
    },
    {
      imageSrc: CustomizeIconImage,
      title: "Customizable",
      description: "Lorem ipsum donor amet siti ceali placeholder text",
      url: "https://reddit.com",
    },
  ],
  linkText = "Learn More",
  heading = "",
  subheading = "",
  description = "",
  imageContainerCss = null,
}: IThreeColSimple) => {
  return (
    <Container>
      <ContentWithPaddingXl>
        {subheading && <Subheading>{subheading}</Subheading>}
        {heading && <Heading>{heading}</Heading>}
        {description && <Description>{description}</Description>}
        <ThreeColumnContainer>
          {cards.map((card: any, i) => (
            <Column key={i}>
              <Link href={card.url}>
                <Card>
                  <ImageContainer
                    className="imageContainer"
                    css={imageContainerCss}
                  >
                    <img src={card.imageSrc} alt="" />
                  </ImageContainer>
                  <span className="title">{card.title}</span>
                  <p className="description">{card.description}</p>
                  {linkText && (
                    <span className="link">
                      <span>{linkText}</span>
                      <ArrowRightIcon className="icon" />
                    </span>
                  )}
                </Card>
              </Link>
            </Column>
          ))}
        </ThreeColumnContainer>
      </ContentWithPaddingXl>
      <DecoratorBlob />
    </Container>
  );
};

export default ThreeColSimple;
