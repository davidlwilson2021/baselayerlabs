import { motion } from "framer-motion"
import { Cpu, Shield, Zap, Network } from "lucide-react"

const features = [
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Quantum Processing",
    description: "Distributed compute architecture that scales horizontally across global nodes without latency degradation."
  },
  {
    icon: <Shield className="w-6 h-6 text-primary" />,
    title: "Zero-Trust Architecture",
    description: "Cryptographically verified interactions at every layer, ensuring absolute data sovereignty and protection."
  },
  {
    icon: <Zap className="w-6 h-6 text-primary" />,
    title: "Sub-millisecond Routing",
    description: "Proprietary networking protocols bypassing standard internet bottlenecks for high-frequency operations."
  },
  {
    icon: <Network className="w-6 h-6 text-primary" />,
    title: "Elastic Orchestration",
    description: "Dynamic resource allocation that anticipates workload spikes and provisions autonomously."
  }
]

export function Product() {
  return (
    <section id="product" className="py-32 relative bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-20 md:w-2/3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[1px] w-8 bg-primary" />
            <span className="text-primary text-xs font-medium uppercase tracking-[0.2em]">Platform</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-light text-foreground mb-6"
          >
            Engineered for <br/> Absolute <span className="font-semibold text-primary">Performance.</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl"
          >
            We don't build generic software. We engineer deeply optimized infrastructure primitives that give enterprise applications an unfair advantage.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.1 * index }}
              className="bg-background p-10 md:p-14 group hover:bg-card transition-colors duration-500"
            >
              <div className="mb-6 inline-flex p-4 border border-border bg-background group-hover:border-primary/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-display font-medium text-foreground mb-4">{feature.title}</h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
