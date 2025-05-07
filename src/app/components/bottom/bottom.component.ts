import { CommonModule, DOCUMENT } from '@angular/common';
import { AfterViewInit, ChangeDetectionStrategy, Component, DestroyRef, ElementRef, inject, signal, ViewChild } from '@angular/core';

@Component({
  selector: 'app-bottom',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bottom.component.html',
  styleUrl: './bottom.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BottomComponent implements AfterViewInit {
  private destroyRef = inject(DestroyRef);
  private document = inject(DOCUMENT);

  @ViewChild('sectionRoot') sectionRoot!: ElementRef;
  isVisible = signal(false);

  ngAfterViewInit(): void {
    const element = this.sectionRoot.nativeElement;

    const observer = new IntersectionObserver(
      ([entry]) => this.isVisible.set(entry.isIntersecting),
      { threshold: 0.3 }
    )

    observer.observe(element);

    this.destroyRef.onDestroy(() => {
      observer.unobserve(element);
    })
  }

  scrollToTop() {
    this.document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
