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
    <main className="container m-auto my-4 grid grid-cols-12 grid-rows-9 gap-4">
      <div className="left col-start-1 col-span-2 row-start-3 row-span-5 flex flex-col items-center justify-center gap-4 p-4 am-bg-translucent rounded-2xl">
        <div className="title uppercase text-center text-xl">Commerce</div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <FaHandHoldingUsd />
          </span>
          <span className="text-center uppercase font-medium">Sell</span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <PiHandshakeBold />
          </span>
          <span className="text-center uppercase font-medium">Trade</span>
        </div>
        <div className="icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <MdAutoGraph />
          </span>
          <span className="text-center uppercase font-medium">Access</span>
        </div>
        <div className="w-[min(166px,100%)] icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <MdOutlineCamera />
          </span>
          <span className="text-center uppercase font-medium">FRACTIONALIZE</span>
        </div>
      </div>
      <div className="top col-start-1 col-span-12 row-start-1 row-span-2 flex flex-wrap items-center justify-evenly gap-4 p-4 am-bg-translucent rounded-2xl">
        <div className="title uppercase text-center text-xl  w-full">Governance</div>
        <div className="w-[min(166px,100%)] icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <HiBuildingLibrary />
          </span>
          <span className="text-center uppercase font-medium">
            Healthcare
            <br />
            GOVERNANCE
          </span>
        </div>
        <div className="w-[min(166px,100%)] icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <HiOutlineBuildingLibrary />
          </span>
          <span className="text-center uppercase font-medium">
            Commerce
            <br />
            GOVERNANCE
          </span>
        </div>
        <div className="w-[min(166px,100%)] icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <FaBuildingColumns />
          </span>
          <span className="text-center uppercase font-medium">
            Compliance
            <br />
            GOVERNANCE
          </span>
        </div>
      </div>
      <div className="center col-start-3 col-span-8 row-start-3 row-span-5 flex items-center gap-4 p-4">
        <textarea
          className="border-0 rounded-2xl px-2 py-1 h-full flex-1 resize-none am-bg-translucent-blue"
          value={Left}
          onChange={(e) => setLeft(e.target.value)}
          placeholder=""
          required
        />
        <div className="button flex-1 flex flex-col items-center justify-center gap-1">
          <span className="text-8xl rounded-[50%] border-4 border-black p-4">
            <GiHealthNormal />
          </span>
          <span className="text-center uppercase font-medium">
            Healthcare Digitally
            <br />
            Owned Asset
          </span>
        </div>
        <textarea
          className="border-0 rounded-2xl px-2 py-1 h-full flex-1 resize-none am-bg-translucent-blue"
          value={Right}
          onChange={(e) => setRight(e.target.value)}
          placeholder=""
          required
        />
      </div>
      <div className="right col-start-11 col-span-2 row-start-3 row-span-5 flex flex-col gap-4 p-4 am-bg-translucent rounded-2xl">
        <div className="title uppercase text-center text-xl col-span-1">Domains</div>
        <div className="grid grid-cols-2 gap-4">
          <div className="icons flex flex-col items-center justify-center gap-1">
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <FaStethoscope />
            </span>
            <span className="text-center uppercase font-medium">
              Doc
              <br />
              Pathway
            </span>
          </div>
          <div className="icons flex flex-col items-center justify-center gap-1">
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <GiPathDistance />
            </span>
            <span className="text-center uppercase font-medium">
              Path
              <br />
              Modelling
            </span>
          </div>
          <div className="icons flex flex-col items-center justify-center gap-1">
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <FaUserDoctor />
            </span>
            <span className="text-center uppercase font-medium">
              Nurse
              <br />
              Pathway
            </span>
          </div>
          <div className="icons flex flex-col items-center justify-center gap-1">
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <GiSyringe />
            </span>
            <span className="text-center uppercase font-medium">
              Resource
              <br />
              Tracing
            </span>
          </div>
          <div className="icons flex flex-col items-center justify-center gap-1">
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <GiMedicinePills />
            </span>
            <span className="text-center uppercase font-medium">
              Pharma
              <br />
              Pathway
            </span>
          </div>
          <div className="icons flex flex-col items-center justify-center gap-1">
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <RiAdminFill />
            </span>
            <span className="text-center uppercase font-medium">
              Admin
              <br />
              Pathway
            </span>
          </div>
        </div>
      </div>
      <div className="bottom col-start-1 col-span-12 row-start-8 row-span-2 flex flex-wrap items-center justify-evenly gap-4 p-4 am-bg-translucent rounded-2xl">
        <div className="title uppercase text-center text-xl  w-full">Compliance</div>
        <div className="w-[min(185px,100%)] icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <ImHammer2 />
          </span>
          <span className="text-center uppercase font-medium">Hipaa Oversight</span>
        </div>
        <div className="w-[min(185px,100%)] icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <FaUserTie />
          </span>
          <span className="text-center uppercase font-medium">Gov Oversight</span>
        </div>
        <div className="w-[min(185px,100%)] icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <FaUserShield />
          </span>
          <span className="text-center uppercase font-medium">DataSec Compliance</span>
        </div>
      </div>
    </main>
  );
}
