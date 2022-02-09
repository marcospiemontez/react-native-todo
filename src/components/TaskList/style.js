import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 8,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: '#fff',
    borderRadius: 5,
    padding: 7,
    elevation: 1.5,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    }
  },

  stylesTask: {
    color: '#121212',
    fontSize: 20,
    paddingLeft: 10,
    paddingRight: 20,
  }
})

export default styles;