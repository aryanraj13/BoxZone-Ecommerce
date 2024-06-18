import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>BoxZone.com - Fill your box</title>
        <meta name="description" content="BoxZone.com - Fill your box" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar/>
      <div>
        <img src="/home(1).jpg" alt=""/>
      </div>
      <Footer/>
    </>
  );
}
