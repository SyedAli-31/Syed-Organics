import AboutSection from "@/components/About";
import Container from "@/components/Container";
import HeroCarousel from "@/components/hero-carousel";

import ProductGrid from "@/components/ProductGrid";


export default function Home() {
  return (
    <div className="py-9">
      
      <HeroCarousel/>
      <Container>
     
      <div className="flex flex-col items-center text-center mt-10 space-y-3 px-4 md:px-0">
  <h2 className="text-green-700 font-extrabold text-[32px] md:text-[40px] tracking-wide uppercase">
    OUR PRODUCTS
  </h2>
  <p className="text-[20px] md:text-[23px] text-black max-w-[600px]">
    Discover our collection of handcrafted herbal products
  </p>
</div>

       
       <ProductGrid/>
       <AboutSection/>
      </Container>
    </div>
  );
}
