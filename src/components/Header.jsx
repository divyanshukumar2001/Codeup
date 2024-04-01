import React from "react"
import { AppBar, Toolbar, styled } from "@mui/material"
import logo2 from "../logo2.png"

const Container = styled(AppBar)`
  background: #060606;
  height: 10vh;
  position: static;
  overflow: hidden;
`

const Header = () => {
  return (
    <Container>
      <Toolbar>
        <img
          src={logo2}
          alt="alt"
          style={{ width: 30, position: "relative", top: "-2vh" }}
        />
      </Toolbar>
    </Container>
  )
}

export default Header
