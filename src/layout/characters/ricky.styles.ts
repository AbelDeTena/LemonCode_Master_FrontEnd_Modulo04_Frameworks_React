import { css } from "@emotion/css";

export const RickyStyles = css`
  * {
    margin: 0;
    padding: 0;
  }

  .main {
    width: 100%;
    height: 100vh;
    overflow: hidden;
  }

  video {
    position: fixed;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    color: white;
  }

  .character-container {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    gap: 0.5em;
    width: 140px;
    text-align: center;
    border-radius: 80px 80px 10px 10px;
    background-color: rgba(0, 5, 0, 0.7);
    transition: background-color 0.5s;
  }
  .character-container:hover {
    background-color: rgba(0, 50, 0, 0.7);
  }

  .character-container span {
    font-size: larger;
  }

  .image-container {
    display: inline-block;
    position: relative;
  }

  .rotate-on-hover {
    width: 100px;
    height: auto;
  }

  .rotate-on-hover:hover {
    animation: rotateInfinitely 2s linear infinite;
  }

  .Male{
    backgroundColor: "rgba(200, 20, 20, 0.95)",
  }

  @keyframes rotateInfinitely {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
