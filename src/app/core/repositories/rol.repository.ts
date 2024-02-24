import { Observable } from "rxjs";
import { ListarRol, ListarUsuarioConPerfil } from "../models/rol.model";

export abstract class RolRepository {
    abstract listarUsuarioConPerfil():Observable<ListarUsuarioConPerfil>;
    abstract listarRol():Observable<ListarRol>;
}