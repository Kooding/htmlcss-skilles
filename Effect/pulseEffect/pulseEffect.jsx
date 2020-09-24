import React from "react";
import styled, { css, keyframes } from "styled-components";
import { rgba } from "polished";
const pulse = css`
  ${(props) =>
    props.size === "large" &&
    keyframes`
      0% {
        transform: scale(0.9);
        box-shadow: 0 0 0 0 ${rgba(props.color, 0.7)};
      }
      70% {
        transform: scale(1);
        box-shadow: 0 0 0 30px ${rgba(props.color, 0.0)};
      }
      100% {
        transform: scale(0.9);
      }`}

  ${(props) =>
    props.size === "medium" &&
    keyframes`
   0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 ${rgba(props.color, 0.7)};
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 10px ${rgba(props.color, 0.0)};
  }
  100% {
    transform: scale(0.9);
  }
  `}

${(props) =>
    props.size === "small" &&
    keyframes`
   0% {
    transform: scale(0.9);
    box-shadow: 0 0 0 0 ${rgba(props.color, 0.7)};
  }
  70% {
    transform: scale(1);
    box-shadow: 0 0 0 5px ${rgba(props.color, 0.0)};
  }
  100% {
    transform: scale(0.9);
  }
  `}
`;

const sizeStyles = css`
  ${(props) =>
    props.size === "large" &&
    css`
      height: 100px;
      width: 100px;
    `}
  ${(props) =>
    props.size === "medium" &&
    css`
      height: 40px;
      width: 40px;
    `}
  ${(props) =>
    props.size === "small" &&
    css`
      height: 20px;
      width: 20px;
    `}
`;

const StyledCircle = styled.div`
  border-radius: 50%;
  background-color: ${(props) => props.color};
  animation: ${pulse} 2s infinite;
  ${sizeStyles};
`;

function Circle({ color, size }) {
  return <StyledCircle color={color} size={size} />;
}

Circle.defaultProps = {
  color: "red",
  size: "medium",
};

export default Circle;
