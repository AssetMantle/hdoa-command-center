import { useState } from "react";
import { GiHealthNormal } from "react-icons/gi";
import { useAddressContext } from "../def-hooks/addressContext";
import { useResetState } from "../def-hooks/ResetStateContext";
import useHdoacommandcenterHdoacommandcenter from "../hooks/useHdoacommandcenterHdoacommandcenter";
import { hookOptions, perPage } from "../utils/library";
import { useClient } from "../hooks/useClient";

export default function AssetVariant() {
  const creatorAddressObject = useAddressContext();

  const lcaClient = useClient();

  const { resetState: latestIndexes } = useResetState();
  const { QueryFactoryAll } = useHdoacommandcenterHdoacommandcenter();
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

  // State to hold selections, initialized with 8 items, all set to 0
  const [selections, setSelections] = useState<number[]>(Array(8).fill(0));

  // Handler to update the state based on selection
  const handleSelection = (index: number, value: number) => {
    const updatedSelections = [...selections];
    updatedSelections[index] = value; // Set 0 or 1 based on the selection
    setSelections(updatedSelections);
  };

  // Calculate unique numeric value based on binary string conversion
  const calculateUniqueValue = (): number => {
    return parseInt(selections.join(""), 2); // Convert binary array to decimal
  };

  const uniqueVariant = calculateUniqueValue();

  const handleFactoryMode = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.preventDefault(); // Prevent default form submission
    const factoryModeNewValue = { ...factoryModeInitValue, mode: uniqueVariant };

    // create transaction to create raw material data
    try {
      const tx_result = await lcaClient.HdoacommandcenterHdoacommandcenter.tx.sendMsgUpdateFactory({
        value: {
          creator: creatorAddressObject?.address,
          id: factoryModeLatestIndex,
          ...factoryModeNewValue,
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

  return (
    <main className="container m-auto my-4 grid grid-cols-3 grid-rows-3 gap-4 am-bg-translucent">
      <div className="item flex p-6 pl-10">
        <div className="form w-[167px]">
          <p>Terminology Standard</p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="termStandard"
              id="ICD"
              value="ICD"
              checked={selections[0] === 0}
              onChange={() => handleSelection(0, 0)}
            />
            <label htmlFor="ICD">ICD</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="termStandard"
              id="SCT"
              value="SCT"
              checked={selections[0] === 1}
              onChange={() => handleSelection(0, 1)}
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
              name="DataExchange"
              id="CCDA"
              value="CCDA"
              checked={selections[1] === 0}
              onChange={() => handleSelection(1, 0)}
            />
            <label htmlFor="CCDA">CCDA</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="DataExchange"
              id="HL7FHIR"
              value="HL7FHIR"
              checked={selections[1] === 1}
              onChange={() => handleSelection(1, 1)}
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
              name="Biomedical"
              id="UMLS"
              value="UMLS"
              checked={selections[2] === 0}
              onChange={() => handleSelection(2, 0)}
            />
            <label htmlFor="UMLS">UMLS</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="Biomedical"
              id="LIONC"
              value="LIONC"
              checked={selections[2] === 1}
              onChange={() => handleSelection(2, 1)}
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
              name="WorkflowStandard"
              id="XDS"
              value="XDS"
              checked={selections[3] === 0}
              onChange={() => handleSelection(3, 0)}
            />
            <label htmlFor="XDS">XDS</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="WorkflowStandard"
              id="IHE"
              value="IHE"
              checked={selections[3] === 1}
              onChange={() => handleSelection(3, 1)}
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
            <em>h</em>
            {`DOA Variant ${uniqueVariant + 1}`}
          </span>
          <button onClick={handleFactoryMode} className="am-bg-translucent-blue py-1 px-3 rounded-md">
            Factory Create
          </button>
        </div>
      </div>
      <div className="item flex p-6 ml-16">
        <div className="form mx-auto w-[174px]">
          <p>Data Privacy</p>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="DataPrivacy"
              id="HIPAA"
              value="HIPAA"
              checked={selections[4] === 0}
              onChange={() => handleSelection(4, 0)}
            />
            <label htmlFor="HIPAA">HIPAA</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="DataPrivacy"
              id="GDPR"
              value="GDPR"
              checked={selections[4] === 1}
              onChange={() => handleSelection(4, 1)}
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
              name="Interoperability"
              id="ANSIHITSP"
              value="ANSIHITSP"
              checked={selections[5] === 0}
              onChange={() => handleSelection(5, 0)}
            />
            <label htmlFor="ANSIHITSP">ANSI HITSP</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="Interoperability"
              id="FHIRUSCORE"
              value="FHIRUSCORE"
              checked={selections[5] === 1}
              onChange={() => handleSelection(5, 1)}
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
              name="ImagingStandard"
              id="VendorSpecific"
              value="VendorSpecific"
              checked={selections[6] === 0}
              onChange={() => handleSelection(6, 0)}
            />
            <label htmlFor="VendorSpecific">Vendor Specific</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="ImagingStandard"
              id="DICOM"
              value="DICOM"
              checked={selections[6] === 1}
              onChange={() => handleSelection(6, 1)}
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
              name="SecurityStandard"
              id="ISO27799"
              value="ISO27799"
              checked={selections[7] === 0}
              onChange={() => handleSelection(7, 0)}
            />
            <label htmlFor="ISO27799">ISO 27799</label>
          </div>
          <div className="flex items-center gap-1">
            <input
              type="radio"
              name="SecurityStandard"
              id="ISO27001"
              value="ISO27001"
              checked={selections[7] === 1}
              onChange={() => handleSelection(7, 1)}
            />
            <label htmlFor="ISO27001">ISO 27001</label>
          </div>
        </div>
      </div>
    </main>
  );
}
