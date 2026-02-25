import VariationA from "./components/variation-a/variation-a";
import VariationB from "./components/variation-b/variation-b";
import Original from "./components/original/original";
import VariationC from "./components/variation-c/variation-c";
import VariationD from "./components/variation-d/variation-d";
import Image from "next/image";
import logo from "./imgs/default-img.png";

export default function Home() {
  return (
    <div className="">
      {/* Page header */}
      <div className="bg-[#f0f2f5] border-b border-gray-200 px-10 py-8">
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
            <Original />
          </div>
        </section>

        {/* Variation A */}
        <section className="px-10 relative z-20">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation A</span>
            <h2 className="text-sm font-semibold text-gray-600">Uppercase Subtitles and Horizontal Lines</h2>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationA />
          </div>
        </section>

        {/* Variation B */}
        <section className="px-10 relative z-10">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation B</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation B:</strong>
              <ul>
                <li>1. The left-column blurb in Variation B provides context for the section, giving users immediate context for the section, reducing cognitive load.</li>
                <li>2. Variation B uses horizontal and vertical lines to visually separate sections and items, whereas the Original does not have these visual separators.</li>
                <li>3. Added a border at the bottom of the desktop dropdown menu to create a visual separation from the page area.</li>
              </ul>
            </h3>
          </div>
          <div className="">
            {/* <Image src={logo} alt="default banner" className="" /> */}
            <VariationB />
          </div>
        </section>

        {/* Variation C */}
        <section className="px-10 relative z-5">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation C</span>
            <h2 className="text-sm font-semibold text-gray-600">Horizontal and Vertical Row</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              The left-column blurb in Variation B improves UX by giving users immediate context for the section, reducing cognitive load, and highlighting a “View All” call-to-action for quick access.
            </h3>
          </div>
          <div className="">
            {/* <Image src={logo} alt="default banner" className="" /> */}
            <VariationC />
          </div>
        </section>

        {/* Variation D */}
        <section className="px-10 relative z-0">
          <div className="mb-3 flex items-center gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation D</span>
            <h2 className="text-sm font-semibold text-gray-600">Horizontal and Vertical Row</h2>
          </div>
          <div className="">
            {/* <Image src={logo} alt="default banner" className="" /> */}
            <VariationD />
          </div>
        </section>
      </div>
    </div>
  );
}