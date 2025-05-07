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
  // Для корректной очистки наблюдателя
  private destroyRef = inject(DestroyRef);
  // Для доступа к scrollTo
  private document = inject(DOCUMENT);

  // Ссылка на DOM-элемент BottomComponent
  @ViewChild('sectionRoot') sectionRoot!: ElementRef;
  // Сигнал: true — если элемент в зоне видимости (viewport)
  isVisible = signal(false);

  ngAfterViewInit(): void {
    const element = this.sectionRoot.nativeElement;

    // Создаем IntersectionObserver для отслеживания появления секции на экране
    const observer = new IntersectionObserver(
      // true/false в зависимости от видимости
      ([entry]) => this.isVisible.set(entry.isIntersecting),
      // Срабатывает, когда хотя бы 30% секции видно
      { threshold: 0.3 }
    )

    observer.observe(element);

    // Очищаем наблюдатель при уничтожении компонента
    this.destroyRef.onDestroy(() => {
      observer.unobserve(element);
    })
  }

  // Прокрутка страницы вверх с плавной анимацией
  scrollToTop() {
    this.document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
