import heroImgDesktop from "../assets/images/illustration-working.svg";
import heroImgMobile from "../assets/images/illustration-working.svg";

const Hero = () => {
  return (
    <section className="hero-section">
      <div className="hero-left">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing.
        </p>
        <button>get started</button>
      </div>
      <div className="hero-right">
        <img src={heroImgDesktop} alt="hero-img" />
      </div>
    </section>
  );
};

export default Hero;
