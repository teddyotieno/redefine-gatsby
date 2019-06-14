import styled from "@emotion/styled"
import React from "react"
import theme from "./theme"

const HeaderWrapper = styled.div`
  position: fixed;
  width: 100%;
  height: 72px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(36, 50, 66, 0.15);
  z-index: 1;
`

const Header = styled.header`
  width: 80%;
  margin: 0 auto;
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Button = styled.button`
  border-radius: 100px;
  font-size: 1.3rem;
  padding: 14px 30px;
  text-align: center;
  color: #fff;
  background: ${props =>
    props.primary ? theme.colors.purple : theme.colors.white};
`

const Nav = styled.nav`
  display: flex;
  button {
    margin-left: 15px;
  }
`

export default () => (
  <HeaderWrapper>
    <Header>
      &nbsp;
      <Nav>
        <Button primary>Log In</Button>
        <Button primary>Get Started</Button>
      </Nav>
    </Header>
  </HeaderWrapper>
)
