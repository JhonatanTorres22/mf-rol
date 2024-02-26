import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { EliminarUsuarioConPerfil, ListarUsuarioConPerfil } from 'src/app/core/models/rol.model';
import { RolService } from 'src/app/infraetructura/services/rol.service';
import { AddEditRolComponent } from '../add-edit-rol/add-edit-rol.component';

@Component({
  selector: 'app-listar-rol',
  templateUrl: './listar-rol.component.html',
  styleUrls: ['./listar-rol.component.scss']
})
export class ListarRolComponent implements OnInit {
  listarUsuario!:ListarUsuarioConPerfil
  displayedColumns: string[] = ['nombres', 'apellidoPaterno', 'apellidoMaterno', 'nDocumento','perfil', 'acciones'];
  dataSource: MatTableDataSource<ListarUsuarioConPerfil>;
  constructor(
    private dialog: MatDialog,
    private rolService:RolService
  ){this.dataSource = new MatTableDataSource();}

  ngOnInit(): void {
    this.listarUsuarioConPerfil()
  }

  listarUsuarioConPerfil(){
    this.rolService.listarUsuarioConPerfil().subscribe({
      next:(data:ListarUsuarioConPerfil[]) => {
        this.dataSource.data = data;
        console.log(this.dataSource.data);
        
      }
    })
  }

  abrirModalAddEditRol(rol:ListarUsuarioConPerfil){
    const dialogRef = this.dialog.open(AddEditRolComponent, {
      disableClose : true,
      data: {rol:rol}
    })

    dialogRef.afterClosed().subscribe(result => {
      setTimeout(() => {
        this.listarUsuarioConPerfil()
      }, 450);
    })
  }

  eliminarUsuario(usuarioConPerfil:ListarUsuarioConPerfil){
    console.log(usuarioConPerfil.codigoPersonaPerfil);
    
    this.rolService.eliminarUsuario(usuarioConPerfil.codigoPersonaPerfil).subscribe({
      next: (eliminarUsuario:EliminarUsuarioConPerfil) => {
        console.log('eliminadoooo');
        this.listarUsuarioConPerfil();
        
      }
    })
  }
}
