import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { CheckCircle, MagnifyingGlass, Users, FlowArrow } from "phosphor-react";

export default function Metodologia() {
  const steps = [
    {
      icon: Users,
      title: "Imersão & Entrevistas",
      desc: "Realizamos entrevistas em profundidade com 5 stakeholders chave, do operacional ao diretivo, para entender as dores reais.",
      details: ["Diretoria", "Comercial", "Operações", "Planejamento"]
    },
    {
      icon: MagnifyingGlass,
      title: "Análise de Artefatos",
      desc: "Mergulhamos nas planilhas, relatórios e sistemas atuais para mapear o fluxo de dados e identificar gargalos.",
      details: ["Planilhas de Alocação", "Relatórios de Vendas", "Sistemas Legados"]
    },
    {
      icon: FlowArrow,
      title: "Mapeamento de Jornadas",
      desc: "Desenhamos o fluxo atual (As-Is) e identificamos os pontos de fricção onde a informação se perde ou se corrompe.",
      details: ["Blueprint de Serviço", "Fluxo de Informação", "Pontos de Contato"]
    }
  ];

  return (
    <Layout>
      <SectionHeader 
        kicker="Processo"
        title="Metodologia de Discovery"
        subtitle="Não adivinhamos. Investigamos. Nossa abordagem combinou pesquisa qualitativa com análise rigorosa de processos."
      />

      <div className="relative mb-24">
        {/* Connecting Line */}
        <div className="absolute left-8 top-0 bottom-0 w-px bg-border hidden md:block" />

        <div className="space-y-16">
          {steps.map((step, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative flex flex-col md:flex-row gap-8 md:items-start"
            >
              <div className="flex-shrink-0 relative z-10">
                <div className="w-16 h-16 bg-background border border-border flex items-center justify-center shadow-sm group hover:border-primary transition-colors">
                  <step.icon weight="duotone" className="w-8 h-8 text-primary" />
                </div>
              </div>
              
              <div className="flex-1 pt-2">
                <h3 className="font-display font-bold text-2xl mb-3">{step.title}</h3>
                <p className="text-lg text-muted-foreground mb-6 max-w-2xl leading-relaxed">
                  {step.desc}
                </p>
                
                <div className="flex flex-wrap gap-3">
                  {step.details.map((detail, j) => (
                    <span key={j} className="inline-flex items-center px-3 py-1 rounded-full bg-secondary/10 text-secondary-foreground text-xs font-medium border border-secondary/20">
                      <CheckCircle weight="fill" className="w-3 h-3 mr-2 opacity-70" />
                      {detail}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-card border border-border p-8 relative overflow-hidden group">
          <div className="relative z-10">
            <h3 className="font-display font-bold text-xl mb-4">O Resultado</h3>
            <p className="text-muted-foreground">
              Uma visão clara e documentada de que o problema não era "falta de esforço", mas sim "falta de ferramentas adequadas". O diagnóstico permitiu traçar um plano de ação cirúrgico.
            </p>
          </div>
          <div className="absolute right-0 bottom-0 opacity-5 transform translate-x-1/4 translate-y-1/4 group-hover:scale-110 transition-transform duration-700">
            <MagnifyingGlass weight="fill" className="w-64 h-64" />
          </div>
        </div>
        
        <div className="relative h-full min-h-[300px] rounded-sm overflow-hidden border border-border">
          <img 
            src="/images/methodology-concept.png" 
            alt="Methodology Visualization" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
      </div>
    </Layout>
  );
}
