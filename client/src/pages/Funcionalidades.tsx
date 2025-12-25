import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle } from "phosphor-react";

const modules = [
  {
    title: "Módulo de Gestão de Cursos",
    features: [
      "Cadastro unificado de programas e turmas",
      "Versionamento de fichas técnicas",
      "Status de aprovação e workflow",
      "Histórico de alterações"
    ]
  },
  {
    title: "Módulo de Alocação de Recursos",
    features: [
      "Visualização de calendário (Gantt/Semanal)",
      "Detecção automática de conflitos",
      "Sugestão inteligente de salas",
      "Gestão de equipamentos e layout"
    ]
  },
  {
    title: "Módulo Financeiro & Performance",
    features: [
      "Cálculo automático de margem por turma",
      "Acompanhamento de realizado vs orçado",
      "Indicadores de produtividade da equipe",
      "Relatórios de ocupação de salas"
    ]
  },
  {
    title: "Portal do Stakeholder",
    features: [
      "Visão personalizada por perfil (Comercial, Acadêmico, Operações)",
      "Notificações de mudanças críticas",
      "Acesso rápido a documentos e contratos",
      "Dashboard executivo para diretoria"
    ]
  }
];

export default function Funcionalidades() {
  return (
    <Layout>
      <SectionHeader 
        kicker="Roadmap"
        title="O Que Construir?"
        subtitle="Com base nas dores e oportunidades, defini os módulos essenciais para o MVP do novo Sistema de Gestão Acadêmica."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {modules.map((module, i) => (
          <div key={i} className="group">
            <h3 className="font-display font-bold text-2xl mb-6 pb-2 border-b border-border group-hover:border-primary transition-colors">
              {module.title}
            </h3>
            <ul className="space-y-4">
              {module.features.map((feature, j) => (
                <li key={j} className="flex items-start gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
                  <CheckCircle weight="fill" className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Layout>
  );
}
