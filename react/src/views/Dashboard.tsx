import React from "react";

// icon-import
import { FaHandHoldingUsd, FaStethoscope, FaUserShield, FaUserTie } from "react-icons/fa";
import { FaBuildingColumns, FaUserDoctor } from "react-icons/fa6";
import { GiHealthNormal, GiMedicinePills, GiPathDistance, GiSyringe } from "react-icons/gi";
import { HiBuildingLibrary, HiOutlineBuildingLibrary } from "react-icons/hi2";
import { ImHammer2 } from "react-icons/im";
import { MdAutoGraph, MdOutlineCamera } from "react-icons/md";
import { PiHandshakeBold } from "react-icons/pi";
import { RiAdminFill } from "react-icons/ri";
import { useAddressContext } from "../def-hooks/addressContext";
import { useResetState } from "../def-hooks/ResetStateContext";
import { useClient } from "../hooks/useClient";
import useHdoacommandcenterHdoacommandcenter from "../hooks/useHdoacommandcenterHdoacommandcenter";
import { hookOptions, perPage } from "../utils/library";
import RandomRGB from "../utils/RandomRGB";

export default function Dashboard() {
  const lcaClient = useClient();

  const creatorAddressObject = useAddressContext();

  const { resetState: latestIndexes } = useResetState();
  const { QueryDomainAll, QueryCommerceAll, QueryComplianceAll, QueryGovernanceAll, QueryFactoryAll } =
    useHdoacommandcenterHdoacommandcenter();
  // DOMAIN VALUES
  const domainAll = QueryDomainAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );
  const domainLatestIndex = isNaN(Number(latestIndexes[2])) ? 0 : Number(latestIndexes[2]);
  const domainLatestValue = domainAll?.data?.pages?.[0]?.Domain?.[domainLatestIndex] || {};
  const domainInitValue = {
    adminPathway: domainLatestValue?.adminPathway || false,
    docPathway: domainLatestValue?.docPathway || false,
    nursePathway: domainLatestValue?.nursePathway || false,
    resourceTracing: domainLatestValue?.resourceTracing || false,
    pharmaPathway: domainLatestValue?.pharmaPathway || false,
    pathModelling: domainLatestValue?.pathModelling || false,
  };
  // COMMERCE VALUES
  const commerceAll = QueryCommerceAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );
  const commerceLatestIndex = isNaN(Number(latestIndexes[0])) ? 0 : Number(latestIndexes[0]);
  const commerceLatestValue = commerceAll?.data?.pages?.[0]?.Commerce?.[commerceLatestIndex] || {};
  const commerceInitValue = {
    access: commerceLatestValue?.access || false,
    fractionalize: commerceLatestValue?.fractionalize || false,
    sell: commerceLatestValue?.sell || false,
  };
  // GOVERNANCE VALUES
  const governanceAll = QueryGovernanceAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );
  const governanceLatestIndex = isNaN(Number(latestIndexes[3])) ? 0 : Number(latestIndexes[3]);
  const governanceLatestValue = governanceAll?.data?.pages?.[0]?.Governance?.[governanceLatestIndex] || {};
  const governanceInitValue = {
    commerceGov: governanceLatestValue?.commerceGov || false,
    complianceGov: governanceLatestValue?.complianceGov || false,
    healthcareGov: governanceLatestValue?.healthcareGov || false,
  };
  // COMPLIANCE VALUES
  const complianceAll = QueryComplianceAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );
  const complianceLatestIndex = isNaN(Number(latestIndexes[1])) ? 0 : Number(latestIndexes[1]);
  const complianceLatestValue = complianceAll?.data?.pages?.[0]?.Compliance?.[complianceLatestIndex] || {};
  const complianceInitValue = {
    dataSecCompliance: complianceLatestValue?.dataSecCompliance || false,
    govOversight: complianceLatestValue?.govOversight || false,
    hipaaOversight: complianceLatestValue?.hipaaOversight || false,
  };
  // FACTORY MODE VALUES
  const factoryModeAll = QueryFactoryAll(
    { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": false },
    hookOptions,
    perPage,
  );
  const factoryModeLatestIndex = isNaN(Number(latestIndexes[2])) ? 0 : Number(latestIndexes[2]);
  const factoryModeLatestValue = factoryModeAll?.data?.pages?.[0]?.Factory?.[factoryModeLatestIndex] || {};
  const factoryModeInitValue = {
    mode: factoryModeLatestValue?.mode || 0,
  };

  const handlePathModelling = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission
    const domainNewValue = { ...domainInitValue, pathModelling: true };

    // create transaction to create raw material data
    try {
      const tx_result = await lcaClient.HdoacommandcenterHdoacommandcenter.tx.sendMsgUpdateDomain({
        value: {
          creator: creatorAddressObject?.address,
          id: domainLatestIndex,
          ...domainNewValue,
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

  const handleFractionalize = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission
    const commerceNewValue = { ...commerceInitValue, fractionalize: true };

    // create transaction to create raw material data
    try {
      const tx_result = await lcaClient.HdoacommandcenterHdoacommandcenter.tx.sendMsgUpdateCommerce({
        value: {
          creator: creatorAddressObject?.address,
          id: commerceLatestIndex,
          ...commerceNewValue,
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

  const handleCommerceGov = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission
    const governanceNewVal = { ...governanceInitValue, commerceGov: true };

    // create transaction to create raw material data
    try {
      const tx_result = await lcaClient.HdoacommandcenterHdoacommandcenter.tx.sendMsgUpdateGovernance({
        value: {
          creator: creatorAddressObject?.address,
          id: domainLatestIndex,
          ...governanceNewVal,
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

  const handleHipaaOversight = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission
    const complianceNewVal = { ...complianceInitValue, hipaaOversight: true };

    // create transaction to create raw material data
    try {
      const tx_result = await lcaClient.HdoacommandcenterHdoacommandcenter.tx.sendMsgUpdateCompliance({
        value: {
          creator: creatorAddressObject?.address,
          id: domainLatestIndex,
          ...complianceNewVal,
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

  const commerceJSX = !commerceInitValue?.fractionalize ? (
    <>
      <h3 className="text-xl mb-3">Asset Price: $564k</h3>
      <h4 className="text-lg mb-2">Share Owners:</h4>
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
      <h3 className="text-xl mb-3">Asset Price: $849k</h3>
      <h4 className="text-lg mb-2">Share Owners:</h4>
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
  );

  const governanceJSX = !governanceInitValue?.commerceGov ? (
    <>
      <h3 className="text-xl mb-3">Asset Price: DISABLED</h3>
      <h4 className="text-lg mb-2">Share Owners:</h4>
      <p className="text-sm">
        0xaecdoo: <strong>DISABLED</strong>
      </p>
      <p className="text-sm">
        0xaecdba: <strong>DISABLED</strong>
      </p>
      <p className="text-sm">
        0xcd3223: <strong>DISABLED</strong>
      </p>
      <p className="text-sm">
        Fractions: <strong>DISABLED</strong>
      </p>
    </>
  ) : (
    commerceJSX
  );

  const hipaaJSX = complianceInitValue?.hipaaOversight ? (
    <>
      <h4 className="text-lg mb-2">HIPAA STATUS:</h4>
      <br />
      <p className="text-sm">
        HIPAA Compliant: <strong>TRUE</strong>
      </p>
      <p className="text-sm">
        HIPAA Cert. ID: <strong>HIPAA-CERT-2024-XYZ123</strong>
      </p>
      <p className="text-sm">
        HIPAA Validity: <strong>2028-12-31</strong>
      </p>
    </>
  ) : (
    <>
      <h4 className="text-lg mb-2">HIPAA STATUS:</h4>
      <br />
      <p className="text-sm">
        HIPAA Compliant: <strong>FALSE</strong>
      </p>
      <p className="text-sm">
        HIPAA Cert. ID: <strong>-NA-</strong>
      </p>
      <p className="text-sm">
        HIPAA Validity: <strong>-NA-</strong>
      </p>
    </>
  );

  const uniqueVariant = factoryModeInitValue?.mode || 0;

  console.log("domainValue: ", domainAll, " domainNewValue: ", domainInitValue, " latestIndexes: ", latestIndexes);

  return (
    <main className="container m-auto my-4 grid grid-cols-12 grid-rows-9 gap-4">
      <div className="left col-start-1 col-span-2 row-start-3 row-span-5 flex flex-col items-center justify-center gap-4 p-4 am-bg-translucent rounded-2xl am-esg-bg-gray">
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

        <button
          className="icons flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none"
          onClick={handleFractionalize}
        >
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <MdOutlineCamera />
          </span>
          <span className="text-center uppercase font-medium">FRACTIONALIZE</span>
        </button>
      </div>
      <div className="top col-start-1 col-span-12 row-start-1 row-span-2 flex flex-wrap items-center justify-evenly gap-4 p-4 am-bg-translucent rounded-2xl am-esg-bg-lightyellow">
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

        <button
          className="icons flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none"
          onClick={handleCommerceGov}
        >
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <HiOutlineBuildingLibrary />
          </span>
          <span className="text-center uppercase font-medium">
            Commerce
            <br />
            GOVERNANCE
          </span>
        </button>

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
          {governanceJSX}

          <p className="text-sm mt-2">
            Access: <strong>{!commerceInitValue?.access ? "DISABLED" : "ENABLED"}</strong>
          </p>
          <br />
          <br />

          {hipaaJSX}
        </div>
        <div className="button flex-1 flex flex-col items-center justify-center gap-1">
          <span className="text-8xl rounded-[50%] border-4 border-black p-4">
            <GiHealthNormal />
          </span>
          <span
            className="text-center font-bold text-4xl"
            style={{ color: uniqueVariant === 0 ? "#000000" : RandomRGB() }}
          >
            <em>h</em>
            {`DOA : ${Number(uniqueVariant + 1)}`}
          </span>
        </div>
        <div className="border-0 rounded-2xl p-4 h-full flex-1 resize-none am-bg-translucent-blue flex flex-col justify-center">
          {domainInitValue?.pathModelling ? (
            <>
              <p className="text-lg">PATHWAY STATUS</p>
              <br />
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
              <p className="text-lg">PATHWAY STATUS</p>
              <br />
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
          <br />
          <br />
          <>
            <h4 className="text-lg mb-2">FDA STATUS:</h4>
            <p className="text-sm">
              FDA Reg: <strong>F667.7729</strong>
            </p>
            <p className="text-sm">
              Approval Date: <strong>2018-7-2</strong>
            </p>
            <p className="text-sm">
              Regulatory Path: <strong>Class II - 510(k)</strong>
            </p>
          </>
        </div>
      </div>

      <div className="right col-start-11 col-span-2 row-start-3 row-span-5 flex flex-col gap-4 p-4 am-bg-translucent rounded-2xl am-esg-bg-lightblue">
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

        <button
          className="icons flex flex-col items-center justify-center gap-1 cursor-pointer focus:outline-none"
          onClick={handleHipaaOversight}
        >
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <ImHammer2 />
          </span>
          <span className="text-center uppercase font-medium">Hipaa Oversight</span>
        </button>

        <div className="w-[min(185px,100%)] icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <FaUserTie />
          </span>
          <span className="text-center uppercase font-medium">FDA Oversight</span>
        </div>

        <div className="w-[min(185px,100%)] icons flex flex-col items-center justify-center gap-1">
          <span className="text-4xl rounded-[50%] border-4 border-black p-3">
            <FaUserShield />
          </span>
          <span className="text-center uppercase font-medium">GDPR Compliance</span>
        </div>
      </div>
    </main>
  );
}
