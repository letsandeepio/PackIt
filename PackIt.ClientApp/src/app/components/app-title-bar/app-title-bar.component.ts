import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-title-bar',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatToolbarModule, MatIconModule],
  templateUrl: './app-title-bar.component.html',
  styleUrl: './app-title-bar.component.scss',
})
export class AppTitleBarComponent {}
