import LatestNewsCards from "@/components/LatestNewsCards";
import HeroCards from "@/components/HeroCards";
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
      <HeroCards />
      <LatestNews />
      <LatestNewsCards />
      <SportsNews />
      <SportsNewsCards/>
      <TopCreatorsTitle/>
      <CreatorCards/>
     
    </main>
  );
}
