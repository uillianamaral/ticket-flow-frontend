import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HeaderComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it('deve emitir toggleSidebar ao acionar onToggle', () => {
    let emitted = false;
    component.toggleSidebar.subscribe(() => {
      emitted = true;
    });

    component.onToggle();
    expect(emitted).toBe(true);
  });

  it('deve emitir logout ao acionar onLogout', () => {
    let emitted = false;
    component.logout.subscribe(() => {
      emitted = true;
    });

    component.onLogout();
    expect(emitted).toBe(true);
  });

  it('deve renderizar o nome do usuário informado', () => {
    fixture.componentRef.setInput('userName', 'Carlos Silva');
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.textContent).toContain('Carlos Silva');
  });
});
