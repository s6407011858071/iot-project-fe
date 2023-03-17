const Dashboard = () => {
  return (
    <div className="max-w-[1000px] mx-auto px-4">
      <div className="lg:bg-white lg:py-[42.5px] flex flex-col lg:flex-row justify-center gap-y-[32.5px] gap-x-[15px] rounded-[30px] lg:shadow">
        <div className="bg-white lg:bg-secondary2 rounded-[30px] overflow-hidden lg:w-[423px]">
          <div className="flex items-center justify-center">
            <img
              alt="aquarium"
              src="/images/aquarium.webp"
              className="h-[276px] w-[276px] lg:w-[313px]"
            />
          </div>
          <div className="bg-[#016585] lg:bg-black/60">
            <div className="max-w-[352px] flex flex-col mx-auto gap-y-[10px] items-center py-[22px]">
              <div className="text-center">
                <p className="font-bold text-white text-[24px]">
                  Smart Aquarium
                </p>
                <p className="font-bold text-white text-[24px]">Dashboard</p>
              </div>
              <p className="text-white text-[15px]">
                Condition : Check your aquarium immediately!
              </p>
              <div className="flex gap-x-[10px]">
                <div className="bg-secondary2 h-[32px] w-[32px] rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    src="/images/fish-food.webp"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="bg-secondary2 h-[32px] w-[32px] rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    src="/images/level-rise.webp"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="bg-secondary2 h-[32px] w-[32px] rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    src="/images/spla.webp"
                    className="h-[24px] w-[24px]"
                  />
                </div>
                <div className="bg-secondary2 h-[32px] w-[32px] rounded-full flex items-center justify-center">
                  <img
                    alt=""
                    src="/images/ph.webp"
                    className="h-[24px] w-[24px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white lg:bg-transparent rounded-[30px] lg:rounded-0 py-[20px] px-[10px]">
          <div className="flex flex-col gap-y-[20px]">
            <div className="flex items-center gap-x-[20px]">
              <div className="bg-secondary2 h-[32px] w-[32px] rounded-full flex items-center justify-center">
                <img
                  alt=""
                  src="/images/fish-food.webp"
                  className="h-[24px] w-[24px]"
                />
              </div>
              <div>
                <div className="flex gap-x-[14px]">
                  <p className="text-primary font-medium text-[15px]">
                    Water Temperature (°C)
                  </p>
                  <div className="bg-secondary2 rounded-[5px]">
                    <p className="font-medium text-[13px] py-[2px] px-[6px]">
                      45 Celcius
                    </p>
                  </div>
                </div>
                <p className="text-primary font-light text-[12px]">
                  *Healthy temp is between 22 - 27 Celsius
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-[20px]">
              <div className="bg-secondary2 h-[32px] w-[32px] rounded-full flex items-center justify-center">
                <img
                  alt=""
                  src="/images/level-rise.webp"
                  className="h-[24px] w-[24px]"
                />
              </div>
              <div>
                <div className="flex gap-x-[14px]">
                  <p className="text-primary font-medium text-[15px]">
                    Water Level
                  </p>
                  <div className="bg-secondary2 rounded-[5px]">
                    <p className="font-medium text-[13px] py-[2px] px-[6px]">
                      -0.94 cm
                    </p>
                  </div>
                </div>
                <p className="text-primary font-light text-[12px]">
                  *Should not lower than 2.0 cm
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-[20px]">
              <div className="bg-secondary2 h-[32px] w-[32px] rounded-full flex items-center justify-center">
                <img
                  alt=""
                  src="/images/spla.webp"
                  className="h-[24px] w-[24px]"
                />
              </div>
              <div>
                <div className="flex gap-x-[14px]">
                  <p className="text-primary font-medium text-[15px]">
                    Turbidity (NTU)
                  </p>
                  <div className="bg-danger rounded-[5px]">
                    <p className="font-medium text-white text-[13px] py-[2px] px-[6px]">
                      11 NTU
                    </p>
                  </div>
                </div>
                <p className="text-primary font-light text-[12px]">
                  *Should not be more than 10 NTU
                </p>
              </div>
            </div>
            <div className="flex items-center gap-x-[20px]">
              <div className="bg-secondary2 h-[32px] w-[32px] rounded-full flex items-center justify-center">
                <img
                  alt=""
                  src="/images/ph.webp"
                  className="h-[24px] w-[24px]"
                />
              </div>
              <div>
                <div className="flex gap-x-[14px]">
                  <p className="text-primary font-medium text-[15px]">
                    pH Value
                  </p>
                  <div className="bg-secondary2 rounded-[5px]">
                    <p className="font-medium text-[13px] py-[2px] px-[6px]">
                      pH 7.5
                    </p>
                  </div>
                </div>
                <p className="text-primary font-light text-[12px]">
                  *Good condition should be between 7 - 8
                </p>
              </div>
            </div>
            <div id="phScale" />
            <div className="bg-danger border border-1 border-solid border-[#EF4444] rounded-[4px] overflow-hidden">
              <div className="py-[10px] px-4">
                <p className="font-bold text-white text-[16px]">Danger</p>
              </div>
              <div className="bg-white/80">
                <div className="py-[10px] px-4">
                  <p className="font-light text-red-600 text-[16px]">
                    NTU is more than 10.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
