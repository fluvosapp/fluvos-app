-- ============================================================================
-- MIGRATION 023: Atualiza metadados e dados seedados para a marca FluvOS
-- ============================================================================

DO $$
BEGIN
  IF to_regclass('public.users') IS NOT NULL THEN
    EXECUTE 'COMMENT ON TABLE public.users IS ''Tabela de usuários do FluvOS''';
  END IF;

  IF to_regclass('public.tasks') IS NOT NULL THEN
    EXECUTE 'COMMENT ON TABLE public.tasks IS ''Tarefas do Kanban do FluvOS''';
  END IF;

  IF to_regclass('public.events') IS NOT NULL THEN
    EXECUTE 'COMMENT ON TABLE public.events IS ''Eventos da agenda do FluvOS''';
  END IF;

  IF to_regclass('public.courses') IS NOT NULL THEN
    EXECUTE $sql$
      UPDATE public.courses
      SET titulo = 'FluvOS Junior'
      WHERE slug = 'builders-performance-junior'
        AND titulo = 'Builders' || ' Performance Junior'
    $sql$;
  END IF;

  IF to_regclass('public.lessons') IS NOT NULL THEN
    EXECUTE $sql$
      UPDATE public.lessons
      SET descricao = 'Entenda o metodo e a visao do FluvOS.'
      WHERE id = '22221111-aaaa-4111-8111-111111111111'::UUID
        AND descricao = 'Entenda o metodo e a visao do '
          || 'Builder' || ' Performance.'
    $sql$;
  END IF;
END
$$;
