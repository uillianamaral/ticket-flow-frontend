import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent, ConfirmDialogData } from './confirm-dialog.component';

describe('ConfirmDialogComponent', () => {
  let component: ConfirmDialogComponent;
  let fixture: ComponentFixture<ConfirmDialogComponent>;
  let mockDialogRef: { close: ReturnType<typeof vi.fn> };

  const dialogData: ConfirmDialogData = {
    title: 'Confirmar Exclusão',
    message: 'Deseja realmente desativar este usuário?',
    confirmLabel: 'Desativar',
    cancelLabel: 'Voltar',
    isDestructive: true
  };

  beforeEach(async () => {
    mockDialogRef = {
      close: vi.fn()
    };

    await TestBed.configureTestingModule({
      imports: [ConfirmDialogComponent],
      providers: [
        { provide: MatDialogRef, useValue: mockDialogRef },
        { provide: MAT_DIALOG_DATA, useValue: dialogData }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ConfirmDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar o diálogo corretamente', () => {
    expect(component).toBeTruthy();
  });

  it('deve fechar com false ao clicar em onCancel', () => {
    component.onCancel();
    expect(mockDialogRef.close).toHaveBeenCalledWith(false);
  });

  it('deve fechar com true ao clicar em onConfirm', () => {
    component.onConfirm();
    expect(mockDialogRef.close).toHaveBeenCalledWith(true);
  });

  it('deve renderizar o título e mensagem passados no data', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.dialog-title')?.textContent).toContain('Confirmar Exclusão');
    expect(compiled.querySelector('.dialog-content')?.textContent).toContain('Deseja realmente desativar este usuário?');
  });
});
