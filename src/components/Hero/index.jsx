import { HeroSection } from "./styles";

export function Hero() {
  return (
    <HeroSection className="hero is-large is-info hero-image">
      <div className="hero-body">
        <h1 className="hero-title">Bags reimagined for modern life</h1>
        <div className="shop-now-btn">
          <button className="button is-black" id="shop-now">
            SHOP NOW
          </button>
        </div>
      </div>
    </HeroSection>
  );
}
