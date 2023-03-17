const AboutUs = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4">
      <div className="grid lg:grid-cols-2">
        <div className="flex items-center lg:items-start gap-x-[16px] mt-[49px] lg:mt-0 order-2 lg:order-1">
          <p className="text-primary font-bold text-[36px] lg:text-[50px]">
            About us
          </p>
          <div className="lg:hidden w-[79px] h-[20px] bg-secondary2" />
        </div>
        <p className="mt-[8px] lg:mt-0 text-primary font-medium text-[16px] lg:text-[24px] order-3 lg:order-2">
          This is the project for IoT class administered by Prof.Tongpool
          Heeptaisong for S-MITT, a master degree course, in KMUTNB.
        </p>
        <img
          alt="instructor"
          src="/images/instructor.webp"
          className="mt-[49px] lg:mt-0 w-full lg:w-[397.5px] order-4 lg:order-3"
        />
        <img
          alt="content"
          src="/images/content.webp"
          className="h-auto w-full lg:h-[381px] lg:w-[489px] self-center order-1 lg:order-4"
        />
      </div>
    </div>
  );
};

export default AboutUs;
