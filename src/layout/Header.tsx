import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import tw from "twin.macro";
import styled from "styled-components";
import { ReactModalAdapter, useAnimatedNavToggler } from "helpers";
import MenuIcon from "feather-icons/dist/icons/menu.svg";
import CloseIcon from "feather-icons/dist/icons/x.svg";
import { IHeader, IRecipe } from "types";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";
import HeartIcon from "feather-icons/dist/icons/heart.svg";
import { useSelector } from "react-redux";
import { getFavoriteList } from "store/slice/recipe.slice";
import CardRecipe from "components/cards/CardRecipe";

const Header = tw.header`
  flex justify-between items-center
  max-w-screen-xl mx-auto
  my-3
`;

/* The below code is for generating dynamic break points for navbar.
 * Using this you can specify if you want to switch
 * to the toggleable mobile navbar at "sm", "md" or "lg" or "xl" above using the collapseBreakpointClass prop
 * Its written like this because we are using macros and we can not insert dynamic variables in macros
 */

const collapseBreakPointCssMap = {
  sm: {
    mobileNavLinks: tw`sm:hidden`,
    desktopNavLinks: tw`sm:flex`,
    mobileNavLinksContainer: tw`sm:hidden`,
  },
  md: {
    mobileNavLinks: tw`md:hidden`,
    desktopNavLinks: tw`md:flex`,
    mobileNavLinksContainer: tw`md:hidden`,
  },
  lg: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
  xl: {
    mobileNavLinks: tw`lg:hidden`,
    desktopNavLinks: tw`lg:flex`,
    mobileNavLinksContainer: tw`lg:hidden`,
  },
};

export const NavLinks: any = tw.div`inline-block`;
export const NavLink = styled.a`
  ${tw`cursor-pointer
  text-lg my-2 lg:text-sm lg:mx-6 lg:my-0
  font-semibold tracking-wide transition duration-300
  pb-1 border-b-2 border-transparent hover:border-primary-500 hocus:text-primary-500`};
  &.active {
    ${tw`border-primary-500 text-primary-500`}
  }
`;
export const PrimaryLink: any = tw(NavLink)`
  lg:mx-0
  px-8 py-3 rounded bg-primary-500 text-gray-100
  hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline
  border-b-0
`;

export const LogoLink = styled(NavLink)`
  ${tw`flex items-center font-black border-b-0 text-2xl! ml-0!`};
  img {
    ${tw`w-10 mr-3`}
  }
`;

export const MobileNavLinksContainer: any = tw.nav`flex flex-1 items-center justify-between`;
export const NavToggle = tw.button`
  lg:hidden z-20 focus:outline-none hocus:text-primary-500 transition duration-300
`;
export const MobileNavLinks = motion(styled.div`
  ${tw`lg:hidden z-10 fixed top-0 inset-x-0 mx-4 my-6 p-8 border text-center rounded-lg text-gray-900 bg-white`}
  ${NavLinks} {
    ${tw`flex flex-col items-center`}
  }
`);

export const DesktopNavLinks: any = tw.nav`
  hidden lg:flex flex-1 justify-between items-center
`;

const Input: any = tw.input`hover:border-primary-100 mr-3 border-2 border-solid p-2 rounded border-gray-300`;

const tabs = [
  {
    pathname: "/about-us",
    name: "About",
  },
  {
    pathname: "/recipes",
    name: "Recipe",
  },
  {
    pathname: "/posts",
    name: "Blog",
  },
];

export default ({
  logoLink,
  links,
  className,
  collapseBreakpointClass = "lg",
}: IHeader) => {
  const router = useRouter();
  const [showModal, setShowModal] = useState<boolean>(false)
  const inputRef = useRef<HTMLInputElement>(null);
  const activeTab = router.pathname;
  const favoriteList = useSelector(getFavoriteList)

  const showFavoriteList = () => {
    setShowModal(true)
  }

  const defaultLinks = [
    <NavLinks key={1}>
      {tabs.map((el) => (
        <Link key={el.pathname} href={el.pathname}>
          <NavLink
            className={classnames({ active: el.pathname === activeTab })}
          >
            {el.name}
          </NavLink>
        </Link>
      ))}
      <NavLink onClick={showFavoriteList}>
        <HeartIcon tw="inline" />
      </NavLink>
    </NavLinks>,
  ];
  const { showNavLinks, animation, toggleNavbar } = useAnimatedNavToggler();
  const collapseBreakpointCss =
    collapseBreakPointCssMap[
      collapseBreakpointClass as keyof typeof collapseBreakPointCssMap
    ];

  const defaultLogoLink = (
    <Link href="/">
      <LogoLink>
        <img src={"/images/logo.jpg"} alt="logo" />
        HomeKitchen
      </LogoLink>
    </Link>
  );

  logoLink = logoLink || defaultLogoLink;
  links = links || defaultLinks;

  const searchRecipe = async (e: KeyboardEvent) => {
    if (e.key === "Enter") {
      if (inputRef.current?.value?.trim() === "") {
        router.push({
          pathname: "/recipes",
        });
      } else
        router.push({
          pathname: "/search",
          query: {
            s: inputRef.current?.value,
          },
        });
    }
  };

  const toggleModal = () => {
    setShowModal(prevState => !prevState)
  }

  useEffect(() => {
    inputRef.current && (inputRef.current.value = router.query?.s as string || "");
  }, [inputRef.current]);

  return (
    <Header className={className || "header-light"}>
      <DesktopNavLinks css={collapseBreakpointCss.desktopNavLinks}>
        {logoLink}
        <div>
          <Input
            ref={inputRef}
            onKeyUp={searchRecipe}
            id="name-input"
            type="text"
            name="name"
            placeholder="Search recipe"
          />
          {links}
        </div>
      </DesktopNavLinks>

      <MobileNavLinksContainer
        css={collapseBreakpointCss.mobileNavLinksContainer}
      >
        {logoLink}
        <MobileNavLinks
          initial={{ x: "150%", display: "none" }}
          animate={animation}
          css={collapseBreakpointCss.mobileNavLinks}
        >
          {links}
        </MobileNavLinks>
        <NavToggle
          onClick={toggleNavbar}
          className={showNavLinks ? "open" : "closed"}
        >
          {showNavLinks ? (
            <CloseIcon tw="w-6 h-6" />
          ) : (
            <MenuIcon tw="w-6 h-6" />
          )}
        </NavToggle>
      </MobileNavLinksContainer>

      <ReactModalAdapter
          title="Favorite list"
          show={showModal}
          onClose={toggleModal}
        >
            {favoriteList.map((el: IRecipe) => 
              <CardRecipe itemsPerRow={3} key={el.idMeal} data={el}/>
            )}
        </ReactModalAdapter>
    </Header>
  );
};
