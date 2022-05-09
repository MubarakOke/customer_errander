import React from "react";
import Navbar from "../../../components/Navbar";

const Blog = () => {
  const [hamburger, setHamburger] = React.useState(0);

  return (
    <div>
      <Navbar
        title="Blog"
        hamburger={hamburger}
        setHamburger={setHamburger}
        show="customer"
      />

      <div
        className={`${
          hamburger ? "blur-sm" : "blur-none"
        } h-screen pt-[150px]  z-0 px-6`}
      >
        <p className="font-roboto text-[#999A9A] font-semibold text-[18px] ">RECENT POSTS</p>
      </div>
    </div>
  );
};

export default Blog;

