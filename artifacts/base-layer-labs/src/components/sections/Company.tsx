import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react"

const projects = [
  {
    label: "Flagship",
    name: "GhostStack",
    description:
      "A serverless productivity stack that captures ad-hoc notes from work calls and converts them into structured end-of-day reports.",
    href: "https://github.com/davidlwilson2021/ghoststack",
  },
  {
    label: "Parallel",
    name: "TradeFolio",
    description:
      "A React Native and NestJS identity layer for skilled tradespeople — portfolio, credentials, and work history in one place.",
    href: "https://github.com/davidlwilson2021/tradefolio-beta-app",
  },
]

const principles = [
  {
    title: "Engineering Rigor",
    body: "Strict correctness, type-safe contracts, and verifiable behavior over rapid, fragile output.",
  },
  {
    title: "Domain Modeling",
    body: "Every system starts with the data model. Schemas, validation, and user surfaces evolve together — never separately.",
  },
]

export function Company() {
  return (
    <section id="company" className="py-32 relative bg-card border-y border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="grid md:grid-cols-12 gap-12">

          {/* Sticky label */}
          <div className="md:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32 space-y-6"
            >
              <div className="flex items-center gap-4">
                <div className="h-[1px] w-8 bg-primary" />
                <span className="text-primary text-xs font-medium uppercase tracking-[0.2em]">The Studio</span>
              </div>
              <h2 className="text-3xl font-display font-medium text-foreground leading-snug">
                About Base Layer Labs
              </h2>
              <a
                href="https://github.com/davidlwilson2021/baselayerlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-widest group"
              >
                View on GitHub
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>

          {/* Content */}
          <div className="md:col-span-8 space-y-16">

            {/* Mission quote */}
            <motion.blockquote
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="border-l-2 border-primary pl-6 py-2"
            >
              <p className="text-2xl font-display font-light text-foreground leading-normal">
                "Complex systems should be designed end-to-end, not assembled from defaults."
              </p>
            </motion.blockquote>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-muted-foreground font-light leading-relaxed text-lg"
            >
              Base Layer Labs is the engineering studio of Dave Wilson — a full-stack developer
              pursuing an MS in Data Science. The work spans mobile platforms, backend services,
              and applied data systems, with a focus on production-grade architecture and
              first-principles thinking.
            </motion.p>

            {/* Projects */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Current Work
              </p>
              <div className="grid sm:grid-cols-2 gap-px bg-border">
                {projects.map((project) => (
                  <a
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-background hover:bg-card p-8 flex flex-col gap-4 transition-colors duration-300"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-primary mb-2 block">
                          {project.label}
                        </span>
                        <h3 className="text-xl font-display font-medium text-foreground">
                          {project.name}
                        </h3>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0 mt-1" />
                    </div>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">
                      {project.description}
                    </p>
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Principles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Principles
              </p>
              <div className="grid sm:grid-cols-2 gap-px bg-border">
                {principles.map((p) => (
                  <div key={p.title} className="bg-background p-8">
                    <h4 className="text-sm font-display font-medium text-foreground uppercase tracking-wider mb-3">
                      {p.title}
                    </h4>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{p.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </div>

      </div>
    </section>
  )
}
