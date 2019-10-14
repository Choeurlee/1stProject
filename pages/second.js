import Link from "next/link";
import "bootstrap/dist/css/bootstrap.min.css";
import fetch from "isomorphic-unfetch";
import "../styles.css";

import { TextContent2 } from "../components/text2";
import { Footer } from "../components/footer";
import { Navi } from '../components/navbar'
import  Head from "next/head"

function Page({ character }) {
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
        <div className="Content">
          <div className="container">
            <TextContent2 character={character} />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

Page.getInitialProps = async ({ query }) => {
  const res = await fetch(
    "https://api.codexsw.dev/api/get?collection=characters&uuid=" + query.uuid
  );
  const character = await res.json();
  return { character };
};

export default Page;
