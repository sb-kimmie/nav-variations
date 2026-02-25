import Menu2 from "./components/menu-2/menu-2";
import Menu3 from "./components/menu-3/menu-3";
import Menu1 from "./components/menu-1/menu-1";
import Menu4 from "./components/menu-4/menu-4";
import Menu5 from "./components/menu-5/menu-5";
import Image from "next/image";
import logo from "./imgs/default-img.png";

export default function Home() {
  return (
    <div className="bg-[#f0f2f5]">

      {/* Page header */}
      <div className="bg-white border-b border-gray-200 px-10 py-8">
        <h1 className="text-2xl font-bold text-[#002060]">CSUSB Nav Explorations</h1>
        <p className="text-sm text-gray-500 mt-1">Comparing navigation bar variations</p>
      </div>

      <div className="py-10 flex flex-col gap-12">

        {/* Original — highest z so its dropdown is always on top */}
        <section className="px-10 relative z-30">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Original</span>
            <h2 className="text-sm font-semibold text-gray-600">CSUSB Current Navigation</h2>
          </div>
          {/* No overflow-hidden — lets the dropdown escape the card */}
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <Menu1 />
          </div>
        </section>

        {/* Variant A */}
        <section className="px-10 relative z-20">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variant A</span>
            <h2 className="text-sm font-semibold text-gray-600">Uppercase Subtitles and Horizontal Lines</h2>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <Menu2 />
          </div>
        </section>

        {/* Variant B */}
        <section className="px-10 relative z-10">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variant B</span>
            <h2 className="text-sm font-semibold text-gray-600">Horizontal and Vertical Row</h2>
          </div>
          <div className="">
            {/* <Image src={logo} alt="default banner" className="" /> */}
            <Menu3 />
          </div>
        </section>

        {/* Variant C */}
        <section className="px-10 relative z-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variant C</span>
            <h2 className="text-sm font-semibold text-gray-600">Horizontal and Vertical Row</h2>
          </div>
          <div className="">
            {/* <Image src={logo} alt="default banner" className="" /> */}
            <Menu4 />
          </div>
        </section>

        {/* Variant D */}
        <section className="px-10 relative z-0">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variant D</span>
            <h2 className="text-sm font-semibold text-gray-600">Horizontal and Vertical Row</h2>
          </div>
          <div className="">
            {/* <Image src={logo} alt="default banner" className="" /> */}
            <Menu5 />
          </div>
        </section>
      </div>
    </div>
  );
}