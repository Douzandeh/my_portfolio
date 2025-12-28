import { FaBootstrap, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiReactjsLine, RiTailwindCssFill } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";

function Technologies() {
  return (
    <div className="pb-24">
      <h2 className="my-20 text-center text-4xl">TechnoLogies</h2>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <div>
          <RiReactjsLine className="text-7xl text-cyan-400" />
        </div>
        <div className="p-4">
          <TbBrandNextjs className="text-7xl " />
        </div>
        <div className="p-4">
          <IoLogoJavascript className="text-7xl text-yellow-400" />
        </div>
        <div className="p-4">
          <RiTailwindCssFill className="text-7xl text-cyan-500" />
        </div>
        <div className="p-4">
          <FaBootstrap className="text-7xl text-[#7952B3]" />
        </div>
        <div className="p-4">
          <FaGitAlt className="text-7xl text-[#F05032] " />
        </div>
      </div>
    </div>
  );
}

export default Technologies;
