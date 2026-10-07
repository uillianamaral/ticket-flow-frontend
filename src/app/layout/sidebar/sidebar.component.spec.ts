import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { SidebarComponent } from './sidebar.component';

describe('SidebarComponent', () => {
  let component: SidebarComponent;
  let fixture: ComponentFixture<SidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidebarComponent],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('deve instanciar o componente corretamente', () => {
    expect(component).toBeTruthy();
  });

  it('deve filtrar itens conforme perfil de SOLICITANTE', () => {
    component.userRole = 'SOLICITANTE';
    const adminItem = component.navItems.find(i => i.route === '/admin')!;
    expect(component.isItemVisible(adminItem)).toBe(false);

    const meusChamadosItem = component.navItems.find(i => i.route === '/tickets/meus')!;
    expect(component.isItemVisible(meusChamadosItem)).toBe(true);
  });

  it('deve exibir todos os itens para perfil de ADMIN', () => {
    component.userRole = 'ADMIN';
    const adminItem = component.navItems.find(i => i.route === '/admin')!;
    expect(component.isItemVisible(adminItem)).toBe(true);
  });

  it('deve emitir rota ao clicar em onItemClick', () => {
    let emittedRoute = '';
    component.navigate.subscribe((route) => {
      emittedRoute = route;
    });

    component.onItemClick('/tickets/novo');
    expect(emittedRoute).toBe('/tickets/novo');
  });
});
