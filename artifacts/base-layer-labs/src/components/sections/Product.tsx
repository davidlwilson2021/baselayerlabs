import { motion } from "framer-motion"
import { Smartphone, Network, Database, LineChart } from "lucide-react"

const features = [
  {
    icon: <Smartphone className="w-6 h-6 text-primary" />,
    title: "Mobile Platforms",
    description: "React Native and Expo applications built with offline-first sync, type-safe APIs, and production-grade architecture from day one."
  },
  {
    icon: <Network className="w-6 h-6 text-primary" />,
    title: "API Architecture",
    description: "NestJS and GraphQL services with PostgreSQL, code-first schemas, JWT authentication, and end-to-end validation through Zod."
  },
  {
    icon: <Database className="w-6 h-6 text-primary" />,
    title: "Data Modeling",
    description: "Relational schema design and normalization built from first principles. The data model is the product, not an afterthought."
  },
  {
    icon: <LineChart className="w-6 h-6 text-primary" />,
    title: "Applied Statistics",
    description: "Graduate-level data science applied to real product surfaces &mdash; inference, modeling, and decision support beyond vanity dashboards."
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
            Built from <br/> First <span className="font-semibold text-primary">Principles.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg font-light leading-relaxed max-w-2xl"
          >
            We don't assemble systems from defaults. We architect domain-specific platforms where the data model, API surface, and user experience are designed together &mdash; not patched together.
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
