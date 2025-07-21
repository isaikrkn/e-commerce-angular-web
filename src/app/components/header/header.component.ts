import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // ✅ Use this instead of just RouterLink

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterModule], // ✅ RouterModule includes routerLink and routerLinkActive
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {}
