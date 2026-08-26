import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { CheckCircle } from "phosphor-react";

const modules = [
  {
    title: "Course Management Module",
    features: [
      "Unified registration of programs and cohorts",
      "Versioning of technical specs",
      "Approval status and workflow",
      "Change history"
    ]
  },
  {
    title: "Resource Allocation Module",
    features: [
      "Calendar view (Gantt/Weekly)",
      "Automatic conflict detection",
      "Smart room suggestions",
      "Equipment and layout management"
    ]
  },
  {
    title: "Financial & Performance Module",
    features: [
      "Automatic margin calculation per cohort",
      "Tracking of actual vs budget",
      "Team productivity indicators",
      "Room occupancy reports"
    ]
  },
  {
    title: "Stakeholder Portal",
    features: [
      "Personalized view by profile (Sales, Academic, Operations)",
      "Critical change notifications",
      "Quick access to documents and contracts",
      "Executive dashboard for the board"
    ]
  }
];

export default function Funcionalidades() {
  return (
    <Layout>
      <SectionHeader 
        kicker="Roadmap"
        title="What to Build?"
        subtitle="Based on the pain points and opportunities, I defined the essential modules for the MVP of the new Academic Management System."
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