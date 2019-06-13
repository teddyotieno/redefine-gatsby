import styled from "@emotion/styled"
import React from "react"
import { Link } from "gatsby"

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 72px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(36, 50, 66, 0.15);
  z-index: 1;
`

const Header = styled.header`
  width: 75%;
  margin: 0 auto;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Nav = styled.nav`
  display: flex;
`

export default () => (
  <HeaderWrapper>
    <Header>
      &nbsp;
      <Nav>
        <Link to="/page-2">Log In</Link>
        <Link to="/signup">Get Started</Link>
      </Nav>
    </Header>
  </HeaderWrapper>
)
