import { useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Mail, MapPin, Loader2, CheckCircle2 } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"

const formSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type FormValues = z.infer<typeof formSchema>

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  })

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))
    console.log("Form data submitted:", data)
    setIsSubmitting(false)
    setIsSuccess(true)
    reset()
    
    // Reset success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000)
  }

  return (
    <section id="contact" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="h-[1px] w-8 bg-primary" />
              <span className="text-primary text-xs font-medium uppercase tracking-[0.2em]">Engage</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-display font-light text-foreground mb-8">
              Initiate <span className="font-semibold">Deployment.</span>
            </h2>
            
            <p className="text-muted-foreground font-light leading-relaxed mb-12 max-w-md">
              Whether you require early access to the platform or need to discuss custom enterprise integration, our engineering team is ready to connect.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="p-3 border border-border bg-card">
                  <Mail className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground uppercase tracking-widest mb-1">Direct Inlet</h4>
                  <a href="mailto:systems@baselayer.labs" className="text-muted-foreground hover:text-primary transition-colors">
                    systems@baselayer.labs
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 border border-border bg-card">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-foreground uppercase tracking-widest mb-1">Headquarters</h4>
                  <p className="text-muted-foreground">
                    100 Infrastructure Way, Suite 404<br />
                    San Francisco, CA 94105
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-card border border-border p-8 md:p-10 relative overflow-hidden"
          >
            {/* Subtle glow effect behind form */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-3xl pointer-events-none rounded-full" />
            
            <h3 className="text-2xl font-display font-medium mb-8 relative z-10">Secure Transmission</h3>
            
            {isSuccess ? (
              <div className="flex flex-col items-center justify-center text-center h-[300px] relative z-10 animate-in fade-in zoom-in-95 duration-300">
                <CheckCircle2 className="w-16 h-16 text-primary mb-4" />
                <h4 className="text-xl font-medium text-foreground mb-2">Transmission Received</h4>
                <p className="text-muted-foreground">Our engineering team will review your inquiry and respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 relative z-10">
                <div className="space-y-2">
                  <Label htmlFor="name">Identification</Label>
                  <Input 
                    id="name" 
                    placeholder="John Doe" 
                    {...register("name")} 
                    className={errors.name ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {errors.name && <p className="text-xs text-destructive mt-1">{errors.name.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Return Channel (Email)</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="john@enterprise.com" 
                    {...register("email")}
                    className={errors.email ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {errors.email && <p className="text-xs text-destructive mt-1">{errors.email.message}</p>}
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Payload (Message)</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Detail your infrastructure requirements..."
                    {...register("message")}
                    className={errors.message ? "border-destructive focus-visible:ring-destructive" : ""}
                  />
                  {errors.message && <p className="text-xs text-destructive mt-1">{errors.message.message}</p>}
                </div>
                
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                      Encrypting & Sending...
                    </>
                  ) : (
                    "Transmit Payload"
                  )}
                </Button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  )
}
