export interface EventoTabla {
    nombre: string;
    descripcion: string;
    fecha_inicio: string;
    fecha_fin: string;
    estado: string;
}
export interface ILogin {
    email: string;
    contrasenia: string;
}
export interface IClient {
    dni: string;
    username: string;
    nombre: string;
    apellido: string;
    telefono: string;
    fechaNacimiento: Date;
    distritoId: number;
    email: string;


}