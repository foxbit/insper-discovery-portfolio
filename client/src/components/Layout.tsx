import { useState } from "react";
import { Link, useLocation } from "wouter";
import { 
  House, 
  Buildings, 
  Target, 
  MagnifyingGlass, 
  Users, 
  WarningCircle, 
  Lightbulb, 
  ListChecks,
  List,
  X
} from "phosphor-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const menuItems = [
  { path: "/", label: "O projeto", icon: House },
  { path: "/sobre", label: "Sobre a Insper", icon: Buildings },
  { path: "/metodologia", label: "Metodologia", icon: MagnifyingGlass },
  { path: "/personas", label: "Personas", icon: Users },
  { path: "/dores", label: "Dores & Desafios", icon: WarningCircle },
  { path: "/insights", label: "Insights", icon: Lightbulb },
  { path: "/funcionalidades", label: "Funcionalidades", icon: ListChecks },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const NavContent = () => (
    <div className="flex flex-col h-full py-8 px-4 bg-sidebar border-r border-sidebar-border">
      <div className="mb-10 px-2">
        <h1 className="font-display font-bold text-2xl tracking-tighter text-sidebar-foreground">
          INSPER<span className="text-primary">.</span>
        </h1>
        <p className="text-xs text-sidebar-foreground/60 font-mono mt-1 uppercase tracking-widest">
          Discovery Portfolio
        </p>
      </div>

      <nav className="flex-1 space-y-1">
        {menuItems.map((item) => {
          const isActive = location === item.path;
          const Icon = item.icon;
          
          return (
            <Link key={item.path} href={item.path}>
              <a 
                className={cn(
                  "flex items-center gap-3 px-3 py-2.5 text-sm font-medium transition-all duration-200 group relative",
                  isActive 
                    ? "text-sidebar-primary-foreground bg-sidebar-primary shadow-sm" 
                    : "text-sidebar-foreground/70 hover:text-sidebar-foreground hover:bg-sidebar-accent"
                )}
                onClick={() => setIsMobileOpen(false)}
              >
                <Icon 
                  weight={isActive ? "fill" : "regular"} 
                  className={cn("w-5 h-5", isActive ? "text-sidebar-primary-foreground" : "text-sidebar-foreground/50 group-hover:text-sidebar-foreground")} 
                />
                {item.label}
                {isActive && (
                  <div className="absolute right-0 top-0 bottom-0 w-1 bg-primary-foreground/20" />
                )}
              </a>
            </Link>
          );
        })}
      </nav>


    </div>
  );

  return (
    <div className="min-h-screen bg-background flex">
      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-64 fixed inset-y-0 left-0 z-50">
        <NavContent />
      </aside>

      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 h-16 bg-background/80 backdrop-blur-md border-b border-border z-40 flex items-center justify-between px-4">
        <span className="font-display font-bold text-lg">INSPER.</span>
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <List className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72 border-r border-sidebar-border">
            <NavContent />
          </SheetContent>
        </Sheet>
      </div>

      {/* Main Content */}
      <main className="flex-1 lg:ml-64 min-h-screen pt-20 lg:pt-0">
        <div className="container py-8 lg:py-12 max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
          {children}
        </div>
      </main>
    </div>
  );
}
