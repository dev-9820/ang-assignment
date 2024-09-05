import { Component } from '@angular/core';
import { DataListComponent } from './components/data-list/data-list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: true,
  imports: [DataListComponent],  // Importing standalone DataListComponent
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-http-example';
}
