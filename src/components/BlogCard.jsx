import styled from "styled-components"
import { GoStack } from "react-icons/go"
import ButtonUniq from "./ButtonUniq"
import { Link } from "react-router-dom"

const BlogCard = ({ data }) => {
  const {
    author,
    date,
    exercise_name: exercise,
    title,
    text,
    img_url: img,
  } = data
  return (
    <Wrapper>
      <div className="blog-card">
        <img src={img} alt="exercise" className="blog-img" />
        <p className="description">
          <GoStack className="stack-icon" />
          <span className="author-line">
            by <span className="author">{author} </span>{" "}
          </span>{" "}
          | {date} | {exercise}
        </p>
        <h2 className="blog-heading">{title}</h2>
        <p className="content">
          {text ||
            "Libero enim sed faucibus turpis in eu. Risus pretium quam vulputate dignissim suspendisse in. Ut tristique et egestas quis ipsum suspendisse. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien et. Aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."}
        </p>
        <Link to="/pricing">
          <ButtonUniq text="purchase now" />
        </Link>
      </div>
    </Wrapper>
  )
}
export default BlogCard

const Wrapper = styled.div`
  .stack-icon {
    color: var(--clr-primary-1);
    font-size: 1.3rem;
    margin-right: 0.3em;
  }
  .description {
    margin-top: 1em;
    margin-bottom: 1.2em;
    display: flex;
    align-items: center;
    text-transform: capitalize;
    font-size: 0.8rem;
  }
  .author {
    font-weight: 700;
    text-transform: capitalize;
  }
  .author-line {
    margin-right: 0.2em;
  }

  .blog-heading {
    margin-top: 0.1em;
    margin-bottom: 0.6em;
    text-transform: capitalize;
  }

  .content {
    margin-top: 0;
  }

  .blog-img {
    height: 200px;
    object-fit: cover;
    object-position: center center;
  }

  @media (min-width: 483px) {
    .blog-img {
      height: 250px;
    }
  }

  @media (min-width: 564px) {
    .blog-img {
      height: 300px;
    }
  }

  @media (min-width: 670px) {
    .blog-img {
      height: 350px;
    }
  }

  @media (min-width: 757px) {
    .blog-img {
      height: 400px;
    }
  }

  @media (min-width: 864px) {
    .blog-img {
      height: 450px;
    }
  }
`
