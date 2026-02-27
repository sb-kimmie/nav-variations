import VariationA from "./components/variation-a/variation-a";
import VariationB from "./components/variation-b/variation-b";
import Original from "./components/original/original";
import VariationC from "./components/variation-c/variation-c";
import VariationD from "./components/variation-d/variation-d";
import VariationE from "./components/variation-e/variation-e";
import VariationF from "./components/variation-f/variation-f";
import VariationG from "./components/variation-g/variation-g";

import Image from "next/image";
import logo from "./imgs/default-img.png";

export default function Home() {
  return (
    <div className="bg-white min-h-screen">
      {/* Page header */}
      <div className="bg-[#f0f2f5] border-b border-gray-200 px-10 py-8">
        <h1 className="text-2xl font-bold text-[#002060]">CSUSB Nav Explorations</h1>
        <p className="text-sm text-gray-500 mt-1">Comparing navigation bar variations</p>
      </div>

      <div className="py-10 flex flex-col gap-12">

        {/* Original — highest z so its dropdown is always on top */}
        <section className="px-10 relative z-100">
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
        <section className="px-10 relative z-90">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation A - Similar to Original</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation A:</strong>
              <ul>
                <li>1. Variation A uses uppercase tracking and a bottom border separator to clearly distinguish column headings from links. </li>
              </ul>
            </h3>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationA />
          </div>
        </section>

        {/* Variation B */}
        <section className="px-10 relative z-80">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation B - Added Left Column on Desktop - White Background</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation B:</strong>
              <ul>
                <li>1. White background for the desktop dropdown instead of the blue background.</li>
                <li>2. Added a border at the bottom of the desktop dropdown menu to create a visual separation from the page area.</li>
                <li>3. The left-column in Variation B provides context for the section, giving users immediate context for the section.</li>
                <li>4. Variation B uses horizontal and vertical lines to visually separate sections and items, whereas the Original does not have these visual separators.</li>
                <li>5. The mobile menu has a clear section label strip (light #f0f5ff header) when a section opens, giving users visual context for where they are.</li>
                <li>6. Sub-items in the mobile menu have a left accent bar and small arrow indicators, creating visual hierarchy.</li>
              </ul>
            </h3>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationB />
          </div>
        </section>

        {/* Variation C */}
        <section className="px-10 relative z-70">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation C - Added Left Column on Desktop - Gray Background</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation C:</strong>
              <ul>
                <li><i>Same as Variation B but with a gray desktop background.</i></li>
              </ul>
            </h3>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationC />
          </div>
        </section>

        {/* Variation D */}
        <section className="px-10 relative z-60">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation D - Added Left Column on Desktop - Blue Background</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation D:</strong>
              <ul>
                <li><i>Same as Variation B & Variation C but with a blue desktop background.</i></li>
              </ul>
            </h3>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationD />
          </div>
        </section>

        {/* Variation E */}
        <section className="px-10 relative z-50">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation E - No Left Column on Desktop</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation E:</strong>
              <ul>
                <li><i>Same as Variation B, Variation C, and Variation D but without the left column.</i></li>
              </ul>
            </h3>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationE />
          </div>
        </section>

        {/* Variation F */}
        <section className="px-10 relative z-40">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation F   - Different Style Dropdown Headers</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation F:</strong>
              <ul>
                <li>1. Section headings in the dropdown have a bold left white border accent and dark background pill, giving clear visual grouping.</li>
                <li>2. Variation F has a two-level mobile accordion: top-level items expand to reveal section headings, which themselves expand to reveal links — giving users a clear hierarchy without overwhelming them.</li>
                <li>3. The hover over the main nav has a bolder underline and a slightly more transparent background padding.</li>
                <li>4. The hover over the main nav flips the chevron icon from pointing down to pointing up.</li>
              </ul>
            </h3>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationF />
          </div>
        </section>

        {/* Variation G */}
        <section className="px-10 relative z-30">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation G - Different Style Dropdown Headers - No Left Column</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation G:</strong>
              <ul>
                <li><i>Same as Variation E without the left column.</i></li>
                <li>1. The hover over the main nav has a bolder underline and a slightly more transparent background padding.</li>
                <li>2. The hover over the main nav flips the chevron icon from pointing down to pointing up.</li>
              </ul>
            </h3>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationG />
          </div>
        </section>
      </div>
    </div>
  );
}