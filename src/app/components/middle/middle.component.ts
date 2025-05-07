import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-middle',
  standalone: true,
  imports: [],
  templateUrl: './middle.component.html',
  styleUrl: './middle.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiddleComponent { }
