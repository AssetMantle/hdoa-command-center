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
import { useClient } from "../hooks/useClient";
import { useResetState } from "../def-hooks/ResetStateContext";
import useHdoacommandcenterHdoacommandcenter from "../hooks/useHdoacommandcenterHdoacommandcenter";
import { hookOptions, perPage } from "../utils/library";
import { useAddressContext } from "../def-hooks/addressContext";

export default function Dashboard() {
  const [Left, setLeft] = useState("");
  const [Right, setRight] = useState("");
  const lcaClient = useClient();

  const creatorAddressObject = useAddressContext();

  const { resetState: latestIndexes } = useResetState();
  const { QueryDomainAll, QueryDomain } = useHdoacommandcenterHdoacommandcenter();
  const domainAll = QueryDomainAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );

  const domainLatestIndex = isNaN(Number(latestIndexes[2])) ? 0 : Number(latestIndexes[2]);
  const domainLatestValue = domainAll?.data?.pages?.[0]?.Domain?.[domainLatestIndex] || {};
  const domainNewValue = {
    adminPathway: domainLatestValue?.adminPathway || false,
    docPathway: domainLatestValue?.docPathway || false,
    nursePathway: domainLatestValue?.nursePathway || false,
    resourceTracing: domainLatestValue?.resourceTracing || false,
    pharmaPathway: domainLatestValue?.pharmaPathway || false,
    pathModelling: true,
  };

  const handlePathModelling = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission

    // create transaction to create raw material data
    try {
      const tx_result = await lcaClient.HdoacommandcenterHdoacommandcenter.tx.sendMsgUpdateDomain({
        value: {
          creator: creatorAddressObject?.address,
          id: domainLatestIndex,
          adminPathway: domainNewValue?.adminPathway || false,
          docPathway: domainNewValue?.docPathway || false,
          nursePathway: domainNewValue?.nursePathway || false,
          pathModelling: domainNewValue?.pathModelling || false,
          pharmaPathway: domainNewValue?.pharmaPathway || false,
          resourceTracing: domainNewValue?.resourceTracing || false,
        },
        fee: {
          amount: [{ amount: "0", denom: "stake" }],
          gas: "200000",
        },
        memo: "",
      });
      alert("Transaction Submitted. Wait for confirmation");
    } catch (error) {
      console.error("Error during handle submit: ", error);
    }
  };

  console.log("domainValue: ", domainAll, " domainNewValue: ", domainNewValue, " latestIndexes: ", latestIndexes);

  return (
    <main className="container m-auto my-4 grid grid-cols-12 grid-rows-9 gap-4">
      <div className="left col-start-1 col-span-2 row-start-3 row-span-5 flex flex-col items-center justify-center gap-4 p-4 am-bg-translucent rounded-2xl am-esg-bg-cyan">
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
      <div className="top col-start-1 col-span-12 row-start-1 row-span-2 flex flex-wrap items-center justify-evenly gap-4 p-4 am-bg-translucent rounded-2xl am-esg-bg-cyan">
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
        <div className="border-0 rounded-2xl p-4 h-full flex-1 resize-none am-bg-translucent-blue flex flex-col justify-center">
          <h3 className="text-xl mb-3">Asset Price: $864k</h3>
          <h4 className="text-lg mb-2">Share Owners:</h4>

          {!Left ? (
            <>
              <p className="text-sm">
                0xaecdoo: <strong>1</strong>
              </p>
              <p className="text-sm">
                0xaecdba: <strong>0</strong>
              </p>
              <p className="text-sm">
                0xcd3223: <strong>0</strong>
              </p>
              <p className="text-sm">
                Fractions: <strong>1</strong>
              </p>
            </>
          ) : (
            <>
              <p className="text-sm">
                0xaecdoo: <strong>40%</strong>
              </p>
              <p className="text-sm">
                0xaecdba: <strong>30%</strong>
              </p>
              <p className="text-sm">
                0xcd3223: <strong>30%</strong>
              </p>
              <p className="text-sm">
                Fractions: <strong>100</strong>
              </p>
            </>
          )}
          <p className="text-sm mt-2">
            Access: <strong>{!Left ? "Disabled" : "Enabled"}</strong>
          </p>
        </div>
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
        <div className="border-0 rounded-2xl p-4 h-full flex-1 resize-none am-bg-translucent-blue flex flex-col justify-center">
          {!Right ? (
            <>
              <p className="text-sm">
                Pathway Model: <strong>P3290</strong>
              </p>
              <p className="text-sm">
                Adaptive: <strong>True</strong>
              </p>
              <p className="text-sm">
                Speciality: <strong>Oncology</strong>
              </p>
              <p className="text-sm">
                Population Type: <strong>Geriatric</strong>
              </p>
              <p className="text-sm">
                Clinical Condition: <strong>Lung Cancer</strong>
              </p>
              <p className="text-sm">
                Patients: <strong>22119</strong>
              </p>
            </>
          ) : (
            <>
              <p className="text-sm">
                Pathway Model: <strong>7277</strong>
              </p>
              <p className="text-sm">
                Adaptive: <strong>False</strong>
              </p>
              <p className="text-sm">
                Speciality: <strong>Oncology</strong>
              </p>
              <p className="text-sm">
                Population Type: <strong>Pediatric</strong>
              </p>
              <p className="text-sm">
                Clinical Condition: <strong>Lung Cancer</strong>
              </p>
              <p className="text-sm">
                Patients: <strong>33225</strong>
              </p>
            </>
          )}
        </div>
      </div>

      <div className="right col-start-11 col-span-2 row-start-3 row-span-5 flex flex-col gap-4 p-4 am-bg-translucent rounded-2xl">
        <div className="title uppercase text-center text-xl col-span-1">Domains</div>

        <div className="grid grid-cols-2 gap-4">
          <button
            className="icons flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none"
            onClick={() => console.log("Button clicked!")}
          >
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <FaStethoscope />
            </span>
            <span className="text-center uppercase font-medium">
              Doc
              <br />
              Pathway
            </span>
          </button>

          <button
            className="icons flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none"
            onClick={handlePathModelling}
          >
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <GiPathDistance />
            </span>
            <span className="text-center uppercase font-medium">
              Path
              <br />
              Modelling
            </span>
          </button>

          <button
            className="icons flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none"
            onClick={() => console.log("Button clicked!")}
          >
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <FaUserDoctor />
            </span>
            <span className="text-center uppercase font-medium">
              Nurse
              <br />
              Pathway
            </span>
          </button>

          <button
            className="icons flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none"
            onClick={() => console.log("Button clicked!")}
          >
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <GiSyringe />
            </span>
            <span className="text-center uppercase font-medium">
              Resource
              <br />
              Tracing
            </span>
          </button>

          <button
            className="icons flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none"
            onClick={() => console.log("Button clicked!")}
          >
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <GiMedicinePills />
            </span>
            <span className="text-center uppercase font-medium">
              Pharma
              <br />
              Pathway
            </span>
          </button>

          <button
            className="icons flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none"
            onClick={() => console.log("Button clicked!")}
          >
            <span className="text-4xl rounded-[50%] border-4 border-black p-3">
              <RiAdminFill />
            </span>
            <span className="text-center uppercase font-medium">
              Admin
              <br />
              Pathway
            </span>
          </button>
          {/* -- */}
        </div>
      </div>
      <div className="bottom col-start-1 col-span-12 row-start-8 row-span-2 flex flex-wrap items-center justify-evenly gap-4 p-4 am-bg-translucent rounded-2xl am-esg-bg-cyan">
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
