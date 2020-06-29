import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  safe: {flex: 1},
  headerContainer: {marginTop: 60, marginBottom: 30},
  coverContainer: {flex: 1, alignItems: 'center'},
  artTitleContainer: {marginTop: 10, marginBottom: 40, marginLeft: 20, marginRight: 20},
  artTitle: {fontSize: 35, marginTop: 20, marginBottom: 10},
  artSubtitle: {fontSize: 20},
  cover: {
    height: 300,
    width: 300,
    borderRadius: 20,
  },
  buttonContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 30,
    marginLeft: 30,
  },
  activeButton: {
    flex: 1,
    alignItems: 'center',
  },
  activeText: {
    marginTop: 20,
  },
  activeFab: {
    backgroundColor: '#ffffff',
  },
});
