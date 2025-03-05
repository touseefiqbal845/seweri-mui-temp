
import ScrollReveal from '../../components/ScrollReveal';
import About from './About';
import App from './TeamSection';

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
        <About />
      </ScrollReveal>
      <ScrollReveal animationVariants={animationVariants}>
        <App />
      </ScrollReveal>

    </>
  );
}

export default Home;
