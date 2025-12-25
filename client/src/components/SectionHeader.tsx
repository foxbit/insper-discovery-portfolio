import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  className?: string;
  align?: "left" | "center";
}

export default function SectionHeader({ 
  kicker, 
  title, 
  subtitle, 
  className,
  align = "left" 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 max-w-3xl", 
      align === "center" ? "mx-auto text-center" : "",
      className
    )}>
      {kicker && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="block text-xs font-mono uppercase tracking-widest text-primary mb-3"
        >
          {kicker}
        </motion.span>
      )}
      
      <motion.h2 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-3xl md:text-4xl lg:text-5xl tracking-tighter text-foreground mb-4 text-balance"
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground leading-relaxed text-balance"
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className={cn(
          "h-1 w-20 bg-primary mt-6",
          align === "center" ? "mx-auto" : ""
        )}
      />
    </div>
  );
}
