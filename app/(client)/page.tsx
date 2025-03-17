import AboutSection from "@/components/About";
import Container from "@/components/Container";
import HeroCarousel from "@/components/hero-carousel";

import ProductGrid from "@/components/ProductGrid";


export default function Home() {
  return (
    <div className="py-9">
      
     
      <Container>
      <HeroCarousel/>
      <div className=" justify-items-center mt-10">
        <div> <h2 className="text-green-600 font-bold text-[36px]">OUR PRODUCTS</h2> </div> 
        <p className="text-[26px]" >Discover our collection of handcrafted herbal products</p>
      </div>
       
       <ProductGrid/>
       <AboutSection/>
      </Container>
    </div>
  );
}
