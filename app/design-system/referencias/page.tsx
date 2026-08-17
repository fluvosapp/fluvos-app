import { FluvosBadge, FluvosSection, ReferenceCard } from "@/componentes/design-system/fluvos/primitives"
import { fluvosPinterestReferences, fluvosPriorityReferences } from "@/lib/design-system/fluvos"

export default function ReferenciasPage() {
  return (
    <div>
      <header className="fds-page-header">
        <div>
          <p className="fds-eyebrow">Rastreabilidade visual</p>
          <h1 className="fds-page-title">Referência não é cópia. É decisão explicada.</h1>
          <p className="fds-page-description">As sete imagens anexadas têm prioridade máxima. Os quinze pins complementam atmosfera, composição e comportamento. Marca, conteúdo e personagens de terceiros nunca viram assets do produto.</p>
        </div>
        <FluvosBadge variant="brand">7 prioritárias + 15 secundárias</FluvosBadge>
      </header>

      <FluvosSection eyebrow="Prioridade máxima" title="P01–P07: linguagem operacional" description="Essas imagens governam dashboard, agenda, tarefa, voz, revisão, listas, Premium e IA. A cor foi reinterpretada pela identidade FluvOS.">
        <div className="fds-reference-grid">
          {fluvosPriorityReferences.map((reference, index) => <ReferenceCard key={reference.id} image={reference.image} id={reference.id} title={reference.title} description={reference.contribution} priority={index === 0} />)}
        </div>
      </FluvosSection>

      <FluvosSection eyebrow="Pinterest" title="Pins 01–15: repertório secundário" description="As imagens são carregadas sob demanda e cada contribuição está explicitada para evitar decisões vagas de moodboard.">
        <div className="fds-reference-grid">
          {fluvosPinterestReferences.map((reference) => <ReferenceCard key={reference.id} image={reference.image} id={`PIN-${reference.id}`} title={reference.title} description={reference.contribution} />)}
        </div>
        <div className="fds-inset-note"><strong>Limite de extração:</strong> imagens raster permitem inferir forma, hierarquia, ritmo e comportamento visual. Não permitem afirmar com exatidão valores de token, fonte original, contrato de interação oculto ou direitos de uso.</div>
      </FluvosSection>
    </div>
  )
}
