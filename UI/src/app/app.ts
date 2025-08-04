import { Component, signal } from '@angular/core';
import { RouterOutlet,RouterLink} from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
  ],
    templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('TalkBoard');
}