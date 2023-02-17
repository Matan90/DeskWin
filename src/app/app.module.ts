import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

// New Libraries
import { FlexLayoutModule } from '@angular/flex-layout';
import { RegistrationComponent } from './Components/Registration/registration.component';
import { DeskComponent } from './Components/Desk/desk/desk.component';
import { LayoutComponent } from './Layouts/layout/layout.component';
import { PageNotFoundComponent } from './Layouts/layout/page-not-found/page-not-found.component';
import { HeaderComponent } from './Layouts/layout/Header/header/header.component';
import { MenuComponent } from './Layouts/layout/Menu/menu/menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AccordionModule } from 'primeng/accordion';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';                  



@NgModule({
  declarations: [
    RegistrationComponent,
    DeskComponent,
    LayoutComponent,
    PageNotFoundComponent,
    HeaderComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AccordionModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [LayoutComponent]
})
export class AppModule { }
