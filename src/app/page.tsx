import Cards from "@/components/Cards";
import Hero from "@/components/Hero";
import Welcome from "@/components/Welcome";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col    ">
      <Welcome />
      <Hero/>
      <Cards/>
    </main>
  );
}
