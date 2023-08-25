import { useEffect, useState } from "react"
import styled from "styled-components"

const HomeBMI = () => {
  const [queryWeight, setQueryWeight] = useState("")
  const [height, setHeight] = useState("")
  const [bmi, setBmi] = useState("")
  const [resultWeight, setResultWeight] = useState("")

  useEffect(() => {
    if (bmi <= 18.4) {
      setResultWeight("underweight")
    } else if (bmi <= 24.9) {
      setResultWeight("normal")
    } else if (bmi <= 39.9) {
      setResultWeight("overweight")
    } else if (bmi > 39.9) {
      setResultWeight("obese")
    }
  }, [bmi])

  const handleSubmit = (e) => {
    e.preventDefault()
    const heightInMeters = height / 3.28
    const bmi = (queryWeight / heightInMeters ** 2).toFixed(2)
    setBmi(bmi)
  }
  const handleHeight = (e) => {
    const { value } = e.target
    setHeight(value)
  }
  const handleWeight = (e) => {
    const { value } = e.target
    setQueryWeight(value)
  }
  return (
    <Wrapper>
      <div className="section-wrapper">
        <div className="bmi-wrapper">
          <h1 className="bmi-title">
            let's calculate your <span className="bmi">bmi</span>
          </h1>
          <p className="bmi-text">
            Find out your body mass index with our built in BMI calculator.
          </p>
          <form className="bmi-form" onSubmit={handleSubmit}>
            <input
              className="bmi-input"
              type="text"
              placeholder="Weight / kg"
              value={queryWeight}
              onChange={handleWeight}
            />
            <input
              className="bmi-input"
              type="text"
              placeholder="Height / feet"
              value={height}
              onChange={handleHeight}
            />
            {bmi && (
              <p className="result">
                Your BMI is <span className="result-red">{bmi}</span>{" "}
              </p>
            )}
            {bmi && (
              <p className="result">
                You are <span className="result-red">{resultWeight}</span>{" "}
              </p>
            )}

            <button className="calc-btn">calculate</button>
          </form>
        </div>
      </div>
    </Wrapper>
  )
}
export default HomeBMI

const Wrapper = styled.div`
  background-image: url("https://images.unsplash.com/photo-1579364046732-c21c2177730d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80");
  background-position: center left;
  background-color: rgba(0, 0, 0, 0.7);
  background-blend-mode: darken;
  .bmi-wrapper {
    padding: 3em 1.5em;
    max-width: 553px;
  }
  .bmi-title {
    color: white;
    text-transform: capitalize;
    font-size: 2.2rem;
  }
  .bmi {
    color: var(--clr-primary-1);
    text-transform: uppercase;
  }
  .bmi-text {
    color: white;
  }
  .bmi-form {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.5em;
  }
  .bmi-input {
    max-width: 140px;
  }
  .result {
    color: white;
  }
  .result-red {
    color: var(--clr-primary-1);
    text-transform: capitalize;
    font-weight: 700;
    margin-left: 0.3em;
  }
  .calc-btn {
    text-transform: uppercase;
    background-color: var(--clr-button-1);
    border: none;
    padding: 1em 2em;
    color: white;
    cursor: pointer;
    transition: all linear 0.3s;
    max-width: 150px;
  }
  .calc-btn:hover {
    background-color: var(--clr-primary-1);
  }

  @media (min-width: 453px) {
    .bmi-input {
      max-width: 200px;
    }
  }
`
