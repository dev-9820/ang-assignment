import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-data-list',
  standalone: true,  // Standalone component
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
  imports: [CommonModule], // Required to use Angular directives like *ngIf, *ngFor
})
export class DataListComponent implements OnInit {
  public data: any[] = [];
  public errorMessage: string | null = null;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.dataService.getData().subscribe(
      (response) => {
        this.data = response;
        console.log(this.data)
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
  }
}
