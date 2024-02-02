import { Component, ElementRef } from '@angular/core';
import { LayoutService } from '../../services/layout.service';

@Component({
  selector: 'nous-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {
  constructor(public layoutService: LayoutService, public el: ElementRef) { }
}
