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
    <Global
      styles={css`
        @import url("https://fonts.googleapis.com/css?family=Lato:300,400|Rubik:500,700&display=swap");
        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          font-family: "Rubik", sans-serif;
        }
        h3 {
          font-size: 3.5rem;
        }
        h4 {
          font-size: 2rem;
        }
        a,
        button,
        p {
          font-family: "Lato", sans-serif;
        }
      `}
    ></Global>
    <Header />
    <main>{children}</main>
    <footer></footer>
  </>
)
