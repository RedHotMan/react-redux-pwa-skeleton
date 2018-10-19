export const OWNER_NAME = "OWNER_NAME";

export function getOwnerName() {
  return {
    type: OWNER_NAME,
    payload: {
      ownerName: "Ilyaçe Regaibi"
    }
  };
}
