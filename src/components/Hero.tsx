import React, { useEffect } from 'react';
import { styled } from 'styled-components/macro';
import { motion, useAnimationControls } from 'framer-motion';

const Hero = () => {
  // const controls = useAnimationControls();

  const words =
    '(PMC) provides armed combat or security services for financial gain.'.split(
      ' '
    );

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.04, delayChildren: 0.02 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeInOut',
        duration: 0.7,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      transition: {
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const greenTextVariants = {
    hidden: { opacity: 0 },
    GreenVisible: {
      opacity: 1,
      transition: { duration: 1, delay: 0.5 },
    },
  };

  // useEffect(() => {
  //   const sequence = () => {
  //     controls.start('GreenVisible'); // Start the container animation on mount
  //     controls.start('textVisible');
  //   };

  //   sequence();
  // }, [controls]);

  return (
    <HeroContainer>
      <HeroImage>
        <motion.h1 variants={container} initial="hidden" animate="visible">
          <GreenText
            variants={greenTextVariants}
            initial="hidden"
            animate="GreenVisible"
          >
            A private military company
          </GreenText>
          {words.map((word, index) => {
            return (
              <motion.span
                variants={child}
                style={{
                  overflow: 'hidden',
                  display: 'inline-block',
                  verticalAlign: 'bottom',
                  transform: 'none',
                }}
              >
                <motion.span
                  variants={child}
                  key={index}
                  // custom={1}
                  // initial="hidden"
                  // animate={controls}
                  style={{
                    marginRight: '6px',
                    display: 'inline-block',
                  }}
                >
                  {word}
                </motion.span>
              </motion.span>
            );
          })}
        </motion.h1>
      </HeroImage>
    </HeroContainer>
  );
};

export default Hero;

const HeroContainer = styled.div`
  position: relative;
  &::before {
    content: '';
    display: block;
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    height: 135px;
    overflow: hidden;
    flex-shrink: 0;
    background: linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0) 100%);
  }
  &::after {
    content: '';
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    height: 575px;
    overflow: hidden;
    transform: rotate(180deg);
    flex-shrink: 0;
    background: linear-gradient(180deg, #141414 0%, rgba(20, 20, 20, 0) 100%);
  }
`;

const HeroImage = styled.div`
  width: 100%;
  height: 778px;
  background-size: cover;
  background-image: url('/assets/hero.png');
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-family: 'Assistant', sans-serif;
    z-index: 1;

    @media screen and (min-width: 320px) {
      font-size: 2em;
      width: 80%;
    }

    @media screen and (min-width: 780px) {
      font-size: 2.8em;
      width: 60%;
    }
    @media screen and (min-width: 1400px) {
      font-size: 3.5em;
      width: 50%;
    }
  }
`;

const GreenText = styled(motion.span)`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1.4px #7ef0b3;
  margin-right: 6px;
`;
