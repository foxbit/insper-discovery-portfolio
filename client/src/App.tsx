import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Metodologia from "./pages/Metodologia";
import Personas from "./pages/Personas";
import Dores from "./pages/Dores";
import Insights from "./pages/Insights";
import Funcionalidades from "./pages/Funcionalidades";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/sobre" component={Sobre} />
      <Route path="/metodologia" component={Metodologia} />
      <Route path="/personas" component={Personas} />
      <Route path="/dores" component={Dores} />
      <Route path="/insights" component={Insights} />
      <Route path="/funcionalidades" component={Funcionalidades} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
