import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

export interface NavItem {
  label: string;
  route: string;
  icon: string;
  roles: string[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  @Input() userRole = 'SOLICITANTE';
  @Output() navigate = new EventEmitter<string>();

  navItems: NavItem[] = [
    { label: 'Visão Geral', route: '/', icon: 'dashboard', roles: ['SOLICITANTE', 'ATENDENTE', 'ADMIN'] },
    { label: 'Meus Chamados', route: '/tickets/meus', icon: 'inbox', roles: ['SOLICITANTE', 'ADMIN'] },
    { label: 'Fila da Equipe', route: '/tickets/fila', icon: 'view_kanban', roles: ['ATENDENTE', 'ADMIN'] },
    { label: 'Novo Chamado', route: '/tickets/novo', icon: 'add_circle', roles: ['SOLICITANTE', 'ADMIN'] },
    { label: 'Dashboard & SLA', route: '/dashboard', icon: 'monitoring', roles: ['ATENDENTE', 'ADMIN'] },
    { label: 'Administração', route: '/admin', icon: 'settings', roles: ['ADMIN'] }
  ];

  isItemVisible(item: NavItem): boolean {
    return item.roles.includes(this.userRole);
  }

  onItemClick(route: string): void {
    this.navigate.emit(route);
  }
}
