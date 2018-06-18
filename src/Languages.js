
const appWordStructure = {
  appName: 'app',
  name: 'Name',
  secondName: 'Second name',
  age: 'Age',
  accept: 'Accept',
  decline: 'Decline'
};

const appWordStructureUA = {
  appName: 'Назва програми',
  name: 'Імʼя',
  secondName: 'Прізвище',
  age: 'Вік',
  accept: 'Прийняти',
  decline: 'Відхилити'
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

  setCurrentLanguage (ln) {
    console.log('New language '+ln.slice(0,2).toLowerCase());
    this.currentLanguage = this.currentLanguage === 'ua' ? 'en' : 'ua';
    this.word = LANGUAGES_ISO[this.currentLanguage];
  }

}

export default new WordManager();
