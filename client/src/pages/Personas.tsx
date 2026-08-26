import Layout from "@/components/Layout";
import SectionHeader from "@/components/SectionHeader";
import { motion } from "framer-motion";
import { User, Target, Warning, Lightbulb } from "phosphor-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const personas = [
  {
    id: "rina",
    name: "Rina Xavier",
    role: "Head of Executive Education",
    image: "/images/persona-rina.png",
    quote: "I need to know if we're going to hit the 78 million target without having to ask three different people.",
    goals: ["Consolidated revenue view", "Efficient team management", "Sustainable growth"],
    pains: ["Fragmented data", "Lack of real-time visibility", "Manual processes that create errors"]
  },
  {
    id: "debora",
    name: "Débora Lopes",
    role: "Sales Analyst",
    image: "/images/persona-debora.png",
    quote: "My job is to sell, but I spend half my time filling in spreadsheets nobody reads.",
    goals: ["Agility in contracting", "Error-free billing", "Fluid communication with legal"],
    pains: ["Spreadsheet rework", "Decentralized information", "Dependence on others for status"]
  },
  {
    id: "richard",
    name: "Richard Feliciano",
    role: "Room Planning",
    image: "/images/persona-richard.png",
    quote: "It's a daily puzzle. If one piece of information changes at the edge, my entire room plan falls apart.",
    goals: ["Optimized resource allocation", "Demand predictability", "Conflict automation"],
    pains: ["Last-minute changes not communicated", "Inconsistent input data", "100% manual process"]
  }
];

export default function Personas() {
  return (
    <Layout>
      <SectionHeader 
        kicker="Users"
        title="Who keeps the operation running?"
        subtitle="I mapped the main actors in the process to understand their motivations, pain points and daily needs."
      />

      <Tabs defaultValue="rina" className="w-full">
        <TabsList className="w-full justify-start mb-12 bg-transparent border-b border-border p-0 h-auto rounded-none gap-8 overflow-x-auto">
          {personas.map((persona) => (
            <TabsTrigger 
              key={persona.id} 
              value={persona.id}
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:shadow-none px-0 py-4 text-lg font-medium text-muted-foreground data-[state=active]:text-foreground transition-all hover:text-foreground"
            >
              {persona.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {personas.map((persona) => (
          <TabsContent key={persona.id} value={persona.id} className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-4">
                <div className="aspect-square relative rounded-sm overflow-hidden border border-border shadow-lg mb-6 group">
                  <img 
                    src={persona.image} 
                    alt={persona.name} 
                    className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-6">
                    <div className="text-white">
                      <h3 className="font-display font-bold text-2xl">{persona.name}</h3>
                      <p className="font-mono text-sm opacity-80 uppercase tracking-wider">{persona.role}</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-secondary/10 p-6 border-l-4 border-secondary italic text-secondary-foreground/80 font-medium">
                  "{persona.quote}"
                </div>
              </div>

              <div className="lg:col-span-8 space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <Target weight="duotone" className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-xl">Main Goals</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {persona.goals.map((goal, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-card border border-border hover:border-primary/30 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{goal}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center text-destructive">
                      <Warning weight="duotone" className="w-6 h-6" />
                    </div>
                    <h4 className="font-display font-bold text-xl">Pain Points & Frustrations</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {persona.pains.map((pain, i) => (
                      <div key={i} className="flex items-start gap-3 p-4 bg-destructive/5 border border-destructive/10 hover:border-destructive/30 transition-colors">
                        <div className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground">{pain}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </Layout>
  );
}