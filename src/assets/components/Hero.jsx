function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col  justify-start text-center pl-20 pt-72">
        <div className="max-w-md">
          <h1 className="text-5xl font-bold text-white">Galaxy S25 Ultra</h1>
          <img
            src="https://images.samsung.com/is/content/samsung/assets/uk/ux3/home/MDMX_Hero-KV-Home_AI-Logo_PC_LTR_620x64.svg?$620_64_IMG$"
            alt=""
            className="my-6 mx-auto"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
export default Hero;
