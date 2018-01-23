import { NgModule , Pipe, PipeTransform } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Ng2OrderModule } from 'ng2-order-pipe'; 

import { ButtonsComponent } from './buttons.component';
import { CardsComponent } from './cards.component';
import { DetailComponent } from './detail.component'

import { FormsComponent } from './forms.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { SocialButtonsComponent } from './social-buttons.component';
import { SwitchesComponent } from './switches.component';
import { TablesComponent } from './tables.component';

import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalsComponent } from './modals.component';

import { TabsModule } from 'ngx-bootstrap/tabs';
import { TabsComponent } from './tabs.component';

import { ComponentsRoutingModule } from './components-routing.module';
import { WidgComponent } from './widget.component';
import { DetailPipe } from './detail.pipe';

@NgModule({
  imports: [
    ComponentsRoutingModule,
    BsDropdownModule.forRoot(),
    ModalModule.forRoot(),
    TabsModule,
    CommonModule,
    FormsModule,
    Ng2OrderModule
  ],
  declarations: [
    ButtonsComponent,
    DetailComponent,
    CardsComponent,
    FormsComponent,
    ModalsComponent,
    SocialButtonsComponent,
    SwitchesComponent,
    TablesComponent,
    TabsComponent,
    WidgComponent,
    DetailPipe,
  ]
})
export class ComponentsModule { }
