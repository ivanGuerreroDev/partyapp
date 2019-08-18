import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Text,
  Font,
  View,
  TextInput
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import DatePicker from 'react-native-datepicker';
import FeatherIcon from '@expo/vector-icons/Feather';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import styles from '../assets/styles';
import Header from '../navigation/Header';
import { Dropdown } from 'react-native-material-dropdown';
import { DrawerActions } from 'react-navigation';
var distritos = require('../datos/peruGeo/distritos.json');
var limaArr= distritos['3927'];
export default class TerminosCondicionesScreen extends React.Component {
  static navigationOptions = {
    header: null,
  };
  constructor(props) {
    super(props);    
    this.state = {
    }
  }
  render() {  
    return (
      <View style={styles.container}>
        <Header screenProps={{openMenu: ()=>this.props.navigation.dispatch(DrawerActions.openDrawer())}}/>
        <ScrollView style={{paddingHorizontal:40}}>
          <Text style={{color:'#8F4D93', fontSize:20, marginVertical:20, textAlign: 'center', fontWeight:'700'}}>Terminos y Condiciones</Text>
          <Text style={styles.questionDescription}>Los presentes Términos y Condiciones de servicio regulan la relación contractual entre los usuarios (en adelante, “Usuarios”), con PARTYAPP247 S.A.C. (R.UC. No: 20602985971). El servicio se encuentra dirigido exclusivamente a residentes en la República de Perú. Los Usuarios se encontrarán sujetos a los Términos y Condiciones Generales respectivos, junto con todas las demás políticas y principios que rigen PARTYAPP247 y que son incorporados al presente por referencia.
{'\n'}
EL USUARIO DECLARA HABER LEÍDO Y ENTENDIDO TODAS LAS CONDICIONES ESTABLECIDAS N LAS POLÍTICAS DE PRIVACIDAD Y LOS PRESENTES TÉRMINOS Y CONDICIONES GENERALES, Y MANIFIESTA SU CONFORMIDAD Y ACEPTACIÓN AL MOMENTO DE REGISTRARSE Y/O HACER USO DEL APLICATIVO “PARTYAPP247”. CUALQUIER PERSONA QUE NO ACEPTE O SE ENCUETRE EN DESACUERDO CON ESTOS TÉRMINOS Y CONDICIONES GENERALES, LOS CUALES TIENEN UN CARÁCTER OBLIGATORIO Y VINCULANTE, DEBERÁ ABSTENERSE DE UTILIZAR EL SITIO Y/O EL APLICATIVO.
{'\n'}
La plataforma de PARTYAPP247 es una herramienta tecnológica que, haciendo uso de internet, facilita la intermediación entre repartidores independientes (en adelante los, “PartyApp247tenderos”) y los Usuarios que requieren del servicio de reparto mediante el uso de una plataforma tecnológica y móvil de PARTYAPP247 (en adelante, la “Aplicación”) entendiéndose dicha operación a los efectos de los presentes Términos y Condiciones como el  “Servicio de Reparto”, el cual es ejecutado a través de un contrato de mandato, donde el PartyApp247tendero actúa como mandatario  y el Usuario funge como mandante en la presente relación. PARTYAPP247 actúa en todo momento como tercero intermediario entre PartyApp247tenderos y Usuarios. Asimismo, usted reconoce que PARTYAPP247 no presta servicios de reparto, mensajería, transporte ni logística. Bajo ninguna circunstancia los PartyApp247tenderos serán considerados empleados por PARTYAPP247 ni por ninguno de sus afiliados.
{'\n'}
CLAUSULA PRIMERA: El Registro
{'\n'}
1.1.  El acceso a la Aplicación es gratuito, salvo en lo relativo al costo de la conexión a través de la red de telecomunicaciones suministrada por el proveedor de acceso contratado (ISP) por el Usuario, que estará a su exclusivo cargo. El Usuario únicamente podrá acceder a la Aplicación a través de los medios autorizados.
{'\n'}
1.2. Para el acceso a los contenidos de la Aplicación será necesario el registro del Usuario. Por ello, para acceder a los servicios de reparto prestados por los PartyApp247tenderos, el Usuario deberá contar con un Smartphone con sistema operativo IOS o Android y completar todos los campos del formulario de inscripción correspondiente a los Usuarios con datos válidos (en adelante, el “Usuario Registrado” o en plural “Usuarios Registrados“). Quien aspire a convertirse en Usuario Registrado deberá verificar que la información que pone a disposición de PARTYAPP247 sea exacta, precisa y verdadera (en adelante, los “Datos Personales“). Asimismo, el Usuario Registrado asumirá el compromiso de actualizar sus Datos Personales cada vez que los mismos sufran modificaciones. PARTYAPP247 podrá utilizar diversos medios para identificar a los Usuarios Registrados, pero PARTYAPP247 no se responsabiliza por la certeza de los Datos Personales que sus Usuarios Registrados pongan a su disposición. Los Usuarios Registrados garantizan y responden, en cualquier caso, por la veracidad, exactitud, vigencia y autenticidad de los Datos Personales puestos a disposición de PARTYAPP247.
{'\n'}
1.3. A los efectos de adquirir la condición de Usuario Registrado de PARTYAPP247, el Usuario deberá cumplimentar el formulario de registro, brindar su consentimiento para el tratamiento de sus Datos Personales, aceptar la Política de Privacidad y Tratamiento de Datos Personales, y los presentes Términos y Condiciones.
{'\n'}
1.4. Una vez efectuado el Registro, PARTYAPP247 otorgará al Usuario Registrado una cuenta personal para acceder con la contraseña que elija (en adelante, la “Cuenta”).  El Usuario Registrado accederá a su Cuenta mediante el ingreso de su apodo y clave de seguridad personal elegida. La Cuenta es personal, única e intransferible, y está prohibido que un mismo Usuario Registrado registre o posea más de una Cuenta. En caso que PARTYAPP247 detecte distintas Cuentas que contengan datos coincidentes o relacionados, podrá cancelar, suspender o inhabilitarlas. El Usuario será el único responsable por el uso de su Cuenta.
{'\n'}
1.5. Los Datos Personales introducidos por el Usuario Registrado deberán ser exactos, actuales y veraces en todo momento. PARTYAPP247 se reserva el derecho de solicitar algún comprobante y/o dato adicional a efectos de corroborar los Datos Personales, y de suspender temporal y/o definitivamente a aquel Usuario Registrado cuyos datos no hayan podido ser confirmados. PARTYAPP247 NO se responsabiliza por la certeza de los datos consignados en el Registro. El Usuario Registrado garantiza y responde, en cualquier caso, por la veracidad, exactitud, vigencia y autenticidad de sus Datos Personales. Los Datos Personales que el Usuario Registrado proporcione se integrarán en una base de datos personales de la que es responsable PARTYAPP247. Para más información consultar la Política de Privacidad y Tratamiento de Datos Personales.
{'\n'}
 CLAUSULA SEGUNDA: Condiciones Generales del Uso del Servicio de Reparto
{'\n'}
 2.1. El Servicio de Reparto que brindarán los PartyApp247tenderos se encuentra dirigido exclusivamente para el uso de los Usuarios Registrados.
{'\n'}
 2.2. La solicitud de un Servicio de Reparto, sea en forma inmediata o bajo reserva a través de la Aplicación podrá abonarse mediante la plataforma de pagos conocida como PayU, de titularidad de Pagosonline Perú S.A.C. (en adelante, el “Procesador de Pagos”). El procesamiento de pagos estará sujeto a todos los términos y condiciones y políticas de privacidad del Procesador de Pagos, disponibles en su página web https://www.payulatam.com/pe/. PARTYAPP247 no será responsable por ningún error u omisión cometido por el Procesador de Pagos. 
{'\n'}
2.3. El Usuario Registrado podrá encontrar en la Aplicación un catálogo de productos ofrecidos por distintos comercios (en adelante, los “Comercios Aliados”), quienes se desempeñan como proveedores independientes y utilizan la Aplicación como medio para ofrecer sus productos. El fin de este catálogo es que el Usuario Registrado pueda dar aviso de manera inmediata a un PartyApp247tendero que desea el envío de un producto que ofrece un Comercio Aliado.
{'\n'}
Sin perjuicio de ello, el Usuario Registrado podrá solicitar a un PartyApp247tendero el envío de un producto ofrecido por cualquier otro comercio diferente a los Comercios Aliados, siempre y cuando dicho producto respete los presentes términos y condiciones. En este supuesto, el Usuario Registrado deberá abonar adicionalmente al precio del producto, el valor del Servicio de Reparto y un porcentaje (%) adicional sobre el valor del producto por el uso de la plataforma virtual el cual deberá aceptar el Usuario Registrado al momento de realizar la orden.
{'\n'}
2.4.. PARTYAPP247 se reserva la posibilidad de bloquear al Usuario Registrado, por cuestiones de seguridad ante posibilidades de fraude, estafa, uso de datos ajenos, o algún otro supuesto que se desprenda como infracción de los presentes términos y condiciones de uso de la Aplicación. Dicha situación será debidamente comunicada al Usuario Registrado.
{'\n'}
2.5. PARTYAPP247 podrá rechazar y/o frenar cualquier pedido de los Usuarios Registrados, en caso de identificar una infracción al presente Términos y Condiciones.
{'\n'}
2.6. Una vez solicitado y/o efectuado una reserva de Servicio de Reparto, la Aplicación enviará un correo electrónico al Usuario Registrado con las condiciones del Servicio de Reparto (en adelante, la “Reserva”). La Reserva incluirá el detalle del destino final donde el PartyApp247tendero tiene que cumplir el Servicio de Reparto (en adelante, los “Detalles de Entrega”).
{'\n'}
2.7. Cualquier cambio en el Servicio de Reparto será informado al Usuario Registrado al teléfono de contacto y/o al correo electrónico informado por el Usuario Registrado en su Cuenta. 
{'\n'}
2.8. Una vez efectuada la solicitud del Servicio de Reparto, el Usuario Registrado deberá indicar el día, horario y lugar donde comenzará el Servicio de Reparto.
{'\n'}
2.9. El PartyApp247tendero cumplirá el Servicio de Reparto entregando la mercadería a la persona que surge de los Detalles de Entrega, siendo el Usuario Registrado el único responsable por la veracidad de los datos allí introducidos.
{'\n'}
2.10. Se encuentra totalmente prohibido utilizar el Servicio de Reparto, para transportar mercadería con fines ilícitos, ilegales, contrarios a lo establecido en los presentes Términos y Condiciones, a la buena fe y al orden público, lesivos de los derechos e intereses de terceros incluyendo, sin limitación, el transporte de material ilegal, que constituya un peligro para la salud o integridad de las personas, o con fines fraudulentos.
{'\n'}
CLAUSULA TERCERA: Condiciones Particulares del Uso del Servicio de Reparto
{'\n'}
3.1. Una vez que el Usuario Registrado haya incorporado en la Aplicación todos los datos necesarios para efectuar la búsqueda y/o solicitud de un Servicio de Reparto, y declarado haber aceptado expresamente estos Términos y Condiciones, PARTYAPP247 informará sobre todas las ofertas de los PartyApp247tenderos disponibles de acuerdo con los datos solicitados por el Usuario Registrado, en cuyo caso se informarán las tarifas vigentes para el uso del Servicio de Reparto con sus respectivos impuestos y/o cargos previo a la emisión de la Reserva. En el paso siguiente, se informará el resumen del Servicio de Reparto en donde constará el precio total a abonar por el Usuario Registrado.
{'\n'}
3.2. Una vez aceptado el precio y seleccionados los Servicios de Reparto que se deseen utilizar por intermedio de la Aplicación, será requisito indispensable que el Usuario Registrado incorpore los datos exigidos en los campos allí establecidos y, una vez cumplido ello, se podrá emitir la Reserva correspondiente.
{'\n'}
3.3. Efectuada la solicitud y/o reserva de Servicio de Reparto antedicha, inmediatamente quedará confirmada la misma. 
{'\n'}
CLAUSULA CUARTA: Condiciones de Pago y Facturación
{'\n'}
4.1. Las tarifas aplicables al Servicio de Reparto las fijará PARTYAPP247 conforme a la demanda de servicios que se encuentre activa en ese momento al momento en que el Usuario Registrado haga uso de la Aplicación. El Usuario registrado acepta que sea PARTYAPP247 quien fije estas tarifas. Estas tarifas serán cobradas directamente por el PartyApp247tendero de forma automática, sin que exista retención alguna por parte de PARTYAPP247, mediante el Procesador de Pagos o, en su defecto, personalmente cuando el pago se realice en dinero en efectivo. Las tarifas cobradas por el Servicio de Reparto no serán reembolsables.
{'\n'}
4.2. Para los casos en los que el Servicio de Reparto sea pagado por el Consumidor al PartyApp247ntendero en efectivo y el monto entregado por el Consumidor sea mayor a la tarifa cobrada por el mencionado servicio, el PartyApp247ntendero deberá cumplir con entregarle al Consumidor aquel monto sobrante existente entre el monto entregado como pago y la tarifa establecida por PARTYAPP247.
{'\n'}
4.3. Las tarifas aplicables a los productos y servicios solicitados por el Usuario Registrado serán cobradas directamente por PARTYAPP247 a través del Procesador de Pagos. En el caso de los Comercios no Aliados, PARTYAPP247 se reserva el derecho de exhibir un precio de los productos por encima del valor real encontrado en el establecimiento y el Usuario Registrado acepta pagar los productos con este valor adicional, por el uso de la plataforma virtual, teniendo en cuenta que el precio exhibido en la plataforma será el precio final a ser cobrado.
{'\n'}
En ese mismo sentido, PARTYAPP247 se reserva el derecho de incrementar, hasta en un diez por ciento (10%), los precios de los productos exhibidos en las tiendas físicas de los Comercios Aliados y de los Comercios no Aliados El Usuario Registrado reconoce y acepta la anterior condición e igualmente tampoco realizará ningún tipo de reclamación frente a PARTYAPP247 por cobros adicionales a los precios que se vean reflejados en facturas de venta. Los valores adicionales serán cobrados a título de uso de la plataforma virtual.
{'\n'}
4.4.  En los supuestos en que el Servicio de Reparto se solicite para entregar los productos ofrecidos por los  Comercios no Aliados, el Usuario Registrado adelantará el dinero correspondiente al precio de adquisición del producto y PARTYAPP247 lo entregará al PartyApp247tendero. El PartyApp247tendero adquirirá el producto y realizará el pago del precio de venta a favor del proveedor por cuenta y orden del Usuario Registrado. [PARTYAPP247 brindará toda la información necesaria para ello al Usuario Registrado.]
{'\n'}
4.5. Finalizado el Servicio de Reparto, PARTYAPP247 enviará un correo electrónico al Usuario Registrado con el resumen del trayecto realizado, un detalle de la mercadería efectivamente entregada y una descripción de la fecha y hora de entrega y el total del monto a abonar con los impuestos incluidos (en adelante, el “Resumen”). El Resumen no tendrá validez para efectos tributarios ni hará las veces de un comprobante de pago.  
{'\n'}
4.6. El titular de la tarjeta de crédito es el responsable por los datos consignados al momento de la solicitud y/o reserva del Servicio de Reparto seleccionado y es el único obligado al pago frente al emisor de la misma. Cualquier desconocimiento deberá ser efectuado frente del Banco emisor de la tarjeta de crédito de conformidad con lo dispuesto por el Reglamento de Tarjetas de Crédito y Débito aprobado mediante Resolución SBS No. 6523-2013.
{'\n'}
4.7. PARTYAPP247 se reserva el derecho de tomar las medidas judiciales y extrajudiciales que estime pertinentes para obtener el pago del monto debido que pueda adeudar el Usuario Registrado. PARTYAPP247 se reserva el derecho de modificar, cambiar, agregar, o eliminar las Tarifas Vigentes, en cualquier momento, lo cual será debidamente notificado al Usuario Registrado.
{'\n'}
 CLAUSULA QUINTA: Uso de la Aplicación
{'\n'}
 5.1. PARTYAPP247 tendrá las facultades para denegar o restringir el uso de la Aplicación a cualquier Usuario Registrado en caso de incumplimiento de los presentes Términos y Condiciones, sin que ello genere perjuicio alguno al Usuario Registrado. PARTYAPP247 no será responsable si el Usuario Registrado no cuenta con un teléfono celular inteligente compatible con el uso de la Aplicación. El Usuario Registrado se compromete a hacer un uso adecuado y lícito de la Aplicación de conformidad con la legislación aplicable, los presentes Términos y Condiciones, la moral y buenas costumbres generalmente aceptadas y el orden público. Al utilizar la Aplicación o el Servicio, el Usuario Registrado acuerda que:
{'\n'}
 Solo utilizará el Servicio para su uso personal y no tendrá facultades para revender su Cuenta a un tercero.
No autorizará a terceros a usar su Cuenta.
No cederá ni transferirá de otro modo su Cuenta a ninguna otra persona o entidad legal.
No utilizará una cuenta que esté sujeta a cualquier derecho de una persona que no sea ella sin la autorización adecuada.
No solicitará el Servicio con fines ilícitos, ilegales, contrarios a lo establecido en los presentes Términos y Condiciones, a la buena fe y al orden público, lesivos de los derechos e intereses de terceros incluyendo, sin limitación, el transporte de material ilegal o con fines fraudulentos.
No tratará de dañar el Servicio o la Aplicación de ningún modo, ni accederá a recursos restringidos en la Aplicación.
Guardará de forma segura y confidencial la contraseña de su Cuenta y cualquier identificación facilitada para permitirle acceder al Servicio y la Aplicación.
No utilizará el Servicio o la Aplicación con un dispositivo incompatible o no autorizado.
No intentará acceder, utilizar y/o manipular los datos de PARTYAPP247, PartyApp247tenderos y otros Usuarios.
No introducirá ni difundirá virus informáticos o cualesquiera otros sistemas físicos o lógicos que sean susceptibles de provocar daños en la Aplicación.
{'\n'}CLAUSULA SEXTA: Cancelaciones y Penalidades
{'\n'}
6.1. Una vez emitida la Reserva, el Usuario Registrado podrá cancelarla (en adelante, la “Cancelación”) sin penalidad alguna siempre que realice la Cancelación del Servicio de Reparto a través de la Aplicación, dentro de los primeros 5 minutos posteriores a la aceptación del servicio por parte del PartyApp247tendero. 
{'\n'}
6.2. De no efectuarse la Cancelación en el tiempo estipulado en el punto precedente, el Usuario estará obligado a abonar el 100% del monto correspondiente al pago del Servicio de Reparto, sin perjuicio de que luego el Comercio Aliado y/o el comercio correspondiente esté obligado a restituir el precio abonado por el Usuario Registrado por el producto, según sea el caso. 
{'\n'}
El Usuario Registrado reconoce que la restitución de dicho precio podría no ser inmediato, dependiendo del proceso que deban efectuar las entidades financieras involucradas para la devolución.
{'\n'}
6.2. El Usuario en ningún caso podrá alegar falta de conocimiento de las limitaciones, restricciones y penalidades, dado que las mismas son informadas en forma previa a realizar la solicitud del Servicio de Reparto a través de la Aplicación, como así también con el e-mail de confirmación de la Reserva que PARTYAPP247 envía al Usuario Registrado.
{'\n'}
CLAUSULA SEPTIMA: Responsabilidad
{'\n'}
7.1. El Usuario Registrado conoce y acepta que PARTYAPP247  pone a disposición del PartyApp247tendero sólo un espacio virtual que, en calidad de intermediador, les permite ponerse en comunicación mediante la Aplicación para que el PartyApp247tendero pueda brindar los Servicios de Reparto a favor de los Usuarios Registrados. PARTYAPP247 no interviene en el perfeccionamiento de las operaciones, actividades o servicios realizadas por el PartyApp247tendero y a favor del Usuario Registrado, por ello no será responsable respecto de la calidad, cantidad, estado, integridad o legitimidad de la mercadería transportada por el PartyApp247tendero, así como de la capacidad para contratar del PartyApp247tendero o de la veracidad de los Datos Personales que este ha ingresado. 
{'\n'}
7.2. El Usuario Registrado conoce y acepta que al realizar operaciones con el PartyApp247tendero lo hace bajo su propio riesgo. En ningún caso PARTYAPP247 será responsable por lucro cesante, o por cualquier otro daño y/o perjuicio que haya podido sufrir el Usuario Registrado o el PartyApp247tendero, debido al Servicio de Reparto prestado a través de la Aplicación.
{'\n'}
7.3. PARTYAPP247 recomienda actuar con prudencia y sentido común al momento de contratar el Servicio de Reparto. En caso que uno o más Usuarios Registrados o algún tercero inicien cualquier tipo de reclamo o acciones legales contra un PartyApp247tendero, todos y cada uno de los involucrados en dichos reclamos o acciones eximen de toda responsabilidad a PARTYAPP247 y a sus directores, gerentes, empleados, agentes, operarios, representantes y apoderados. 
{'\n'}
CLAUSULA OCTAVA: Uso y Garantía de la Aplicación
{'\n'}
8.1. PARTYAPP247 no garantiza la disponibilidad y continuidad del funcionamiento de la Aplicación. En consecuencia, PARTYAPP247 no será en ningún caso responsable por cualquier daño y/o perjuicio que puedan derivarse de: (i) la falta de disponibilidad o accesibilidad a la Aplicación; (ii) la interrupción en el funcionamiento de la Aplicación o fallos informáticos, averías telefónicas, desconexiones, retrasos o bloqueos causados por deficiencias o sobrecargas en las líneas telefónicas, centros de datos, en el sistema de Internet o en otros sistemas electrónicos, producidos en el curso de su funcionamiento; y, (iii) otros daños que puedan ser causados por terceros mediante intromisiones no autorizadas ajenas al control de PARTYAPP247. 
{'\n'}
8.2. PARTYAPP247 no garantiza la ausencia de virus ni de otros elementos en la Aplicación introducidos por terceros ajenos a PARTYAPP247 que puedan producir alteraciones en los sistemas físicos o lógicos del Usuario Registrado o en los documentos electrónicos y ficheros almacenados en sus sistemas. En consecuencia, PARTYAPP247 no será en ningún caso responsable de cualesquiera de los daños y perjuicios de cualquier naturaleza que pudieran derivarse de la presencia de virus u otros elementos que puedan producir alteraciones en los sistemas físicos o lógicos, documentos electrónicos o ficheros del Usuario Registrado. 
{'\n'}
8.3. PARTYAPP247 adopta diversas medidas de protección para proteger la Aplicación y los contenidos contra ataques informáticos de terceros. No obstante, PARTYAPP247 no garantiza que terceros no autorizados (utilizando ilegales o fraudulentos) no puedan conocer las condiciones, características y circunstancias en las cuales el Usuario Registrado accede a la Aplicación. En consecuencia, PARTYAPP247 no será en ningún caso responsable de los daños y perjuicios que pudieran derivarse de dicho acceso no autorizado.
{'\n'}
8.4. Con la suscripción de las presentes Términos y Condiciones, el Usuario que suscribe el presente documento declara que mantendrá indemne frente a cualquier reclamación a PARTYAPP247, su sociedad matriz, directores, socios, empleados, abogados y agentes derivadas de: (i) el incumplimiento por parte del Usuario de cualquier disposición contenida las presentes en los Términos y Condiciones o de cualquier ley o regulación aplicable a las mismas; (ii) el incumplimiento o violación de los derechos de terceros incluyendo, a título meramente enunciativo, otros Usuarios, peatones; y, (iii) el incumplimiento del uso permitido de la Aplicación, siendo estas condiciones meramente enunciativas y no taxativas, por lo que el Usuario mantendrá indemne a PARTYAPP247 por cualquier otra violación normativa o daño a terceros que pueda producirse como consecuencia de la utilización del Servicio de Reparto por parte del Usuario.
{'\n'}
CLAUSULA NOVENA: Derechos de Propiedad Intelectual e Industrial
{'\n'}
9.1. El Usuario Registrado reconoce y acepta que todos los derechos de propiedad intelectual e industrial sobre los contenidos y/o cualesquiera otros elementos insertados en la Aplicación (incluyendo, sin limitación, marcas, logotipos, nombres comerciales, lemas comerciales textos, imágenes, gráficos, diseños, sonidos, bases de datos, software, diagramas de flujo, presentación, audio y vídeo y/o cualquier otro derecho de propiedad intelectual e industrial de cualquier naturaleza que éstos sean), pertenecen y son de propiedad exclusiva de PARTYAPP247.
{'\n'}
9.2. PARTYAPP247 autoriza al Usuario a utilizar, visualizar, imprimir, descargar y almacenar los contenidos y/o los elementos insertados en la Aplicación exclusivamente para su uso personal, privado y no lucrativo, absteniéndose de realizar sobre los mismos cualquier acto de descompilación, ingeniería inversa, modificación, divulgación o suministro. Cualquier otro uso o explotación de cualesquiera contenidos y/u otros elementos insertados en la Aplicación distinto de los aquí expresamente previstos estará sujeto a la autorización previa de PARTYAPP247.
{'\n'}
9.3. Bajo ningún concepto se entenderá que el acceso a la Aplicación y/o la aceptación de los Términos y Condiciones generar algún derecho de cesión a favor de los Usuarios Registrados ni de cualquier tercero.
{'\n'}
CLAUSULA DECIMA: Protección de Datos
{'\n'}
10.1. Los datos personales que los Usuarios Registrados proporcionen en el Registro, serán tratados según lo dispone la Ley N° 29733, Ley de Protección de Datos Personales y su Reglamento, aprobado mediante Decreto Supremo N° 003-2013-JUS y demás normas conexas. En ese sentido, PARTYAPP247 se obliga al cumplimiento estricto de las normas anteriormente mencionadas, así como a mantener los estándares máximos de seguridad, protección, resguardo, conservación y confidencialidad de la información recibida o enviada.
{'\n'}
10.2. Los Usuarios Registrados declaran que los datos personales han sido entregados de forma absolutamente libre y voluntaria, sin ningún tipo de presión, obligación o condición de por medio.
{'\n'}
CLAUSULA DECIMO PRIMERA: Notificaciones
{'\n'}
11.1. El Usuario Registrado declara y acepta que PARTYAPP247 podrá realizar las notificaciones oportunas al Usuario Registrado a través de la Aplicación, mensajes de texto, o la dirección de correo electrónico facilitada por el Usuario Registrado en su Cuenta, incluyendo el envío de mensajes con fines promocionales o publicitarios. El Usuario Registrado podrá notificar a PARTYAPP247 y solicitar el cese de la actividad promocional o publicitaria mediante una solicitud a través de la sección de Soporte disponible en la plataforma virtual.
{'\n'}
CLAUSULA DECIMO SEGUNDA: Cesión
{'\n'}
12.1. El Usuario Registrado no podrá ceder sus derechos y obligaciones dimanantes de los presentes Términos y Condiciones sin el previo consentimiento escrito de PARTYAPP247. PARTYAPP247 podrá ceder, sin necesidad de recabar el consentimiento previo del Usuario, los presentes Términos y Condiciones a cualquier entidad comprendida dentro de su grupo de sociedades, en todo el mundo, así como a cualquier persona o entidad que le suceda en el ejercicio de su negocio por cualesquiera títulos.
{'\n'}
CLAUSULA DECIMO TERCERA: Ley Aplicable y Jurisdicción
{'\n'}
13.1. Las presentes Términos y Condiciones, así como la relación entre PARTYAPP247 y el Usuario, se regirán e interpretarán con arreglo a la legislación vigente en la República del Perú.
{'\n'}
Términos y Condiciones – PartyApp247
Política de Privacidad de PartyApp247 y Tratamiento de Datos Personales
PartyApp247, Inc.
{'\n'}
Privacidad
ÍNDICE
Política de privacidad
{'\n'}
Introducción
Cuando usa PartyApp247, nos confía su información. Nos comprometemos a mantener esa confianza. Para esto, comenzaremos ayudándolo a comprender nuestras prácticas de privacidad.
{'\n'}
En esta Política se describe la información que recopilamos, cómo se usa y se comparte, y cuáles son sus opciones con respecto a esta. Le recomendamos que lea este documento, así como la Descripción de privacidad, que destaca los puntos clave sobre nuestras prácticas de privacidad (incluyendo el tipo de información que recopilamos, dónde lo hacemos y cómo la usamos).
Última modificación: 25 de mayo, 2018
Fecha de vigencia: 25 de mayo, 2018
Descargar Política anterior
{'\n'}
Recolección y usos de los datos{'\n'}
Alcance{'\n'}
RESUMEN{'\n'}
La presente política se aplica a los usuarios de los servicios de PartyApp247 en cualquier parte del mundo, incluso los usuarios de las apps, sitios web, funciones u otros servicios de PartyApp247.
{'\n'}
Esta política describe cómo PartyApp247 y sus afiliados recopilan y usan información personal para brindar los servicios. Se aplica a todos los usuarios de nuestras apps, sitios web, funciones u otros servicios en cualquier parte del mundo, a menos que se encuentren bajo una política de privacidad diferente, como la Política de privacidad de PartyApp247 Freight. Esta política se aplica específicamente a los siguientes:
Usuarios: Personas que viajan
Socios Conductores: Personas que prestan servicios de movilidad individualmente o a través de empresas de transporte asociadas
Clientes: Personas que ordenan comida u otros artículos
Socios Repartidores: Personas que brindan servicios de entrega a domicilio
Esta política también se aplica a aquellos que proporcionan información a PartyApp247 a través de una app para usar nuestros servicios o aquellos cuya información se envía a PartyApp247 en relación con sus servicios (como la información de contacto de individuos asociados a los Restaurantes Socios de PartyApp247 Eats). A los fines de esta política, se implementará la palabra “usuarios” para referirse a todas aquellas personas sujetas a ella.
{'\n'}
Las prácticas descritas están sujetas a las leyes aplicables de los lugares donde operan, lo que significa que solo participamos en las prácticas definidas en esta política, o en un país o región en particular si lo permiten las leyes de estos. Comuníquese con nosotros si tiene preguntas sobre nuestras prácticas en su país o región.
{'\n'}
Controlador de datos{'\n'}
RESUMEN{'\n'}
PartyApp247 brinda servicios a usuarios en todo el mundo. Si usa nuestros servicios en los Estados Unidos, PartyApp247 Technologies, Inc. es el responsable de sus datos. Si usa nuestros servicios en la Unión Europea o en otro lugar, PartyApp247 B.V. es el responsable de sus datos.
{'\n'}
Procesamos información personal dentro y fuera de los Estados Unidos.
{'\n'}
Si vive en los Estados Unidos, el controlador de datos para la información que nos proporciona o que recopila PartyApp247 o sus filiales es el siguiente:
{'\n'}
{'\n'}
PartyApp247 Technologies, Inc.{'\n'}
1455 Market Street{'\n'}
San Francisco, California, 94103{'\n'}
Si vive en la Unión Europea o en otro lugar, el controlador de datos es el siguiente:{'\n'}
{'\n'}
{'\n'}
PartyApp247 B.V.
Mr. Treublaan 7, 1097 DP
Amsterdam, the Netherlands.
Las preguntas, comentarios y reclamos relacionados con las prácticas de manejo de los datos por parte de PartyApp247 pueden enviarse a la oficina correspondiente desde aquí.
Procesamos información personal dentro y fuera de los Estados Unidos. PartyApp247 transfiere información de los usuarios fuera de los Estados Unidos a través de mecanismos aprobados de conformidad con la legislación vigente.
{'\n'}
Para usuarios en Argentina: La Agencia de Acceso a la Información Pública, en su función de organismo regulador de la ley 25.326, es responsable de recibir las quejas y los informes presentados por cualquier persona que crea que sus derechos se vieron afectados por la violación de la norma de protección de datos local.
La información que reunimos
RESUMEN{'\n'}
PartyApp247 recopila lo siguiente:{'\n'}
{'\n'}
La información que le proporciona a PartyApp247, p. ej., cuando crea una cuenta.
La información que se crea cuando usa nuestros servicios, como la ubicación, el uso y los datos del dispositivo.
La información de otras fuentes, p. ej., Socios de PartyApp247 y terceros que usan las API de PartyApp247.
PartyApp247 o un representante recopila la siguiente información:
{'\n'}
Datos que usted brinda{'\n'}
Ejemplos:
{'\n'}
Perfil de usuario: Recolectamos sus datos cuando crea o actualiza una cuenta PartyApp247. Esto puede incluir su nombre, correo electrónico, número de teléfono, nombre de usuario y contraseña, dirección, información de pago o bancaria (como la información relacionada para la verificación de pagos), números de id. oficial (como número de seguro social, licencia de conducir o pasaporte si así lo exige la ley), fecha de nacimiento, foto y firma, información sobre el vehículo o el seguro de los Socios Conductores, y la configuración y preferencias que indique en su cuenta PartyApp247.
Información de la verificación de antecedentes: Puede que recopilemos estos datos si se registra para usar los servicios de PartyApp247 como Socio Conductor o Socio Repartidor, p. ej., su historial de conducción o antecedentes penales (si la ley lo permite). Un proveedor puede recopilar esta información en representación de PartyApp247.
Datos demográficos: Es posible que recolectemos estos datos suyos, incluso, de encuestas de usuarios. En algunos países, también puede que recibamos información demográfica suya de terceros.
Contenido del usuario: Es posible que recopilemos los datos que envía al contactar a soporte, calificar o enviar reconocimientos a otros, o de cualquier otra comunicación que mantenga con PartyApp247.
Información creada al usar nuestros servicios{'\n'}
Ejemplos:{'\n'}
{'\n'}
Ubicación
{'\n'}
Dependiendo de los servicios PartyApp247 que use, y la configuración de la app o los permisos del dispositivo, podemos recopilar los datos de su ubicación exacta o aproximada, que se obtiene a través de servicios como GPS, dirección IP y wi fi.
{'\n'}
Si es un Socio Conductor o Socio Repartidor, PartyApp247 recopila los datos de su ubicación cuando la app se ejecuta en primer plano (app abierta y en pantalla) o en segundo plano (app abierta, pero no en pantalla) en su dispositivo.
Si es un usuario y autorizó el procesamiento de los datos de ubicación, PartyApp247 los recopilará cuando la app se ejecute en primer plano. En ciertas regiones PartyApp247 también recopila esta información cuando la app se ejecuta en segundo plano si dio su consentimiento a través de la configuración de la app o los permisos del dispositivo.
Los usuarios y clientes pueden usar la app sin permitir a PartyApp247 recopilar los datos de ubicación. Sin embargo, esto puede afectar su funcionamiento. P. ej., si no quiere permitir que PartyApp247 recolecte sus datos de ubicación, deberá ingresar la dirección del punto de partida manualmente. Además, recopilaremos los datos de ubicación del Socio Conductor durante el viaje y se vincularán con su cuenta, incluso, cuando la opción no esté activada.
{'\n'}Información de transacciones{'\n'}
{'\n'}
Recopilamos detalles sobre transacciones relacionadas con el uso de nuestros servicios, incluyendo el tipo de servicios que solicita u ofrece, detalles de los pedidos, información de las entregas, fecha y hora de los servicios brindados, montos cobrados, distancias recorridas y métodos de pago. Asimismo, si alguien usa un código promo, podemos asociar su nombre con esa persona.
{'\n'}
Información de uso
{'\n'}
Recopilamos información sobre cómo interactúa con nuestros servicios, como la fecha y hora de acceso, funciones de la app o páginas visitadas, fallas de la app y otras actividades en el sistema, tipo de navegador, y sitios o servicios de terceros que usó antes de interactuar con nuestra plataforma. En algunos casos recopilamos esta información a través de cookies, píxeles de seguimiento y tecnologías similares que crean y mantienen identificadores únicos. Para conocer más sobre estas tecnologías, consulte nuestra Declaración sobre cookies.
Información del dispositivo
{'\n'}
PartyApp247 puede recopilar información sobre los dispositivos que usa para acceder a nuestros servicios, como modelos de hardware, dirección IP del dispositivo, sistemas operativos y sus versiones, softwares, nombres de archivos y sus versiones, idiomas preferidos, identificadores únicos del dispositivo, identificadores de publicidad, números de serie, información sobre el movimiento del dispositivo e información sobre la red móvil.
{'\n'}
Datos de comunicación
{'\n'}
Permitimos a los usuarios comunicarse entre ellos y con PartyApp247 a través de las apps, sitios web y otros servicios. P. ej., los Socios Conductores y usuarios, y los Socios Repartidores y clientes pueden comunicarse o enviarse SMS entre ellos (en algunos países, sin ver los números de teléfono del otro). Para brindar este servicio, recibimos cierta información sobre las llamadas o SMS, incluyendo la fecha y hora de la comunicación y el contenido de esta. PartyApp247 también puede usar esta información para los servicios de soporte al cliente (incluida la resolución de conflictos entre los usuarios), con fines de seguridad y protección, para mejorar nuestros productos y servicios, y para análisis.
{'\n'}
Información de otras fuentes
{'\n'}Ejemplos:
{'\n'}
Comentarios del usuario, como calificaciones o reconocimientos.
{'\n'}
Usuarios que proporcionen información sobre usted en relación con los programas de referidos.
{'\n'}
Usuarios que pidan servicios por usted o en representación suya.
{'\n'}
Usuarios u otras personas que proporcionen información en relación con reclamos o conflictos.
{'\n'}
Socios comerciales de PartyApp247 a través de los cuales crea o accede a su cuenta PartyApp247, como proveedores de pago, servicios de redes sociales, servicios de música a pedido, apps o sitios web que usen API de PartyApp247, o cuya API PartyApp247 use (como cuando pide un viaje a través de Google Maps).
Proveedores de seguro (si es un Socio Conductor o Socio Repartidor).
{'\n'}
Proveedores de servicios financieros (si es un Socio Conductor o Socio Repartidor).
{'\n'}
Empresas de transporte asociadas (si es un Socio Conductor que usa nuestros servicios a través de una cuenta vinculada a una de estas empresas).
{'\n'}
El propietario de PartyApp247 para Empresas o Perfil Familiar que use.
{'\n'}
Fuentes disponibles públicamente.
{'\n'}
Proveedores de servicio de publicidad.
{'\n'}
PartyApp247 puede combinar la información que recopile de estas fuentes con otra de la que disponga.
{'\n'}
Cómo utilizamos su información{'\n'}
RESUMEN{'\n'}
PartyApp247 recopila y utiliza información para habilitar servicios de transporte y entregas fiables y cómodos, así como para ofrecer otros productos y servicios. También utilizamos la información que recopilamos con los siguientes propósitos:
{'\n'}
Para mejorar la seguridad y la protección de los usuarios y los servicios{'\n'}
Para ofrecer servicios de atención al cliente{'\n'}
Para realizar búsquedas y desarrollo{'\n'}
Para comunicarnos con los usuarios o permitir que estos se comuniquen entre ellos{'\n'}
Para ofrecer promociones o concursos{'\n'}
Para temas relacionados con procedimientos legales{'\n'}
En PartyApp247 no compartimos ni vendemos su información personal a terceros para su uso en actividades de marketing directo de terceros.
{'\n'}
PartyApp247 usa la información recopilada para los siguientes fines:
{'\n'}
Brindar servicios y funciones{'\n'}
PartyApp247 usa la información recopilada para brindar, personalizar, mantener y mejorar nuestros productos y servicios. Esto incluye usar la información para lo siguiente:
{'\n'}
Crear y actualizar su cuenta.{'\n'}
Verificar su identidad.{'\n'}
{'\n'}Permitir servicios de transporte, entrega y otros. Incluye el procesamiento automatizado de su información para habilitar el Tarifa dinámica, la cual determina el precio de un viaje según diversos factores, como el tiempo y la distancia estimados de la ruta prevista, el tránsito esperado, y el número de usuarios y Socios Conductores que usan la app de PartyApp247 en un momento determinado.
{'\n'}Procesar o facilitar el pago de estos servicios.
{'\n'}Ofrecer, obtener, proporcionar o facilitar soluciones de seguros y financieras relacionadas con nuestros servicios.
{'\n'}Hacer un seguimiento del progreso del viaje o de la entrega.
{'\n'}Habilitar funciones que le permitan compartir información con otras personas, como cuando envía un reconocimiento sobre un Socio Conductor, refiere un amigo a PartyApp247, usa la función División de tarifa o comparte su Llegada estimada.
{'\n'}Habilitar funciones para personalizar su cuenta PartyApp247, como crear marcadores para sus lugares favoritos, y permitir un acceso rápido a los destinos previos.
{'\n'}Habilitar las funciones de accesibilidad, las cuales facilitan el uso de nuestros servicios por parte de usuarios con discapacidades. Estas funciones permiten, p. ej., que los Socios Conductores con discapacidad auditiva o dificultades para oír puedan informar a los usuarios sobre su situación, solo puedan recibir SMS por parte de estos y que la pantalla de su dispositivo emita destellos cuando reciban notificaciones de viaje, en lugar de sonar.
{'\n'}Realizar operaciones internas necesarias para brindar nuestros servicios, lo que incluye solucionar errores de software y problemas operacionales, realizar análisis, pruebas e investigación, y hacer un seguimiento y análisis de las tendencias de uso y de las actividades.
{'\n'}Seguridad
{'\n'}Usamos sus datos para ayudar a mantener la seguridad y la integridad de nuestros servicios y usuarios. Lo que incluye, p. ej., lo siguiente:
{'\n'}
{'\n'}Realizar un proceso de selección de los Socios Conductores y de los Socios Repartidores antes de permitirles el uso de nuestros servicios y, luego, de manera regular. Esto incluye verificaciones de antecedentes, si la ley lo permite, para prevenir que personas no seguras usen nuestros servicios.
{'\n'}Usar la información de los dispositivos de los Socios Conductores para identificar conductas poco seguras al volante, como exceso de velocidad o frenado y aceleración bruscos, y para concientizar a los Socios Conductores sobre estas conductas.
{'\n'}Nuestra función de verificación de id. en tiempo real, la cual solicita a los Socios Conductores que se tomen una selfie antes de conectarse, nos ayuda a asegurarnos de que la persona al volante sea la misma que se registró en la cuenta PartyApp247 a fin de prevenir fraude y de proteger a otros usuarios.
{'\n'}Usar la información del dispositivo, ubicación, perfil, uso y demás, para prevenir, detectar y combatir el fraude o las conductas no seguras. Esto incluye el procesamiento de dicha información, en ciertos países, para identificar prácticas o patrones que indiquen fraude o impliquen un riesgo de seguridad. Puede que se incluya información de terceros. En ciertos casos, estos incidentes pueden ocasionar la desactivación de la cuenta a través de un proceso automatizado de toma de decisiones. Los usuarios en la Unión Europea tienen el derecho de oponerse a este tipo de procesamiento. Consulte la Sección II.I.1.d para obtener más información
{'\n'}Usar las calificaciones para fomentar una mejora entre los usuarios y como causa de desactivación para usuarios con calificaciones por debajo del mínimo, de acuerdo con los requisitos de su región. El cálculo y la desactivación pueden realizarse a través un proceso automatizado de toma de decisiones. Los usuarios en la Unión Europea tienen el derecho de oponerse a este tipo de procesamiento. Consulte la Sección II.I.1.d para obtener más información).
{'\n'}Soporte al cliente
{'\n'}PartyApp247 usa la información recopilada (incluidos los registros de sus llamadas a soporte con su consentimiento) para asistirlo cuando se comunica con nuestros servicios de soporte al cliente. Esta asistencia incluye lo siguiente:
{'\n'}
Dirigir sus preguntas a la persona apropiada de soporte al cliente{'\n'}
Investigar y abordar sus inquietudes{'\n'}
Hacer un seguimiento y mejorar nuestras respuestas de soporte al cliente{'\n'}
Investigación y desarrollo{'\n'}
Podemos usar la información recopilada para realizar pruebas, investigación, análisis y desarrollo de productos. Esto nos permite mejorar e incrementar la seguridad de nuestros servicios, desarrollar funciones y productos nuevos, y facilitar las soluciones de seguros y de finanzas relacionadas con nuestros servicios.
{'\n'}
Comunicación entre los usuarios{'\n'}
PartyApp247 usa la información recopilada para permitir las comunicaciones entre nuestros usuarios. P. ej., un Socio Conductor puede llamar o enviar un SMS a un usuario para confirmar el punto de partida, o un Restaurante Socio o un Socio Repartidor puede llamar al cliente para brindarle información sobre su pedido.
{'\n'}
*Comunicaciones desde PartyApp247{'\n'}
PartyApp247 puede usar la información recopilada para comunicarse con usted respecto a productos, servicios, promociones, estudios, encuestas, noticias, actualizaciones y eventos.
{'\n'}
PartyApp247 también puede usar la información para promover y procesar concursos y sorteos, entregar cualquier premio relacionado con ellos, así como presentarle anuncios y contenido relevantes sobre nuestros servicios y los de nuestros Socios comerciales. Puede recibir algunas de estas comunicaciones de acuerdo con su perfil como usuario de PartyApp247. Los usuarios en la Unión Europea tienen el derecho de oponerse a este tipo de procesamiento. Consulte la Sección II.I.1.d para obtener más información).
{'\n'}
PartyApp247 también puede usar los datos para informarle sobre elecciones, votos, referendos y otros procesos políticos relacionados con nuestros servicios.
{'\n'}
Procedimientos y requisitos legales{'\n'}
Podemos usar la información recopilada para investigar o abordar reclamos o conflictos relacionados con el uso que usted hace de los servicios de PartyApp247, o para cualquier otro aspecto permitido por la ley aplicable o dispuesto por organismos normativos, entidades gPartyApp247namentales e investigaciones oficiales.
{'\n'}
Cookies y tecnologías de terceros{'\n'}
RESUMEN{'\n'}
PartyApp247 y sus socios utilizan cookies y otras tecnologías de identificación en las apps, los sitios web, los correos electrónicos y los anuncios en línea para los fines descritos en la presente política.
{'\n'}
Las cookies son pequeños archivos de texto que los sitios web, apps, medios en línea y anuncios almacenan en el buscador o dispositivo. PartyApp247 usa cookies y tecnología similar para propósitos, como los siguientes:
Autenticar usuarios{'\n'}
Recordar las preferencias y configuraciones del usuario{'\n'}
Determinar la popularidad del contenido{'\n'}
Brindar y medir la efectividad de las campañas de publicidad{'\n'}
Analizar el tránsito y las tendencias del sitio para comprender los comportamientos en línea y los intereses de las personas que interactúan con nuestros servicios También podemos permitir que terceros realicen mediciones de audiencia y servicios analíticos para nosotros, presenten anuncios en representación nuestra a través de internet, y realicen un seguimiento y nos informen sobre el rendimiento de estos anuncios. Estas organizaciones pueden usar cookies, balizas web, SDK y otras tecnologías para identificar su dispositivo cuando visita nuestro sitio y usa nuestros servicios, así como cuando visita otros sitios y servicios en línea. Consulte nuestra Declaración sobre cookies para obtener más información acerca del uso de cookies y otras tecnologías descritas en esta sección, incluidas sus opciones respecto a dichas tecnologías.
Intercambio y divulgación de información{'\n'}
RESUMEN{'\n'}
Algunos de los productos, servicios y funciones de PartyApp247 requieren que intercambiemos información con otros usuarios o cuando usted lo solicite. También es posible que intercambiemos su información con nuestros afiliados, subsidiarias y Socios comerciales, por motivos legales o en caso de reclamos o conflictos.
{'\n'}
PartyApp247 puede compartir la información recopilada con los siguientes:
{'\n'}
Otros usuarios{'\n'}
P. ej., si usted es un usuario, podemos compartir su nombre, calificación promedio y punto de partida o destino con los Socios Conductores. Si comparte un viaje PartyApp247Pool con otro usuario, a ese usuario se le puede mostrar su nombre, punto de partida y destino.
{'\n'}
Si es un Socio Conductor o Socio Repartidor, compartimos su información con los usuarios, lo que incluye su nombre y foto, marca, modelo, color, matrícula y foto del vehículo, su ubicación, calificación promedio, número total de viajes, antigüedad como Socio Conductor de PartyApp247 y su información de contacto (de acuerdo con las leyes aplicables). Si completa un Perfil de Socio Conductor, también podemos compartir los datos asociados con este, incluyendo la información que ingresó y sus reconocimientos. El usuario/cliente también obtendrá un recibo detallado con información, como el desglose de los montos cobrados, su nombre y foto, y un mapa de la ruta que tomó.
{'\n'}
A pedido{'\n'}
Esto incluye compartir su información con los siguientes:{'\n'}
{'\n'}
Otras personas, a pedido. P. ej., podemos compartir su Llegada estimada y ubicación con un amigo, a pedido, o la información de su viaje cuando divida la tarifa con un amigo.
Socios comerciales de PartyApp247. P. ej., si solicita un servicio a través de una asociación u oferta promocional de un tercero, PartyApp247 puede compartir su información con estas partes. Esto incluye, p. ej., otras app o sitios web que se integren con nuestras API, proveedores de vehículos o servicios, aquellos con API o servicio a los cuales PartyApp247 se integre o Socios comerciales con los que PartyApp247 se puede asociar para brindar una promoción, un concurso o un servicio especializado.
El público en general cuando envía contenido a un foro público{'\n'}
Nos encanta recibir comentarios de nuestros usuarios, incluso a través de foros públicos, como los blogs de PartyApp247, redes sociales y ciertas funciones de nuestra red. Cuando se comunica con nosotros a través de estos canales, sus comunicaciones pueden hacerse públicas.
{'\n'}
El propietario de cuentas PartyApp247 que pueda usar{'\n'}
Si usted usa un perfil asociado con otra parte, podemos compartir información de su viaje con el propietario de ese perfil. Esto ocurre, p. ej., si usted es lo siguiente:
{'\n'}
Un usuario que usa el Perfil de Negocios de su empleador o toma viajes a través de PartyApp247 Central.{'\n'}
Un Socio Conductor que usa una cuenta de una empresa de transporte asociada.{'\n'}
Un usuario que toma un viaje pedido por un amigo o a través de un Perfil Familiar.{'\n'}
Un Socio Repartidor que actúa como sustituto (solo para el Reino Unido).{'\n'}
Afiliados y subsidiarias de PartyApp247{'\n'}
Compartimos información con nuestros afiliados y subsidiarias para brindar servicios o dirigir el procesamiento de datos en representación nuestra. P. ej., PartyApp247 procesa y almacena información en los Estados Unidos en representación de sus afiliados y subsidiarias internacionales.
{'\n'}
Proveedores de servicios y Socios comerciales de PartyApp247{'\n'}
PartyApp247 puede brindar información a sus proveedores, consultores, Socios de publicidad, entidades de investigación y otros proveedores de servicios o Socios comerciales. Entre estas partes se incluyen, p. ej., las siguientes:
{'\n'}
Procesadores y facilitadores de pago.{'\n'}
{'\n'}
Proveedores de verificación de antecedentes (solo para Socios Conductores y Socios Repartidores).
{'\n'}
Proveedores de almacenamiento en la nube.
{'\n'}
Socios de marketing y proveedores de plataformas de marketing.
{'\n'}
Proveedores de datos analíticos.
{'\n'}
Socios de investigación, incluidos aquellos que realizan encuestas o proyectos de investigación en asociación con PartyApp247 o en su representación.
{'\n'}
Proveedores que asisten a PartyApp247 para mejorar la seguridad y protección de las apps.
{'\n'}
Consultores, abogados, contadores y otros proveedores de servicios profesionales.
{'\n'}
Socios de flotilla.
{'\n'}
Socios financieros y de seguro.
{'\n'}
Aeropuertos.
{'\n'}
Yandex Taxi y otros proveedores locales.
{'\n'}
Restaurantes Socios.
{'\n'}
Proveedores de Vehicle Solutions y terceros proveedores de vehículos.
{'\n'}
Con fines legales o ante un conflicto
PartyApp247 puede compartir su información si considera que así lo requieren las leyes, normas, estatutos, procesos legales o solicitudes gPartyApp247namentales vigentes debido a asuntos de seguridad o similares.
{'\n'}
Esto incluye compartir su información con fuerzas del orden público, autoridades gPartyApp247namentales, aeropuertos (si las autoridades aeroportuarias lo solicitan como condición para operar en la propiedad del aeropuerto) o terceros según sea necesario para hacer cumplir nuestros Términos del servicio, acuerdos de usuario u otras políticas, para proteger los derechos y propiedad de PartyApp247, los derechos, seguridad y propiedad de otros, o en caso de reclamos o conflictos relacionados con el uso de nuestros servicios. Si usa la tarjeta de crédito de otra persona, es posible que las leyes nos exijan compartir la información con el titular de la tarjeta, incluida la información del viaje.
{'\n'}
Esto también incluye compartir información suya con terceros relacionados con (o durante las negociaciones) cualquier fusión con otra empresa, venta de activos empresariales, consolidación o reestructuración, financiación, o adquisición de toda o una parte de nuestro negocio por parte de otra empresa.
{'\n'}
Consulte las Pautas de PartyApp247 para la fuerza del orden público para obtener más información.
Con su consentimiento{'\n'}
PartyApp247 puede compartir su información para un uso distinto al descrito en la presente política si se lo notificamos y usted manifiesta su consentimiento.
{'\n'}
Conservación y eliminación de la información{'\n'}
RESUMEN{'\n'}
PartyApp247 conserva su perfil de usuario y otra información por el tiempo que mantenga su cuenta PartyApp247.
{'\n'}
PartyApp247 conserva información sobre sus transacciones, ubicación, uso y demás por 7 años debido a requisitos normativos, de impuestos, de seguro u otros, según el lugar en el que opere. Posteriormente, PartyApp247 elimina o anonimiza esta información de acuerdo con las leyes aplicables.
{'\n'}
Los usuarios pueden solicitar la eliminación de sus cuentas en cualquier momento. Si lo hacen, PartyApp247 elimina la información que no sea necesario conservar, y restringe el uso y el acceso a la información requerida.
{'\n'}
PartyApp247 requiere información de su perfil de usuario a fin de brindar sus servicios y conserva dichos datos por el tiempo que usted mantiene su cuenta PartyApp247.
{'\n'}
Esa información incluye datos sobre sus transacciones, ubicación, dispositivo y uso por 7 años debido a requisitos normativos, de impuestos, de seguro u otros, según el lugar donde opere. Cuando la información ya no es necesaria para brindar servicios a través de PartyApp247, permitir el soporte al cliente, mejorar la experiencia del usuario u otros procesos operativos, PartyApp247 toma medidas a fin de prevenir el uso o el acceso a esta para cualquier propósito que no sea el cumplimiento de estos requisitos por seguridad, prevención y detección de fraude.
{'\n'}
Puede solicitar la eliminación de su cuenta en cualquier momento a través de la Configuración de privacidad en la app o a través del sitio web de PartyApp247 (usuarios y clientes aquí, Socios Conductores y Socios Repartidores aquí).
Si lo hace, PartyApp247 eliminará la información que no necesita. En ciertas circunstancias, es posible que PartyApp247 no pueda eliminar su cuenta, p. ej., si tiene montos o reclamos pendientes. Una vez que se resuelve el impedimento, PartyApp247 elimina su cuenta conforme a lo descrito anteriormente.
{'\n'}
PartyApp247 también puede conservar cierta información, si fuera necesario, para satisfacer intereses comerciales legítimos, como la prevención de fraude y la mejora de la seguridad de los usuarios. P. ej., si se cierra la cuenta de un usuario debido a una conducta peligrosa o a incidentes de seguridad, PartyApp247 puede conservar cierta información para prevenir que este usuario abra una nueva cuenta PartyApp247 en el futuro.
{'\n'}
Información especial para usuarios en la Unión Europea
RESUMEN{'\n'}
A partir del 25 de mayo, 2018, el procesamiento de datos personales de los usuarios en la Unión Europea está sujeto al Reglamento general de protección de datos de la Unión Europea (GDPR).
{'\n'}
Esta sección resume los fundamentos de PartyApp247 para procesar información personal de conformidad con el GDPR y los derechos de los usuarios en la Unión Europea en relación con el manejo de la información personal por parte de PartyApp247.
{'\n'}
A partir del 25 de mayo, 2018, el procesamiento de datos personales de los usuarios en la Unión Europea está sujeto al Reglamento General de Protección de Datos de la UE ('GDPR'). Esta sección brinda información relacionada con los derechos de los usuarios en la Unión Europea y con las responsabilidades de PartyApp247 derivadas de este reglamento.
1. Derechos de los usuarios en la Unión Europea
{'\n'}
Si usted es un usuario de PartyApp247 en la Unión Europea, tiene los siguientes derechos en lo relativo al manejo de su información personal por parte de PartyApp247. Para ejercer estos derechos, consulte a continuación o envíe su solicitud aquí.
Los usuarios fuera de la Unión Europea pueden ingresar aquí para solicitar la explicación, corrección, eliminación o copia de sus datos personales.
a. Explicación y copias de sus datos
{'\n'}
Tiene derecho a que le expliquen la información que PartyApp247 tiene sobre usted y el uso que hace de esta.
{'\n'}
También tiene derecho a recibir una copia de los datos que PartyApp247 recopila sobre usted si el recabado se realiza según su consentimiento o porque es necesario para que PartyApp247 le proporcione los servicios que solicita.
{'\n'}
b. Corrección
{'\n'}
Si considera que la información que PartyApp247 tiene sobre usted es errónea, tiene derecho a solicitar la corrección pertinente. Consulte la sección Explicaciones, copias y correcciones para conocer más sobre el procedimiento para corregir o solicitar la modificación de sus datos.
c. Eliminación
{'\n'}
Los usuarios pueden solicitar la eliminación de sus cuentas en cualquier momento. Para hacerlo, deben ingresar al menú Configuración de privacidad de la app o al sitio web de PartyApp247 (usuarios y clientes aquí, Socios Conductores y Socios Repartidores aquí. Podemos conservar cierta información sobre usted como lo exige la ley, y con fines comerciales legítimos.
Consulte la sección Retención y eliminación de los datos para conocer más sobre estas prácticas de PartyApp247.
{'\n'}
d. Objeciones y reclamos
{'\n'}
Los usuarios en la Unión Europea tienen derecho a oponerse al procesamiento de datos personales por parte de PartyApp247 con fines publicitarios a partir de la creación de perfiles o de la toma de decisiones automatizada, entre otros. PartyApp247 puede continuar procesando su información a pesar de que se objete, en la medida en que lo permita el GDPR.
{'\n'}
Los usuarios en la Unión Europea también tienen derecho a presentar un reclamo sobre el manejo de su información personal por parte de PartyApp247 ante la Autoriteit Persoonsgegevens, la autoridad holandesa responsable de proteger los datos. La información de contacto es la siguiente:
{'\n'}
Autoriteit Persoonsgegevens
{'\n'}
Postbus 93374
{'\n'}
2509 AJ DEN HAAG
{'\n'}
(+31) - (0)70 - 888 85 00
{'\n'}
También puede enviar preguntas, comentarios o reclamos al Delegado de protección de datos de PartyApp247.
2. Fundamentos para el procesamiento
{'\n'}
El GDPR requiere que las empresas que procesan datos personales de los usuarios en la Unión Europea lo hagan de conformidad con los fundamentos legales específicos. Como se describe a continuación, PartyApp247 procesa los datos de los usuarios en la Unión Europea de conformidad con uno o varios de los fundamentos especificados en el GDPR:
{'\n'}
a. El procesamiento es necesario para proporcionar las funciones y los servicios que el usuario solicita
{'\n'}
PartyApp247 debe recopilar y usar determinada información para prestar sus servicios. Esto incluye lo siguiente:
{'\n'}
Información del Perfil de usuario necesaria para establecer y mantener su cuenta, entre lo que se incluye verificar su identidad, permitir comunicaciones con usted sobre sus viajes, pedidos y cuentas, y permitir que realice pagos o genere ganancias.
{'\n'}
Datos de la verificación de antecedentes necesaria para permitir a los Socios Conductores brindar servicios de transporte a través de la app de PartyApp247.
{'\n'}
Información de la ubicación del Socio Conductor, necesaria para asignarles usuarios, y para hacer un seguimiento de los viajes en curso y sugerir opciones para navegar.
{'\n'}
Datos de transacción, los cuales se deben generar y mantener según su uso de los servicios de PartyApp247.
{'\n'}
Información de uso, necesaria para mantener, optimizar y mejorar los servicios de PartyApp247, lo que incluye, a veces junto con otro tipo de datos, promociones, compatibilidades entre Socios Conductores y usuarios, y cálculos de las tarifas y las ganancias del Socio Conductor.
{'\n'}
La recopilación y el uso de estos datos es un requisito para usar las apps de PartyApp247.
{'\n'}
b. El procesamiento es necesario para proteger los intereses vitales de nuestros usuarios o de terceros
{'\n'}
PartyApp247 puede procesar información personal, incluso, divulgar datos a las autoridades de la fuerza del orden público en caso de que la seguridad de los usuarios o de terceros esté en riesgo.
c. El procesamiento es necesario para satisfacer los intereses legítimos de PartyApp247
{'\n'}
PartyApp247 recopila y usa la información personal en la medida necesaria para satisfacer sus intereses legítimos. Esto incluye la recopilación y el uso de los datos para lo siguiente:
{'\n'}
Mantener y mejorar la seguridad de nuestros usuarios. P. ej., recopilamos datos de la verificación de antecedentes (donde la ley lo permite) para evitar que usuarios poco seguros se asocien con nosotros para brindar servicios a través de las apps. La información personal también nos permite evitar que los usuarios que tuvieron comportamientos inapropiados o peligrosos usen nuestros servicios, p. ej., mediante la retención de datos sobre los usuarios bloqueados a fin de impedir que usen las apps de PartyApp247. Los datos de uso también nos permiten evitar la compatibilización de usuarios y Socios Conductores con mayor riesgo de conflicto (p. ej., fueron objeto de reclamo de otros usuarios).
{'\n'}
Prevenir, detectar y combatir el fraude relacionado con el uso de nuestros servicios. P. ej., PartyApp247 emplea los datos sobre el Perfil de usuario, ubicación, dispositivo y uso para identificar y evitar circunstancias en las que los usuarios intenten cometer fraude a la empresa o a otros usuarios.
{'\n'}
Informar a las autoridades del orden público sobre actos delictivos o amenazas a la seguridad pública.
{'\n'}
Proporcionar soporte al cliente.
{'\n'}
Optimizar el servicio y desarrollar servicios nuevos. Esto incluye, p. ej., identificar los mejores puntos de partida y destinos, recomendar (nuevas) funciones, mejorar la navegación, tarifas y compatibilización de usuarios y Socios Conductores, o de clientes y Socios Repartidores.
{'\n'}
Con fines de investigación y análisis. Esto incluye, p. ej., analizar tendencias de uso para mejorar la experiencia del usuario y aumentar la seguridad de nuestros servicios.
{'\n'}
Con fines de publicidad. Esto incluye, p. ej., analizar datos para identificar tendencias y adaptar las campañas publicitarias a las necesidades del usuario.
{'\n'}
Hacer cumplir los Términos del servicio de PartyApp247.
{'\n'}
d. El procesamiento es necesario para satisfacer los intereses legítimos de otras personas o partes
{'\n'}
PartyApp247 recopila y usa la información personal en la medida necesaria para satisfacer los intereses de otras personas o del público en general. Esto incluye compartir información relacionada con reclamos legales o del seguro para proteger los derechos y la seguridad de terceros.
{'\n'}
PartyApp247 también puede procesar datos personales vinculados a cuestiones de gran interés público de acuerdo con las leyes vigentes.
{'\n'}
e. El procesamiento es necesario para que puedan cumplirse las obligaciones legales de PartyApp247
{'\n'}
PartyApp247 está sujeto a requisitos legales específicos en las jurisdicciones en las que opera, que exigen recopilar, procesar, divulgar y retener sus datos personales. P. ej., PartyApp247 está sujeto a leyes y reglamentaciones en muchas ciudades y países que le exigen recopilar datos sobre los viajes de los usuarios, retener esa información durante periodos específicos y proporcionar copias a autoridades gPartyApp247namentales o de otros ámbitos. PartyApp247 emplea los datos del usuario para cumplir con dichas leyes en la medida en que se apliquen al uso de las apps de PartyApp247.
{'\n'}
También puede compartir la información con las autoridades del orden público o con terceros, a pedido, en virtud de los procesos legales. Para conocer más sobre el modo en que se comparten los datos, consulte la siguiente documentación de PartyApp247: Pautas para las autoridades de la fuerza del orden público de los Estados Unidos, Pautas para las autoridades de la fuerza del orden público fuera de los Estados Unidos y Pautas para solicitudes de datos de terceros.
f. Consentimiento
{'\n'}
PartyApp247 puede recopilar y usar sus datos en función de su consentimiento. Usted puede revocarlo en cualquier momento. Si revoca el consentimiento, no podrá usar ningún servicio o funcionalidad que requiera la recopilación o el uso de los datos que recabemos o usemos.
{'\n'}
PartyApp247 depende de su consentimiento relativo a la recopilación o al uso de los datos que resultan necesarios para mejorar la experiencia del usuario, habilitar servicios o funciones opcionales, o comunicarse con usted. Si usted es usuario en la Unión Europea, los siguientes casos de uso o recopilación de los datos se realizarán según su consentimiento.
{'\n'}
Información de la ubicación (usuarios)
{'\n'}
Compartir ubicación en vivo (usuarios)
{'\n'}
Notificaciones: Actualizaciones de cuenta y viajes
{'\n'}
Notificaciones: Descuentos y noticias
{'\n'}
Funciones de accesibilidad
{'\n'}
Consulte aquí la sección sobre elección y transparencia para conocer más acerca de la recopilación y el uso de estos datos, el procedimiento para permitir o rechazar dicha recopilación y uso, y el efecto del rechazo sobre el uso de las apps de PartyApp247.
{'\n'}
PartyApp247 también puede recopilar sus datos personales a través de encuestas voluntarias. Sus respuestas se recopilarán según su consentimiento y se eliminarán cuando ya no sean necesarias para los fines por los cuales se recabaron.
{'\n'}
Opciones y transparencia
RESUMEN
PartyApp247 proporciona los medios para que usted acceda a la información que PartyApp247 recopila y pueda controlarla, incluso, a través de lo siguiente:
{'\n'}
La configuración de privacidad dentro de la app
Los permisos del dispositivo
Las páginas de calificaciones dentro de la app
La cancelación de la suscripción a los mensajes promocionales
También puede solicitar que PartyApp247 le brinde detalles, copias y correcciones de su información.
{'\n'}
A. CONFIGURACIÓN DE PRIVACIDAD
{'\n'}
El menú Configuración de privacidad en la app de PartyApp247 permite establecer o actualizar las preferencias para compartir la ubicación y los contactos, así como para recibir notificaciones de PartyApp247 en dispositivos móviles. A continuación encontrará información sobre los ajustes, cómo establecerlos o cambiarlos y el efecto que tiene desactivarlos.
{'\n'}
Datos de ubicación
{'\n'}
PartyApp247 usa los Servicios de ubicación de su dispositivo para que le resulte más fácil pedir un viaje seguro y confiable cuando lo necesite. Los datos de ubicación nos ayudan a mejorar nuestros servicios, como los inicios de viaje, la navegación y el soporte al cliente.
{'\n'}
Usted puede activar, desactivar o ajustar la recopilación de los datos de ubicación del usuario por parte de PartyApp247 en cualquier momento en el menú Configuración de privacidad en la app o en la configuración del dispositivo móvil. Si desactiva los Servicios de ubicación del dispositivo, el uso de la app de PartyApp247 se verá afectado. P. ej., tendrá que ingresar el punto de partida y el destino manualmente. Además, recopilaremos los datos de ubicación del Socio Conductor durante el viaje y se vincularán con su cuenta, incluso, cuando la opción no esté activada.
{'\n'}
Compartir ubicación en vivo (usuarios)
{'\n'}
Si activa los Servicios de ubicación del dispositivo, también puede permitir que PartyApp247 comparta su ubicación con el Socio Conductor desde el momento en que pide el viaje hasta que este se inicia. Esto ayuda a que al Socio Conductor pueda llegar al punto de partida sin problemas.
{'\n'}
Puede activar/desactivar la función para compartir su ubicación con el Socio Conductor en cualquier momento en el menú Configuración de privacidad en la app de PartyApp247. Puede usar la app sin que la función Compartir ubicación esté activada, pero al Socio Conductor le resultará más difícil encontrarlo.
{'\n'}
Notificaciones: Actualizaciones de la cuenta y los viajes**
{'\n'}
PartyApp247 proporciona a los usuarios notificaciones sobre el estado de los viajes y actualizaciones relacionadas con sus cuentas. Estas notificaciones son necesarias para usar la app de PartyApp247 y no pueden desactivarse. Sin embargo, usted puede elegir el método por el cual recibe estas notificaciones en el menú Configuración de privacidad de la app de PartyApp247.
Notificaciones: Descuentos y noticias**
{'\n'}
Puede permitir que PartyApp247 le envíe notificaciones push con descuentos y noticias de la empresa. Puede activar/desactivar estas notificaciones en cualquier momento en el menú Configuración de privacidad de la app de PartyApp247.
B. PERMISOS DEL DISPOSITIVO
{'\n'}
La mayor parte de las plataformas móviles (iOS, Android, etc.) tienen definidos ciertos tipos de datos del dispositivo a los que las apps no pueden acceder sin consentimiento del usuario. Estas plataformas usan diferentes sistemas de permisos para obtener su consentimiento. En la plataforma iOS, se le alertará la primera vez que la app de PartyApp247 quiera obtener su permiso para acceder a ciertos tipos de datos y le permitirá aceptar (o rechazar) esa solicitud. En los dispositivos Android, se le notificará qué permisos necesita la app de PartyApp247 antes de que la utilice por primera vez, y el uso de la app constituirá un consentimiento.
{'\n'}
C. CONSULTA DE CALIFICACIONES
{'\n'}
Después de cada viaje, los Socios Conductores y los usuarios pueden calificarse entre sí y dejar comentarios sobre cómo estuvo el viaje. Este sistema de calificación mutua ayuda a que todas las personas se responsabilicen por su comportamiento, lo que crea un ambiente de respeto y seguridad para todos.
{'\n'}
Consulte su calificación de usuario en el menú principal de la app de PartyApp247.
{'\n'}
Consulte su calificación de Socio Conductor en la pestaña Calificaciones de la app de PartyApp247.
{'\n'}
D. EXPLICACIONES, COPIAS Y CORRECCIÓN
{'\n'}
Usted puede solicitar que PartyApp247 realice lo siguiente:
{'\n'}
Le brinde una explicación detallada sobre la información que recopiló de usted y acerca de cómo la usa.
{'\n'}
Le envíe una copia de la información que recopiló sobre usted.
{'\n'}
Corrija la información incorrecta que tiene sobre usted.
{'\n'}
Contacte a PartyApp247 para solicitar lo anterior aquí.
También puede editar el nombre, teléfono y correo electrónico vinculados a su cuenta en el menú Configuración de las apps de PartyApp247, al igual que consultar su historial de viajes, pedidos y entregas.
{'\n'}
E. NO RECIBIR PUBLICIDAD
{'\n'}
Para dejar de recibir correos electrónicos promocionales de PartyApp247, haga clic aquí. También puede optar por no recibir correos electrónicos y otros mensajes de PartyApp247 mediante las instrucciones proporcionadas en ellos. Tenga en cuenta que, si lo hace, aún podremos enviarle mensajes no promocionales, como recibos de viajes o información sobre su cuenta.
Actualizaciones a esta política{'\n'}
RESUMEN{'\n'}
Es posible que, ocasionalmente, actualicemos la presente política.
{'\n'}
Es posible que actualicemos la presente política cada cierto tiempo. Si realizamos cambios significativos, le notificaremos los cambios a través de las apps de PartyApp247 o por otros medios, como el correo electrónico. En la medida en que la ley vigente lo permita, al utilizar nuestros servicios después de dicho aviso, acepta las actualizaciones de la presente política.
{'\n'}
Le recomendamos que revise periódicamente la presente política para obtener la información más reciente sobre nuestras prácticas de privacidad. También pondremos a su disposición las versiones anteriores de nuestra política de privacidad para su revisión.
 </Text>
          
        </ScrollView>
      </View>
    )
  }
}
const estilo = StyleSheet.create({
  loginContainer: { 
      backgroundColor: '#f4f4f4',
      flex: 1,
      justifyContent: 'space-between',
      paddingLeft: 40,
      paddingRight: 40,
  },
  button:{
      marginBottom: 20,
      width: 200
  },
  gradientButton: {
      paddingVertical: 15, 
      paddingHorizontal: 30, 
      alignItems: 'center', 
      borderRadius: Platform.OS === 'android' ? 30 : 22 
  },
  inputElement: {
      marginBottom: 10,
      padding: 5,
      borderWidth: 1,
      borderColor: '#78B7B6',
      borderRadius: 6
  },
  googleButton: {
      backgroundColor: '#ffffff',
  }
});