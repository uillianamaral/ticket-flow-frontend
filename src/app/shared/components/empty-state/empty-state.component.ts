import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-empty-state',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatIconModule],
  templateUrl: './empty-state.component.html',
  styleUrl: './empty-state.component.scss'
})
export class EmptyStateComponent {
  @Input() icon = 'inbox';
  @Input() title = 'Nenhum registro encontrado';
  @Input() description = 'Não existem dados disponíveis para exibição no momento.';
  @Input() actionLabel?: string;

  @Output() action = new EventEmitter<void>();

  onActionClick(): void {
    this.action.emit();
  }
}
