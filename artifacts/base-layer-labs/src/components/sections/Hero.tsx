import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToProduct = () => {
    document.querySelector('#product')?.scrollIntoView({ behavior: 'smooth' })
  }

  const scrollToContact = () => {
    document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none border-grid opacity-30" />
      
      {/* Decorative vertical line */}
      <div className="absolute left-[10%] md:left-[15%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-border to-transparent opacity-50 hidden md:block" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-4 mb-8"
            >
              <div className="h-[1px] w-12 bg-primary" />
              <span className="text-primary text-sm font-medium uppercase tracking-[0.2em]">Next-Gen Infrastructure</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-light text-foreground leading-[1.05] tracking-tight text-balance mb-8"
            >
              The foundational <br className="hidden md:block" />
              <span className="font-semibold">layer</span> for <span className="text-primary italic font-light">progress.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="text-lg md:text-xl text-muted-foreground max-w-2xl leading-relaxed mb-12 font-light"
            >
              An engineering studio architecting full-stack platforms and applied data systems. Currently building GhostStack &mdash; a serverless productivity stack that converts ad-hoc work-call notes into structured end-of-day reports.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button size="lg" onClick={scrollToContact} className="group">
                Get Started
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline" onClick={scrollToProduct}>
                Explore Technology
              </Button>
            </motion.div>
          </div>

          {/* Right Side Abstract Visual */}
          <div className="lg:col-span-4 hidden lg:flex justify-center relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
              className="relative w-64 h-64"
            >
              {/* Spinning geometric shapes */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border border-primary/30 rotate-45 origin-center" 
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 border border-border/80 rotate-12 origin-center" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-primary rounded-full shadow-[0_0_20px_var(--color-primary)]" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
