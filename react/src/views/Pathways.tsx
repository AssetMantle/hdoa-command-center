/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from "react";
import { FaMinusCircle } from "react-icons/fa";
import { SiTicktick } from "react-icons/si";
import LeftSvg from "../components/traceability/LeftSvg";
import RightSvg from "../components/traceability/RightSvg";
// import useEsgobservabilitydemoEsgobservabilitydemo from "../hooks/useEsgobservabilitydemoEsgobservabilitydemo";

export default function Pathways() {
  const [Sign1, setSign1] = useState(true);
  const [Sign2, setSign2] = useState(false);

  // latest reset index values for Raw Material Extraction, Material Processing, Manufacturing and Transportation respectively
  const [latestIndexes, setLatestIndexes] = useState([0, 0, 0, 0]);

  const hookOptions = {
    // ... other options
    refetchInterval: 2000, // Revalidate every 2 seconds
  };
  const perPage = 100;

  // const {
  //   QueryManufacturingAll,
  //   QueryTransportationAll,
  //   QueryMaterialProcessingAll,
  //   QueryRawMaterialExtractionAll,
  //   QueryManufacturing,
  //   QueryMaterialProcessing,
  //   QueryRawMaterialExtraction,
  //   QueryTransportation,
  // } = useEsgobservabilitydemoEsgobservabilitydemo();

  // const rawMaterialAll = QueryRawMaterialExtractionAll(
  //   { "pagination.limit": perPage, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": true },
  //   hookOptions,
  //   perPage,
  // );

  // const rawMaterialLatest = rawMaterialAll?.data?.pages?.[0]?.pagination?.total || 0;

  // const {
  //   data: rawMaterialLatestData,
  //   error: rawMaterialLatestErro,
  //   isError: rawMaterialLatestIsError,
  //   isLoading: rawMaterialLatestIsLoading,
  // } = QueryRawMaterialExtraction(latestIndexes?.[0]?.toString?.(), hookOptions);

  // const materialProcessingAll = QueryMaterialProcessingAll(
  //   { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": false, "pagination.reverse": true },
  //   hookOptions,
  //   perPage,
  // );

  // const materialProcessingLatest = materialProcessingAll?.data?.pages?.[0]?.pagination?.total || 0;

  // const {
  //   data: materialProcessingLatestData,
  //   error: materialProcessingLatestError,
  //   isError: materialProcessingLatestIsError,
  //   isLoading: materialProcessingLatestIsLoading,
  // } = QueryMaterialProcessing(latestIndexes?.[1]?.toString?.(), hookOptions);

  // const manufacturingAll = QueryManufacturingAll(
  //   { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": true },
  //   hookOptions,
  //   perPage,
  // );

  // const manufacturingLatest = manufacturingAll?.data?.pages?.[0]?.pagination?.total || 0;

  // const {
  //   data: manufacturingLatestData,
  //   error: manufacturingLatestError,
  //   isError: manufacturingLatestIsError,
  //   isLoading: manufacturingLatestIsLoading,
  // } = QueryManufacturing(latestIndexes?.[2]?.toString?.(), hookOptions);

  // const transportationAll = QueryTransportationAll(
  //   { "pagination.limit": 100, "pagination.offset": 0, "pagination.count_total": true, "pagination.reverse": true },
  //   hookOptions,
  //   perPage,
  // );

  // const transportationLatest = materialProcessingAll?.data?.pages?.[0]?.pagination?.total || 0;

  // const {
  //   data: transportationLatestData,
  //   error: transportationLatestError,
  //   isError: transportationLatestIsError,
  //   isLoading: transportationLatestIsLoading,
  // } = QueryTransportation(latestIndexes?.[3]?.toString?.(), hookOptions);

  // const handleResetFlow = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
  //   event.preventDefault(); // Prevents default behavior, if needed
  //   console.log("Button clicked!");
  //   console.log("rawMaterialLatest: ", rawMaterialLatest);
  //   console.log("materialProcessingLatest: ", materialProcessingLatest);
  //   console.log("manufacturingLatest: ", manufacturingLatest);
  //   console.log("transportationLatest: ", transportationLatest);
  // };

  const step = {
    title: "Raw Material Extracting",
    hash: "asdfjakjhwnan",
    primaryKey: "asdfjakjhwnan",
    otherKey: "asdfjakjhwnan",
    state: "completed",
  };

  const DATA = {
    title: "Title Here",
    details: [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur, fuga voluptas quo beatae ut!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur, fuga voluptas quo beatae ut!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam consequuntur, fuga voluptas quo beatae ut!",
    ],
    centerSteps: [
      {
        title: "Doctor",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "completed",
      },
      {
        title: "Administrative Stuff",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "completed",
      },
    ],
    leftSteps: [
      {
        title: "Nurses",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "",
      },
      {
        title: "Pharmacist",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "",
      },
    ],
    rightSteps: [
      {
        title: "Nurses",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "completed",
      },
      {
        title: "Pharmacist",
        hash: "asdfjakjhwnan",
        primaryKey: "asdfjakjhwnan",
        otherKey: "asdfjakjhwnan",
        state: "",
      },
    ],
    RatingsData: [
      {
        title: "Raw Material Extraction Stage Emissions: ",
        point: 4,
      },
      {
        title: "Material Processing Stage Emissions: ",
        point: 5,
      },
      {
        title: "Manufacturing Stage Emissions: ",
        point: 4,
      },
      {
        title: "Distribution Stage Emissions: ",
        point: 3,
      },
    ],
  };

  return (
    <div className="am-esg-traceability">
      <main className="am-bg-translucent">
        <div className="content">
          <div className="center">
            {DATA?.centerSteps &&
              Array.isArray(DATA?.centerSteps) &&
              DATA?.centerSteps.length > 0 &&
              React.Children.toArray(
                DATA?.centerSteps.map((step) => (
                  <div className="step">
                    <div className={`indicator ${step?.state === "completed" ? "active" : ""}`}>
                      {step?.state === "completed" ? (
                        <SiTicktick className="icon" />
                      ) : (
                        <FaMinusCircle className="icon" />
                      )}
                      <span></span>
                    </div>
                    <div className="content">
                      <h2>{step?.title}</h2>
                      <p className="hash">Hash: {step?.hash}</p>
                      <p className="key primary">Primary Key: {step?.primaryKey}</p>
                      <p className="key others">Other Key: {step?.otherKey}</p>
                    </div>
                  </div>
                )),
              )}
          </div>
        </div>
        <div className="content">
          <div className={`left ${DATA?.leftSteps?.[0]?.state === "completed" ? "active" : ""}`}>
            <LeftSvg active={DATA?.leftSteps?.[0]?.state === "completed"} />
            {DATA?.leftSteps &&
              Array.isArray(DATA?.leftSteps) &&
              DATA?.leftSteps.length > 0 &&
              React.Children.toArray(
                DATA?.leftSteps.map((step) => (
                  <div className="step">
                    <div className={`indicator ${step?.state === "completed" ? "active" : ""}`}>
                      {step?.state === "completed" ? (
                        <SiTicktick className="icon" />
                      ) : (
                        <FaMinusCircle className="icon" />
                      )}
                      <span></span>
                    </div>
                    <div className="content">
                      <h2>{step?.title}</h2>
                      <p className="hash">Hash: {step?.hash}</p>
                      <p className="key primary">Primary Key: {step?.primaryKey}</p>
                      <p className="key others">Other Key: {step?.otherKey}</p>
                    </div>
                  </div>
                )),
              )}
          </div>
          <div className={`right ${DATA?.rightSteps?.[0]?.state === "completed" ? "active" : ""}`}>
            <RightSvg active={DATA?.rightSteps?.[0]?.state === "completed"} />
            {DATA?.rightSteps &&
              Array.isArray(DATA?.rightSteps) &&
              DATA?.rightSteps.length > 0 &&
              React.Children.toArray(
                DATA?.rightSteps.map((step) => (
                  <div className="step">
                    <div className={`indicator ${step?.state === "completed" ? "active" : ""}`}>
                      {step?.state === "completed" ? (
                        <SiTicktick className="icon" />
                      ) : (
                        <FaMinusCircle className="icon" />
                      )}
                      <span></span>
                    </div>
                    <div className="content">
                      <h2>{step?.title}</h2>
                      <p className="hash">Hash: {step?.hash}</p>
                      <p className="key primary">Primary Key: {step?.primaryKey}</p>
                      <p className="key others">Other Key: {step?.otherKey}</p>
                    </div>
                  </div>
                )),
              )}
          </div>
        </div>
      </main>
    </div>
  );
}