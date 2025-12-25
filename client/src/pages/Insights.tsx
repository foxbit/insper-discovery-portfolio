import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import { Database, Lightning, PresentationChart, PuzzlePiece, Handshake } from "phosphor-react";

export default function Insights() {
  return (
    <Layout>
      <SectionHeader 
        kicker="O Futuro"
        title="Insights & Oportunidades"
        subtitle="Não precisamos reinventar a roda. A solução está em conectar os pontos e dar poder aos dados que a Insper já possui."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="col-span-1 md:col-span-2 bg-secondary/5 border border-secondary/20 p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-secondary font-mono uppercase tracking-widest text-xs font-bold mb-2 block">A Grande Oportunidade</span>
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground">Single Source of Truth</h3>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              A criação de um sistema centralizado que atue como a única fonte de verdade para todos os dados de cursos, turmas e alocações. Isso elimina a necessidade de reconciliação de planilhas e garante que todos olhem para o mesmo número.
            </p>
          </div>
          <Database weight="duotone" className="absolute right-0 bottom-0 text-secondary/10 w-64 h-64 transform translate-x-1/4 translate-y-1/4" />
        </div>

        <VitrineCard 
          title="Automação Inteligente"
          description="Algoritmos para sugerir alocação de salas baseados em regras de negócio (capacidade, recursos, histórico), transformando horas de trabalho em segundos."
          icon={Lightning}
          variant="success"
          delay={0}
        />
        
        <VitrineCard 
          title="Dashboard em Tempo Real"
          description="Painéis gerenciais que mostram a saúde da operação agora, não na semana passada. Receita, ocupação e margem na palma da mão."
          icon={PresentationChart}
          variant="success"
          delay={1}
        />
        
        <VitrineCard 
          title="Padronização Estrutural"
          description="Definição de uma taxonomia única para cursos e programas, eliminando ambiguidades e facilitando a integração entre sistemas."
          icon={PuzzlePiece}
          variant="default"
          delay={2}
        />
        
        <VitrineCard 
          title="Integração Fluida"
          description="Conexão via API entre o CRM (Salesforce), o ERP e o novo sistema de gestão acadêmica, eliminando o input manual de dados."
          icon={Handshake}
          variant="default"
          delay={3}
        />
      </div>
    </Layout>
  );
}
