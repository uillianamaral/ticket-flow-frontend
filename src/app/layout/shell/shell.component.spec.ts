import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { ShellComponent } from './shell.component';

describe('ShellComponent', () => {
  let component: ShellComponent;
  let fixture: ComponentFixture<ShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShellComponent],
      providers: [
        provideRouter([]),
        provideNoopAnimations()
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(ShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar o layout shell com sucesso', () => {
    expect(component).toBeTruthy();
  });

  it('deve alternar o estado do sidenav ao acionar toggleSidenav', () => {
    const initialState = component.isSidenavOpen;
    component.toggleSidenav();
    expect(component.isSidenavOpen).toBe(!initialState);
  });

  it('deve fechar o sidenav ao navegar quando em modo mobile', () => {
    component.isMobile = true;
    component.isSidenavOpen = true;

    component.onNavigate();

    expect(component.isSidenavOpen).toBe(false);
  });
});
