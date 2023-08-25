import styled from "styled-components"
import {
  HomeBMI,
  HomeChoose,
  HomeFeatured,
  HomeHero,
  HomeTestimonials,
  HomeTour,
  HomeTrainers,
} from "./HomeCompos"

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
    </Wrapper>
  )
}
export default Home

const Wrapper = styled.div`
  /* background-color: var(--clr-body); */
`
