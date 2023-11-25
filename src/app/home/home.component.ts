import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Link } from '../../assets/types';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  urls: Link[] = [
    {
      url: '/',
      label: 'Home',
    }
  ];
}
