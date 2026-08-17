# FluvOS Design System — migração v0.1

## Estado

O catálogo local `/design-system` passa a representar o FluvOS. A identidade visual anterior permanece no código legado do produto até uma migração incremental, mas não é mais autoridade para novas interfaces.

## Decisões incompatíveis

| Contrato anterior | Contrato FluvOS v0.1 |
|---|---|
| Sora + Manrope | 42dot Sans via Google Fonts, única família |
| Claro + dark | White-only; `color-scheme: light` |
| Orange `#F26B2A` como marca | Paleta oficial + extensão orange/green vivid |
| Hexagon / Builders | 16 masters oficiais FluvOS |
| Tokens globais sem rastreabilidade | Primitivo → semântico → componente |
| Galeria genérica | P01–P07 prioritários + pins 01–15 secundários |

## Entrada no sistema novo

- Fonte de verdade tipada: `lib/design-system/fluvos.ts`.
- Primitives do catálogo: `componentes/design-system/fluvos/primitives.tsx`.
- Escopo visual white-only: `app/design-system/fluvos-design-system.css`.
- Documento normativo: `docs/frontend/fluvos-design-system/FLUVOS-PINTEREST-DESIGN-SYSTEM.md`.
- Story de implementação: `docs/stories/story-ds-3.0-fluvos-design-system-vivid.md`.

## Política de aliases

Novos componentes não devem importar valores cromáticos do `lib/design-tokens.ts` legado. Durante a migração do produto, um alias temporário precisa apontar para um token semântico FluvOS e carregar comentário de depreciação. Nenhum novo valor hexadecimal entra em componente de domínio se já existir token equivalente.

## Sequência segura para o produto

1. Migrar marca e tipografia do shell.
2. Retirar toggles e consumidores de tema.
3. Migrar primitives compartilhadas para tokens semânticos.
4. Migrar uma rota por vez, começando por `/inicio` e `/agenda`.
5. Remover `.dark`, `next-themes` e tokens Builders somente após busca sem consumidores.
6. Executar os gates exigidos pela story quando houver autorização explícita.

## Escopo atual

O catálogo está isolado para permitir avaliação visual sem recolorir silenciosamente o aplicativo inteiro. A migração global não deve ser feita em lote sem comparar as telas reais e validar regressões de conteúdo, contraste, wrapping e estado.
