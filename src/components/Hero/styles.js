import styled from "styled-components";

export const HeroSection = styled.section`
  .hero-image {
    background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)),
      url("../../assets/ben-white-unsplash.jpg") center/cover no-repeat;
  }

  .hero-title {
    text-align: center;
    font-size: 2rem;
  }

  @media (mix-width: 1024px) {
    .hero-image {
      font-size: 2.5rem;
    }
  }

  .shop-now-btn {
    text-align: center;
    padding-top: 15px;
  }
`;
