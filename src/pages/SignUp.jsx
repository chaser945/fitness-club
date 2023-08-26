import { useEffect } from "react"
import styled from "styled-components"
import { PageHero, RegForm } from "../components"

const SignUp = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <PageHero heading="sign up" />
      <div className="sign-up-wrapper">
        <RegForm />
      </div>
    </Wrapper>
  )
}
export default SignUp

const Wrapper = styled.section``
