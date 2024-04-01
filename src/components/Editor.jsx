import React, { useState } from "react"
import { Box, styled } from "@mui/material"
import { Controlled as ControlledEditor } from "react-codemirror2"
import "codemirror/lib/codemirror.css"
import "codemirror/theme/material.css"
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import "../App.css"
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen"

const Container = styled(Box)`
  flex-grow: 1;
  flex-basis: 0;
  display: flex;
  flex-direction: column;
  padding: 0px 5px 5px;
`

const Heading = styled(Box)`
  background: #1d1e22;
  padding: 9px 12px;
  display: flex;
  font-size: 10;
`

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  background: #060606;
  color: #aaaebc;
  font-weight: 700;
`

const Editor = ({ heading, icon, color, value, onChange }) => {
  const handleChange = (editor, data, value) => {
    onChange(value)
  }

  const [open, setOpen] = useState(true)
  return (
    <Container style={open ? null : { flexGrow: 0 }}>
      <Header>
        <Heading style={{ fontSize: 10 }}>
          <Box
            component="span"
            style={{
              background: color,
              borderRadius: 2,
              marginRight: 5,
              height: 12,
              width: 12,
              display: "flex",
              placeContent: "center",
              color: "#000",
              paddingBottom: 2,
            }}
          >
            {icon}
          </Box>
          {heading}
        </Heading>
        <CloseFullscreenIcon
          style={{ fontSize: "small", alignSelf: "center" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Header>
      <ControlledEditor
        value={value}
        onBeforeChange={handleChange}
        className="controlled-editor"
        options={{
          theme: "material",
          lineNumbers: true,
        }}
      />
    </Container>
  )
}

export default Editor
