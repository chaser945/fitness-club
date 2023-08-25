import styled from "styled-components"
import {
  HomeBMI,
  HomeChoose,
  HomeFeatured,
  HomeHero,
  HomeNews,
  HomeTestimonials,
  HomeTour,
  HomeTrainers,
} from "./HomeCompos"
import Pricing from "./Pricing"

const Home = () => {
  return (
    <Wrapper>
      <HomeHero />
      <HomeTour />
      <HomeFeatured />
      <HomeBMI />
      <HomeTrainers />
      <HomeTestimonials />
      <HomeChoose />
      <Pricing hideHero={true} />
      <HomeNews />
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.div`
  /* background-color: var(--clr-body); */
`
