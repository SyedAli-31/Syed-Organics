import Container from "@/components/Container";
import HeroCarousel from "@/components/hero-carousel";
 
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <div>
      <Container className="py-10">
        <HeroCarousel/>
        <ProductGrid />
      </Container>
    </div>
  );
}
