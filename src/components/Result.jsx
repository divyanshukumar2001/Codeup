import React, { useEffect } from "react"
import { Box, styled } from "@mui/material"
import { useContext } from "react"
import { DataContext } from "../context/DataProvider"
import { useState } from "react"

const Container = styled(Box)`
  height: 41vh;
  overflow: hidden;
`

const Result = () => {
  const [src, setSrc] = useState("")
  const { html, css, js } = useContext(DataContext)

  const srcCode = `
        <html>
            <body>${html}</body>
            <style>${css}</style>
            <script>${js}</script>
        </html>
    `

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrc(srcCode)
    }, 2000)

    return () => clearTimeout(timeout)
  }, [html, css, js])

  return (
    <Container>
      <iframe
        srcDoc={src}
        title="Output"
        sandbox="allow-scripts allow-modals"
        width="100%"
        height="100%"
      ></iframe>
    </Container>
  )
}

export default Result
