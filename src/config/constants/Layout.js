import { Dimensions } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export default {
  window: {
    width,
    height,
  },
  headerHeight:55,
  footerHeight:70,
  isSmallDevice: width < 375,
};
