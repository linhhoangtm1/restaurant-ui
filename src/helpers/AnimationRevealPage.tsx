import React, { Key } from 'react'
import tw from "twin.macro";
import { motion } from "framer-motion";
import { useInView } from "helpers";
import { IAnimatedSlideInComponent, IAnimationReveal } from "types/helpers";

const StyledDiv = tw.div`font-display min-h-screen text-secondary-500 p-8 overflow-hidden`;

const AnimatedSlideInComponent = ({ direction = "left", offset = 30, children }: IAnimatedSlideInComponent) => {
  const [ref, inView] = useInView({ margin: `-${offset}px 0px 0px 0px`});

  const x = { target: "0%", initial: '150%' };

  if (direction === "left") x.initial = "-150%";

  return (
    <div ref={ref}>
      <motion.section
        initial={{ x: x.initial }}
        animate={{ 
          x: inView && x.target,
          transitionEnd:{
            x: inView && 0
          }
        }}
        transition={{ type: "spring", damping: 19 }}
      >
        {children}
      </motion.section>
    </div>
  );
}

const AnimationReveal = (props: IAnimationReveal) => {
  let { disabled, children } = props;
  if (disabled) {
    return children;
  }

  if (!Array.isArray(children)) children = [children];

  const directions = ["left", "right"];
  return children ? children.map((child: any, i: number) => {
    return (
      <AnimatedSlideInComponent key={i} direction={directions[i % directions.length]}>
        {child}
      </AnimatedSlideInComponent>
    );
  }) : <div {...props}></div>;
}

export default (props: IAnimationReveal) => (
  <StyledDiv className="App">
    <AnimationReveal {...props} />
  </StyledDiv>
);
