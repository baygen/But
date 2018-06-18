// import KeyMirror from 'keymirror';

const genereteConstantsFor = (title = '', actions) => {
  let temp = {};
  Object.keys(actions).forEach(key => {
    temp[key] = `${title}.${key}`;
  });
  return temp;
};

export const TermsAndConditions = genereteConstantsFor('TermsAndConditions', {
  SET_TERMS_AGRREDING: null,
  SET_DECLINE: null,

});

export const DataProtection = genereteConstantsFor('DataProtection', {
  SET_DECLINE: null,
  SET_TERMS_AGRREDING: null
});

export const App = genereteConstantsFor('App', {
  SET_IS_FIRST_LAUNCH: null,
  STARTED: null
});
