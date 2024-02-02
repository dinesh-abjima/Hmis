import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { ComponentModule } from './component/component.module';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { MenuItemComponent } from './components/menu-item/menu-item.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { AppConfigComponent } from './components/app-config/app-config.component';


@NgModule({
  declarations: [
    TopBarComponent,
    MenuItemComponent,
    FooterComponent,
    MenuComponent,
    SideBarComponent,
    AppConfigComponent,
  ],
  imports: [
    CommonModule,
    ComponentModule,
    SharedRoutingModule
  ],
  exports:[
    ComponentModule,
    TopBarComponent,
    MenuItemComponent,
    AppConfigComponent,
    FooterComponent,
    MenuComponent,
    SideBarComponent,
  ]
})
export class SharedModule { }
