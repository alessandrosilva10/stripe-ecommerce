import { Cointainer } from "./styles";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <Cointainer>
      <div className="footer">{year} © NOMAD Store</div>
    </Cointainer>
  );
}
