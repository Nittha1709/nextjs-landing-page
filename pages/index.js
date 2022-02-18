import Head from "next/head";
import Navbar from "../components/header"
import Footer from "../components/footer";
import Banner from "../components/banner";
import LayoutSpan from "../components/layout";
import Quality from "../components/quality";
import CoreFeatures from "../components/core-features";
import FeatureApp from "../components/feature-app";
import Connect from "../components/connect";
import HowItWorks from "../components/how-it-works";
import Payment from "../components/payment";
import Package from "../components/package";
import Question from "../components/question";


export default function Home() {
  return (
    <div>
      <Head>
        <title>Basic Next App Web landing</title>
        <meta name="description" content="basic nextJs figma template by startuplanding" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <Banner>
        <Navbar />
      </Banner>
      <Quality />
      <LayoutSpan>
        <CoreFeatures />
        <FeatureApp />
      </LayoutSpan>
      <HowItWorks />
      <Connect />
      <Payment />
      <Package />
      <Question />
      <Footer />

    </div>
  )
}
