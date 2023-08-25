import styled from "styled-components"
import { ButtonUniq, MarkerHeading } from "../../components"
import { blogList } from "../../utils"

const HomeNews = () => {
  return (
    <Wrapper>
      <div className="news-wrapper section-wrapper">
        <MarkerHeading heading="latest blog" />
        <h1 className="news-title">our recent news</h1>
        <p className="news-p">
          Libero enim sed faucibus turpis in eu. Risus pretium quam vulputate
          dignissim suspendisse in. Ut tristique et egestas quis ipsum
          suspendisse.
        </p>
        <div className="news-card-wrapper">
          {blogList.slice(0, 3).map((blog, index) => {
            const { date, title } = blog
            return (
              <article className="blog-card" key={index}>
                <p className="date">{date}</p>
                <h3 className="blog-h2">{title}</h3>
                <p className="blog-p">
                  Libero enim sed faucibus turpis in eu. Risus pretium quam
                  vulputate dignissim suspendisse in. Ut tristique et egestas
                  quis ipsum suspendisse.
                </p>
                <ButtonUniq text="read more" />
              </article>
            )
          })}
        </div>
      </div>
    </Wrapper>
  )
}
export default HomeNews

const Wrapper = styled.section`
  .news-title {
    text-transform: capitalize;
  }
  .date {
    color: black;
    border: 1px solid black;
    display: inline-block;
    border-radius: 40px;
    padding: 0.2em 1em;
    font-weight: 600;
  }
  .news-wrapper {
    padding: 3em 1.5em;
    text-align: center;
  }
  .news-card-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2em;
  }
  .blog-card {
    box-shadow: var(--box-shadow);
    text-align: left;
    padding: 2em 1.5em 3em 1.5em;
    max-width: 500px;
    /* height: 400px; */
  }
  .blog-h2 {
    text-transform: capitalize;
  }
  @media (min-width: 724px) {
    .news-card-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-template-rows: auto;
    }
    .blog-card:first-of-type {
      grid-row: 1/2;
    }
  }
  @media (min-width: 900px) {
    .news-card-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
    }
    .blog-card {
      /* height: 470px; */
    }
  }
`
