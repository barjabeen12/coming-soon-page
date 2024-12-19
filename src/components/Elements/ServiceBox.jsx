import React from "react";
import styled from "styled-components";
// Assets
import RollerIcon from "../../assets/svg/Services/RollerIcon";
import MonitorIcon from "../../assets/svg/Services/MonitorIcon";
import BrowserIcon from "../../assets/svg/Services/BrowserIcon";
import PrinterIcon from "../../assets/svg/Services/PrinterIcon";
import Lottie from "react-lottie";
import animationData from "../../assets/lottie/video";
import webAimationData from "../../assets/lottie/webdev";
import AIAimationData from "../../assets/lottie/AI";

export default function ServiceBox({ icon, title, subtitle }) {
  let getIcon;
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const webDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: webAimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const AIDefaultOptions = {
    loop: true,
    autoplay: true,
    animationData: AIAimationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  switch (icon) {
    case "roller":
      getIcon = (
        <Lottie
          options={defaultOptions}
          height={137} // Adjust height for mobile
          width={145} // Adjust width for mobile
          style={{ marginLeft: "-30px" }}
        />
      );
      break;
    case "monitor":
      getIcon = (
        <Lottie
          options={webDefaultOptions}
          height={137} // Adjust height for mobile
          width={140} // Adjust width for mobile
          style={{ marginLeft: "-30px" }}
        />
      );
      break;
    case "browser":
      getIcon = (
        <Lottie
          options={AIDefaultOptions}
          height={137} // Adjust height for mobile
          width={140} // Adjust width for mobile
          style={{ marginLeft: "-30px" }}
        />
      );
      break;
    case "printer":
      getIcon = <PrinterIcon />;
      break;
    default:
      getIcon = <RollerIcon />;
      break;
  }

  return (
    <Wrapper className="flex flexColumn">
      <IconStyle>{getIcon}</IconStyle>
      <TitleStyle className="font20 extraBold">{title}</TitleStyle>
      <SubtitleStyle className="font13">{subtitle}</SubtitleStyle>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;
const IconStyle = styled.div`
  margin-left:5%;
  @media (max-width: 860px) {
    margin: 0 auto;
  }
`;
const TitleStyle = styled.h2`
  width: 100%;
  max-width: 330px;
  margin: 0 auto;
  padding: 40px 0;
  @media (max-width: 860px) {
    padding: 20px 0;
  }
`;
const SubtitleStyle = styled.p`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  margin-top:-20px;
`;
