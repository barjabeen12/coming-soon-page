import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/hero";

export default function Header() {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    // Add event listener to track window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = windowWidth <= 768;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <h1 className="extraBold font60">
            We Build Digital Experiences That Inspire.
          </h1>
          <HeaderP className="font13 semiBold">
            At FluxFrames, we bring ideas to life through cutting-edge web
            development, AI-driven solutions, and impactful video editing. Our
            mission is to deliver innovative, client-focused results that help
            your business stand out in today's competitive landscape.
          </HeaderP>
          <BtnWrapper>
            <FullButton title="Get Started Today" />
          </BtnWrapper>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <div className="lottie-container">
            <Lottie
              options={defaultOptions}
              height={isMobile ? 290 : 457} // Adjust height for mobile
              width={isMobile ? 380 : 626} // Adjust width for mobile
              style={{ zIndex: 9 }}
            />
          </div>

          {/* <Img className="radius8" src={HeaderImage} alt="office" style={{zIndex: 9}} /> */}
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>Creativity is intelligence having fun.</em>
              </p>
              <p
                className="font13 orangeColor textRight"
                style={{ marginTop: "10px" }}
              >
                — Albert Einstein
              </p>
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  margin-top: -240px;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
    margin-top: 10px;
  }
`;

const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: -30px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
    bottom: -10px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -200px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;
