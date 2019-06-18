import React from "react"
import styled from "@emotion/styled"
import theme from "../components/theme"
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

const PricingPlansContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -20vh;
`

const PricingPlansList = styled.div`
  max-width: 65%;
  margin: 0 auto;
  display: flex;
  border-radius: 28px;
  background: #fff;
  box-shadow: 0 14px 90px rgba(26, 87, 120, 0.26);
`

const PricingPlan = styled.div`
  flex-basis: 50%;
  padding: 100px 50px;
  text-align: center;
  color: ${theme.colors.grey};
  :first-child {
    border-right: 1px solid ${theme.colors.grey};
  }
  h3,
  p {
    margin: 1em 0;
  }
  h3 {
    color: ${theme.colors.purple};
  }
  p {
    font-size: 2rem;
  }
`

const TestimonialContainer = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 40px;
`

const Testimonial = styled.div`
  position: relative;
  padding: 70px 90px 70px 30px;
  flex-basis: 40%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
`

const IndexPage = () => (
  <Layout>
    <HomepageHeroContainer>
      <HomepageHero />
    </HomepageHeroContainer>
    <PricingPlansContainer>
      <PricingPlansList>
        <PricingPlan>
          <h3>Self Guided</h3>
          <p> 90 Day Online Programs ith Live Group Support</p>
        </PricingPlan>
        <PricingPlan>
          <h3>Personalized Coach</h3>
          <p>Live Group Support and All Access to Online Programs!</p>
        </PricingPlan>
      </PricingPlansList>
    </PricingPlansContainer>
  </Layout>
)

export default IndexPage
