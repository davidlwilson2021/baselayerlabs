import { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "Product", href: "#product" },
    { name: "Technology", href: "#technology" },
    { name: "Company", href: "#company" },
  ]

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      setMobileMenuOpen(false)
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">

        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => handleNavClick(e, "#hero")}
          className="relative z-10 flex items-center gap-2 group"
        >
          <div className="w-6 h-6 border-2 border-primary rotate-45 group-hover:rotate-90 transition-transform duration-500 ease-out" />
          <span className="font-semibold text-lg tracking-wide text-foreground">BASE LAYER</span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="ml-4 px-5 py-2 text-[11px] font-medium text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-wider"
          >
            Contact
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden relative z-10 text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-background border-b border-border shadow-xl md:hidden flex flex-col p-6 gap-6 transition-all duration-200 ${
          mobileMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={(e) => handleNavClick(e, link.href)}
            className="text-lg font-medium text-foreground hover:text-primary transition-colors"
          >
            {link.name}
          </a>
        ))}
        <a
          href="#contact"
          onClick={(e) => handleNavClick(e, "#contact")}
          className="mt-4 px-6 py-3 text-center text-sm font-medium text-primary border border-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 uppercase tracking-wider"
        >
          Contact Us
        </a>
      </div>
    </header>
  )
}
