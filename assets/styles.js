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
    display: 'flex'
  },
  novisible: {
    display: 'none'
  },

  //header
  header: {   
    paddingHorizontal: 15,
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
  }

});