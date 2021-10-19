import { Container } from "./styles";

export function FeaturedProduct(product) {
  const { title, imageUrl, price } = product;
  return (
    <Container>
      <div className="featured-image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="name-price">
        <h3>{title}</h3>
        <p>$ {price}</p>
        <button className="button is-black nomad-btn">ADD TO CART</button>
      </div>
    </Container>
  );
}
