import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import LatestNews from "@/components/LatestNews";

import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col    ">
      <Welcome />
      <Hero />
      <LatestNews />
      <Cards />
    </main>
  );
}
