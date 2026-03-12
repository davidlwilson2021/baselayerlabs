import { motion } from "framer-motion"

export function Company() {
  return (
    <section id="company" className="py-32 relative bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] w-8 bg-primary" />
                <span className="text-primary text-xs font-medium uppercase tracking-[0.2em]">The Company</span>
              </div>
              <h2 className="text-3xl font-display font-medium text-foreground">Mission & Vision</h2>
            </motion.div>
          </div>

          <div className="md:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="prose prose-invert prose-lg max-w-none prose-p:font-light prose-p:text-muted-foreground prose-p:leading-relaxed"
            >
              <h3 className="text-2xl font-display font-light text-foreground mb-8 leading-normal border-l-2 border-primary pl-6 py-2">
                "We believe that infrastructure should be invisible, infallible, and instantaneous."
              </h3>
              
              <p className="mb-6">
                Founded by a collective of systems engineers, cryptographers, and network architects, Base Layer Labs was established to solve the structural bottlenecks inherent in cloud computing.
              </p>
              
              <p className="mb-6">
                Our approach is deeply rooted in first-principles thinking. We do not layer abstractions on top of existing broken models; we build entirely new primitives. Our thesis is simple: the next generation of global applications requires a fundamentally different foundation.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mt-16">
                <div className="border border-border p-8">
                  <h4 className="text-foreground font-display font-medium mb-3 uppercase tracking-wider text-sm">Engineering Rigor</h4>
                  <p className="text-sm">We favor strict correctness and verifiable performance over rapid, fragile development cycles.</p>
                </div>
                <div className="border border-border p-8">
                  <h4 className="text-foreground font-display font-medium mb-3 uppercase tracking-wider text-sm">Design Elegance</h4>
                  <p className="text-sm">Complexity is the enemy. We abstract profound technical complexity behind starkly simple interfaces.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
