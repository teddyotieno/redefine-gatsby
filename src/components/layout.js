import React from "react"
import { Global, css } from "@emotion/core"
import Header from "./header"

export default ({ children }) => (
  <>
    <Global
      styles={css`
        *,
        :after,
        :before {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
          font-size: inherit;
        }
        :root {
          font-size: 62.5%;
          body {
            font-family: sans-serif;
            font-size: 1.6rem;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
          }
        }
        nav ul,
        nav ol {
          list-style: none;
        }
        button {
          outline: none;
          border: none;
        }
      `}
    ></Global>
    <Header />
    <main>{children}</main>
    <footer></footer>
  </>
)
