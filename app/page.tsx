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
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation A</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation A:</strong>
              <ul>
                <li>1. The desktop menu uses a light #F5F5F5 background with dark text, which is easier to read than the original's white-on-dark-blue dropdown</li>
                <li>2. The mobile menu has a clear section label strip (light #f0f5ff header) when a section opens, giving users visual context for where they are</li>
                <li>3. Sub-items in the mobile menu have a left accent bar and small arrow indicators, creating visual hierarchy — the original is a flat unstyled list</li>
              </ul>
            </h3>
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
            <Image src={logo} alt="default banner" className="" />
            <VariationB />
          </div>
        </section>

        {/* Variation C */}
        <section className="px-10 relative z-5">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation C</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              The left-column blurb in Variation B improves UX by giving users immediate context for the section, reducing cognitive load, and highlighting a “View All” call-to-action for quick access.
            </h3>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation C:</strong>
              <ul>
                <li>1. Section headings in the dropdown have a bold left white border accent and dark background pill, giving clear visual grouping — the original uses plain bold white text with no visual separation</li>
                <li>2. Variation C has a two-level mobile accordion: top-level items expand to reveal section headings, which themselves expand to reveal links — giving users a clear hierarchy without overwhelming them. The original dumps all links flat under the top-level toggle with no further grouping.</li>
                <li>3. The hover over the main nav has a bolder underline and a slightly bigger background padding.</li>
                <li>4. Desktop layout is similar to Variation B but with a padded background in the left column and no vertical line.</li>
              </ul>
            </h3>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationC />
          </div>
        </section>

        {/* Variation D */}
        <section className="px-10 relative z-0">
          <div className="mb-3 flex items-center gap-3">
            <h2 className="text-xs font-bold uppercase tracking-widest text-white bg-[#2f5986] px-3 py-1 rounded-full">Variation D</h2>
          </div>
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-sm font-normal text-black">
              <strong>Differences between the Original and Variation D:</strong>
              <ul>
                <li><i>Same as Variation C without the left blurb.</i></li>
                <li>1. The hover over the main nav has a bolder underline and a slightly more transparent background padding.</li>
                <li>2. The hover over the main nav flips the chevron icon from pointing down to pointing up.</li>
              </ul>
            </h3>
          </div>
          <div className="">
            <Image src={logo} alt="default banner" className="" />
            <VariationD />
          </div>
        </section>
      </div>
    </div>
  );
}