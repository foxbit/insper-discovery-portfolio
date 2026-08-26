import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { Buildings, Globe, Student, Trophy } from "phosphor-react";

export default function Sobre() {
  return (
    <Layout>
      <SectionHeader 
        kicker="The Client"
        title="Insper: Excellence in Education"
        subtitle="One of Latin America's most respected teaching and research institutions, a benchmark in Business, Economics, Law, Engineering and Computer Science."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="prose prose-lg text-muted-foreground"
        >
          <p className="lead text-foreground font-medium">
            Insper is a nonprofit institution dedicated to teaching and research. Its mission is to drive Brazil's transformation through the education of innovative leaders and applied research.
          </p>
          <p>
            With a modern campus in São Paulo, the institution stands out for its academic rigor and strong connection with the market. The <strong>Executive Education</strong> area, the focus of this project, is responsible for keeping professionals and leaders up to date in a constantly changing world.
          </p>
          <p>
            The complexity of the Executive Education operation lies in its diversity: short open-enrollment courses, custom programs for companies (B2B), MBAs and certificates — all requiring precise orchestration of faculty, classrooms and resources.
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
            { icon: Student, title: "Students", desc: "Thousands/year" },
            { icon: Globe, title: "Reach", desc: "International" },
            { icon: Trophy, title: "Recognition", desc: "Triple Crown" },
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
          <h3 className="font-display font-bold text-2xl md:text-3xl mb-6">The Project Context</h3>
          <p className="text-lg opacity-90 leading-relaxed">
            "Insper approached me with a clear challenge: the operation grew, but the tools did not. I needed to understand how to digitize and optimize the end-to-end flow, from selling a custom course to allocating the classroom."
          </p>
        </div>
      </div>
    </Layout>
  );
}