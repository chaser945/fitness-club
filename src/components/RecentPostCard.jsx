import styled from "styled-components"

const RecentPostCard = ({ data }) => {
  const { title, date, img_url } = data
  return (
    <Wrapper>
      <div className="recent-post-card">
        <img className="recent-img" src={img_url} alt="exercise" />
        <div className="content">
          <p className="date">{date}</p>
          <h3 className="card-title">{title}</h3>
        </div>
      </div>
    </Wrapper>
  )
}
export default RecentPostCard

const Wrapper = styled.div`
  .recent-post-card {
    display: grid;
    grid-template-columns: 90px 1fr;
    align-items: center;
    gap: 20px;
  }

  .recent-img {
    height: 90px;
    width: 90px;
    object-fit: cover;
  }

  .date {
    margin: 0;
    margin-bottom: 0.5em;
    font-size: 0.8rem;
  }

  .card-title {
    margin: 0;
    font-size: 1rem;
    text-transform: capitalize;
    line-height: 1.3;
  }
`
