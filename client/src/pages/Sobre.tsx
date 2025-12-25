import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Buildings, Globe, Student, Trophy } from "phosphor-react";

export default function Sobre() {
  return (
    <Layout>
      <SectionHeader 
        kicker="O Cliente"
        title="Insper: Excelência em Educação"
        subtitle="Uma das instituições de ensino e pesquisa mais respeitadas da América Latina, referência em Negócios, Economia, Direito, Engenharia e Ciência da Computação."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg text-muted-foreground"
        >
          <p className="lead text-foreground font-medium">
            O Insper é uma instituição sem fins lucrativos dedicada ao ensino e à pesquisa. Sua missão é promover a transformação do Brasil por meio da formação de líderes inovadores e da pesquisa aplicada.
          </p>
          <p>
            Com um campus moderno em São Paulo, a instituição se destaca pelo rigor acadêmico e pela forte conexão com o mercado. A área de <strong>Educação Executiva</strong>, foco deste projeto, é responsável por manter profissionais e líderes atualizados em um mundo em constante transformação.
          </p>
          <p>
            A complexidade da operação de Educação Executiva reside na sua diversidade: cursos abertos de curta duração, programas customizados para empresas (B2B), MBAs e certificados, todos exigindo uma orquestração precisa de professores, salas e recursos.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 gap-4"
        >
          {[
            { icon: Buildings, title: "Campus", desc: "Vila Olímpia, SP" },
            { icon: Student, title: "Alunos", desc: "Milhares/ano" },
            { icon: Globe, title: "Alcance", desc: "Internacional" },
            { icon: Trophy, title: "Reconhecimento", desc: "Triple Crown" },
          ].map((item, i) => (
            <div key={i} className="bg-card border border-border p-6 flex flex-col items-center text-center hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center text-secondary-foreground mb-4 group-hover:scale-110 transition-transform">
                <item.icon weight="duotone" className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="bg-foreground text-background p-8 md:p-12 rounded-sm mb-20">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-6">O Contexto do Projeto</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            "A Insper me procurou com um desafio claro: a operação cresceu, mas as ferramentas não. Precisei entender como digitalizar e otimizar o fluxo de ponta a ponta, da venda de um curso customizado até a alocação da sala de aula."
          </p>
        </div>
      </div>
    </Layout>
  );
}
