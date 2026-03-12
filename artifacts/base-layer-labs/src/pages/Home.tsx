import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { Product } from "@/components/sections/Product"
import { Technology } from "@/components/sections/Technology"
import { Company } from "@/components/sections/Company"
import { Contact } from "@/components/sections/Contact"
import { Footer } from "@/components/sections/Footer"

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Product />
        <Technology />
        <Company />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
