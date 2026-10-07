# Frontend — TicketFlow (Angular 22 + Angular Material + SCSS)

A interface de usuário do TicketFlow é construída utilizando **Angular 22**, com suporte ativo e componentes totalmente **standalone**, sem `NgModule`. O design system é baseado no **Angular Material 22** e **CDK 22**, com tema personalizado em **SCSS**.

---

## 🏗️ Estrutura de Diretórios em `src/`

```text
src/
├── app/
│   ├── core/                           # Autenticação, guards, interceptors e configuração global
│   │   ├── auth/                       # AuthService, auth.guard, role.guard, session.models
│   │   ├── interceptors/               # csrf.interceptor, error.interceptor, credentials.interceptor
│   │   └── services/                   # notification.service, theme.service
│   ├── layout/                         # Estrutura visual da aplicação (Shell autenticado)
│   │   ├── header/                     # Toolbar superior com dados do usuário e logout
│   │   ├── sidebar/                    # Menu lateral com rotas dinâmicas por perfil
│   │   └── shell/                      # Layout unificado com mat-sidenav-container responsivo
│   ├── shared/                         # Componentes, pipes e diretivas reutilizáveis
│   │   ├── components/
│   │   │   ├── empty-state/            # Estado visual quando não há registros
│   │   │   ├── loading-spinner/        # Feedback de carregamento padronizado
│   │   │   ├── error-banner/           # Exibição acessível de falhas e erros de validação
│   │   │   └── confirm-dialog/         # Modal de confirmação para ações destrutivas/transições
│   │   ├── pipes/                      # Formatadores de protocolo, prioridade e status
│   │   └── directives/                 # Diretivas de controle de permissão visual
│   ├── features/                       # Módulos de negócio carregados sob demanda por rota (Lazy)
│   │   ├── auth/                       # Login e sessão do usuário
│   │   ├── tickets/                    # Abertura, listagem 'Meus Chamados'/'Fila', detalhes e atendimento
│   │   ├── admin/                      # Gestão de usuários, equipes, categorias e SLA
│   │   └── dashboard/                  # Painel de indicadores gerenciais e gráficos
│   └── app.routes.ts                   # Roteamento principal standalone com lazy-load
└── styles/                             # Arquitetura de estilos SCSS
    ├── _variables.scss                 # Variáveis de cor, tipografia, elevação e breakpoints
    ├── _material-theme.scss            # Tema M3 customizado do Angular Material
    └── styles.scss                     # Estilos globais e utilitários de acessibilidade
```

---

## 📐 Regra Obrigatória: 4 Arquivos por Componente

Todos os componentes do sistema possuem obrigatoriamente sua própria pasta e exatamente **estes quatro arquivos separados**:

```text
ticket-detail/
├── ticket-detail.component.ts          # Código TypeScript com lógica do componente e Signals
├── ticket-detail.component.spec.ts     # Testes de comportamento e renderização em Jasmine/Vitest
├── ticket-detail.component.scss        # Estilos encapsulados do componente em SCSS
└── ticket-detail.component.html        # Template HTML semântico com marcações ARIA
```

> **Atenção**: É estritamente proibido o uso de templates inline (`template: '...'`) ou estilos inline (`styles: ['...']`). O arquivo `.spec.ts` deve acompanhar a criação de cada componente desde o primeiro dia.

---

## 🎨 Padrões de Interface e UX

1. **Formulários Reativos (`ReactiveFormsModule`)**:
   - Validação em tempo real com mensagens de erro exibidas abaixo do campo via `mat-error`.
   - Bloqueio de submissão dupla enquanto a requisição estiver pendente (`[disabled]="form.invalid || isSubmitting()"`).
2. **Estados de Carregamento**:
   - Feedback visual imediato através de `mat-progress-bar` no topo ou `loading-spinner` centralizado na área de conteúdo.
3. **Estados Vazios (`Empty State`)**:
   - Telas e listas sem registros exibem ilustração amigável, mensagem clara e botão de ação ("Nenhum chamado encontrado. Abrir um chamado agora").
4. **Mensagens e Alertas**:
   - Sucessos e alertas não-bloqueantes exibidos via `MatSnackBar` com botão de fechar.
   - Erros críticos exibidos via banners com detalhes e opção de tentar novamente.
5. **Responsividade**:
   - O menu lateral (`mat-sidenav`) se fecha automaticamente em dispositivos móveis (`mode="over"`), transformando-se em menu hambúrguer, e permanece fixo (`mode="side"`) em desktop.

---

## 🚀 Comandos de Desenvolvimento

```bash
# Instalar dependências alinhadas na versão 22
npm install

# Iniciar servidor local com Hot-Reload (http://localhost:4200)
npm start

# Executar suíte de testes unitários dos componentes (.spec.ts)
npm test

# Executar testes em modo headless com cobertura de código
npm run test:ci

# Build de produção otimizado com rotas pré-geradas
npm run build

# Verificação de lint e boas práticas do Angular
npm run lint
```
