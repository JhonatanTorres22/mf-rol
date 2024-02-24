import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RolRoutingModule } from './rol-routing.module';
import { ListarRolComponent } from './listar-rol/listar-rol.component';
import { AddEditRolComponent } from './add-edit-rol/add-edit-rol.component';

//angular material
import {MatTableModule} from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogConfig, MatDialogModule} from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    ListarRolComponent,
    AddEditRolComponent
  ],
  imports: [
    CommonModule,
    RolRoutingModule,
    MatDialogModule,
    MatButtonModule,
    MatTableModule,
    HttpClientModule,
    MatSelectModule
  ],
  exports: [
    ListarRolComponent,
  ],
  providers: [MatDialogConfig],
})
export class RolModule { }
