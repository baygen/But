import Constants from "../../../redux/constants";

export const setTermsAndConditionState = (status, time) => {
  return {
    type: Constants.SET_TERMS_AGRREDING,
    payload: { status, time }
  }
}