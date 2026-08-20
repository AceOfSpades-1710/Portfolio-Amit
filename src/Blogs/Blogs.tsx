import "./styles/Blogs.css";
import { useLayoutEffect} from "react";
import gsap from "gsap";
import Nav from "../Home/nav";
import BlogCard from "./BlogCard";

function Blogs() {

  useLayoutEffect(() => {
    gsap.set(".nav", {
      top: "0.9%",
      left: "29.6%",
    });
  }, []);

  return (
    <>
      <Nav/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <br/><br/>
      <BlogCard/>
    </>
  );
}

export default Blogs;