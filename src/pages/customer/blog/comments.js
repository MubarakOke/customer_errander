import React from "react";
import Logo from "../../../Assets/image/Logo2.png";
import { MdArrowBackIosNew } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const Navigate = useNavigate();
  return (
    <div>
      <div className="w-full rounded-b-[41px] p-6 bg-[#D7EBE2] flex items-center justify-between fixed top-0 z-10 shadow-[0_4px_4px_0px_rgba(0,0,0,0.25)]">
        <MdArrowBackIosNew
          onClick={() => Navigate(-1)}
          className="text-[#0E4E48] text-[30px] font-bold cursor-pointer"
        />

        <span className="text-[#0E4E48] font-bold text-[24px] font-['Roboto'] ml-[45px]">
          Comments
        </span>
        <img src={Logo} alt="logo" className="h-[84px] w-[83px]" />
      </div>
    </div>
  );
};

export default CreateBlog;
