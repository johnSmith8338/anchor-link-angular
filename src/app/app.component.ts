import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TopComponent } from './components/top/top.component';
import { MiddleComponent } from './components/middle/middle.component';
import { BottomComponent } from './components/bottom/bottom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    TopComponent,
    MiddleComponent,
    BottomComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'anchor-link-angular';
}
