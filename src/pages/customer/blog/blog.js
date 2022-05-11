import React from "react";
import Navbar from "../../../components/Navbar";
import Blog_jumbotron from "../../../Assets/image/blog_jumbotron.png";
import {Link} from "react-router-dom"
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
        } h-screen pt-[150px]  z-0 px-4`}
      >
        <p className="font-roboto text-[#999A9A] font-semibold text-[18px] ">
          RECENT POSTS
        </p>
        <div className="overflow-hidden w-full mt-4 shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] text-[#616262]">
          <img src={Blog_jumbotron} alt="not available" />
          <div className="my-2 px-5 flex flex-col ">
            <p className="font-roboto font-bold text-[18px]">
              Price alert! Indomie noodles is now #50
            </p>
            <p className="text-[15px] text-justify mt-4 font-roboto font-semibold">
              With massive government intervention in the agriculture sector the
              price of the most eaten food{" "}
            </p>
            <div className="flex justify-between w-full text-[15px] my-4">
              <p className="font-bold">5 hours ago</p>
              <Link
                to="#"
                className="font-robot text-[#D33030] font-bold hover:text-[red]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
        <div className="overflow-hidden w-full mt-4 shadow-[1px_-2px_51px_-12px_rgba(0,0,0,0.25)] text-[#616262]">
          <div className="my-2 px-5 flex flex-col ">
            <p className="font-roboto font-bold text-[18px]">
              Price alert! Indomie noodles is now #50
            </p>
            <p className="text-[15px] text-justify mt-4 font-roboto font-semibold">
              With massive government intervention in the agriculture sector the
              price of the most eaten food{" "}
            </p>
            <div className="flex justify-between w-full text-[15px] my-4">
              <p className="font-bold">5 hours ago</p>
              <Link
                to="#"
                className="font-robot text-[#D33030] font-bold hover:text-[red]"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;

