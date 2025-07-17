import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#000',
  },
  matchdayContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,  
    marginBottom: 20,
    justifyContent: 'center',
  },
  matchdayText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ADFF45',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#ADFF45',
    marginLeft: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#ADFF45',
    marginBottom: 20,
    textAlign: 'left',
    marginLeft: 16,
  },
  fieldContainer: {
    marginBottom: 20,
    paddingHorizontal: 16,
  },
  fieldTitle: {
    color: '#ADFF45',
    marginBottom: 5,
  },
  input: {
    height: 60,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#444',
    color: '#fff',
  },
  passwordInputContainer: {
    flexDirection: 'row',
    height: 60,
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    backgroundColor: '#444',
  },
  passwordInput: {
    flex: 1,
    height: '100%',
    color: '#fff',
  },
  button: {
    height: 50,
    backgroundColor: '#ADFF45',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginHorizontal: 5,
    marginTop: 20, 
  },
  buttonText: {
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  sectionsContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section: {
    flexDirection: 'row',
    marginBottom: 20,
    padding: 10,
    alignItems: 'center',
  },
  sectionImage: {
    width: 100,
    height: 120,
    marginRight: 10,
  },
  sectionText: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ADFF45',
  },
  sectionInfo: {
    fontSize: 16,
    color: '#FFF',
  },
  sectionPadel: {
    justifyContent: 'flex-start',
  },
  sectionFutebol: {
    justifyContent: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'flexrow',
    justifyContent: 'space-between',
    marginTop: 20,  
    paddingHorizontal: 10,
  },
  divider: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  socialButton: {
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  googleButton: {
    backgroundColor: '#db4437',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
  },
  orText: {
    color: '#ADFF45',
    fontSize: 16,
    textAlign: 'center',
    marginHorizontal: 10,
  },
  card: {
    backgroundColor: '#555353',
    padding: 15,
    marginVertical: 10,
    borderWidth: 2,
    borderRadius: 10,
    borderStyle: 'dotted',
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ADFF45',
  },
  status: {
    marginTop: 10,
    fontSize: 16,
  },
  map: {
    height: 200,
    marginTop: 10,
  },
  courtCard: {
    borderWidth: 1,
    borderColor: '#ADFF45',
    borderRadius: 8,
    padding: 15,
    marginVertical: 8,
    backgroundColor: '#2E2E2E',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
  },
  courtCardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#ADFF45',
  },
  courtCardText: {
    fontSize: 10,
    color: '#ADFF45',
 },
  numCourts: {
    fontSize: 16,
    marginBottom: 5,
  },
  size: {
    fontSize: 16,
    marginBottom: 5,
  },
  rating: {
    fontSize: 16,
  },
});


export default styles;