import styled from "styled-components";
import { Box } from "@mui/system";

export const Params = styled(Box)`
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
`;

export const GameParamsWrapper = styled.div``;
