import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import fetch from "isomorphic-unfetch";
import "../styles.css";

import { Navi } from "../components/navbar";
import { Charlist } from "../components/charlist";
import { About } from "../components/about";
import { MainCarousel } from "../components/carousel";
import { TextContent } from "../components/text";
import { Footer } from "../components/footer";
import  Head from "next/head"

function Page({ characters }) {
  return (
    <div className="App">
      <Head>
        <link
        href="https://fonts.googleapis.com/css?family=Finger+Paint|Lobster&display=swap"
        rel="stylesheet"
        />
        </Head>
      <Navi />
      <div className="container-fluid">
        <Charlist characters={characters} />
        <About />
        <div className="Content">
          <div className="container">
            <MainCarousel />
            <TextContent />
          </div>
        </div>
      </div>
      <Footer />
    
    </div>
  );
}

Page.getInitialProps = async ({ req }) => {
  const res = await fetch(
    "https://api.codexsw.dev/api/list?collection=characters"
  );
  return await res.json();
};

export default Page;
