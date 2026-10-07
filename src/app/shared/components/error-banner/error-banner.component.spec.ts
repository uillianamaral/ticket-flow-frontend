import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorBannerComponent } from './error-banner.component';

describe('ErrorBannerComponent', () => {
  let component: ErrorBannerComponent;
  let fixture: ComponentFixture<ErrorBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorBannerComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(ErrorBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar o componente com sucesso', () => {
    expect(component).toBeTruthy();
  });

  it('deve exibir o título e a mensagem de erro configurados', () => {
    fixture.componentRef.setInput('title', 'Falha na conexão');
    fixture.componentRef.setInput('message', 'Não foi possível alcançar o servidor backend.');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.error-title')?.textContent).toContain('Falha na conexão');
    expect(compiled.querySelector('.error-message')?.textContent).toContain('Não foi possível alcançar o servidor backend.');
  });

  it('deve emitir evento de retry ao clicar no botão de tentar novamente', () => {
    fixture.componentRef.setInput('retryable', true);
    fixture.detectChanges();

    let emitted = false;
    component.retry.subscribe(() => {
      emitted = true;
    });

    component.onRetry();
    expect(emitted).toBe(true);
  });
});
