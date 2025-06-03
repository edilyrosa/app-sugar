

// type SaveMap = Record< 'a' | 'b' | 'c' , number >

// //type RecordComponenteProps = SaveMap;

// //function RecordComponente(props: SaveMap) {
// function RecordComponente({a, b}: SaveMap) {
//     return ( 
//         <>
//             {/* <div>a: {props.a}</div>
//             <div>b: {props.b}</div>
//             <div>c: {props.a}</div> */}
//             <div>a: {a}</div>
//             <div>b: {b}</div>
        
//         </>
//      );
// }

// export default RecordComponente;




type UsuarioId = string
// Tipos
type DatosUsuario = {
  nombre: string,
  edad: number,
  activo: boolean,
};

type Usuarios = Record<UsuarioId, DatosUsuario>;

// Componente hijo que recibe el objeto usuarios
type ListaUsuariosProps = {
  usuarios: Usuarios;
};

export default function ListaUsuarios({ usuarios }: ListaUsuariosProps) {
  return (
    <div>
      {Object.entries(usuarios).map(([id, datos]) => (
        <div key={id}>
          <h3>{datos.nombre}</h3>
          <p>Edad: {datos.edad}</p>
          <p>Activo: {datos.activo ? "Sí" : "No"}</p>
        </div>
      ))}
    </div>
  );
}

