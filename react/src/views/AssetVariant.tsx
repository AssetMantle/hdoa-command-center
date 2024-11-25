import React, { useState } from "react";
import { GiHealthNormal } from "react-icons/gi";

export default function AssetVariant() {
  const [TermStandard, setTermStandard] = useState("ICD");
  const [DataExchange, setDataExchange] = useState("CCDA");
  const [Biomedical, setBiomedical] = useState("UMLS");
  const [WorkflowStandard, setWorkflowStandard] = useState("XDS");
  const [DataPrivacy, setDataPrivacy] = useState("HIPAA");
  const [Interoperability, setInteroperability] = useState("ANSIHITSP");
  const [ImagingStandard, setImagingStandard] = useState("VendorSpecific");
  const [SecurityStandard, setSecurityStandard] = useState("ISO27799");

  return (
    <main className="container m-auto my-4 grid grid-cols-3 grid-rows-3 gap-4 am-bg-translucent">
      <div className="item flex p-6 pl-10">
        <div className="form w-[167px]">
          <p>Terminology Standard</p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              checked={"ICD" === TermStandard}
              name="termStandard"
              id="ICD"
              value="ICD"
              onChange={(e) => setTermStandard(e.target.value)}
            />
            <label htmlFor="ICD">ICD</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="termStandard"
              id="SCT"
              value="SCT"
              onChange={(e) => setTermStandard(e.target.value)}
            />
            <label htmlFor="SCT">SNOMED CT</label>
          </div>
        </div>
      </div>
      <div className="item flex p-6">
        <div className="form mx-auto w-[187px]">
          <p>Data Exchange Standard</p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              checked={"CCDA" === DataExchange}
              name="DataExchange"
              id="CCDA"
              value="CCDA"
              onChange={(e) => setDataExchange(e.target.value)}
            />
            <label htmlFor="CCDA">CCDA</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="DataExchange"
              id="HL7FHIR"
              value="HL7FHIR"
              onChange={(e) => setDataExchange(e.target.value)}
            />
            <label htmlFor="HL7FHIR">HL7 FHIR</label>
          </div>
        </div>
      </div>
      <div className="item flex p-6 ml-16">
        <div className="form mx-auto w-[174px]">
          <p>Biomedical Vocabulary</p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              checked={"UMLS" === Biomedical}
              name="Biomedical"
              id="UMLS"
              value="UMLS"
              onChange={(e) => setBiomedical(e.target.value)}
            />
            <label htmlFor="UMLS">UMLS</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="Biomedical"
              id="LIONC"
              value="LIONC"
              onChange={(e) => setBiomedical(e.target.value)}
            />
            <label htmlFor="LIONC">LIONC</label>
          </div>
        </div>
      </div>
      <div className="item flex p-6 pl-10">
        <div className="form w-[167px]">
          <p>Workflow Standard</p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              checked={"XDS" === WorkflowStandard}
              name="WorkflowStandard"
              id="XDS"
              value="XDS"
              onChange={(e) => setWorkflowStandard(e.target.value)}
            />
            <label htmlFor="XDS">XDS</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="WorkflowStandard"
              id="IHE"
              value="IHE"
              onChange={(e) => setWorkflowStandard(e.target.value)}
            />
            <label htmlFor="IHE">IHE</label>
          </div>
        </div>
      </div>
      <div className="item">
        <div className="button flex-1 flex flex-col items-center justify-center gap-1">
          <span className="text-7xl rounded-[50%] border-4 border-black p-4">
            <GiHealthNormal />
          </span>
          <span className="text-center font-bold">
            <em>h</em>DOA PREMIER
          </span>
          <button className="am-bg-translucent-blue py-1 px-3 rounded-md">Create</button>
        </div>
      </div>
      <div className="item flex p-6 ml-16">
        <div className="form mx-auto w-[174px]">
          <p>Data Privacy</p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              checked={"HIPAA" === DataPrivacy}
              name="DataPrivacy"
              id="HIPAA"
              value="HIPAA"
              onChange={(e) => setDataPrivacy(e.target.value)}
            />
            <label htmlFor="HIPAA">HIPAA</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="DataPrivacy"
              id="GDPR"
              value="GDPR"
              onChange={(e) => setDataPrivacy(e.target.value)}
            />
            <label htmlFor="GDPR">GDPR</label>
          </div>
        </div>
      </div>
      <div className="item flex p-6 pl-10">
        <div className="form w-[167px]">
          <p>Interoperability</p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              checked={"ANSIHITSP" === Interoperability}
              name="Interoperability"
              id="ANSIHITSP"
              value="ANSIHITSP"
              onChange={(e) => setInteroperability(e.target.value)}
            />
            <label htmlFor="ANSIHITSP">ANSI HITSP</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="Interoperability"
              id="FHIRUSCORE"
              value="FHIRUSCORE"
              onChange={(e) => setInteroperability(e.target.value)}
            />
            <label htmlFor="FHIRUSCORE">FHIR US CORE</label>
          </div>
        </div>
      </div>
      <div className="item flex p-6">
        <div className="form mx-auto w-[187px]">
          <p>Imaging Standard</p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              checked={"VendorSpecific" === ImagingStandard}
              name="ImagingStandard"
              id="VendorSpecific"
              value="VendorSpecific"
              onChange={(e) => setImagingStandard(e.target.value)}
            />
            <label htmlFor="VendorSpecific">Vendor Specific</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="ImagingStandard"
              id="DICOM"
              value="DICOM"
              onChange={(e) => setImagingStandard(e.target.value)}
            />
            <label htmlFor="DICOM">DICOM</label>
          </div>
        </div>
      </div>
      <div className="item flex p-6 ml-16">
        <div className="form mx-auto w-[174px]">
          <p>Security Standard</p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              checked={"ISO27799" === SecurityStandard}
              name="SecurityStandard"
              id="ISO27799"
              value="ISO27799"
              onChange={(e) => setSecurityStandard(e.target.value)}
            />
            <label htmlFor="ISO27799">ISO 27799</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="SecurityStandard"
              id="ISO27001"
              value="ISO27001"
              onChange={(e) => setSecurityStandard(e.target.value)}
            />
            <label htmlFor="ISO27001">ISO 27001</label>
          </div>
        </div>
      </div>
    </main>
  );
}
