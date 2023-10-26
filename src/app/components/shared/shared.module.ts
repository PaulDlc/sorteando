import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationAdminComponent } from './navigation-admin/navigation-admin.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavigationComponent,
    FooterComponent,
    NavigationAdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule

  ],
  exports: [
    NavigationComponent,
    FooterComponent,
    NavigationAdminComponent
  ],
})
export class SharedModule { }
