import {scaleFont} from './mixins';

// FONT FAMILY
export const FONT_FAMILY_REGULAR = 'Poppins-Medium';
export const FONT_FAMILY_BOLD = 'Poppins-Bold';

// FONT SIZE
export const FONT_SIZE_16 = scaleFont(16);
export const FONT_SIZE_14 = scaleFont(14);
export const FONT_SIZE_12 = scaleFont(12);

// LINE HEIGHT
export const LINE_HEIGHT_24 = scaleFont(24);
export const LINE_HEIGHT_20 = scaleFont(20);
export const LINE_HEIGHT_16 = scaleFont(16);

// FONT STYLE
export const header = {
  fontSize: scaleFont(20),
  fontFamily: 'Poppins-SemiBold',
  color: 'black',
};

export const placeholder = {
  fontSize: scaleFont(12),
  fontFamily: 'Poppins-Medium',
  color: 'grey',
};

export const normal = {
  fontSize: scaleFont(12),
  fontFamily: 'Poppins-Medium',
  color: 'black',
};

export const small = {
  fontSize: scaleFont(9),
  fontFamily: 'Poppins-Medium',
  color: 'black',
};

export const largestSize = {
  fontSize: scaleFont(30),
  fontFamily: 'Poppins-Bold',
  color: 'black',
};

export const welcome = {
  fontSize: scaleFont(25),
  fontFamily: 'Poppins-Bold',
  color: '#444443',
};
