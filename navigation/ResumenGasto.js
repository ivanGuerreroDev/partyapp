import { createStackNavigator, createAppContainer } from 'react-navigation';
import fiestas from '../screens/resumenGastos/fiestas';
import servicio from '../screens/resumenGastos/servicio';
import detalles from '../screens/resumenGastos/detalles';


export default createAppContainer(createStackNavigator({
  // You could add another route here for authentication.
  // Read more at https://reactnavigation.org/docs/en/auth-flow.html
  fiestas: fiestas,  
  servicio: servicio,
  detalles: detalles,
  

}));


