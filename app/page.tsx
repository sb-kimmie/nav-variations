import VariationA from "./components/menu-v2/variation-c/variation-c";
import VariationB from "./components/menu-v2/variation-b/variation-b";

import Image from "next/image";
import logo from "./imgs/default-img.png";
import Link from "next/link";
import VariationC from "./components/menu-v2/variation-a/variation-a";


export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="bg-[#f0f2f5] border-b border-gray-200 px-10 py-8">
        <h1 className="text-2xl font-bold text-[#002060]">CSUSB Nav Explorations</h1>
        <p className="text-sm text-gray-500 mt-1">Comparing navigation bar variations</p>
      </div>

      <div className="py-10 flex flex-col gap-12">
        <div className="px-10 flex items-center gap-2 mt-1">
          <Link href="/" className="text-sm text-[#002060] font-extrabold">
            Menu V2
          </Link>
          <p className="text-sm text-gray-500"> / </p>
          <Link href="/menu-v1" className="text-sm text-[#002060] font-extrabold">
            Menu V1
          </Link>
        </div>

        {/* Original — highest z so its dropdown is always on top
        <section className="px-10 relative z-100">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">A</span>
            <h2 className="text-sm font-semibold text-gray-600">Similar to current</h2>
          </div>
          {/* No overflow-hidden — lets the dropdown escape the card */}
          {/* <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationA />
          </div>
        </section> */}

        <section className="px-10 relative z-50">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">A</span>
            <h2 className="text-sm font-semibold text-gray-600">Gray Left Column</h2>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationA />
          </div>
        </section>

        <section className="px-10 relative z-40">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">B</span>
            <h2 className="text-sm font-semibold text-gray-600">Pill</h2>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationB />
          </div>
        </section>

        <section className="px-10 relative z-20 pb-[520px] mb-20">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">C</span>
            <h2 className="text-sm font-semibold text-gray-600">Gray Border</h2>
          </div>
          <div className="mb-20">
            <Image src={logo} alt="default banner" className="" />
            <VariationC />
          </div>
        </section>
      </div>
    </div>
  );
}