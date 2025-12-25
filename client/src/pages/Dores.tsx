import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import { Database, Robot, ChartBar, ArrowsLeftRight, Scales } from "phosphor-react";

export default function Dores() {
  return (
    <Layout>
      <SectionHeader 
        kicker="Diagnóstico"
        title="Onde a operação trava?"
        subtitle="Identificamos 5 grandes categorias de problemas que impedem a Insper de escalar sua operação de Educação Executiva com eficiência."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <VitrineCard 
          title="Gestão de Dados"
          description="Falta de padronização e inconsistência no preenchimento de planilhas críticas, gerando uma base de dados não confiável."
          icon={Database}
          variant="alert"
          delay={0}
        />
        <VitrineCard 
          title="Falta de Automação"
          description="Processos de alocação de salas e cálculo de indicadores feitos manualmente, consumindo horas preciosas da equipe."
          icon={Robot}
          variant="alert"
          delay={1}
        />
        <VitrineCard 
          title="Visibilidade Gerencial"
          description="Diretoria sem acesso a dashboards em tempo real, dependendo de relatórios estáticos e defasados para tomar decisões."
          icon={ChartBar}
          variant="alert"
          delay={2}
        />
        <VitrineCard 
          title="Silos de Comunicação"
          description="Interfaces entre as áreas Comercial, Acadêmica e Operações geram ruído e perda de informação na passagem de bastão."
          icon={ArrowsLeftRight}
          variant="highlight"
          delay={3}
        />
        <VitrineCard 
          title="Escalabilidade"
          description="O modelo atual, baseado em esforço humano intensivo, não suporta o crescimento projetado de 20% ao ano."
          icon={Scales}
          variant="highlight"
          delay={4}
        />
      </div>

      <div className="bg-muted/30 border border-border p-8 md:p-12">
        <h3 className="font-display font-bold text-2xl mb-6">O Custo da Ineficiência</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="text-muted-foreground">Tempo gasto em correção de dados</span>
            <span className="font-mono font-bold text-destructive">~15h / semana</span>
          </div>
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="text-muted-foreground">Risco de conflito de salas</span>
            <span className="font-mono font-bold text-destructive">Alto</span>
          </div>
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="text-muted-foreground">Delay na informação gerencial</span>
            <span className="font-mono font-bold text-destructive">D-7 (Semanal)</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}
