/*
 * LoginPage
 *
 * List all the features
 */
import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import A from 'components/A';
import H2 from 'components/H2';
import StyledInput from 'components/StyledInput';
import Button from 'components/Button';
import { selectToken } from 'redux/user/selectors';
import { setUserInfo } from 'redux/user/actions';
import { withRouter } from "react-router";

const ImgSection = styled.div`
  margin-top: 35px;
  margin-bottom: 20px;
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
  padding: 0 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: 0;
  flex-glow: 1;
  float: bottom;
`;

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  componentWillReceiveProps(props) {
    if (props.token) {
     props.history.push('/') 
    }
  }

  onClick = () => {
    const {username, password} = this.state;
    this.props.onSubmit(username, password);
  };

  render() {
    return (
      <StyledDiv>
        <CenteredSection>
          <ImgSection>
            <img src="/logo.png" alt="logo" width="180px" height="50px" />
          </ImgSection>
          <H2 color="white">
            Connect With Investors <br />
            Upload Content <br />
            Sell Subscriptions & Content <br />
            Make Tons of Money <br />
          </H2>
          <Button>Sign Up</Button>
          <H2 color="white">OR</H2>
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
          <Button onClick={this.onClick}>Log In</Button>
          <A>
            <H2 color="white" fontSize="1.1em">
              Forgot password?
            </H2>
          </A>
        </CenteredSection>
        <BottomSection>
          <Button bottom>Why us?</Button>
          <img
            src="./instagram-icon.png"
            alt="logo"
            width="25px"
            height="25px"
          />
          <img
            src="./snapchat-icon.png"
            alt="logo"
            width="25px"
            height="25px"
          />
          <img src="./tumblr-icon.png" alt="logo" width="25px" height="25px" />
          <img src="./youtube-icon.png" alt="logo" width="25px" height="25px" />
          <Button bottom>Log In</Button>
        </BottomSection>
      </StyledDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  token: selectToken,
});

export function mapDispatchToProps(dispatch) {
  return {
    onSubmit: (username, password) =>
      dispatch(setUserInfo({ username, password })),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withRouter(compose(withConnect)(LoginPage));
