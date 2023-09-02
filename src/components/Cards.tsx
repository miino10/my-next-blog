import React from "react";
import Card from "./Card";

export default function Cards() {
  const CardData = [
    {
      id: 1,
      profileUrl: "/Formula.jpg",
      channelName: "Formula 1",
      timePost: "3 Hours Ago",
      channelImg: "/Formulalogo.jpg",
      tagPost: "Sports",
      titlePost: "'He deserves a lot more' Verstappen backs Alonso",
      mainTextPost:
        'Max Verstappen believes his fellow two-time world champion Fernando Alonso "deserves a lot more" victories in Formula 1 and has backed the Spaniard.',
    },
    {
      id: 2,
      profileUrl: "/liverpool.webp",
      channelName: "BBC",
      timePost: "10 Hours Ago",
      channelImg: "/bbclogo2.jpg",
      tagPost: "Sports",
      titlePost: "Liverpool hammer Leeds for fist win in five games",
      mainTextPost:
        "Mohamed salah and Diego jota both scored twice as Liverpool claimed a first league win in five games by influencing a second seccessive home hammering o",
    },
    {
      id: 3,
      profileUrl: "/papua.png",
      channelName: "NBC",
      timePost: "1 Day Ago",
      channelImg: "/nbc.jpg",
      tagPost: "Joke",
      titlePost: "Papua:Atleast one Killed in hunt for kidnapped Nz pilot",
      mainTextPost:
        "At least one indonesian soldier has been killed in rebel attack while searching for a kidnapped New zealand pilot in the papua region, officially say",
    },

    {
      id: 4,
      profileUrl: "/qudus.jpg",
      channelName: "CBC",
      timePost: "16 Hours Ago ",
      channelImg: "/cbc.png",
      tagPost: "Middle East",
      titlePost: "Jeremy Bowen:Israel's unclear road ahead",
      mainTextPost:
        "Jerusalem is a holy city of true believers. The atmosphere here crackles loudest when the faithful celebrate their religious holidays, especially in the walled Old City where the Christian, Jewish and Islamic holy sites are minutes away from each other.",
    },
  ];

  return (
    <div className=" w-screen  lg:w-[100%] h-auto md:min-h-[100vh]  ">
      <div className="flex  flex-wrap justify-center md:justify-start  md:gap-12 lg:gap-8 xl:gap-5 p-4  ">
        {CardData.map((data) => (
          <Card
            id={data.id}
            key={data.id}
            profileUrl={data.profileUrl}
            channelName={data.channelName}
            timePost={data.timePost}
            channelImg={data.channelImg}
            tagPost={data.tagPost}
            titlePost={data.titlePost}
            mainTextPost={data.mainTextPost}
          />
        ))}
      </div>
    </div>
  );
}
