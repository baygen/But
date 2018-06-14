import { TermsAndConditions } from "../../../redux/constants";

export const setDataProtectionState = (status, time) => {
  return {
    type: TermsAndConditions.SET_TERMS_AGRREDING,
    payload: { status, time }
  }
}