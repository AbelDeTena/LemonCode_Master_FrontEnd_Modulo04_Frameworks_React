import { css } from "@emotion/css";

export const CenterLayout = css`
  background: linear-gradient(-60deg, #04000a, #8944b0, #43004a, #000000);
  background-size: 400% 400%;
  animation: gradient 15s ease-out infinite;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
