import { createStackNavigator, createAppContainer } from 'react-navigation';
import principal from '../screens/formulariosMainScreen/armatufiestaPrincipal';
import DatosFiestaScreen from '../screens/formulariosMainScreen/DatosFiestaScreen';
import TipoFiestaScreen from '../screens/formulariosMainScreen/TipoFiestaScreen';
import FormularioFiestaScreen from '../screens/formulariosMainScreen/FormularioFiestaScreen';


export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: TipoFiestaScreen,  
  DatosFiesta: DatosFiestaScreen,
  TipoFiesta: TipoFiestaScreen,
  FormularioFiesta: FormularioFiestaScreen
  

}));


