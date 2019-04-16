import { createStackNavigator, createAppContainer } from 'react-navigation';
import principal from '../screens/formulariosMainScreen/armatufiestaPrincipal';
import FormularioFiestasScreen from '../screens/formulariosMainScreen/FormularioFiestaScreen';
import FormularioFiestas2Screen from '../screens/formulariosMainScreen/FormularioFiesta2Screen';

export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  Main: principal, 
  FormularioFiesta: FormularioFiestasScreen,
  FormularioFiesta2: FormularioFiestas2Screen
}));


