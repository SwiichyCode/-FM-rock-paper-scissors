import styled from "styled-components";
export const HeaderScoreWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  max-width: 150px;
  height: 114px;
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  border-radius: 8px;
  margin-right: 24px;

  h2 {
    font-size: 1.4em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    color: #2a45c2;
  }

  span {
    font-size: 4em;
    color: #565468;
  }
`;
