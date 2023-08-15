import styled from "styled-components"
import ButtonUniq from "./ButtonUniq"

const PricePlanCard = ({ data }) => {
  const { img_url, title, price, programs } = data
  return (
    <Wrapper>
      <div className="price-card">
        <img src={img_url} alt="exercise in gym" className="price-img" />
        <div className="price-content">
          <h4 className="title">{title}</h4>
          <p className="price">
            $<span className="price-bold">{price}</span>
            p/m
          </p>
          <div className="programs-container">
            {programs.map((program, index) => {
              return (
                <p className="program" key={index}>
                  {program}
                </p>
              )
            })}
          </div>
          <ButtonUniq text="purchase now" />
        </div>
      </div>
    </Wrapper>
  )
}
export default PricePlanCard

const Wrapper = styled.div`
  .price-card {
    background-color: white;
    box-shadow: var(--box-shadow);
    max-width: 400px;
  }
  .title {
    text-transform: capitalize;
    font-size: 1.2rem;
  }
  .price {
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    gap: 0.5em;
    margin: 0;
  }
  .price-bold {
    font-size: 3rem;
    color: black;
  }
  .price-content {
    position: relative;
    max-width: 230px;
    margin: 0 auto;
    margin-top: -4em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    z-index: 4;
    background-color: white;
    padding-bottom: 3.5em;
  }
  .programs-container {
    text-transform: capitalize;
  }
  .price-img {
    filter: brightness(50%);
    transition: all ease-in-out 0.3s;
  }
  .price-img:hover,
  .price-img:focus {
    filter: brightness(100%);
  }

  .title {
    transition: all ease-in-out 0.3s;
  }
  .price-card:hover .title,
  .price-card:hover .price-img {
    color: var(--clr-primary-1);
    filter: brightness(100%);
  }
`
