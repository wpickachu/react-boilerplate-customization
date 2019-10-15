import { css } from 'styled-components';

export const ButtonStyle = css`
  box-sizing: border-box;
  padding: 0 1em;
  margin: 0.5em 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  outline: 0;
  cursor: pointer;
  font-family: 'Arvo';
  font-weight: bold;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 20% / 50%;
  height: 2.3em;
  color: white;
  background-image: linear-gradient(
    rgb(43, 61, 161),
    rgb(12, 8, 71)
  ); /* Standard syntax (must be last) */
`;

export const BottomButtonStyle = css`
  box-sizing: border-box;
  padding: 0 1em;
  margin: 0.5em 0;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Arvo';
  font-weight: bold;
  font-size: 16px;
  border: 1px solid black;
  border-radius: 7px;
  height: 2.5em;
  color: white;
  background-image: linear-gradient(
    rgb(43, 61, 161),
    rgb(12, 8, 71)
  ); /* Standard syntax (must be last) */
`;
