import styled from "styled-components"
import { MarkerHeading, PageHero, PricePlanCard } from "../components"
import { pricingPlans } from "../utils"

const Pricing = () => {
  return (
    <Wrapper>
      <PageHero heading="pricing" />
      <img
        src="../public/dumbbell.png"
        alt="dumbell"
        className="back-img dumbbell-img"
      />
      <img
        src="../public/kettlebell.png"
        alt="kettlebell"
        className="back-img kettlebell-img"
      />
      <div className="pricing-wrapper section-wrapper">
        <MarkerHeading heading="pricing chart" />
        <div className="header">
          <h1 className="title">exclusive pricing plan</h1>
          <p className="text">
            Nec feugiat nisl pretium fusce. In metus vulputate eu scelerisque
            felis imperdiet proin.{" "}
          </p>
        </div>
        {/* pricing content   */}
        <div className="price-card-container">
          {pricingPlans.map((plan, index) => {
            return <PricePlanCard data={plan} key={index} />
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default Pricing

const Wrapper = styled.div`
  background-color: var(--clr-body);
  position: relative;
  .pricing-wrapper {
    padding: 5em 1.4em 6em 1.4em;
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    /* background: url("../public/kettlebell.png");
    background-position: left top;
    background-size: contain;
    background-repeat: no-repeat; */
  }
  .price-card-container {
    display: flex;
    flex-direction: column;
    gap: 2em;
  }
  @media (min-width: 1077px) {
    .price-card-container {
      display: flex;
      flex-direction: row;
      gap: 1.5em;
    }
  }
  .header {
    text-align: center;
    margin-bottom: 3em;
  }
  .title {
    text-transform: capitalize;
  }
  .back-img {
    opacity: 0.1;
    position: absolute;
    max-width: 200px;
    z-index: 1;
  }

  .dumbbell-img {
    left: 20px;
    top: 300px;
  }

  .kettlebell-img {
    right: 20px;
    bottom: 30px;
  }
`
