import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { provideNoopAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent],
      providers: [
        provideNoopAnimations(),
        { provide: MatDialog, useValue: { open: vi.fn() } },
        { provide: MatSnackBar, useValue: { open: vi.fn() } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar o componente home corretamente', () => {
    expect(component).toBeTruthy();
  });

  it('deve alternar a visibilidade da simulação de loading', () => {
    expect(component.showDemoLoading).toBe(false);
    component.toggleLoading();
    expect(component.showDemoLoading).toBe(true);
    component.toggleLoading();
    expect(component.showDemoLoading).toBe(false);
  });

  it('deve alternar a visibilidade da simulação de erro', () => {
    expect(component.showDemoError).toBe(false);
    component.toggleError();
    expect(component.showDemoError).toBe(true);
  });
});
