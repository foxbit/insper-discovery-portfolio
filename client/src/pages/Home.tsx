import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, ChartLineUp, MagnifyingGlass, Strategy, Users } from "phosphor-react";
import { Link } from "wouter";

export default function Home() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative mb-24 pt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider mb-6">
                Case Study: Insper Executive Education
              </span>
              <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl tracking-tighter leading-[0.9] mb-6 text-foreground">
                Redesigning the <br/>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/60">
                  Academic Operations
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed mb-8 max-w-xl">
                How I turned manual processes and fragmented data into a unified strategic vision for one of Brazil's leading business schools.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/sobre">
                  <Button size="lg" className="rounded-none h-12 px-8 text-base font-medium bg-primary hover:bg-primary/90 text-white shadow-lg shadow-primary/20">
                    Explore the Case <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
                <Link href="/metodologia">
                  <Button variant="outline" size="lg" className="rounded-none h-12 px-8 text-base font-medium border-primary/20 hover:bg-primary/5 hover:text-primary">
                    View Methodology
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-5 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative z-10"
            >
              <div className="aspect-[4/5] relative rounded-sm overflow-hidden shadow-2xl border border-border">
                <img 
                  src="/images/hero-bg.png" 
                  alt="Abstract Architectural Composition" 
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <p className="font-mono text-xs opacity-70 mb-1">PROJECT</p>
                    <p className="font-display font-bold text-2xl">Insper Discovery Portfolio</p>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10" />
          </div>
        </div>
      </section>

      {/* The Challenge in Numbers */}
      <section className="mb-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border border border-border">
          {[
            { label: "Stakeholders Interviewed", value: "5", suffix: "Key Players" },
            { label: "Areas Impacted", value: "4", suffix: "Departments" },
            { label: "Annual Revenue", value: "78", suffix: "Million (Target)" },
            { label: "Discovery Duration", value: "4", suffix: "Weeks" },
          ].map((stat, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-background p-8 text-center group hover:bg-secondary/5 transition-colors"
            >
              <h3 className="font-display font-bold text-4xl md:text-5xl text-primary mb-2 group-hover:scale-110 transition-transform duration-300">
                {stat.value}
              </h3>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground mb-1">{stat.suffix}</p>
              <p className="text-sm font-medium text-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Overview Section */}
      <section className="mb-24">
        <SectionHeader 
          kicker="Overview"
          title="The Growth Challenge"
          subtitle="Insper grew exponentially, but its operational processes remained analog. The result? An 'Iceberg' of hidden inefficiencies."
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <VitrineCard 
            title="Fragmented Data"
            description="Critical information scattered across dozens of disconnected spreadsheets, causing daily inconsistency and rework."
            icon={ChartLineUp}
            variant="alert"
            delay={0}
          />
          <VitrineCard 
            title="Manual Processes"
            description="I found high-performance teams spending hours on repetitive allocation tasks and manual checks."
            icon={Strategy}
            variant="highlight"
            delay={2}
          />
          <VitrineCard 
            title="Limited Visibility"
            description="Managers without access to real-time metrics for strategic decision-making about courses and resources."
            icon={MagnifyingGlass}
            variant="default"
            delay={4}
          />
        </div>
      </section>

      {/* Quote Section */}
      <section className="mb-24 bg-secondary/10 p-12 md:p-20 relative overflow-hidden">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <Users className="w-12 h-12 text-primary mx-auto mb-8 opacity-50" />
          <blockquote className="font-display font-medium text-2xl md:text-4xl leading-tight text-foreground mb-8">
            "We need a management view that lets us understand not only what happened, but what is going to happen in our operation."
          </blockquote>
          <cite className="not-italic flex flex-col items-center">
            <span className="font-bold text-lg">Silvio Abrahão Laban Neto</span>
            <span className="text-sm text-muted-foreground font-mono uppercase tracking-widest">Area Director</span>
          </cite>
        </div>
        
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#5FD3BC_1px,transparent_1px)] [background-size:20px_20px]" />
        </div>
      </section>

      {/* Next Steps CTA */}
      <section className="mb-12 text-center">
        <h2 className="font-display font-bold text-3xl mb-6">Dive into the Details</h2>
        <div className="flex justify-center gap-4">
          <Link href="/sobre">
            <Button size="lg" className="rounded-none h-14 px-10 text-lg bg-foreground text-background hover:bg-foreground/90">
              Start the Journey <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </Layout>
  );
}