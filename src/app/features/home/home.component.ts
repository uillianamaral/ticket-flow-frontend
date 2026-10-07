import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { EmptyStateComponent } from '../../shared/components/empty-state/empty-state.component';
import { LoadingSpinnerComponent } from '../../shared/components/loading-spinner/loading-spinner.component';
import { ErrorBannerComponent } from '../../shared/components/error-banner/error-banner.component';
import { ConfirmDialogComponent, ConfirmDialogData } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatSnackBarModule,
    EmptyStateComponent,
    LoadingSpinnerComponent,
    ErrorBannerComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  showDemoLoading = false;
  showDemoError = false;

  constructor(
    private dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  toggleLoading(): void {
    this.showDemoLoading = !this.showDemoLoading;
  }

  toggleError(): void {
    this.showDemoError = !this.showDemoError;
  }

  openConfirmModal(): void {
    const dialogData: ConfirmDialogData = {
      title: 'Confirmação de Ação',
      message: 'Deseja prosseguir com a demonstração da Milestone 1 do TicketFlow?',
      confirmLabel: 'Prosseguir',
      cancelLabel: 'Cancelar',
      isDestructive: false
    };

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: dialogData,
      width: '420px'
    });

    dialogRef.afterClosed().subscribe((confirmed) => {
      if (confirmed) {
        this.snackBar.open('Ação confirmada com sucesso via Material Dialog!', 'Fechar', {
          duration: 3500
        });
      }
    });
  }
}
