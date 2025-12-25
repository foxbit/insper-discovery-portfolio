import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowRight } from "phosphor-react";

interface VitrineCardProps {
  title: string;
  description: string;
  icon?: React.ElementType;
  variant?: "default" | "highlight" | "alert" | "success";
  className?: string;
  delay?: number;
}

export default function VitrineCard({ 
  title, 
  description, 
  icon: Icon, 
  variant = "default",
  className,
  delay = 0
}: VitrineCardProps) {
  
  const variants = {
    default: "bg-card border-border hover:border-primary/20",
    highlight: "bg-primary/5 border-primary/20 hover:border-primary/40",
    alert: "bg-destructive/5 border-destructive/20 hover:border-destructive/40",
    success: "bg-secondary/10 border-secondary/20 hover:border-secondary/40",
  };

  const iconColors = {
    default: "text-foreground",
    highlight: "text-primary",
    alert: "text-destructive",
    success: "text-secondary-foreground", // Using foreground for better contrast on mint
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1, ease: "easeOut" }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={cn(
        "relative p-6 rounded-none border shadow-sm transition-all duration-300 group flex flex-col h-full",
        variants[variant],
        className
      )}
    >
      {Icon && (
        <div className="mb-4">
          <div className={cn(
            "w-10 h-10 flex items-center justify-center rounded-full bg-background border border-border shadow-sm",
            iconColors[variant]
          )}>
            <Icon weight="duotone" className="w-5 h-5" />
          </div>
        </div>
      )}
      
      <h3 className="font-display font-bold text-lg mb-2 tracking-tight group-hover:text-primary transition-colors">
        {title}
      </h3>
      
      <p className="text-muted-foreground text-sm leading-relaxed flex-1">
        {description}
      </p>
      
      <div className="mt-4 pt-4 border-t border-border/50 flex items-center text-xs font-medium text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 duration-300">
        Saiba mais <ArrowRight className="ml-1 w-3 h-3" />
      </div>
    </motion.div>
  );
}
