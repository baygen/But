
const appWordStructure = {
  appName: 'app',
  Name: 'Name',
  SecondName: 'Second name',
  Age: 'Age',
  Accept: 'Accept',
  Decline: 'Decline',
  Cancel: 'Cancel',
  Template: 'Template',
  Nationality: 'Nationality',
  Profile: 'Profile'
};

const appWordStructureUA = {
  appName: 'Назва програми',
  Name: 'Імʼя',
  SecondName: 'Прізвище',
  Age: 'Вік',
  Accept: 'Прийняти',
  Decline: 'Відхилити',
  Cancel: 'Відмінити',
  Template: 'Взірець',
  Nationality: 'Національність',
  Profile: 'Профіль'
};

const LANGUAGES_ISO = {
  en: appWordStructure,
  ua: appWordStructureUA,
};

class WordManager {
  constructor() {
    this.currentLanguage = 'en';
    this.word = LANGUAGES_ISO[this.currentLanguage];
  }

  setCurrentLanguage(ln) {
    console.log('New language ' + ln.slice(0, 2).toLowerCase());
    this.currentLanguage = this.currentLanguage === 'ua' ? 'en' : 'ua';
    this.word = LANGUAGES_ISO[this.currentLanguage];
  }

}

export default new WordManager();
