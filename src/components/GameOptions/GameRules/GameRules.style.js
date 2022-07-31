import styled from "styled-components";
import { Box } from "@mui/system";

export const GameRulesWrapper = styled.div``;

export const Rules = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  background: #fff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  border-radius: 8px;
  padding: 32px;
  box-sizing: border-box;

  .header-rules {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;

    h1 {
      font-weight: 700;
      font-size: 32px;
      line-height: 32px;
      color: #3b4262;
    }

    img {
      cursor: pointer;
    }
  }
`;
