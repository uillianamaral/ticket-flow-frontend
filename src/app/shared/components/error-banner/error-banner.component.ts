import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-error-banner',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './error-banner.component.html',
  styleUrl: './error-banner.component.scss'
})
export class ErrorBannerComponent {
  @Input() title = 'Ocorreu um erro';
  @Input() message = 'Não foi possível completar a operação solicitada.';
  @Input() retryable = false;
  @Input() retryLabel = 'Tentar novamente';

  @Output() retry = new EventEmitter<void>();

  onRetry(): void {
    this.retry.emit();
  }
}
