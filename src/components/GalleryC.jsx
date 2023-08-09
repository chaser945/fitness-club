import styled from "styled-components"

const GalleryC = ({ data }) => {
  return (
    <Wrapper>
      <div className="image-gallery section-wrapper">
        {data.map((c) => {
          return (
            <img className="gallery-img" src={c.url} alt="a person doing gym" />
          )
        })}
      </div>
    </Wrapper>
  )
}
export default GalleryC

const Wrapper = styled.div`
  .image-gallery {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  .gallery-img {
    height: 370px;
    object-fit: cover;
  }

  @media (min-width: 645px) {
    .image-gallery {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (min-width: 848px) {
    .image-gallery {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
