import Video from "../../assets/back.mp4";

const Hero = () => {
  return (
    <section className="relative w-full h-[45vh] overflow-hidden bg-gradient-to-tl from-[var(--text-tertiary)] to-[var(--brand-accent)]">
      <video
        src={Video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover mix-blend-overlay"
      />

      <div className="relative z-20 flex items-center justify-center h-full">
        <h1 className="text-white text-xl md:text-3xl font-semibold">
          Welcome!
        </h1>
      </div>
    </section>
  );
};

export default Hero;
