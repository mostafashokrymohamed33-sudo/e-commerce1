import Link from "next/link";
import CategoryCard from "./-components/-categorycard";

export default function Home() {
  return (
    <div  className={"home-page"}>
      <div className="intro">
        <h1 className="font2 ">
          NEW WINTER <br></br> COLLECTION
        </h1>
        <div>
          50% OFF 2026
        </div>
        <div className="small">
            The standard chunk of Lorem ipsum used since the is reproduced below for those interested. Sections 1.10.32 and 11033 from de Finibus Bonorum et Malorum.
        </div>
        <a className="font2 ">
          Shop Now
        </a>
      </div>
      <div className="categories">
        <CategoryCard i={1} url={"/categoriesP"} title={"men"}/>
        <CategoryCard i={2} url={"/categoriesP"}  title={"kids"}/>
        <CategoryCard i={3} url={"/categoriesP"}  title={"shoase"}/>
        <CategoryCard i={4} url={"/categoriesP"}  title={"womwen"}/>
      </div>
    </div>
  );
}
