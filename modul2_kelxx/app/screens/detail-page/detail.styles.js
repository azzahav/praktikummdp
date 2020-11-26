import {StyleSheet, Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const main = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    width,
    backgroundColor: '#f5f5f5',
    paddingLeft: 10,
    paddingRight: 10,
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  view1: {
    justifyContent: 'center',
    marginBottom: 20,
    alignItems: 'center',
  },
  view2: {
    backgroundColor: '#fff',
    flex: 1,
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 40,
    borderRadius: 30,
    marginTop: 5,
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  text: {
    fontSize: 15,
  },
  titleContainer: {
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 25,
    color: '#000',
  },
  nameView: {
    marginTop: 8,
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    letterSpacing: 0.3,
    marginBottom: 3,
  },
  emailText: {
    letterSpacing: 0.3,
    fontSize: 15,
  },
  list: {
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: '#a5a5a5',
  },
  // =================================================
  profil: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  // eslint-disable-next-line no-dupe-keys
  image: {
    width: 130,
    height: 130,
    borderRadius: 130 / 2,
  },
  text1: {
    fontSize: 19,
    textAlign: 'center',
  },
  text2: {
    fontSize: 15,
    textAlign: 'center',
    marginVertical: 3,
  },
});

export default main;
