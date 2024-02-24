import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ListarResponsable, ListarRol } from 'src/app/core/models/rol.model';
import { RolService } from 'src/app/infraetructura/services/rol.service';

@Component({
  selector: 'app-add-edit-rol',
  templateUrl: './add-edit-rol.component.html',
  styleUrls: ['./add-edit-rol.component.scss']
})
export class AddEditRolComponent implements OnInit {

  listarRol!: ListarRol[];
  listaResponsable: ListarResponsable[] = [];
  constructor( private rolService: RolService,
    private cdr: ChangeDetectorRef){}


  ngOnInit(): void {
    this.listarPerfil();
    this.listarResponsable();
  }

  listarPerfil(){
    this.rolService.listarPerfil().subscribe({
      next:(data:ListarRol[] ) => {
        this.listarRol = data;
        console.log(this.listarRol, '***');
        
      }
    })
  }

  listarResponsable(){
    this.rolService.listarResponsable().subscribe({
      next: (data: ListarResponsable[]) => {
        this.listaResponsable = data;
        console.log(this.listaResponsable);
        this.cdr.detectChanges();
        
      }
    })
  }
}
