import styled from 'styled-components';

const StyledInput = styled.input`
  width: 240px;
  padding: 0.5em;
  margin: 0.5em;
  color: white;
  background: rgba(19, 16, 115, 0);
  border-width: 0 0 1px;
  border-color: white;
  outline: none;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    font-family: 'Bernard MT Condensed';
    font-size: 20px;
    color: white;
    opacity: 0.7; /* Firefox */
  }

  :-ms-input-placeholder {
    color: white;
  }

  ::-ms-input-placeholder {
    color: white;
  }
`;

export default StyledInput;
