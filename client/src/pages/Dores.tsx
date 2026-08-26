import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import { Database, Robot, ChartBar, ArrowsLeftRight, Scales } from "phosphor-react";

export default function Dores() {
  return (
    <Layout>
      <SectionHeader 
        kicker="Diagnosis"
        title="Where does the operation get stuck?"
        subtitle="I identified 5 major categories of problems that prevent Insper from scaling its Executive Education operation efficiently."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        <VitrineCard 
          title="Data Management"
          description="Lack of standardization and inconsistency in filling critical spreadsheets, creating an unreliable data foundation."
          icon={Database}
          variant="alert"
          delay={0}
        />
        <VitrineCard 
          title="Lack of Automation"
          description="Room allocation and metric calculation processes done manually, consuming precious team hours."
          icon={Robot}
          variant="alert"
          delay={1}
        />
        <VitrineCard 
          title="Management Visibility"
          description="Executive board without access to real-time dashboards, relying on static, outdated reports to make decisions."
          icon={ChartBar}
          variant="alert"
          delay={2}
        />
        <VitrineCard 
          title="Communication Silos"
          description="Interfaces between Sales, Academic and Operations areas generate noise and information loss during handoffs."
          icon={ArrowsLeftRight}
          variant="highlight"
          delay={3}
        />
        <VitrineCard 
          title="Scalability"
          description="The current model, based on intensive human effort, cannot support the projected 20% annual growth."
          icon={Scales}
          variant="highlight"
          delay={4}
        />
      </div>

      <div className="bg-muted/30 border border-border p-8 md:p-12">
        <h3 className="font-display font-bold text-2xl mb-6">The Cost of Inefficiency</h3>
        <div className="space-y-6">
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="text-muted-foreground">Time spent on data correction</span>
            <span className="font-mono font-bold text-destructive">~15h / week</span>
          </div>
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="text-muted-foreground">Room conflict risk</span>
            <span className="font-mono font-bold text-destructive">High</span>
          </div>
          <div className="flex items-center justify-between border-b border-border pb-4">
            <span className="text-muted-foreground">Management information delay</span>
            <span className="font-mono font-bold text-destructive">D-7 (Weekly)</span>
          </div>
        </div>
      </div>
    </Layout>
  );
}