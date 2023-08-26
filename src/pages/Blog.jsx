import styled from "styled-components"
import {
  BlogCard,
  PageHero,
  RecentPostCard,
  UnderlinedHeading,
} from "../components"
import {
  blogList,
  exerciseCategories,
  popularTags,
  recentBlogPosts,
} from "../utils"
import { FaSearch } from "react-icons/fa"
import { LiaHandPointRight } from "react-icons/lia"
import { useEffect } from "react"

const Blog = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Wrapper>
      <PageHero />
      <div className="blogs section-wrapper">
        <div className="blog-wrapper">
          {blogList.map((blog, index) => {
            return <BlogCard key={index} data={blog} />
          })}
        </div>
        {/* SIDEBAR OF BLOGS */}
        <div className="blog-side">
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
            <button className="search-button" type="button">
              <FaSearch className="search-icon" />
            </button>
          </div>
          {/* exercise categories */}
          <div className="categories-wrapper">
            <UnderlinedHeading heading="categories" font_size="1.2rem" />
            <div className="exercise-wrapper">
              {exerciseCategories.map((exercise, index) => {
                return (
                  <p className="exercise-line" key={index}>
                    <LiaHandPointRight className="greater-icon" />
                    {exercise.name}
                    <span className="exercise-quantity">
                      ({exercise.quantity})
                    </span>
                  </p>
                )
              })}
            </div>
          </div>
          {/*recent posts  */}
          <div className="recent-posts-wrapper">
            <UnderlinedHeading heading="recent posts" font_size="1.2rem" />
            <div className="recent-blog-posts">
              {recentBlogPosts.map((blog, index) => {
                return <RecentPostCard key={index} data={blog} />
              })}
            </div>
          </div>
          {/* popular tags */}
          <div className="tags-wrapper">
            <UnderlinedHeading heading="popular tags" font_size="1.2rem" />
            <div className="tags-container">
              {popularTags.map((tag, index) => {
                return (
                  <p className="tag" key={index}>
                    #{tag}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Blog

const Wrapper = styled.div`
  .blogs {
    padding: 7em 1.5em 5em 1.5em;
  }
  .blog-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4em;
    margin-bottom: 3em;
  }

  .search-bar {
    border: 1px solid var(--clr-border-1);
    /* display: inline-block; */
    display: flex;
    justify-content: space-between;
    margin-bottom: 2em;
    border-radius: 0 5px 5px 0;
  }
  .search-button {
    padding: 1em 1.2em;
    background-color: var(--clr-primary-1);
    border: none;
    border-radius: 0 5px 5px 0;
  }
  .search-icon {
    font-size: 1.3rem;
    color: white;
  }

  .categories-wrapper {
    background-color: var(--clr-body);
    padding: 1em 2em;
  }
  .exercise-line {
    display: flex;
    align-items: center;
    gap: 0.5em;
    border-bottom: 1px solid var(--clr-border-1);
    padding: 1em 0;
    text-transform: capitalize;
    /* margin: 0; */
  }
  .exercise-quantity {
    margin-left: auto;
  }

  /* recent posts */
  .recent-posts-wrapper {
    background-color: var(--clr-body);
    padding: 2em 1.4em;
    margin-top: 2em;
    margin-bottom: 2em;
  }
  .recent-blog-posts {
    display: flex;
    flex-direction: column;
    gap: 1.2em;
    margin-top: 1em;
  }
  /* popular tags */

  .tags-wrapper {
    padding: 2em 1.4em;
    background-color: var(--clr-body);
  }
  .tags-container {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
    margin-top: 1em;
  }
  .tag {
    margin: 0;
    line-height: 0;
    background-color: white;
    padding: 1em;
  }

  /* MEDIA QUERIES */
  @media (min-width: 908px) {
    .blogs {
      display: flex;
      gap: 2em;
    }
  }
`
