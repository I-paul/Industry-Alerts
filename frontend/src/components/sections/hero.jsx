import Video from "../../assets/back.mp4";

const Hero = () => {
  return (
    <section className="relative w-full md:w-[70vw] h-[45vh] overflow-hidden">
      <video
        src={Video}
        autoPlay
        muted
        loop
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
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
