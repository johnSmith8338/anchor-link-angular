import { DOCUMENT } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';

@Component({
  selector: 'app-top',
  standalone: true,
  imports: [],
  templateUrl: './top.component.html',
  styleUrl: './top.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopComponent {
  private document = inject(DOCUMENT);

  scrollToAnchor() {
    const element = this.document.getElementById('bottomComponent');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
