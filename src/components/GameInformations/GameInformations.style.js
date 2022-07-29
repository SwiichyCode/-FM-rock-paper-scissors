import styled from "styled-components";

export const GameInformationsWrapper = styled.div`
  position: absolute;
  top: 40px;
  right: 40px;
  ul {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    color: #fff;

    .score {
      display: flex;
      flex-direction: column;
      gap: 0.3em;
    }
  }
`;
