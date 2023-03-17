const Home = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="text-center order-2 lg:order-1">
          <div>
            <p className="text-primary font-bold text-[34px] lg:text-[60px]">
              Smart Aquarium
            </p>
            <p className="text-primary  font-bold text-[34px] lg:text-[58px]">
              for Smart People
            </p>
          </div>
          <p className="text-primary text-[17px] lg:font-medium lg:text-[26px]">
            Live a much smarter life as a fish lover
          </p>
        </div>
        <div className="order-1 lg:order-2">
          <img
            alt="cfish"
            src="/images/cfish.webp"
            className="h-[393px] w-full lg:h-[548px] lg:w-[504px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
