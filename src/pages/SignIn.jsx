import { useEffect } from "react"
import styled from "styled-components"
import { PageHero, RegForm } from "../components"

const SignIn = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <PageHero heading="sign in" />
      <div className="sign-in-wrapper">
        <RegForm signInMode={true} />
      </div>
    </Wrapper>
  )
}
export default SignIn

const Wrapper = styled.section``
