import styled from 'styled-components';

import { ButtonStyle, BottomButtonStyle } from './buttonStyles';

export const StyledButton = styled.button`
  ${ButtonStyle}
  width: 7em;
`;

export const BottomStyledButton = styled.button`
  ${BottomButtonStyle}
  width: ${props => (props.width ? props.width : null)};
`;
