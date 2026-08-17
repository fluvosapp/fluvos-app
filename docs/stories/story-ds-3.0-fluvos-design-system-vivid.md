# Story DS-3.0: FluvOS Design System Vivid e catalogo vivo

**Story ID:** DS-3.0
**Epic:** N/A — solicitacao direta do usuario; DS-1.0 e DS-2.0 sao apenas baseline legado, nao um epic pai publicado
**Status:** InProgress
**Prioridade:** Critical
**Tipo:** catalogo/design system + contrato de migracao; migracao do app em backlog
**Documento normativo:** [`docs/frontend/fluvos-design-system/FLUVOS-PINTEREST-DESIGN-SYSTEM.md`](../frontend/fluvos-design-system/FLUVOS-PINTEREST-DESIGN-SYSTEM.md)
**Rota de validacao visual:** `/design-system`
**Substitui visualmente:** DS-1.0 e DS-2.0, que documentam a identidade anterior Builders Performance
**Governanca:** validada por `@po` em 2026-08-16; fronteira de aceite A/B formalizada em 2026-08-17; implementacao do escopo A autorizada e em andamento

---

## Executor Assignment

```yaml
executor: "@ux-design-expert"
quality_gate: "@dev"
quality_gate_tools:
  - "CodeRabbit"
  - "Playwright"
  - "axe"
  - "Lighthouse"
  - "static token and source audit"
```

O executor e o quality gate sao diferentes. A atribuicao segue o mapeamento de trabalho **Design/UI Components** do template local; `@dev` permanece responsavel por validar integracao, fronteiras React e uso real dos componentes.

## CodeRabbit Integration

**Story Type Analysis**

- Primary Type: Frontend / Design UI Components
- Secondary Type(s): acessibilidade, performance e migracao visual brownfield
- Complexity: High

**Specialized Agent Assignment**

- Primary Agents: `@ux-design-expert` e `@dev`
- Supporting Agents: `@qa` para o gate final e `@architect` somente se surgir decisao arquitetural fora desta story

**Quality Gate Tasks**

- [ ] Pre-Commit (`@dev`): revisar integracao, acessibilidade basica, tokens e ausencia de regressao de contrato.
- [ ] Pre-PR (`@github-devops`): executar apenas se houver solicitacao de PR.
- [ ] Pre-Deployment (`@github-devops`): N/A nesta story, que exclui deploy.

**Self-Healing Configuration**

- Primary quality agent: `@dev` em modo `light`
- Max iterations: 2
- Timeout: 15 minutos
- Severity filter: CRITICAL; HIGH e MEDIUM devem ser documentados para decisao antes de ampliar escopo

**CodeRabbit Focus Areas**

- Primary: acessibilidade WCAG 2.2 AA, responsividade, tokens em tres camadas e integridade do `BrandMark`.
- Secondary: fronteiras Server/Client Component, carregamento de imagens/fontes e ausencia de dark mode ou logica de negocio no catalogo.
- Nenhum gate ou teste deve ser executado nesta etapa de revisao PO; a autorizacao atual e somente para implementacao.

## 1. Objetivo

Implementar o design system oficial do **FluvOS** a partir da identidade de marca, dos 16 masters preservados, das sete referencias prioritarias e das 15 referencias secundarias do Pinterest. A entrega corrente desta story e o **Escopo A — catalogo/design system** e deve existir simultaneamente como:

1. uma fundacao reutilizavel de tokens e componentes, pronta para consumo posterior pelo produto sem afirmar migracao global concluida;
2. uma pagina local `/design-system` que permita inspecionar marca, tokens, componentes, padroes, estados, responsividade e procedencia;
3. um contrato rastreavel entre cada decisao implementada e o documento normativo consolidado.

A pagina e um catalogo/observatorio. Ela nao pode conter logica de negocio necessaria para o funcionamento do produto, preservando o principio `CLI First -> Observability Second -> UI Third` da Constitution. O **Escopo B — migracao/implementacao do app real** fica registrado como backlog posterior e nao bloqueia a aprovacao do Escopo A.

## 2. Story

**Como** equipe de produto e engenharia do FluvOS,
**quero** uma fundacao visual versionada e um catalogo vivo em `/design-system`,
**para que** possamos construir e revisar interfaces consistentes com a identidade oficial, as referencias prioritarias e os requisitos de acessibilidade, responsividade e performance.

## 3. Autoridade e rastreabilidade

Conflitos devem ser resolvidos nesta ordem, sem excecao silenciosa:

1. diretrizes explicitas mais recentes do produto: **white mode exclusivo**, cores digitais vivas, ausencia de dark mode e **42dot Sans via Google Fonts como unica familia tipografica viva**;
2. identidade oficial FluvOS: geometria do logo, paleta-mae e familias tipograficas;
3. referencias prioritarias P01-P07;
4. sintese do documento normativo;
5. referencias secundarias Pinterest 01-15;
6. acessibilidade, plataforma e performance, que corrigem reproducoes literais inviaveis.

### 3.1 Fontes autorizadas

| ID | Fonte | Papel na implementacao |
|---|---|---|
| SRC-01 | `docs/frontend/fluvos-design-system/FLUVOS-PINTEREST-DESIGN-SYSTEM.md` | Contrato normativo completo. |
| SRC-02 | `docs/frontend/fluvos-design-system/brand-assets/` | 16 masters oficiais, sem filtro, recoloracao ou redesenho. |
| SRC-03 | `docs/frontend/fluvos-design-system/priority-references/` | Autoridade visual primaria para componentes, densidade, estados e fluxos. |
| SRC-04 | `docs/frontend/fluvos-design-system/pinterest-references/` | Repertorio secundario; nunca sobrepoe SRC-01 a SRC-03. |
| SRC-05 | `../Identidade Visual - FluvOS/2 - Cores/PDF/Cores Fluvos.pdf` | Hexadecimais oficiais da marca. |
| SRC-06 | `../Identidade Visual - FluvOS/3 - Fontes/` | Evidencia historica da identidade; nao autoriza serif nem fonte local no runtime atual. |
| SRC-07 | `../Identidade Visual - FluvOS/4 - Examplo de Aplicacao/Aplicacao Fluvos.pdf` | Anatomia e aplicacao institucional da marca. |
| DIR-01 | Diretriz explicita do produto em 2026-08-16 | 42dot Sans via Google Fonts como unica familia para display e interface; sobrepoe a recomendacao tipografica anterior de SRC-01/SRC-06. |

## 4. Evidencia do estado atual

A implementacao existente em `/design-system` pertence ao sistema anterior e nao satisfaz esta story:

- `app/design-system/page.tsx` ainda se identifica como “Builders Performance”;
- `app/design-system/tokens/page.tsx` documenta Manrope + Sora;
- `app/layout.tsx` carrega Manrope + Sora por `next/font/google`;
- `app/globals.css` possui variante e tokens `.dark`;
- a pagina atual afirma ser bloqueada em producao, mas `middleware.ts` nao inclui `/design-system` no matcher nem executa esse bloqueio;
- marca oficial, 16 masters, paleta FluvOS, referencias P01-P07 e procedencia Pinterest nao aparecem no catalogo vivo;
- as stories DS-1.0/DS-2.0 consideram dark mode requisito, contradizendo a diretriz atual white-only.

Portanto, esta story substitui o contrato visual do catalogo e deve produzir nota de migracao/versionamento dos tokens. A aplicacao desse contrato ao app real pertence ao Escopo B e nao e condicao de aceite do catalogo nesta story.

## 5. Escopo

### 5.1 Escopo A — entrega atual do catalogo/design system

- arquitetura de tokens em tres camadas: primitivos -> semanticos -> componente;
- paleta oficial, extensoes vivid orange/green, cores funcionais e combinacoes de contraste;
- 42dot Sans via Google Fonts como unica familia tipografica viva dentro do catalogo, com hierarquia por peso/escala e fallback sans-serif;
- white mode exclusivo no catalogo, com `color-scheme: light` e sem variantes, toggle ou tokens dark no escopo `app/design-system` e `componentes/design-system/fluvos`;
- `BrandMark` tipado para consumir somente os 16 masters autorizados;
- primitivas e componentes descritos nas secoes 7.1-7.24 do documento normativo;
- pagina `/design-system` responsiva e navegavel, com visualizacao de todos os tokens, componentes, estados e referencias;
- exemplares derivados de P01-P07 e repertorio secundario claramente identificado;
- acessibilidade WCAG 2.2 AA, reduced motion, teclado, safe areas e zoom 200%;
- protecoes de performance e Core Web Vitals aplicaveis ao catalogo;
- documentacao de versao, deprecacoes e caminho de migracao do sistema anterior.

Os previews P01-P07 sao prototipos locais e deterministicos. Eles demonstram contratos de estado/interacao sem depender de autenticacao real, rotas reais, banco, APIs, voz, IA, pagamento ou calendario externos.

### 5.2 Escopo B — backlog posterior, fora do aceite desta story

- migrar `app/layout.tsx`, `app/globals.css`, providers, shell, header e navegacao do app real;
- remover globalmente Manrope/Sora, `.dark`, `next-themes`, theme provider/toggle e consumidores de aliases legados;
- migrar componentes compartilhados e rotas de produto para tokens/componentes FluvOS;
- integrar autenticacao/avatar real, dados reais, rotas, IA, voz, pagamentos e calendario;
- executar validacoes E2E e gates globais da aplicacao apos a migracao, sem substituir os gates locais exigidos para o Escopo A;
- remover identidade e copy Builders Performance do app real conforme plano incremental.

Nenhum item do Escopo B pode ser usado isoladamente para reprovar ou impedir `Ready for Review` do Escopo A. O backlog B exige story(s) propria(s), criterios de aceite e autorizacao de implementacao.

### 5.3 Excluido de ambos os escopos nesta story

- dark mode, theme toggle, tokens dark ou adaptacao automatica a `prefers-color-scheme: dark`;
- PT Serif, qualquer outra fonte serif e distribuicao runtime de fontes locais/WOFF2;
- copia de marca, textos, precos, fotos ou ilustracoes proprietarias das referencias;
- alteracao de schemas, banco, RLS, regras de negocio, autenticacao real ou contratos de API;
- implementacao de features de IA, voz, pagamentos ou calendario que ainda nao existam no produto; o catalogo demonstra somente o contrato visual/estado;
- autovetorizacao dos PNGs ou apresentacao de SVG reconstruido como master oficial;
- adocao de Storybook, nova biblioteca de primitives, nova biblioteca de motion ou Style Dictionary sem decisao arquitetural separada;
- publicacao/deploy desta story.

## 6. Arquitetura proposta

### 6.1 Tokens

Os tokens sao uma API versionada e devem evitar valores crus nos componentes:

| Camada | Exemplos | Responsabilidade |
|---|---|---|
| Primitiva | `orange-600`, `green-700`, `space-4`, `radius-xl` | Valor bruto, sem contexto de uso. |
| Semantica | `interactive-primary`, `surface-elevated`, `status-ai` | Intencao independente do componente. |
| Componente | `button-primary-bg`, `task-card-rail`, `nav-active-fg` | Contrato local derivado de tokens semanticos. |

Regras:

- nomes por finalidade, nunca por aparencia isolada;
- nenhuma referencia circular;
- cards operacionais usam branco por default; tints 50-200 sao locais;
- orange e a acao/marca dominante e tambem o marcador comercial de Premium; green e sucesso/crescimento; blue e informacao/foco/voz; purple e IA; red e risco; amarelo fica fora do sistema vigente;
- mudanca semantica ou de componente exige nota de migracao e versionamento;
- aliases existentes podem sobreviver temporariamente apenas com `@deprecated` e prazo de remocao documentado.

### 6.2 Tema e tipografia

- declarar `color-scheme: light`;
- declarar o catalogo A white-only; remocao global de `.dark`, provider/toggle e persistencia de tema pertence ao backlog B;
- usar **42dot Sans**, servida pela API CSS2 oficial do Google Fonts, como unica familia para display, titulos, corpo, botoes, dados, forms, agenda e navegacao;
- endpoint CSS2 de referencia: `https://fonts.googleapis.com/css2?family=42dot+Sans:wght@400;500;600;700;800&display=swap`;
- criar hierarquia por tamanho, line-height e pesos 400/500/600/700/800, sem recorrer a uma segunda familia;
- usar fallback `system-ui, -apple-system, "Segoe UI", sans-serif` e manter a interface funcional durante falha de rede;
- declarar `display=swap`, preconnect apenas para os hosts oficiais necessarios e ajustar CSP quando aplicavel;
- o metadata do `next/font/google` instalado no Next 16.1.1 nao exporta 42dot Sans; a implementacao nao deve inventar `42dot_Sans` nesse modulo e deve usar o endpoint CSS2 oficial enquanto essa limitacao existir;
- o lettering “fluvos” nunca e texto vivo;
- PT Serif e os WOFF2 locais ficam fora do runtime; a recomendacao serifada do documento consolidado permanece apenas como historico explicitamente sobreposto por DIR-01;
- diferenciar papeis tipograficos por peso/escala e verificar fallback/CLS na composicao real.

### 6.3 Biblioteca de componentes

Reutilizar Radix UI, CVA, Lucide, Framer Motion e os componentes existentes quando presentes. A arquitetura deve preferir composition/slots e variantes tipadas, sem duplicar implementacoes apenas para o showcase.

Inventario minimo:

- `BrandMark` e lockups;
- `Button`, icon button, badge, avatar/stack, input, textarea, busca e composer;
- content card, feature card, insight card e glass pontual;
- app header, floating bottom navigation/rail, sheet, dialog e AlertDialog;
- tabs/segmented control, metadata chips e filtros;
- date strip, time grid, calendar event e timeline;
- task/event card, course/progress card, category row e plan selector;
- creation sheet, captura por voz e matriz de estados;
- swipe deck/reveal com controle equivalente;
- chat/meeting detail, summary tabs e AI action states;
- gauge/progresso, loading, vazio, erro, offline e sucesso.

### 6.4 Arquitetura da pagina `/design-system`

| Rota | Conteudo obrigatorio |
|---|---|
| `/design-system` | Visao geral FluvOS, hierarquia de autoridade, status de cobertura e navegacao. |
| `/design-system/marca` | Anatomia, quatro familias, 16 masters, combinacoes, clear space recomendado, tamanhos, alt e proibicoes. |
| `/design-system/tokens` | Primitivos, semanticos e componente; cores, Progressive Gradient Blur, tipografia, spacing, radius, shadows, z-index e motion. |
| `/design-system/componentes` | Componentes reais com variantes, estados, controles e nomes acessiveis. |
| `/design-system/padroes` | Dashboard, agenda, tarefas, criacao, Moments, listas/Premium, reuniao/IA e composicoes responsivas. |
| `/design-system/estados` | Loading, empty, error, offline, success, reduced motion e estados especificos da secao 7.23. |
| `/design-system/referencias` | P01-P07 em primeiro nivel e pins 01-15 em segundo; procedencia, papel e o que nao deve ser copiado. |
| `/design-system/paginas` | Mini-previews representativos do FluvOS, sem dados reais nem logica de negocio duplicada. |

A rota deve funcionar em desenvolvimento local. A politica legada de DS-1.0 exige bloqueio em producao; a implementacao deve tornar essa regra verdadeira no servidor/middleware e remover a afirmacao enganosa atual caso o bloqueio nao esteja ativo.

### 6.5 Responsividade e fronteiras React

- mobile-first para 320, 375/390 e 430 px;
- validacao intermediaria em 768 px e ampla em 1280 px;
- container queries em componentes reutilizaveis e breakpoints por conteudo;
- bottom nav vira rail/sidebar em tela ampla; sheet vira dialog; carrossel pode virar grid;
- Server Components por default; client boundary apenas para navegacao/interacao;
- referencias e secoes pesadas nao entram no bundle inicial sem necessidade;
- todos os rasters declaram dimensoes; somente LCP recebe prioridade.

## 7. Matriz das referencias prioritarias

Esta matriz deve ser validada contra os sete arquivos de SRC-03 antes de iniciar os componentes. Os achados observados nao autorizam copiar a marca EverSync ou o conteudo textual dos mockups.

| Ref. | Sistemas/componentes prioritarios | Estados/interacoes que precisam aparecer no catalogo | Direcao visual obrigatoria |
|---|---|---|---|
| P01 | App header/avatar/icon buttons; agenda composta; bento de chat/tempo; course card/avatar group/progresso; floating nav | CTA, `View all`, progresso parcial/completo, item ativo, notificacao e loading/vazio | branco predominante; bento claro; raios grandes; baixa elevacao; cor viva localizada; navegacao translucida pequena. |
| P02 | Month control, date rail, time grid, event cards com rail, avatar overflow, video action, course progress | selected/default/today/has-events, conflito, chamada, scroll/snap e teclado | timeline espacada, selecao inequivoca, datas tabulares e cards brancos macios sobre grid temporal. |
| P03 | Onboarding; CTA com leading circular; header/busca/Premium/notificacao; task card; slide-to-complete; category cards | unread, premium, prioridade, truncamento, drag idle/threshold/commit/cancel, concluir por botao e editar | grande respiro, CTA dominante, cards em camadas e categoria por icon tile/rail, nao por pastel dominante. |
| P04 | Bottom sheet/grabber; tabs Task/List/Voice; fields; metadata chips; CTA; voice recorder/idioma/pausa | backdrop, tab ativa/inativa/Premium; default/focus/selected; pristine/dirty/validating/submitting; permission/listening/paused/processing/review/error | sheet branco, labels persistentes, orange na seleção operacional, azul reservado ao foco técnico/voz, CTA na safe area, chips outline e voz com estado textual. |
| P05 | Moments; progress dots; review card/stack; Later/Done; bottom action bar; trash; modal e coachmark | pending/completed/snoozed, later/done, undo, lixeira recuperavel, modal aberto e step 3/3 dismissivel | superficie focal vivid com cards brancos; profundidade tatil; destrutivo isolado; gesto sempre acompanhado por botao. |
| P06 | Segmented filter; category/list rows; icon tile; count/favorite; swipe reveal; FAB/nav; paywall/plan/feature rows | filtro, favorite on/off, swipe closed/revealed, excluir/undo, nav ativa, checked/unchecked, purchasing/restore/error | lista branca escaneavel; cor em tile; FAB central; Premium orange/green alinhado a marca; preco e radio claros. |
| P07 | Calendar/week strip/event dots; timeline; count chips; event cards; checklist; meeting detail/link; summary tabs; AI actions | selected/today/default, timed/all-day/priority/AI, checkbox, tab ativa, queued/generating/review/applied/cancelled/error e confirmacao em lote | agenda branca; cards modulares; IA contextual purple/blue; output editavel; fonte e metadados distinguiveis. |

### 7.1 Achados transversais do audit visual delegado

- o catalogo precisa mostrar **foundations + atomos + estados + composicoes**, nao apenas listas de tokens;
- cada familia aplicavel exibe default, active/selected, focus, disabled, destructive, loading/progress, completed, unread e Premium/AI;
- patterns compostos obrigatorios: dashboard/bento, calendario/timeline, criacao em sheet, listas/swipe, Moments/cleanup, paywall e reuniao/IA;
- demonstrar as tres linguagens de progresso observadas: barra segmentada, pontos/steps e slide/action progress;
- navegacao cobre bottom nav com item ativo/FAB, header actions circulares, segmented controls e date rail;
- conteudo de stress demonstra truncamento, wrapping e overflow de avatares;
- ilustracao, emoji e 3D sao apoio pontual e nunca substituem label/estado;
- estrutura e interacao de P01-P07 tem prioridade, mas cores, marca e copy sao adaptadas ao FluvOS sem copia literal.

## 8. Acceptance Criteria

AC-01 a AC-23 govern exclusivamente o Escopo A, salvo quando um criterio cita o backlog B apenas para delimitar a fronteira. Nenhum AC desta tabela exige que a migracao do app real esteja concluida.

| ID | Criterio de aceite | Fonte | Evidencia exigida |
|---|---|---|---|
| AC-01 | `/design-system` e suas oito secoes listadas em 6.4 renderizam e possuem navegacao por teclado e mobile. | OBJ, DS-1.0 | Inspecao de rotas + captura em 390, 768 e 1280 px. |
| AC-02 | O Escopo A usa apenas white mode; dentro de `app/design-system` e `componentes/design-system/fluvos` nao ha toggle, provider, tokens/variantes dark nem adaptacao visual ao esquema escuro. Infraestrutura global legada do app fica explicitamente fora deste AC. | SRC-01 ss. 2.1, 6.1, 15; fronteira A/B | Busca estatica restrita ao Escopo A + inspecao do catalogo com SO em dark. |
| AC-03 | Os quatro hex oficiais e as escalas vivid orange/green aparecem como tokens primitivos e swatches documentados. | SRC-01 ss. 6.2 | Tabela de tokens + comparacao automatizada de valores. |
| AC-04 | Tokens semanticos e de componente referenciam camadas inferiores, sem referencias circulares e sem raw hex nos componentes do Escopo A. | Skill design-system-patterns; SRC-01 s. 14 | Auditoria dos arquivos de tokens e busca direcionada no Escopo A. |
| AC-05 | 42dot Sans via Google Fonts e a unica familia viva no Escopo A, sem Manrope/Sora, serif ou WOFF2 local no catalogo; display e interface se diferenciam por peso/escala. A tipografia root do app pertence ao backlog B. | DIR-01; fronteira A/B | Network/font inspection do catalogo, busca restrita ao Escopo A, amostras e verificacao de fallback/CLS. |
| AC-06 | `BrandMark` expoe apenas combinacoes existentes no catalogo de 16 masters e preserva proporcao, transparencia, dimensoes e alt correto. | SRC-01 ss. 2.3-2.5, 7.24 | Matriz visual 4x4 + teste de props/semantica. |
| AC-07 | Nenhum logo e recolorido, filtrado, distorcido, autovetorizado ou reconstruido como texto. | SRC-01 ss. 2.5, 15 | Revisao de CSS/markup e comparacao visual com masters. |
| AC-08 | Todos os grupos de componentes de 6.3 possuem exemplo real, variantes e estados aplicaveis no catalogo; a bottom nav e icon-only, mantem exatamente um item orange, troca o estado para `Criar` durante a sheet e demonstra Perfil com foto de fixture/provider-like e fallback de iniciais. Autenticacao OAuth real pertence ao backlog B. | SRC-01 ss. 7.1-7.24; fronteira A/B | Inventario renderizado, inspecao de `aria-current`/`aria-pressed` e avatar deterministico/fallback. |
| AC-09 | A matriz minima de estados da secao 7.23 esta coberta, incluindo voz, drag/swipe, Premium e AI action sem executar operacoes reais. | SRC-01 s. 7.23 | Matriz de cobertura na UI + controles locais/deterministicos. |
| AC-10 | P01-P07 aparecem como referencias de prioridade maxima, cada uma ligada aos componentes/padroes que fundamenta. | SRC-03; SRC-01 ss. 2.9-2.16 | Pagina Referencias + links bidirecionais/ref IDs. |
| AC-11 | Os 15 pins aparecem como repertorio secundario, com procedencia e limitacoes; nenhum dark mockup cria um tema do app. | SRC-04; SRC-01 ss. 4-5, 19-21 | Catalogo de 15 entradas + aviso de prioridade/licenca. |
| AC-12 | Cards operacionais sao brancos por default e usam acentos vivid em rail, icone, badge, grafico ou bloco focal. | SRC-01 ss. 2.1, 6.1, 7.5 | Revisao visual dos patterns P01-P07. |
| AC-13 | Progressive Gradient Blur segue os tokens da secao 6.5: campo vertical monohue, area branca dominante, blur mascarado e conteudo em camada protegida; mesh/freeform multicolorido nao e linguagem vigente. | SRC-01 s. 6.5; pesquisa Fuse/Apple/MDN/W3C 2026-08-16 | Showcase orange/green + auditoria estatica + relatorio de contraste. |
| AC-14 | Textos e controles do Escopo A atendem WCAG 2.2 AA; focus-visible, labels, teclado, alt e alvos de 44 px sao observaveis. | SRC-01 s. 10 | axe/Lighthouse do catalogo sem serious/critical + roteiro manual. |
| AC-15 | Drag e swipe possuem botao/teclado equivalentes; voz possui texto/editabilidade; IA exige revisao antes de aplicar; exclusao irreversivel exige confirmacao. | SRC-01 ss. 7.19-7.22, 10.3 | Demonstracao manual dos caminhos equivalentes. |
| AC-16 | `prefers-reduced-motion: reduce` remove pulsacoes, rotacoes, confete e smooth scroll sem apagar estado/feedback. | SRC-01 s. 9.3 | Inspecao nos dois modos de motion. |
| AC-17 | O catalogo e seus prototipos A nao apresentam overflow ou acao obstruida em 320-1280 px, safe areas, teclado virtual e zoom 200%. | SRC-01 s. 8 | Matriz de viewport/zoom do catalogo documentada. |
| AC-18 | Mockups P01-P07 e pins ficam confinados ao catalogo/documentacao, carregados de forma otimizada/lazy e sem import por surfaces do app real. | SRC-01 s. 11.2 | Bundle/Network inspection do catalogo + busca de imports fora do Escopo A. |
| AC-19 | O catalogo documenta versao, aliases deprecados e caminho de migracao do sistema Builders Performance para FluvOS. | Skill design-system-patterns; estado atual | Changelog/migration section renderizada e arquivo fonte. |
| AC-20 | A rota e efetivamente bloqueada em producao, em conformidade com DS-1.0, ou a politica e formalmente alterada antes de remover o bloqueio. | DS-1.0 | Teste de request em ambiente production e inspeção do guard server-side. |
| AC-21 | Quality gates aplicaveis ao Escopo A passam antes de `Ready for Review`; gates E2E/globais do app real pertencem ao backlog B. | Constitution V; fronteira A/B | Saida registrada de lint, typecheck, tests e build do checkout, com resultados atribuiveis ao Escopo A e falhas globais preexistentes separadas documentalmente. |
| AC-22 | O catalogo demonstra barra segmentada, pontos/steps e slide/action progress, incluindo estados intermediarios e valor textual. | Audit P01, P03, P05; SRC-01 ss. 7.13, 7.17, 7.20 | Tres showcases renderizados e semantica acessivel inspecionada. |
| AC-23 | Exemplos de stress cobrem truncamento/wrapping, avatar overflow e badges redundantes a texto/icone. | Audit P02, P03, P06, P07 | Matriz de conteudo curto/longo e inspecao em 320 px/zoom 200%. |

## 9. Tasks / Subtasks

Itens marcados nesta etapa possuem evidencia em codigo ou artefato local. Gates de execucao continuam pendentes por instrucao explicita do usuario.

### Fase 0 — Baseline e contrato

- [x] 0.1 Inventariar rotas, tokens, componentes e aliases do sistema anterior.
- [x] 0.2 Confirmar a matriz P01-P07 contra os arquivos locais.
- [x] 0.3 Mapear cada componente atual para manter, adaptar, deprecar ou remover.
- [x] 0.4 Definir versao inicial da API de tokens FluvOS e politica de deprecacao.
- [ ] 0.5 Registrar baseline visual de `/design-system` antes da migracao.

### Fase 1 — Assets e tipografia

- [x] 1.1 Publicar/copiar os 16 masters sem recompressao e verificar SHA-256.
- [x] 1.2 Implementar `BrandMark` com matriz de props fechada e alt por finalidade.
- [x] 1.3 Integrar 42dot Sans pela API CSS2 oficial do Google Fonts, com pesos necessarios, `display=swap`, fallback e politica CSP compativel.
- [ ] 1.4 Garantir ausencia de Manrope/Sora/PT Serif/fontes locais no Escopo A e medir fallback/estabilidade do carregamento do catalogo; migracao root fica no backlog B.
- [x] 1.5 Documentar usos corretos/incorretos de marca no catalogo.

### Fase 2 — Tokens em tres camadas

- [x] 2.1 Implementar primitivos de cor, spacing, radius, shadow, motion e z-index.
- [x] 2.2 Implementar tokens semanticos white-only.
- [x] 2.3 Implementar tokens por componente.
- [x] 2.4 Remover infraestrutura dark do Escopo A e declarar `color-scheme: light`; remocao global fica no backlog B.
- [x] 2.5 Criar nota de migracao/aliases deprecados sem referencias circulares.
- [x] 2.6 Auditar raw values nos componentes em escopo.

### Fase 3 — Primitivas e componentes nucleares

- [x] 3.1 Botao/icon button e estados.
- [x] 3.2 Inputs, textarea, busca, composer, label e erro.
- [x] 3.3 Badge, metadata chip, avatar/stack e progress.
- [x] 3.4 Cards content/feature/insight e glass pontual.
- [x] 3.5 Tabs/segmented control, filtros e plan selector.
- [x] 3.6 Dialog, sheet, AlertDialog, toast e focus management.
- [x] 3.7 Header, floating nav icon-only com estado orange exclusivo, avatar deterministico/provider-like no Perfil e rail responsivo; auth real fica no backlog B.

### Fase 4 — Componentes prioritarios P01-P07

- [x] 4.1 Dashboard e course progress de P01.
- [x] 4.2 Date strip, time grid e event card de P02.
- [x] 4.3 Task deck/category list e alternativa ao drag de P03.
- [x] 4.4 Creation sheet e captura por voz de P04.
- [x] 4.5 Moments, quota, swipe deck e lixeira recuperavel de P05.
- [x] 4.6 Category rows/favorite/swipe reveal e Premium de P06.
- [x] 4.7 Meeting detail/summary/AI action checklist de P07.
- [x] 4.8 Cobrir matriz de estados da secao 7.23.

### Fase 5 — Catalogo vivo `/design-system`

- [x] 5.1 Refatorar layout/navegacao responsiva do catalogo.
- [x] 5.2 Criar Overview com autoridade, cobertura e versao.
- [x] 5.3 Criar Marca com 16 masters e regras.
- [x] 5.4 Criar Tokens com tres camadas e Progressive Gradient Blur documentado.
- [x] 5.5 Criar Componentes com exemplos reais e controles.
- [x] 5.6 Criar Padroes P01-P07 e transformacoes responsivas.
- [x] 5.7 Criar Estados e reduced-motion.
- [x] 5.8 Criar Referencias com 7 prioritarias + 15 secundarias e procedencia.
- [x] 5.9 Atualizar Paginas com mini-previews FluvOS.
- [ ] 5.10 Implementar bloqueio de producao verificavel.
- [x] 5.11 Demonstrar as tres linguagens de progresso e casos de stress de conteudo do audit P01-P07.

### Backlog B — migracao incremental no app real (nao bloqueia o Escopo A)

Os itens abaixo permanecem deliberadamente desmarcados e nao integram o calculo de conclusao/aceite desta story. Devem ser promovidos a story(s) posterior(es) antes de implementacao.

- [ ] 6.1 Migrar shell, header e navegacao compartilhados.
- [ ] 6.2 Migrar componentes UI compartilhados para os novos tokens.
- [ ] 6.3 Remover texto/identidade residual Builders Performance no escopo visual.
- [ ] 6.4 Verificar que nenhuma mudanca de negocio foi introduzida.
- [ ] 6.5 Atualizar consumidores de aliases deprecados conforme o plano.
- [ ] 6.6 Migrar tipografia root para 42dot Sans e remover Manrope/Sora do app real.
- [ ] 6.7 Remover infraestrutura dark global somente apos mapear consumidores.
- [ ] 6.8 Integrar auth/avatar, rotas, dados e servicos reais com cobertura E2E.
- [ ] 6.9 Executar gates globais da aplicacao migrada e registrar regressao por rota.

### Fase 7 — Quality gates e handoff

- [x] 7.1 Auditar responsividade em 320, 390, 768 e 1280 px e zoom 200%.
- [ ] 7.2 Auditar WCAG 2.2 AA automatica e manualmente.
- [x] 7.3 Auditar contraste de estados e gradientes reais.
- [x] 7.4 Auditar reduced motion, teclado, safe areas e caminhos equivalentes.
- [ ] 7.5 Auditar bundle/imagens/fontes e medir Lighthouse/Core Web Vitals de laboratorio.
- [x] 7.6 Executar `npm run lint` somente quando autorizado.
- [x] 7.7 Executar `npm run typecheck` somente quando autorizado.
- [ ] 7.8 Executar `npm test` somente apos segunda ordem explicita do usuario.
- [ ] 7.9 Executar `npm run build` somente quando autorizado.
- [x] 7.10 Atualizar checklist, Change Log, evidencias e File List real.
- [ ] 7.11 Alterar status para Ready for Review somente com todos os ACs/gates do Escopo A comprovados; backlog B nao bloqueia esta transicao.

## 10. Riscos e mitigacoes

| Risco | Severidade | Mitigacao |
|---|---|---|
| Sistema antigo e novo coexistirem sem fronteira | Alta | Manter a fronteira A/B explicita: catalogo vigente e backlog de migracao com story propria. |
| Remover dark mode global quebrar estilos dependentes de `.dark` | Alta | Tratar apenas no backlog B: mapear consumidores primeiro e migrar uma rota por vez. |
| Showcase divergir dos componentes reais | Alta | Importar componentes reais; exemplos nao mantem forks de estilos. |
| Referencias visuais virarem copia proprietaria | Alta | Extrair padroes, nao copy/assets; pagina Referencias explicita procedencia e limites. |
| PNGs oficiais perderem integridade | Media | Copia sem recompressao, SHA-256 e `BrandMark` sem filtros. |
| Google Fonts falhar, ser bloqueado por CSP ou gerar CLS | Media | CSS2 oficial, pesos minimos, `display=swap`, preconnect controlado, fallback sans-serif e medicao real. |
| Mesh/glass reduzirem contraste/performance | Media | Uso localizado, card branco de protecao, blur estatico e medicao na composicao. |
| Rota “dev-only” ficar publica | Alta | Guard server-side/middleware e teste real com `NODE_ENV=production`. |
| Gestos/voz/IA criarem demonstracoes inacessiveis | Alta | Controles equivalentes, estados textuais e mocks locais sem efeito externo. |

## 11. Dev Notes — dependencias e sequenciamento

1. Fases 0-2 bloqueiam componentes e catalogo.
2. Componentes nucleares da Fase 3 bloqueiam patterns P01-P07.
3. Patterns e referencias podem preencher o catalogo apos seus componentes existirem.
4. O Escopo A pode atingir `Ready for Review` sem executar o backlog B, desde que seus proprios ACs e gates aplicaveis estejam comprovados.
5. Integracao no app real acontece em story(s) do backlog B depois da API de tokens/componentes estar estavel.
6. Quality gates do Escopo A acontecem somente apos implementacao completa e respeitam a ordem atual do usuario de nao executar testes ate nova autorizacao; E2E/gates globais do app ficam no backlog B.

## 12. Testing e evidencias

- `npm run typecheck` passou sem erros. `npm run lint` passou sem erros e reportou 12 warnings preexistentes fora do escopo final de `/design-system/paginas`.
- Nenhum teste de suite ou build foi executado; Playwright CLI foi usado como inspecao manual automatizada do catalogo local, sem introduzir arquivo de teste.
- `npm test` permanece proibido ate segunda ordem explicita do usuario.
- Os demais gates aplicaveis ao Escopo A so podem ser executados quando autorizados e antes de `Ready for Review`; ausencia de E2E/gates globais do app real nao bloqueia esta story.
- Testes de unidade/semantica previstos ficam em `__tests__/design-system/*.test.tsx` e devem cobrir tokens, `BrandMark`, estados e nomes acessiveis.
- Validacao manual prevista: Playwright em 320, 390, 768 e 1280 px; zoom 200%; teclado; reduced motion; OS em dark sem alteracao do white mode; fallbacks da Google Fonts; rotas bloqueadas em producao.
- Validacao automatizada prevista para A: axe/Lighthouse, busca por raw hex/dark/fontes proibidas no catalogo, integridade SHA-256 dos masters e inspecao de bundle/network.
- Exemplos de voz, IA, swipe e exclusao usam estado local deterministico e nao chamam APIs reais.

### Evidencia estatica desta etapa

- 8 rotas-fonte presentes sob `app/design-system/`.
- 16 masters, 7 referencias prioritarias e 15 pins publicados em `public/design-system/fluvos/`.
- comparacao byte a byte entre as copias documentais e publicas: 0 divergencias nos 38 arquivos.
- `BrandMark` aceita apenas `FluvosBrandAssetId` e deriva alt de `identity | home-link | decorative`.
- `lib/design-system/fluvos.ts` contem camadas primitivas, semanticas e de componente, alem de metadata de assets/referencias.
- `app/design-system/fluvos-design-system.css` declara `color-scheme: light`, 42dot Sans via Google Fonts, reduced motion e breakpoints do catalogo.
- buscas estaticas no novo escopo nao encontraram Sora, Manrope, PT Serif ou Builders Performance como implementacao viva; mencoes em docs sao historico/migracao.
- buscas em `componentes/design-system/fluvos` e `app/design-system/paginas/page.tsx` nao encontraram raw hex; pigments residuais das primitives foram substituidos por tokens semanticos.
- `git diff --check` executado sem erros; isso nao substitui os gates pendentes.
- servidor `next dev` ativo em `http://localhost:3000`; as oito rotas do catalogo compilaram e responderam HTTP 200. Isso e apenas disponibilidade local, nao gate de qualidade.

### Evidencia Playwright CLI — 2026-08-17

- Viewports 320x844, 390x844, 768x900 e 1280x900 renderizados sem overflow horizontal; em 320 px, `innerWidth`, `documentElement.scrollWidth` e `body.scrollWidth` foram todos `320`.
- Inspecao equivalente a zoom 200% em 1280 px preservou `documentElement.scrollWidth = 1280`; wrapping foi observado sem scroll horizontal. A validacao nao substitui o futuro gate automatizado de acessibilidade.
- SO em dark + `prefers-reduced-motion: reduce`: o catalogo permaneceu `color-scheme: light`, fundo `rgb(255, 255, 255)` e durations efetivas de `0.01ms`.
- Auditoria geometrica de todos os `button:not([disabled])` dentro dos devices, em 390 px: zero alvos com largura ou altura inferior a 44 px.
- Bottom nav: estado normal `Hoje` foi o unico ativo; durante a sheet, `Criar` foi o unico ativo; o item Perfil exibiu uma imagem de fixture provider-like e passou a ser o unico ativo quando selecionado.
- Sheet: titulo obrigatorio, submit deterministico, fundo inerte, fechamento por Escape e retorno de foco para `Criar`; resultado observado: `Tarefa criada e pronta para revisao`.
- Agenda: `Sab 21` exibiu `0 reunioes`, `0 tarefas` e empty state; `Daily do produto` abriu o detalhe de reuniao sem bottom nav e `Voltar` retornou a Agenda.
- Voz: permission -> listening -> paused -> processing -> review; transcricao permaneceu editavel e o submit produziu confirmacao local.
- Tarefa focal: drag real ultrapassou o limiar e concluiu a tarefa; Editar abriu a sheet e Agenda continuou navegavel depois do fechamento.
- Moments/lixeira: `Depois` manteve a contagem `2`; lixeira abriu, recuperou item, moveu foco inicial para `Cancelar`, fechou por Escape, devolveu foco a `Esvaziar lixeira` e exigiu segunda confirmacao para remover.
- Reuniao/IA: tabs responderam a ArrowLeft; selecao passou de duas para uma acao; CTA confirmou e criou exatamente uma tarefa; undo, compartilhar, fechar e reabrir funcionaram.
- Console do navegador, apos estabilizacao do servidor: zero erros e zero warnings nos roteiros finais.
- Revisao final: `Criar lista` abriu diretamente `Criar nova lista`; o fundo inteiro ficou `inert`; somente `Criar` permaneceu ativo; a acao de excluir inexistiu na arvore ate o reveal; filtros expuseram `aria-pressed`; AlertDialog isolou o underlay; checkboxes e inputs de IA receberam nomes independentes; IDs duplicados = 0; alvos abaixo de 44 px = 0.
- Contraste calculado: `#B93600` sobre `#FFE4D5` = 4,82:1; `#647678` sobre white = 4,77:1; `#0054D6` sobre `#E2EDFF` = 5,49:1; `#087E4C` sobre `#D2FFE8` = 4,69:1.
- Capturas preservadas em `output/playwright/fluvos-ds-3/`: `paginas-320x844.png`, `paginas-390x844.png`, `paginas-768x900.png`, `paginas-1280x900.png`, `paginas-200-percent.png`, `creation-sheet-390x844.png`, `paginas-final-320x844.png`, `paginas-final-390x844.png` e `device-hoje-final.png`.

## 13. Definition of Done

- [ ] AC-01 a AC-23 possuem evidencia verificavel anexada nesta story.
- [x] A pagina `/design-system` representa FluvOS e nao Builders Performance.
- [x] White-only, identidade, tipografia, 16 masters, P01-P07 e pins 01-15 estao implementados/rastreaveis no catalogo isolado.
- [x] Tokens em tres camadas e componentes reais sustentam o catalogo e estao documentados como API pronta para consumo posterior; integracao no produto pertence ao backlog B.
- [x] Nao ha copia de assets proprietarios de terceiros nem feature de negocio conectada; exemplos sao estaticos e identificados.
- [x] File List real e Change Log estao atualizados.
- [ ] Gates da Constitution aplicaveis ao Escopo A foram executados e passaram quando autorizados.
- [ ] Status alterado para Ready for Review por autoridade adequada.

## 14. File List real

| Arquivo/diretorio | Estado | Papel |
|---|---|---|
| `docs/stories/story-ds-3.0-fluvos-design-system-vivid.md` | Created / updated | Contrato, revisao PO, progresso e handoff. |
| `docs/frontend/fluvos-design-system/FLUVOS-PINTEREST-DESIGN-SYSTEM.md` | Created / updated | Documento consolidado e override tipografico sans-serif. |
| `docs/frontend/fluvos-design-system/brand-assets/*` | Created | 16 masters documentais preservados. |
| `docs/frontend/fluvos-design-system/priority-references/*` | Created | 7 referencias de prioridade maxima. |
| `docs/frontend/fluvos-design-system/pinterest-references/*` | Created | 15 referencias Pinterest extraidas. |
| `docs/design-system-migration.md` | Created | Contrato de versao, deprecacao e migracao incremental. |
| `lib/design-system/fluvos.ts` | Created | Registry tipado de tokens, marca e referencias. |
| `componentes/design-system/fluvos/primitives.tsx` | Created | Primitives CVA, BrandMark fechado e showcases reutilizaveis. |
| `componentes/design-system/fluvos/navigation.tsx` | Created | Navegacao responsiva das oito rotas. |
| `app/design-system/fluvos-design-system.css` | Created / updated | Escopo white-only, Google Fonts, Progressive Gradient Blur, estados interativos e responsividade. |
| `app/design-system/layout.tsx` | Replaced | Shell FluvOS, metadata, navegacao e guard local. |
| `app/design-system/page.tsx` | Replaced | Overview, autoridade e preview do sistema. |
| `app/design-system/marca/page.tsx` | Created | 16 masters, matriz de uso e antiusos. |
| `app/design-system/tokens/page.tsx` | Replaced | Primitivos, semanticos, componentes, gradientes e tipografia. |
| `app/design-system/componentes/page.tsx` | Replaced | Primitives e componentes compostos P01-P07. |
| `app/design-system/padroes/page.tsx` | Replaced | Sete patterns operacionais rastreaveis. |
| `app/design-system/paginas/page.tsx` | Replaced | Previews mobile de sete superficies do produto. |
| `app/design-system/estados/page.tsx` | Replaced | Estados, recuperacao e tres linguagens de progresso. |
| `app/design-system/referencias/page.tsx` | Created | 7 referencias prioritarias + 15 secundarias. |
| `public/design-system/fluvos/brand/*` | Created | 16 masters para runtime, sem recompressao. |
| `public/design-system/fluvos/references/priority/*` | Created | 7 imagens prioritarias para runtime. |
| `public/design-system/fluvos/references/pinterest/*` | Created | 15 pins para runtime. |
| `public/design-system/fluvos/avatars/account-demo-v1.jpg` | Created | Avatar fotografico deterministico de demonstracao; auth/avatar real pertence ao backlog B. |
| `output/playwright/fluvos-ds-3/*.png` | Created | Evidencia visual em 320, 390, 768, 1280 px e sheet contextual. |

**Fronteira deliberada A/B:** `app/globals.css`, `app/layout.tsx`, providers, componentes de negocio e infraestrutura global de tema nao foram alterados nesta etapa e pertencem ao backlog B. `middleware.ts` tambem permanece fora, exceto se futuramente for necessario para satisfazer AC-20 sem ampliar a migracao visual. O catalogo A foi isolado para avaliacao e pode ser aprovado independentemente do app legado. `.serena/` e `.aiox/project-status.yaml` nao pertencem a esta implementacao.

## 15. Change Log

| Date | Version | Description | Author |
|---|---|---|---|
| 2026-08-16 | 1.0.0 | Story criada a partir do documento normativo FluvOS e do audit do catalogo legado. | Codex / arquitetura documental |
| 2026-08-16 | 1.1.0 | Validated GO (9/10); tipografia atualizada para 42dot Sans via Google Fonts; executor, CodeRabbit, testing e caminhos corrigidos; Status: Draft → InProgress. | @po |
| 2026-08-16 | 1.2.0 | Catalogo FluvOS implementado em oito rotas, assets publicados, tokens/componentes/padroes documentados e File List atualizada; gates permanecem pendentes por ordem do usuario. | Codex / implementacao |
| 2026-08-16 | 1.2.1 | Corrigido contrato `FluvosButton asChild`: Slot agora recebe um unico elemento; loader permanece exclusivo do botao nativo. Repro minimo e hidratacao real ficaram verdes. | Codex / bugfix |
| 2026-08-16 | 1.3.0 | `/design-system/paginas` reconstruida como quatro jornadas encadeadas e doze estados mobile: navegacao interna apenas por icones, hero Hoje vivid orange/green, criacao em bottom sheet contextual, tarefa concluivel/desfazivel, voz pausavel, Moments/lixeira recuperavel, reuniao/IA revisavel e Premium sem amarelo. `/design-system/padroes` recebeu seis contratos operacionais F01-F06. | Codex / product design |
| 2026-08-16 | 1.4.0 | Mesh/freeform foi substituido pelo Progressive Gradient Blur vertical monohue, com tokens OKLab/OKLCH, mascara progressiva e variantes orange/green. `/paginas` passou de pranchas estaticas para previews com navegacao, sheet contextual, voz por estados, filtros/favoritos, swipe+undo, drag com limiar e lixeira recuperavel. | Codex + agentes de audit/arquitetura |
| 2026-08-17 | 1.5.0 | Bottom nav refinada para um unico estado orange por vez: destinos ficam neutros, `Criar` so assume orange com a sheet aberta e Perfil exibe `avatar_url`/`picture` da conta Apple/Google, com fallback de iniciais e avatar fotografico apenas no catalogo sem sessao. | Codex / product design |
| 2026-08-17 | 1.6.0 | Fronteira de aceite formalizada: Escopo A cobre catalogo/design system e prototipos deterministicos P01-P07; Escopo B registra migracao do app real, auth/dados/integracoes e gates globais como backlog posterior nao bloqueante. Nenhum AC foi marcado como concluido por esta revisao. | @po |
| 2026-08-17 | 1.7.0 | Contratos internos fechados: primitives sem raw hex, referencias sem crop, alvos de 44 px, estados de formulario/metadata, Agenda derivada por data, sheet e AlertDialog com foco, voz completa, drag responsivo, Moments/lixeira sem semantica incorreta, IA por selecao real, um unico item ativo na nav e avatar no Perfil. Evidencias Playwright de viewport, motion, white-only e fluxos foram anexadas; gates de suite permanecem pendentes. | Codex / product design |
| 2026-08-17 | 1.8.0 | Revisao final do catalogo: `Criar lista` corrigido, swipe oculto removido da arvore acessivel, filtros/voz/IA/modal com semantica fechada, contraste AA ajustado, tokens CSS/TypeScript reconciliados e progress gradients separados do Progressive Gradient Blur. Typecheck e lint passaram; Playwright confirmou um unico item orange, avatar, dialog/list mode, inert, alvos 44 px e console limpo. | Codex / fechamento |

## 16. PO Validation

**Verdict:** GO
**Implementation Readiness Score:** 9/10
**Confidence:** High
**Validated by:** `@po`
**Validated at:** 2026-08-17

### Resultado

- os 23 criterios sao mensuraveis, possuem fonte/evidencia e cobertura por tarefas;
- P01-P07 permanecem prioridade maxima; os 15 pins sao repertorio secundario;
- identidade, 16 masters, white-only, cores vivid, componentes, estados, responsividade, acessibilidade e rota `/design-system` estao cobertos;
- DIR-01 resolve a unica contradicao normativa nova: 42dot Sans via Google Fonts sobrepoe PT Serif e fontes locais;
- o Escopo A possui fronteira de aceite propria; migracao global, auth/dados reais, integrações E2E e gates globais do app estao no backlog B e nao bloqueiam a aprovacao do catalogo;
- `EPIC-DS-001` nao possui artefato pai publicado no checkout; a story registra origem direta do usuario em vez de fingir rastreabilidade inexistente;
- a implementacao ja possui artefatos em andamento no worktree, portanto o estado correto e `InProgress`, nao apenas `Ready`;
- nenhum gate de qualidade foi declarado como aprovado nesta revisao.

### Handoff

Prosseguir com o executor designado, manter checkboxes/evidencias e File List sincronizados. `Ready for Review` continua bloqueado ate conclusao dos ACs e execucao autorizada dos gates aplicaveis **ao Escopo A**; itens do backlog B nao participam desse bloqueio.

## 17. Dev Agent Record

### Agent Model Used

Codex / GPT-5.

### Debug Log References

Capturas e evidencia visual: `output/playwright/fluvos-ds-3/`. Logs de console sao artefatos efemeros de `.playwright-cli/` e nao foram promovidos como fonte versionada.

### Completion Notes

**Implementacao:** Escopo A funcional e visualmente implementado; gates automatizados e ACs ainda sem evidencia completa mantem a story em andamento.
**Testes/lint/typecheck/build:** typecheck e lint executados com sucesso (lint sem erros; warnings preexistentes fora do recorte); suite e build nao executados conforme restricao registrada; Playwright CLI manual automatizado foi executado e registrado na secao 12.
**Observacao:** somente tarefas comprovadas por codigo, busca estatica ou navegador foram marcadas; o backlog B permanece integralmente pendente.

### File List

Usar a secao 14 como previsao e substitui-la pela lista real do diff antes de `Ready for Review`.

## 18. QA Results

QA ainda nao iniciada. Nenhum gate de implementacao foi aprovado nesta revisao PO.
