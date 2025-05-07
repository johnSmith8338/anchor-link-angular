import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomComponent { }
