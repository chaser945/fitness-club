import styled from "styled-components"
import { PageHero } from "../components"
import { Outlet } from "react-router-dom"
// import { useEffect } from "react"
const Gallery = () => {
  return (
    <Wrapper>
      <div className="gallery-wrapper">
        <PageHero heading="gallery" />
        <Outlet />
      </div>
    </Wrapper>
  )
}
export default Gallery

const Wrapper = styled.div``
