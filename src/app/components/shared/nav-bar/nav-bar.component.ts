import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from "../side-bar/side-bar.component";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatDrawerMode, MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';

@Component({
    selector: 'app-nav-bar',
    standalone: true,
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
    imports: [CommonModule, SideBarComponent, MatToolbarModule, MatIconModule, MatSidenavModule, MatListModule]
})
export class NavBarComponent {
value: MatDrawerMode = 'side';


}
