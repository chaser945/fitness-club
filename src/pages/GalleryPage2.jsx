import { useSelector } from "react-redux"
import styled from "styled-components"
import { GalleryC, PageButton } from "../components"
import { MdNavigateBefore } from "react-icons/md"
import { Link } from "react-router-dom"

const GalleryPage2 = () => {
  const { galleryData } = useSelector((store) => store.appSlice)
  //   console.log(galleryData)
  return (
    <Wrapper>
      <div className="gallery-page-2 section-wrapper">
        <GalleryC data={galleryData[1]} />
        <div className="button-wrapper">
          <Link to="/gallery">
            <PageButton
              pageNum={<MdNavigateBefore className="before-icon" />}
            />
          </Link>
          <Link to="/gallery">
            <PageButton pageNum="1" />
          </Link>
          <PageButton pageNum="2" backColor="yes" />
        </div>
      </div>
    </Wrapper>
  )
}
export default GalleryPage2

const Wrapper = styled.div`
  .gallery-page-2 {
    padding: 6em 1.5em;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .button-wrapper {
    margin-top: 4em;
    display: flex;
    gap: 0.5em;
  }
  .before-icon {
    font-size: 1.5rem;
  }
`
