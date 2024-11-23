import { sha256 } from "@cosmjs/crypto";
import { toHex } from "@cosmjs/encoding";

export function convertToNumber(str: string): number {
  const num: number = Number(str); // Convert to number
  return isNaN(num) ? 0 : num; // Return 0 if NaN, otherwise the number
}

export function incrementStringNumber(str: string): string {
  // Convert the string to a number
  const num: number = Number(str);

  // Check if it's a valid number, if not return "0"
  if (isNaN(num)) {
    return "0";
  }

  // Increment the number and convert back to a string
  return (num + 1).toString();
}

export function getObjectHash(obj: Record<string, any>, hashLength: number): string {
  const objString = JSON.stringify(obj);
  const hashBytes = sha256(new TextEncoder().encode(objString));
  const hash = toHex(hashBytes);
  return hash.substring(0, hashLength);
}

export function getEmissionBenchmark(emissions: string): number {
  const emissionValue = parseFloat(emissions);

  if (isNaN(emissionValue)) {
    throw new Error("Invalid emissions value, cannot convert to number.");
  }

  if (emissionValue <= 100) {
    return 5; // 5 stars: Up to 100 kg CO2/year
  } else if (emissionValue <= 200) {
    return 4; // 4 stars: 101 – 200 kg CO2/year
  } else if (emissionValue <= 300) {
    return 3; // 3 stars: 201 – 300 kg CO2/year
  } else if (emissionValue <= 400) {
    return 2; // 2 stars: 301 – 400 kg CO2/year
  } else {
    return 1; // 1 star: 401+ kg CO2/year
  }
}

export function getWaterUseBenchmark(waterUsed: string): number {
  const waterValue = parseFloat(waterUsed);

  if (isNaN(waterValue) || waterValue < 0 || waterValue > 100) {
    throw new Error("Invalid water use value, must be a number between 0 and 100.");
  }

  if (waterValue <= 20) {
    return 5; // Best rating for lowest water use
  } else if (waterValue <= 40) {
    return 4;
  } else if (waterValue <= 60) {
    return 3;
  } else if (waterValue <= 80) {
    return 2;
  } else {
    return 1; // Lowest rating for highest water use
  }
}

export function getFuelUseBenchmark(fuelUsed: string): number {
  const fuelValue = parseFloat(fuelUsed);

  if (isNaN(fuelValue) || fuelValue < 0 || fuelValue > 1000) {
    throw new Error("Invalid fuel use value, must be a number between 0 and 1000.");
  }

  if (fuelValue <= 200) {
    return 5; // Best rating for lowest fuel use
  } else if (fuelValue <= 400) {
    return 4;
  } else if (fuelValue <= 600) {
    return 3;
  } else if (fuelValue <= 800) {
    return 2;
  } else {
    return 1; // Lowest rating for highest fuel use
  }
}

export function getAverageValue(emissions: (string | null | undefined)[]): string {
  const parseEmission = (value: string | null | undefined): number => {
    if (value === null || value === undefined || isNaN(Number(value))) {
      return 0.0;
    }
    return parseFloat(value);
  };

  const parsedEmissions = emissions.map(parseEmission);

  const total = parsedEmissions.reduce((sum, emission) => sum + emission, 0);
  const average = total / parsedEmissions.length;

  return average.toFixed(2);
}

export function formatRoleSerial(roleNumber: number, serialNumber: string): string {
  // Define role prefix mappings
  const rolePrefixes: { [key: number]: string } = {
    1: "DOC",
    2: "ADM",
    3: "NRS",
    4: "PHR",
  };

  // Check if role number is within the valid range
  if (!(roleNumber in rolePrefixes)) {
    throw new Error("Invalid role number. Must be between 1 and 4");
  }

  // Get the prefix based on role number
  const prefix: string = rolePrefixes[roleNumber];

  // Ensure serial number is always 3 digits
  const formattedSerial: string = serialNumber.padStart(3, "0");

  // Return the formatted output
  return `${prefix}${formattedSerial}`;
}

export function minifyAddress(input: string): string {
  // Check if input is long enough to be minified
  if (input.length <= 15) return input;

  // Extract first 11 characters and last 4 characters
  const prefix = input.slice(0, 11);
  const suffix = input.slice(-4);

  // Return the formatted minified string
  return `${prefix}...${suffix}`;
}

export const lowestEmission = 10;
export const highestEmission = 450;
export const lowestFuelUse = 0;
export const highestFuelUse = 1000;
export const lowestWaterUse = 0;
export const highestWaterUse = 100;
export const hookOptions = {
  // ... other options
  refetchInterval: 2000, // Revalidate every 2 seconds
};
export const perPage = 100;

export const aliceWalletAddress = "cosmos1ep7ucp87tu5dpzuayzyuqvjlz2ymjczftl2jqx";
export const bobWalletAddress = "cosmos1h436q8xd4w4ta7r255yz5gjh7aeknde4uwv02f";
export const doctorWalletAddress = "cosmos199sfwptd2u7tq8gu5gqrsj47qlf5u9s7qqnfht";
export const adminStaffWalletAddress = "cosmos1w466p2wdddds96zgrjwlgm7nef3q84z7uyyf4c";
export const nurse1WalletAddress = "cosmos1tsa8v985hqwjmhjn5hsznuyfuttcmwhekp5zpe";
export const nurse2WalletAddress = "cosmos1ynm7em07wp8ezdq8ceg7u27ncpet5lsek2skdj";
export const pharmacistWalletAddress = "cosmos1arfwns32lw99z2jhlyj8cgnjd7c06yf09y8l63";
