import LocalizedStrings from 'react-native-localization';
import english from './english';
import malay from './malay';

let Strings = new LocalizedStrings({
  en: english,
  ms: malay,
});

export default Strings;
