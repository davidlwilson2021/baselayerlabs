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
                "Complex systems should be designed end-to-end, not assembled from defaults."
              </h3>

              <p className="mb-6">
                Base Layer Labs is the engineering studio of Dave Wilson &mdash; a full-stack developer pursuing an MS in Data Science. The work spans mobile platforms, backend services, and data systems, with a focus on production-grade architecture and first-principles thinking.
              </p>

              <p className="mb-6">
                Current focus: GhostStack &mdash; a serverless productivity stack that captures ad-hoc notes from work calls and converts them into structured end-of-day reports. Parallel work on TradeFolio (a React Native and NestJS identity layer for skilled tradespeople) and ongoing study in applied statistics and relational data modeling extend the engineering surface area.
              </p>

              <div className="grid sm:grid-cols-2 gap-8 mt-16">
                <div className="border border-border p-8">
                  <h4 className="text-foreground font-display font-medium mb-3 uppercase tracking-wider text-sm">Engineering Rigor</h4>
                  <p className="text-sm">Strict correctness, type-safe contracts, and verifiable behavior over rapid, fragile output.</p>
                </div>
                <div className="border border-border p-8">
                  <h4 className="text-foreground font-display font-medium mb-3 uppercase tracking-wider text-sm">Domain Modeling</h4>
                  <p className="text-sm">Every system starts with the data model. Schemas, validation, and user surfaces evolve together &mdash; never separately.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </section>
  )
}
