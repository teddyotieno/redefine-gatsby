import React from "react"
import styled from "@emotion/styled"
import theme from "../components/theme"
import Layout from "../components/layout"
import HeroImage from "../images/family_cooking.jpg"
import RightQuote from "../images/right-quotespng.png"

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
  padding: 120px 0;
`

const Testimonial = styled.div`
  position: relative;
  padding: 70px 90px 70px 30px;
  flex-basis: 40%;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  h4 {
    font-family: "Lato", sans-serif;
    font-weight: 400;
    margin: 1.3em;
  }
  p {
    font-family: "Lato", sans-serif;
    font-weight: 300;
  }
  .right-quote {
    position: absolute;
    top: -18px;
    width: 60px;
    height: auto;
  }
  .avatar {
    background: url("https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=120");
    position: absolute;
    top: 50%;
    margin-top: -60px;
    right: 0;
    margin-right: -60px;
    width: 120px;
    height: 120px;
    border-radius: 50%;
  }
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
    <TestimonialContainer>
      <Testimonial>
        <img className="right-quote" src={RightQuote}></img>
        <h4>
          {" "}
          “I’ve never experienced anything like this... so fast and amazingly so
          easy. Joining the re:Define Challenge changed my life!”
        </h4>
        <p>- Michelle, Seattle Washington</p>
        <div className="avatar"></div>
      </Testimonial>
    </TestimonialContainer>
  </Layout>
)

export default IndexPage
