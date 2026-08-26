import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import VitrineCard from "@/components/VitrineCard";
import { Database, Lightning, PresentationChart, PuzzlePiece, Handshake } from "phosphor-react";

export default function Insights() {
  return (
    <Layout>
      <SectionHeader 
        kicker="The Future"
        title="Insights & Opportunities"
        subtitle="I didn't need to reinvent the wheel. The solution lies in connecting the dots and empowering the data Insper already has."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        <div className="col-span-1 md:col-span-2 bg-secondary/5 border border-secondary/20 p-8 md:p-12 relative overflow-hidden">
          <div className="relative z-10">
            <span className="text-secondary font-mono uppercase tracking-widest text-xs font-bold mb-2 block">The Big Opportunity</span>
            <h3 className="font-display font-bold text-3xl md:text-4xl mb-6 text-foreground">Single Source of Truth</h3>
            <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
              The creation of a centralized system that acts as the single source of truth for all data on courses, cohorts and allocations. This eliminates the need for spreadsheet reconciliation and ensures everyone is looking at the same number.
            </p>
          </div>
          <Database weight="duotone" className="absolute right-0 bottom-0 text-secondary/10 w-64 h-64 transform translate-x-1/4 translate-y-1/4" />
        </div>

        <VitrineCard 
          title="Intelligent Automation"
          description="Algorithms to suggest room allocation based on business rules (capacity, resources, history), turning hours of work into seconds."
          icon={Lightning}
          variant="success"
          delay={0}
        />
        
        <VitrineCard 
          title="Real-Time Dashboard"
          description="Management dashboards that show the health of the operation now, not last week. Revenue, occupancy and margin at your fingertips."
          icon={PresentationChart}
          variant="success"
          delay={1}
        />
        
        <VitrineCard 
          title="Structural Standardization"
          description="Definition of a single taxonomy for courses and programs, eliminating ambiguities and easing integration between systems."
          icon={PuzzlePiece}
          variant="default"
          delay={2}
        />
        
        <VitrineCard 
          title="Seamless Integration"
          description="API connection between the CRM (Salesforce), the ERP and the new academic management system, eliminating manual data entry."
          icon={Handshake}
          variant="default"
          delay={3}
        />
      </div>
    </Layout>
  );
}