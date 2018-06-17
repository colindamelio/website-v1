import { keyframes } from 'styled-components';

export const fadeIn = keyframes`
  0% {
    filter: blur(4px);
    opacity: 0;
  }
  100% {
    filter: blur(0);
    opacity: 1;
  }
`;
