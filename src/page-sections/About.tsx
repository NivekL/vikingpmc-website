import React, { useRef } from 'react';
import { styled } from 'styled-components/macro';
import { useScroll, motion, useTransform, useSpring } from 'framer-motion';

const About = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'start end'],
  });
  const springX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  // Parallax effect for the text (moves up)
  const imageY = useTransform(springX, [0, 1], ['0%', '-8%']);
  const textY = useTransform(springX, [0, 1], ['-60%', '0%']);

  /* BLOCK QUOTE ANIMATION VARIANTS */

  const words =
    'Viking operators are prepared to fight in any condition at any time'.split(
      ' '
    );

  const container = {
    hidden: { opacity: 0, x: '-80%' },
    visible: (i = 1) => ({
      opacity: 1,
      x: 0,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.02 * i,
        ease: 'easeOut',
        duration: 1,
        damping: 20,
        stiffness: 50,
      },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.8,
        damping: 20,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      x: '-80%',
      transition: {
        damping: 20,
        stiffness: 100,
      },
    },
  };

  return (
    <Wrapper>
      <SectionTitleContainer>
        <TitleLine />
        <SectionTitle>About us</SectionTitle>
      </SectionTitleContainer>

      <div ref={ref}>
        <ImageTextWrapper>
          <motion.img
            style={{ y: imageY }}
            src="/assets/arma-image.png"
            alt="A group of soldiers in a field"
          />
          <TextContainer className="mobileStyle" style={{ y: textY }}>
            <p>
              In 2014 a group of individuals decided that they were tired of the
              poor command and structure of the official armed forces groups in
              the ArmA community. Today VIKING PMC is one of the most well-known
              units out there.
            </p>
          </TextContainer>
        </ImageTextWrapper>
      </div>

      <MapSection>
        <InnerContainer>
          <BlockQuote>
            <motion.h2
              whileInView="visible"
              viewport={{ once: true }}
              variants={container}
              initial="hidden"
            >
              {words.map((word, index) => {
                return (
                  <motion.span
                    variants={child}
                    key={index}
                    style={{
                      marginRight: '6px',
                      display: 'inline-block',
                    }}
                  >
                    {word}
                  </motion.span>
                );
              })}
            </motion.h2>
          </BlockQuote>

          <p>
            The unit specializes in many things regarding armed engagements.
            Thanks to the international and diverse background of its members,
            there is a contractor for every job. Operations that are conducted
            in the unit are of a global scale.
          </p>
        </InnerContainer>
      </MapSection>
    </Wrapper>
  );
};

export default About;

const Wrapper = styled.div`
  margin-top: 300px;

  @media screen and (min-width: 320px) {
    margin-top: 70px;
  }
`;

const SectionTitleContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 70px;
  max-width: 80%;
  margin: 0 auto;

  @media screen and (min-width: 320px) {
    max-width: 90%;
  }
`;

const TitleLine = styled.hr`
  width: 102px;
  height: 1px;
  margin: 0 43px 0 0;
  background: #7ef0b3;

  @media screen and (min-width: 320px) {
    width: 60px;
    margin: 0 23px 0 0;
  }

  @media screen and (min-width: 768px) {
    width: 80px;
    margin: 0 33px 0 0;
  }
`;

const SectionTitle = styled.h2`
  color: #fff;
  font-family: 'Assistant', sans-serif;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;
  text-transform: uppercase;

  @media screen and (min-width: 320px) {
    font-size: 3em;
  }

  @media screen and (min-width: 768px) {
    font-size: 3.5em;
  }
`;

const ImageTextWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 80%;

  img {
    max-width: 100%;
  }

  @media screen and (min-width: 320px) {
    flex-direction: column;
  }

  @media screen and (min-width: 1024px) {
    max-width: 90%;
  }
`;

const TextContainer = styled(motion.div)`
  max-width: 32rem;

  @media screen and (min-width: 1200px) {
    transform: translateX(50%);
  }

  p {
    font-size: 40px;
    line-height: 60px;

    @media screen and (min-width: 320px) {
      font-size: 1.2em;
      line-height: 32px;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.5em;
      line-height: 32px;
    }
  }

  @media screen and (min-width: 320px) {
    transform: none;
  }
`;

const MapSection = styled.div`
  background-image: url('/assets/gradientmap.png');
  width: 100%;
  height: 785px;
  background-size: cover;
  background-repeat: no-repeat;
  margin-top: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

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

  @media screen and (min-width: 320px) {
    margin-top: 100px;
  }
`;

const InnerContainer = styled.div`
  width: 80%;
  margin: 0 auto;
  z-index: 999;

  @media screen and (min-width: 1200px) {
    width: 70%;
  }

  p {
    color: #fff;
    font-family: Roboto;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: 32px;
    width: 75%;

    @media screen and (min-width: 320px) {
      font-size: 1.3em;
      line-height: 32px;
      width: 95%;
    }

    @media screen and (min-width: 768px) {
      font-size: 1.5em;
      line-height: 32px;
      width: 95%;
    }
  }
`;

const BlockQuote = styled.div`
  width: 55%;
  border-left: 1px solid #7ef0b3;
  overflow: hidden;
  h2 {
    color: #fff;
    font-family: Assistant;
    font-size: 98px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-left: 40px;

    @media screen and (min-width: 320px) {
      font-size: 1.8em;
      padding-left: 25px;
    }

    @media screen and (min-width: 768px) {
      font-size: 2.5em;
      padding-left: 25px;
    }

    @media screen and (min-width: 1024px) {
      font-size: 3em;
      padding-left: 25px;
    }

    @media screen and (min-width: 1200px) {
      font-size: 3.5em;
      padding-left: 25px;
    }
  }

  @media screen and (min-width: 320px) {
    width: 100%;
    margin-bottom: 60px;
  }

  @media screen and (min-width: 1024px) {
    width: 70%;
    margin-bottom: 60px;
  }
  @media screen and (min-width: 1200px) {
    width: 60%;
    margin-bottom: 60px;
  }
`;

const GreenText = styled(motion.span)`
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1.4px #7ef0b3;
`;
