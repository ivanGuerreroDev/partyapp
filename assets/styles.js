import {StyleSheet} from 'react-native'

export default StyleSheet.create({

  //Contenedor
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerScroll: {
    marginTop: 60, 
    flex: 1 
  },
  contentContainer: {
    paddingTop: 30,
  },
  


  //utilidades
  visible:{
    display: 'flex',
    opacity: 1,
    alignItems: 'center'
  },
  novisible: {
    display: 'none',
    opacity: 0
  },

  //header
  header: {   
    paddingHorizontal: 5,
    height: 60, 
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0)',
    justifyContent: 'space-between',
    alignItems: 'center' 
  },
  logoTop:{
    height: 40,
    width: 180,
    resizeMode: 'contain'
  },
  logoTopCenter:{
    position: 'absolute',
    width: '100%',
    justifyContent:'center',
    alignItems: 'center'
  },


  // Arma tu fiesta boton
  nuevaFiesta:{
    position: 'relative',
    overflow: 'hidden',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20
  },
  nuevaFiestaTexto:{
    flexDirection: 'row',
  },
  botonText: {
    color: '#78b7b6',
    fontSize: 45,
    marginRight: 10,
    marginTop: 0,
    fontFamily: 'Barbie-MediumItalic'
  }, 
  imgFondo:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end', 
    resizeMode: 'contain', // or 'stretch'
    height: 200,
  },
  flechaMenu: {
    fontSize: 30,
    color: '#333333'
  },

  //menu principal
  menuPrincipal: {
    paddingHorizontal: 15,
    paddingVertical: 5
  },
  menuPrincipalItems: {
    color: '#2d3332',
    fontWeight: '300'
  }, 
  menuPrincipalUserName: {
    fontSize:16,
    fontWeight: '700',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#c63275'
  } ,

  botonGradient:{
    paddingHorizontal: 15,
    height: 40, 
    width: 100,
    flexDirection: 'row',
    backgroundColor: 'rgba(255,255,255,0)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'flex-end',
    marginRight: 30, 
    position: 'relative'
  },

  //popup
  popup:{
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,.7)',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99
  },
  popupContent: {
    backgroundColor: '#fff',
    width: 300,
    justifyContent: 'center',
    padding: 30
  },
  cerrarPopup: {
    backgroundColor: '#ff2222',
    borderRadius: 20,
    paddingVertical: 5,
    paddingHorizontal: 10,
    position: 'absolute',
    top: -15,
    right: -15
  },

  //modal styles
  modalContainer:{
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'rgba(0, 0, 0, 0.60)'
  },
  modalContent:{
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },


  //inputs
  formContainer: {
    width: 300, 
  },
  borderCheckboxIOS:{
    borderColor:'#cbcbcb', borderWidth:1, marginRight: 20, borderRadius: 6, padding: -5
  },
  errorForm: {
    position: 'absolute',
    top: 5, right: 5,
    width:20, height:20,
  },
  input: {
    height: 30, 
    borderWidth: 1, 
    flex:1,
    textAlign: 'center',
    borderColor: '#78b7b6', 
    color:'#2d3332', 
    paddingHorizontal: 5,  
    borderRadius: 6,
    marginBottom: 15
  },
  textarea: {  
    height: 50, 
    borderWidth: 1, 
    width: '100%',
    textAlign: 'left',
    textAlignVertical: 'top',
    borderColor: '#78b7b6', 
    color:'#2d3332', 
    padding: 10, 
    borderRadius: 6,
    marginBottom: 15
  },
  inputHoras: {
    height: 30, 
    width: 50,
    borderWidth: 1, 
    textAlign: 'center',
    borderColor: '#78b7b6', 
    color:'#2d3332', 
    paddingHorizontal: 10, 
    borderRadius: 6,
    marginBottom: 15
  },
  inputHorasX100: {
    height: 30, 
    width: '100%',
    borderWidth: 1, 
    textAlign: 'center',
    borderColor: '#78b7b6', 
    color:'#2d3332', 
    paddingHorizontal: 10, 
  },
  dateInput: {
    height: 30, 
    width: '100%',
    borderWidth: 1, 
    borderColor: '#78b7b6', 
    paddingHorizontal: 5, 
    borderRadius: 6,
    marginBottom: 15
  },


  agregarBtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#78b7b6'
  },
  eliminarBtn: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#cbcbcb'
  },

  //Cargando

  cargandoContainer: {
    width: '100%',
    height: '100%',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});