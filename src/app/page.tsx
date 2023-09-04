import LatestNewsCards from "@/components/LatestNewsCards";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";
import SportsNews from "@/components/SportsNews";

import Welcome from "@/components/Welcome";
import SportsNewsCards from "@/components/SportsNewsCards";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col    ">
      <Welcome />
      <Hero />
      <LatestNews />
      <LatestNewsCards />
      <SportsNews />
      <SportsNewsCards/>
    </main>
  );
}
