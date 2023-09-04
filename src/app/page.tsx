import LatestNewsCards from "@/components/LatestNewsCards";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNewsTitle";
import SportsNews from "@/components/SportsNewsTitle";

import Welcome from "@/components/Welcome";
import SportsNewsCards from "@/components/SportsNewsCard";
import TopCreatorsTitle from "@/components/TopCreatorsTitle";
import CreatorCards from "@/components/CreatorCards";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col    ">
      <Welcome />
      <Hero />
      <LatestNews />
      <LatestNewsCards />
      <SportsNews />
      <SportsNewsCards/>
      <TopCreatorsTitle/>
      <CreatorCards/>
     
    </main>
  );
}
