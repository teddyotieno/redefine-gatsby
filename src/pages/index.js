import React from "react"
import styled from "@emotion/styled"
import Layout from "../components/layout"
import HeroImage from "../images/family_cooking.jpg"

const HomepageHeroContainer = styled.div`
  height: calc(100vh - 72px);
  background: red;
  background: url(${HeroImage});
  background-size: cover;
  background-repeat: no-repeat;
`

const HomepageHero = styled.div`
  height: inherit;
  background: red;
  background: rgba(102, 66, 151, 0.6);
`

const IndexPage = () => (
  <Layout>
    <HomepageHeroContainer>
      <HomepageHero />
    </HomepageHeroContainer>
  </Layout>
)

export default IndexPage
