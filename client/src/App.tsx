import React from 'react';
import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import Home from "@/pages/home";
import Skills from "@/pages/skills";
import Projects from "@/pages/projects";
import NotFound from "@/pages/not-found";
import Languages from "./pages/languages";
import Footer from './components/layout/footer';
import Navbar from './components/layout/Navbar';

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/skills" component={Skills} />
      <Route path="/projects" component={Projects} />
      <Route path="/languages" component={Languages} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Initialize theme with dark mode preference
  React.useEffect(() => {
    // Set dark mode as default
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-background text-foreground flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Router />
        </main>
        <Footer />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;