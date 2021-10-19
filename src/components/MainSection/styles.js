import styled from "styled-components";

export const Container = styled.div`
  .main-section {
    width: 70%;
    margin: 3rem auto;

    h2 {
      font-size: 1.1rem;
    }

    .ms-m-description {
      p {
        font-size: 0.933rem;
        line-height: 1.5;
      }
    }
  }

  @media (min-width: 1024px) {
    .main-section-middle {
      display: flex;
      justify-content: space-between;
      .ms-image {
        max-width: 545px;
        flex: 1 0 545px;
      }

      .ms-m-description {
        margin-left: 30px;
        align-self: center;

        p {
          font-size: 1.1rem;
        }
      }
    }
  }
`;
