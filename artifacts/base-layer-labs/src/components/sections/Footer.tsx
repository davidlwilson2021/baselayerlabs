import { ArrowUpRight } from "lucide-react"

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-background border-t border-border pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8 mb-16">
          <div className="col-span-1 md:col-span-2">
            <a href="#hero" onClick={scrollToTop} className="inline-flex items-center gap-2 group mb-6">
              <div className="w-5 h-5 border-2 border-primary rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-out" />
              <span className="font-display font-semibold tracking-wide text-foreground">
                BASE LAYER LABS
              </span>
            </a>
            <p className="text-muted-foreground text-sm max-w-sm font-light">
              An engineering studio architecting full-stack platforms and applied data systems. Strict correctness, zero compromise.
            </p>
          </div>

          <div>
            <h4 className="text-foreground font-medium uppercase tracking-widest text-xs mb-6">Surface</h4>
            <ul className="space-y-4">
              <li><a href="#product" className="text-sm text-muted-foreground hover:text-primary transition-colors">Capabilities</a></li>
              <li><a href="#technology" className="text-sm text-muted-foreground hover:text-primary transition-colors">Technology</a></li>
              <li><a href="#company" className="text-sm text-muted-foreground hover:text-primary transition-colors">Studio</a></li>
              <li><a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-foreground font-medium uppercase tracking-widest text-xs mb-6">Connect</h4>
            <ul className="space-y-4">
              <li>
                <a href="https://github.com/davidlwilson2021" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  GitHub <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/davidwilson78" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  LinkedIn <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="https://github.com/davidlwilson2021/ghoststack" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  GhostStack Repo <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="https://github.com/davidlwilson2021/tradefolio-beta-app" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors inline-flex items-center">
                  TradeFolio Repo <ArrowUpRight className="w-3 h-3 ml-1" />
                </a>
              </li>
              <li>
                <a href="mailto:greyhawkdiesel@gmail.com" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Email
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Base Layer Labs &mdash; Dave Wilson. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#hero" onClick={scrollToTop} className="text-xs text-muted-foreground hover:text-foreground transition-colors">Back to Top</a>
          </div>
        </div>
        
      </div>
    </footer>
  )
}
