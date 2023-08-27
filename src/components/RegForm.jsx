import { Link } from "react-router-dom"
import styled from "styled-components"

const RegForm = ({ signInMode }) => {
  return (
    <Wrapper>
      <div className="reg-form-wrapper">
        <form className="reg-form">
          {/* email */}
          <div className="input-wrapper">
            <label htmlFor="email" className="label">
              email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className="input"
              placeholder="fitnessclub@gmail.com"
            />
          </div>
          {/* password */}
          <div className="input-wrapper">
            <label htmlFor="password" className="label">
              password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              className="input"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="sign-up-btn">
            {signInMode ? "sign in" : "sign up"}
          </button>
        </form>
        {signInMode ? (
          <p className="text">
            New to Fitness Club ?{" "}
            <Link to="/sign-up" className="red-text">
              sign up
            </Link>
          </p>
        ) : (
          <p className="text">
            Already have an account ?{" "}
            <Link to="/login" className="red-text">
              sign in
            </Link>
          </p>
        )}
      </div>
    </Wrapper>
  )
}
export default RegForm

const Wrapper = styled.section`
  padding: 5em 1.5em;
  @media (min-width: 1000px) {
    padding: 11em 1.5em;
  }
  background-color: var(--clr-body);
  .reg-form-wrapper {
    margin: 0 auto;
    background-color: black;
    padding: 6em 2em;
    max-width: 500px;
  }
  .reg-form {
    display: flex;
    flex-direction: column;
    gap: 2em;
    color: white;
  }
  .input-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5em;
  }
  .label {
    text-transform: capitalize;
    font-size: 1.2rem;
    font-weight: 500;
  }
  .sign-up-btn {
    background-color: var(--clr-primary-1);
    border: none;
    color: white;
    padding: 1em;
    text-transform: capitalize;
    font-size: 1rem;
    margin-top: 1em;
    margin-bottom: 2em;
    cursor: pointer;
  }
  .text {
    color: white;
  }
  .red-text {
    color: var(--clr-primary-1);
    text-transform: capitalize;
    font-weight: 600;
    cursor: pointer;
    margin-left: 0.3em;
  }

  @media (max-width: 400px) {
    .text {
      text-align: center;
      display: flex;
      flex-direction: column;
    }
  }
`
