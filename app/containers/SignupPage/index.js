/*
 * LoginPage
 *
 * List all the features
 */
import React from 'react';
import styled from 'styled-components';

import A from 'components/A';
import H2 from 'components/H2';
import StyledInput from 'components/StyledInput';
import Button from 'components/Button';

const ImgSection = styled.div`
  margin-top: 35px;
  margin-bottom: 20px;
`;

const TermsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: rgb(
    19,
    16,
    115
  ); /* For browsers that do not support gradients */
  background-image: linear-gradient(
    rgb(19, 16, 115),
    black
  ); /* Standard syntax (must be last) */
`;

const CenteredSection = styled.div`
  posistion: relative;
  text-align: center;
  flex-grow: 1;
`;

const InputItem = styled.div`
  padding: 0px 0px;
`;

const BottomSection = styled.div`
  display: block;
  float: bottom;
  margin: 0 1em;
`;

export default class SignupPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
    };
  }

  onClick = () => {};

  render() {
    return (
      <StyledDiv>
        <CenteredSection>
          <ImgSection>
            <img src="/logo.png" alt="logo" width="180px" height="50px" />
          </ImgSection>
          <H2 color="white">Sign Up As An Entrepreneur</H2>
        </CenteredSection>
        <CenteredSection>
          <InputItem>
            <StyledInput
              placeholder="Email Address"
              onChange={e => this.setState({ email: e.target.value })}
            />
          </InputItem>
          <InputItem>
            <StyledInput
              placeholder="Username"
              onChange={e => this.setState({ username: e.target.value })}
            />
          </InputItem>
          <InputItem>
            <StyledInput
              placeholder="Password"
              onChange={e => this.setState({ password: e.target.value })}
            />
          </InputItem>
          <A>
            <H2 color="white" fontSize="0.8em">
              Have An Account Already?
              <br />
              Sign In Here
            </H2>
          </A>
        </CenteredSection>
        <BottomSection>
          <TermsSection>
            <img
              src="/verified-icon.png"
              alt="logo"
              width="25px"
              height="25px"
            />
            &nbsp;
            <H2 color="white" fontSize="0.9em">
              Read Our
            </H2>
            <H2 color="rgb(83, 145, 245)" fontSize="0.9em">
              Terms & Condition
            </H2>
          </TermsSection>
          <Button bottom maxWidth onClick={this.onClick}>
            Access My WePitch Profile Now
          </Button>
        </BottomSection>
      </StyledDiv>
    );
  }
}
