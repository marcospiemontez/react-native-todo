import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#171d31'
  },  
  title: {
    marginTop: 10,
    paddingBottom: 10,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff'
  },
  
  fab: {
    position: 'absolute',
    width: 60,
    height: 60,
    backgroundColor: '#0094ff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    right: 25,
    bottom: 25,
    elevation: 2,
    zIndex: 9,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: {
      width: 1,
      height: 3,
    }
  },

  modal: {
    flex: 1,
    backgroundColor: '#171d31'
  },

  modalHeader: {
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  modalTitle: {
    fontSize: 23,
    marginLeft: 15,
    color: '#fff'
  },

  modalBody: {
    marginTop: 15,
  },

  modalInput: {
    fontSize: 15,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 30,
    backgroundColor: '#ffff',
    padding: 9,
    height: 80,
    textAlignVertical: 'top',
    color: '#000',
    borderRadius: 5,
  },

  handleAdd: {
    backgroundColor: '#fff',
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 40,
    borderRadius: 5,
  },

  handleText: {
    fontSize: 20,
  }
})

export default styles;