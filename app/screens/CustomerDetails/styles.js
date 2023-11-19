import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  card: {
    borderRadius: 15,
    marginTop: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    }
  },
  cardContent: {
    flexDirection: 'row'
  },
  cover: {
    width: 80,
    height: 80
  },
  content: {
    marginLeft: 10,
    flexDirection: 'column',
    alignSelf: 'center'
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default styles;
