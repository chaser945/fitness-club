import { useSelector } from "react-redux"
import styled from "styled-components"
import { GalleryC, PageButton } from "../components"
import { MdNavigateNext } from "react-icons/md"

const GalleryPage1 = () => {
  const { galleryData } = useSelector((store) => store.appSlice)
  //   console.log(galleryData)
  return (
    <Wrapper>
      <div className="gallery-page-1 section-wrapper">
        <GalleryC data={galleryData[0]} />
        <div className="button-wrapper">
          <PageButton pageNum="1" backColor="yes" />
          <PageButton pageNum="2" />
          <PageButton pageNum={<MdNavigateNext className="next-icon" />} />
        </div>
      </div>
    </Wrapper>
  )
}
export default GalleryPage1

const Wrapper = styled.div`
  .gallery-page-1 {
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
  .next-icon {
    font-size: 1.5rem;
  }
`
