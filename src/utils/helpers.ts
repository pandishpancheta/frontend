const bytes32 = require("p");

export const messageToBytes32 = (message: string): string => {
    const cleanedUuid = message.replace(/-/g, "");
    if (cleanedUuid.length !== 32) {
      throw new Error("Invalid UUID length");
    }
    console.log("cleanedUuid", cleanedUuid);
    const bytes32Uuid = bytes32({ input: cleanedUuid });
    return bytes32Uuid;
  };