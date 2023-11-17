import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppTitleBarComponent } from './components/app-title-bar/app-title-bar.component';
import { PackingListTableComponent } from './components/packing-list-table/packing-list-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    AppTitleBarComponent,
    PackingListTableComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'pack-it';
}
