import styled from "styled-components";
import GameChoicePattern from "../../../assets/bg-triangle.svg";

export const NormalGameChoiceWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 476px;
  height: 430px;
  background-image: url(${GameChoicePattern});
  background-repeat: no-repeat;
  background-position: center center;
  margin-top: 64px;
`;
