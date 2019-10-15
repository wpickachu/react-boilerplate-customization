import styled from 'styled-components';

const H2 = styled.h2`
  font-family: 'Bernard MT Condensed';
  margin: 5px;
  font-size: ${props => (props.fontSize ? props.fontSize : '1.5em')};
  color: ${props => (props.color ? props.color : null)};
`;

export default H2;
