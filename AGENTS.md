# AGENTS.md

## Escopo

Este repositório contém o FluvOS: uma aplicação de produtividade
gamificada em Next.js/TypeScript, empacotada para iOS e Android com Capacitor,
com persistência e autenticação no Supabase e uma API FastAPI separada para o
Builder Assistant. Estas instruções são locais ao repositório e devem ser
confirmadas contra o código atual.

## Regras de decisão

- Código, configuração e estado observável vencem memória, suposição e documentação antiga.
- A solicitação explícita do usuário define o escopo, salvo conflito com segurança ou regras superiores.
- Não invente paths, APIs, credenciais, resultados de testes ou estado de produção.
- Se duas interpretações mudarem materialmente o resultado, pare e pergunte.
- Seja direto. Não elogie por hábito. Corrija premissas erradas com evidência.

## Arquitetura modular — regra absoluta

- Nenhum arquivo de código-fonte pode ultrapassar 500 linhas. O limite é absoluto.
- A regra vale para TypeScript, TSX, JavaScript, Python, SQL, Swift, Java, Kotlin, testes e scripts.
- Arquivos novos devem nascer abaixo do limite.
- Arquivos existentes acima do limite não podem receber nova lógica substancial.
  Extraia módulos antes de continuar.
- Um módulo deve ter uma responsabilidade clara e uma interface pequena.
- Não crie módulos gigantes, funções gigantes ou componentes que misturem domínio,
  persistência, transporte e apresentação.
- Prefira composição, funções pequenas e dependências explícitas.
- Não crie abstrações de uso único nem camadas “para o futuro”.
- Testes também são código e obedecem ao limite de 500 linhas.

Verificação rápida:

```bash
find app componentes hooks lib backend supabase __tests__ types ios android -type f \( -name '*.ts' -o -name '*.tsx' -o -name '*.js' -o -name '*.mjs' -o -name '*.py' -o -name '*.sql' -o -name '*.swift' -o -name '*.java' -o -name '*.kt' \) -exec sh -c 'for file do lines=$(wc -l < "$file"); [ "$lines" -gt 500 ] && printf "%s: %s linhas\\n" "$file" "$lines"; done' sh {} +
```

## Antes de editar

- Leia o arquivo alvo, seus chamadores e os testes relevantes.
- Identifique o fluxo real: entrada, validação, domínio, persistência, resposta e UI.
- Declare suposições relevantes antes de mudanças substanciais.
- Consulte a documentação local e o `AGENTS.md` mais próximo do alvo.
- Verifique o worktree. Preserve alterações que não pertencem à tarefa.
- Não use `git reset --hard`, `git clean`, checkout destrutivo ou force push sem autorização explícita.

## Implementação

- Faça a menor mudança correta e siga os padrões do domínio afetado.
- Não refatore código adjacente sem necessidade direta.
- Remova apenas órfãos criados pela própria mudança.
- Preserve analytics, integrações, contratos públicos e comportamento nativo fora do escopo.
- O frontend usa App Router e exportação estática (`output: "export"`). Não presuma
  a existência de um runtime Next.js no ambiente publicado.
- O Capacitor consome `out/`. Mudanças que afetem recursos nativos devem considerar
  sincronização e validação separada em iOS e Android.
- Para Supabase, considere migração, RLS, grants, compatibilidade e dados existentes.
- Para APIs, valide autenticação, autorização, entrada, erros, rate limits e idempotência.
- Para o Builder Assistant, preserve a separação entre routers, services, models e utils.
- Para integrações com Gemini, Google Calendar, Outlook, Redis ou Supabase, diferencie
  falha de código de falha do provedor, rede ou credencial.
- Para UI, preserve tokens, responsividade, acessibilidade e estados de erro/loading.

## Mapa do repositório

- `app/`: páginas, layouts, grupos de rotas e estados do Next.js App Router.
- `componentes/`: UI compartilhada e componentes organizados por domínio.
- `hooks/`: comportamento, consultas e estado compartilhado do frontend.
- `lib/`: schemas, providers, Supabase, IA, calendário, Capacitor e utilitários.
- `backend/app/`: API FastAPI, routers, services, models e utilitários do assistente.
- `backend/docker-compose.yml`: API e Redis para execução local em contêineres.
- `supabase/migrations/implementados/`: migrações SQL versionadas já adotadas pelo projeto.
- `ios/` e `android/`: projetos nativos gerenciados pelo Capacitor.
- `__tests__/` e testes próximos ao código: suíte Vitest do frontend.
- `types/`: contratos TypeScript compartilhados.
- `docs/`: escopo, decisões, relatórios e especificações do produto.
- `public/`: assets públicos da aplicação web.

## Comandos

```bash
npm run dev
npm run lint
npm run typecheck
npm test
npm run test:coverage
npm run build
npx cap sync
cd backend && uvicorn app.main:app --reload
docker compose -f backend/docker-compose.yml up --build
```

Use primeiro o teste ou comando mais estreito que cubra a alteração. A suíte Python
não possui um comando de teste declarado no estado atual; não afirme que ela foi
validada sem adicionar ou executar uma verificação real. Para release, rode os gates
exigidos e declare qualquer verificação omitida.

## Segurança e produção

- Nunca exponha segredos de `.env`, Supabase, Gemini ou provedores em código, logs, commits ou respostas.
- Não substitua credenciais reais por valores inventados.
- Preserve a fronteira entre chaves públicas do frontend e segredos exclusivos do backend.
- Mudanças de autenticação devem considerar middleware, `AuthProvider`, rotas protegidas e acesso administrativo.
- Não declare produção saudável com base apenas em build local ou exportação estática concluída.
- Para publicação web ou mobile, confirme SHA, artefato, ambiente, endpoint, autorização,
  logs e estabilidade após a subida.
- Diferencie claramente: implementado, validado localmente, empacotado, publicado e verificado em produção.

## Comunicação e conclusão

- Relate arquivos alterados, comandos executados, resultados e lacunas.
- Não diga “100%” sem critérios e evidência correspondentes.
- Achados fora do escopo devem ser listados, não corrigidos silenciosamente.
- O texto deve ser curto, concreto e sem cerimônia.

## Instruções locais

Um `AGENTS.md` dentro de um subdiretório pode adicionar regras mais específicas
para aquele domínio. Regras mais próximas do arquivo editado têm precedência.
