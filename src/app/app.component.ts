import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavMainComponent } from "./components/mainLayout/nav-main/nav-main.component";
import { SidebarMainComponent } from "./components/mainLayout/sidebar-main/sidebar-main.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavMainComponent, SidebarMainComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'WebPrjAngular';
}
