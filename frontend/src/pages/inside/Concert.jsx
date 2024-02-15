import React, { useContext } from "react";
import CardItem from "../../components/CardItem";
import logo from "../../public/impact-logo.png";
import thunderdomeImg from "../../img/inside/new-icon/inside-concert-thunderdome.jpg";
import arenaImg from "../../img/inside/new-icon/inside-concert-arena.jpg";
import iecImg from "../../img/inside/new-icon/inside-concert-iec.jpg";
import challengerImg from "../../img/inside/new-icon/inside-concert-challenger.jpg";
import PackageCard from "../../components/PackageCard";

const Concert = () => {
  return (
    <>
      <h3 className="m-8 text-center font-bold">เลือกประเภท Venue</h3>
      <div className="flex justify-center">
        <div className="mt-3 flex w-[80%] flex-wrap justify-between gap-5">
          <CardItem
            id="concertThunderdome"
            img={thunderdomeImg}
            url={"/summaryPage"}
            body="Thunderdome"
            dataType={"concert"}
          />
          <CardItem
            id="concertIec"
            img={iecImg}
            url={"/summaryPage"}
            body="IEC"
            dataType={"concert"}
          />
          <CardItem
            id="concertArena"
            img={arenaImg}
            url={"/summaryPage"}
            body="Arena"
            dataType={"concert"}
          />
          <CardItem
            id="concertChallenger"
            img={challengerImg}
            url={"/summaryPage"}
            body="Challenger"
            dataType={"concert"}
          />
        </div>
      </div>
      <PackageCard />
    </>
  );
};

export default Concert;
