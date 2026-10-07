import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EmptyStateComponent } from './empty-state.component';

describe('EmptyStateComponent', () => {
  let component: EmptyStateComponent;
  let fixture: ComponentFixture<EmptyStateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyStateComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(EmptyStateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it('deve renderizar o título e descrição informados', () => {
    fixture.componentRef.setInput('title', 'Sem chamados na fila');
    fixture.componentRef.setInput('description', 'A fila de atendimento está zerada.');
    fixture.detectChanges();

    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.empty-title')?.textContent).toContain('Sem chamados na fila');
    expect(compiled.querySelector('.empty-description')?.textContent).toContain('A fila de atendimento está zerada.');
  });

  it('deve emitir evento de ação ao clicar no botão de ação', () => {
    component.actionLabel = 'Abrir chamado';
    fixture.detectChanges();

    let emitted = false;
    component.action.subscribe(() => {
      emitted = true;
    });

    component.onActionClick();
    expect(emitted).toBe(true);
  });
});
