import React, { useState } from "react";

// icon-import
import { FaHandHoldingUsd, FaStethoscope, FaUserShield, FaUserTie } from "react-icons/fa";
import { FaBuildingColumns, FaUserDoctor } from "react-icons/fa6";
import { GiHealthNormal, GiMedicinePills, GiPathDistance, GiSyringe } from "react-icons/gi";
import { HiBuildingLibrary, HiOutlineBuildingLibrary } from "react-icons/hi2";
import { ImHammer2 } from "react-icons/im";
import { MdAutoGraph, MdOutlineCamera } from "react-icons/md";
import { PiHandshakeBold } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";

export default function Dashboard() {
  const [Left, setLeft] = useState("");
  const [Right, setRight] = useState("");
  return (
    <main className="container m-auto grid grid-cols-12 grid-rows-12 gap-2">
      <div className="left col-start-1 col-span-2 row-start-1 row-span-8 flex flex-col gap-4 p-4">
        <div className="title uppercase text-center">Commerce</div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <MdAutoGraph />
          </span>
          <span className="text-center uppercase font-medium">Buy</span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <FaHandHoldingUsd />
          </span>
          <span className="text-center uppercase font-medium">Sell</span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <PiHandshakeBold />
          </span>
          <span className="text-center uppercase font-medium">Trade</span>
        </div>
      </div>
      <div className="top col-start-3 col-span-10 row-start-1 row-span-4 flex flex-wrap items-center justify-evenly gap-4 p-4">
        <div className="title uppercase text-center  w-full">Governance</div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <MdOutlineCamera />
          </span>
          <span className="text-center uppercase font-medium">
            FRACTIONALIZATION
            <br />
            GOVERNANCE
          </span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <HiBuildingLibrary />
          </span>
          <span className="text-center uppercase font-medium">
            Healthcare
            <br />
            GOVERNANCE
          </span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <HiOutlineBuildingLibrary />
          </span>
          <span className="text-center uppercase font-medium">
            Commerce
            <br />
            GOVERNANCE
          </span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <FaBuildingColumns />
          </span>
          <span className="text-center uppercase font-medium">
            Compliance
            <br />
            GOVERNANCE
          </span>
        </div>
      </div>
      <div className="center col-start-3 col-span-6 row-start-5 row-span-5 flex items-center gap-4 p-4">
        <textarea
          className="border-2 rounded-4 px-2 py-1 h-full flex-1 resize-none"
          value={Left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder=""
          required
        />
        <div className="button flex-1 flex flex-col items-center justify-center gap-1">
          <span className="text-5xl">
            <GiHealthNormal />
          </span>
          <span className="text-center uppercase font-medium">
            Healthcare Digitally
            <br />
            Owned Asset
          </span>
        </div>
        <textarea
          className="border-2 rounded-4 px-2 py-1 h-full flex-1 resize-none"
          value={Right}
          onChange={(e) => setRight(e.target.value)}
          placeholder=""
          required
        />
      </div>
      <div className="right col-start-9 col-span-4 row-start-5 row-span-8 grid grid-cols-2 gap-4 p-4">
        <div className="title uppercase text-center col-span-2">Domains</div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <FaStethoscope />
          </span>
          <span className="text-center uppercase font-medium">
            Doc
            <br />
            Pathway
          </span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <GiPathDistance />
          </span>
          <span className="text-center uppercase font-medium">
            Path
            <br />
            Modelling
          </span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <FaUserDoctor />
          </span>
          <span className="text-center uppercase font-medium">
            Nurse
            <br />
            Pathway
          </span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <GiSyringe />
          </span>
          <span className="text-center uppercase font-medium">
            Resource
            <br />
            Tracing
          </span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <GiMedicinePills />
          </span>
          <span className="text-center uppercase font-medium">
            Pharma
            <br />
            Pathway
          </span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <RiAdminFill />
          </span>
          <span className="text-center uppercase font-medium">
            Admin
            <br />
            Pathway
          </span>
        </div>
      </div>
      <div className="bottom col-start-1 col-span-8 row-start-10 row-span-3 flex flex-wrap items-center justify-evenly gap-4 p-4">
        <div className="title uppercase text-center  w-full">Compliance</div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <ImHammer2 />
          </span>
          <span className="text-center uppercase font-medium">Hipaa Oversight</span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <FaUserTie />
          </span>
          <span className="text-center uppercase font-medium">Gov Oversight</span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl">
            <FaUserShield />
          </span>
          <span className="text-center uppercase font-medium">DataSec Compliance</span>
        </div>
      </div>
    </main>
  );
}
