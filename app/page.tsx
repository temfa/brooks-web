import Digital from "@/components/digital";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Hero from "@/components/hero";
import HomeFaq from "@/components/home-faq";
import Loans from "@/components/loan";
import OurServices from "@/components/our-services";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <OurServices />
      <Loans />
      <Digital />
      <HomeFaq />
      <Footer />
    </>
  );
}
