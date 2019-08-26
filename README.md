# PartyApp Documentación

Documentación del webservices para partyapp

## Usuario

### Schema de usuarios
```
username: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/^[a-zA-Z0-9]+$/, 'is invalid'], index: true},
  email: {type: String, lowercase: true, unique: true, required: [true, "can't be blank"], match: [/\S+@\S+\.\S+/, 'is invalid'], index: true},
  privilege: {type: String, default: 'Usuario', enum: ['Usuario', 'Admin', 'Proveedor'] },
  image: {type: String, default: '/images/smiley-cyrus.jpg'},
  hash: String,
  salt: String,
  nombreCompleto: String,
  fechaNacimiento: String,
  genero: {type: String, enum: ['Femenino', 'Masculino']},
  telefono: String,
  celular: String,
  direccion: String,
  distrito: String,
  nombreEmpresa: String,
  ruc: String,
  telefonoEmpresa: String,
  direccionEmpresa: String,
  distritoEmpresa: String,
  servicios: [],
  tipoFiestas: [],
  popupCheckForm: {type: Boolean, default:true},
  popupInputMesagge: {type: Boolean, default:true}
```
### Rutas
 
POST: __host__/users/login
{username:"nombre de usuario",password:"password"}

POST: __host__/users/update
{_id:"id del usuario", "... datos a actualizar del schema"}
