import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarModule } from 'primeng/sidebar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { PasswordModule } from 'primeng/password';
import { CheckboxModule } from 'primeng/checkbox';
import { TableModule } from 'primeng/table';
import { MenuModule } from 'primeng/menu';
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { CalendarModule } from 'primeng/calendar';
import { MultiSelectModule } from 'primeng/multiselect';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { FileUploadModule } from 'primeng/fileupload';
import { FormsModule } from '@angular/forms';
import { CardModule } from 'primeng/card';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SidebarModule,
    RadioButtonModule,
    ButtonModule,
    InputSwitchModule,
    PasswordModule,
    CheckboxModule,
    TableModule,
    MenuModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    AutoCompleteModule,
    CalendarModule,
    MultiSelectModule,
    InputTextareaModule,
    FileUploadModule,
    FormsModule,
    CardModule
    
  ],
  exports:[
    SidebarModule,
    RadioButtonModule,
    ButtonModule,
    InputSwitchModule,
    PasswordModule,
    CheckboxModule,
    TableModule,
    MenuModule,
    DialogModule,
    InputTextModule,
    DropdownModule,
    AutoCompleteModule,
    CalendarModule,
    MultiSelectModule,
    InputTextareaModule,
    FileUploadModule,
    FormsModule,
    CardModule
  ]
})
export class ComponentModule { }
