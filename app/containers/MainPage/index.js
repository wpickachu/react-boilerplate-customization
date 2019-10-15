import React from 'react';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';
import { withRouter } from "react-router";
import H2 from 'components/H2';
import { selectUsername, selectToken } from 'redux/user/selectors';

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

class MainPage extends React.Component {
  render() {
    const { username, token } = this.props;
    return (
      <StyledDiv>
        <H2 color="white">{username}</H2>
        <H2 color="white">{token}</H2>
      </StyledDiv>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  username: selectUsername,
  token: selectToken,
});

const withConnect = connect(
  mapStateToProps,
);

export default withRouter(compose(withConnect)(MainPage));
