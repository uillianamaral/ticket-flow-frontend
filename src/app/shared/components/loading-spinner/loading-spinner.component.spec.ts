import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
  let component: LoadingSpinnerComponent;
  let fixture: ComponentFixture<LoadingSpinnerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoadingSpinnerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(LoadingSpinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar a mensagem de carregamento', () => {
    fixture.componentRef.setInput('message', 'Processando fila de chamados...');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.spinner-message')?.textContent).toContain('Processando fila de chamados...');
  });

  it('deve aplicar classe full-page quando fullPage for true', () => {
    fixture.componentRef.setInput('fullPage', true);
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.spinner-wrapper')?.classList.contains('full-page')).toBe(true);
  });
});
