import FifthBanner from "./FifthBanner";
import FirstBanner from "./FirstBanner";
import FourthBanner from "./FourthBanner";
import SecoundBanner from "./SecoundBanner";
import Footer from "../../Layout/Footer";
import SixthBanner from "./SixthBanner";
import ThirdBanner from "./ThirdBanner";
import ScrollReveal from "../../components/ScrollReveal";

function Home() {
  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <ScrollReveal animationVariants={animationVariants}>
        <FirstBanner />
      </ScrollReveal>
      <ScrollReveal animationVariants={animationVariants}>
        <SecoundBanner />
      </ScrollReveal>
      <ScrollReveal animationVariants={animationVariants}>
        <ThirdBanner />
      </ScrollReveal>
      <ScrollReveal animationVariants={animationVariants}>
        <FourthBanner />
      </ScrollReveal>
      <ScrollReveal animationVariants={animationVariants}>
        <FifthBanner />
      </ScrollReveal>
      <ScrollReveal animationVariants={animationVariants}>
        <SixthBanner />
      </ScrollReveal>
    </>
  );
}

export default Home;
