import { motion } from "framer-motion"

const metrics = [
  { value: "99.999%", label: "Uptime SLA" },
  { value: "<2ms", label: "Global Latency" },
  { value: "10M+", label: "TPS Capacity" },
  { value: "AES-256", label: "Encryption" },
]

export function Technology() {
  return (
    <section id="technology" className="py-32 relative overflow-hidden">
      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="text-primary text-xs font-medium uppercase tracking-[0.2em]">Core Technology</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-light text-foreground mb-8 leading-tight">
              Bypassing the <br />
              <span className="font-semibold italic">Limitations</span> of legacy systems.
            </h2>
            
            <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
              <p>
                Modern applications are suffocated by decades-old infrastructure paradigms. Base Layer Labs rewrites the fundamental rules of data transit and storage.
              </p>
              <p>
                By shifting processing logic to the absolute edge and utilizing custom binary protocols, we eliminate overhead, reduce attack surfaces, and unlock unprecedented operational velocity.
              </p>
            </div>
          </motion.div>

          {/* Metrics Grid */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            {metrics.map((metric, i) => (
              <div 
                key={i} 
                className="border border-border bg-card/30 p-8 flex flex-col justify-center relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-primary/5 translate-y-[100%] group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10 text-3xl md:text-4xl font-display font-medium text-primary mb-2">{metric.value}</span>
                <span className="relative z-10 text-sm font-medium text-muted-foreground uppercase tracking-widest">{metric.label}</span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
