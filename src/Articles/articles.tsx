import "./styles/articles.css";
import { useLayoutEffect} from "react";
import gsap from "gsap";
import Nav from "../Home/nav";
import ArticleCard from "./ArticleCard";

function Articles() {

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
      <ArticleCard/>
    </>
  );
}

export default Articles;