import styled from "styled-components"
import { ExerciseClassCard, PageHero } from "../components"
import { exerciseClasses } from "../utils"
import { useState } from "react"
import { useEffect } from "react"

const Classes = () => {
  const [shownClassesArr, setShownClassesArr] = useState([...exerciseClasses])
  const [showMore, setShowMore] = useState(true)

  useEffect(() => {
    if (!showMore) {
      setShownClassesArr([...exerciseClasses])
    } else {
      setShownClassesArr((oldArr) => {
        return oldArr.slice(0, 6)
      })
    }
  }, [showMore])

  const toggleShowMore = () => {
    setShowMore(!showMore)
  }

  return (
    <Wrapper>
      <PageHero heading="classes" />
      <div className="class-page-wrapper section-wrapper">
        <div className="cards-wrapper">
          {shownClassesArr.map((c, index) => {
            return <ExerciseClassCard data={c} key={index} />
          })}
        </div>
        <button className="show-button" onClick={toggleShowMore}>
          {showMore ? "show more" : "show less"}
        </button>
      </div>
    </Wrapper>
  )
}
export default Classes

const Wrapper = styled.div`
  background-color: var(--clr-body);

  .class-page-wrapper {
    margin-top: 5em;
    padding: 2em 1.5em;
    display: flex;
    flex-direction: column;
    gap: 4em;
    align-items: center;
  }
  .cards-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }

  .show-button {
    color: white;
    text-transform: uppercase;
    background-color: var(--clr-button-1);
    border: none;
    padding: 1em 2em;
    cursor: pointer;
  }

  @media (min-width: 780px) {
    .cards-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 1260px) {
    .cards-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
