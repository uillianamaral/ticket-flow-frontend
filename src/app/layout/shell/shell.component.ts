import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';
import { Subscription } from 'rxjs';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';

@Component({
  selector: 'app-shell',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    MatSidenavModule,
    HeaderComponent,
    SidebarComponent
  ],
  templateUrl: './shell.component.html',
  styleUrl: './shell.component.scss'
})
export class ShellComponent implements OnInit, OnDestroy {
  @ViewChild('sidenav') sidenav!: MatSidenav;

  isMobile = false;
  isSidenavOpen = true;
  userRole = 'SOLICITANTE';
  userName = 'Maria Silva (Solicitante)';
  private breakpointSub?: Subscription;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointSub = this.breakpointObserver
      .observe([Breakpoints.Handset, Breakpoints.TabletPortrait])
      .subscribe((result) => {
        this.isMobile = result.matches;
        this.isSidenavOpen = !this.isMobile;
      });
  }

  ngOnDestroy(): void {
    this.breakpointSub?.unsubscribe();
  }

  toggleSidenav(): void {
    this.isSidenavOpen = !this.isSidenavOpen;
  }

  onNavigate(): void {
    if (this.isMobile) {
      this.isSidenavOpen = false;
    }
  }

  onLogout(): void {
    console.log('[TicketFlow] Executando logout da sessão...');
  }
}
