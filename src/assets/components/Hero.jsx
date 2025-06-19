function Hero() {
  return (
    <div className="relative min-h-screen">
      <div className="flex flex-col justify-start text-left pl-20 pt-[400px]">
 <div className="max-w-4xl text-center">
  {/* Text pe un rând */}
  <h1 className="text-[60px] text-white font-bold">Galaxy S25 Ultra</h1>

  {/* Imagine sub text și centrată */}
  <img
    src="https://images.samsung.com/is/content/samsung/assets/uk/ux3/home/MDMX_Hero-KV-Home_AI-Logo_PC_LTR_620x64.svg?$620_64_IMG$"
    alt=""
    className="mt-2 h-[40px] mx-auto"
  />

  {/* Buton sub imagine */}
  <div className="mt-8">
    <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition">
      Get Started
    </button>
  </div>
</div>

      </div>
    </div>
  );
}

export default Hero;
