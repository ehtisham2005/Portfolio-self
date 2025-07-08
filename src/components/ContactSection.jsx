import { Mail } from "lucide-react"
import { MapPin } from "lucide-react";
import { Phone } from "lucide-react";
import { Linkedin } from "lucide-react";
import { Twitter } from "lucide-react";
import { Instagram } from "lucide-react";
import { cn } from "../lib/utils";
import { Send } from "lucide-react";
export const ContactSection = () => {
    
    return (
        
       <section
        id="Contact"
        className="py-24 px-4 relative bg-secondary/30">
        <div className="container mx-auto max-w-5xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out and I'll get back to you as soon as possible.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                <div className="space-y-6 justify-center">
                    <div className="flex sm: flex-col md:flex-row sm:items-center md:items-start space-x-4">
                        <div className="p-3 rounded-full bg-primary/10">
                           <Mail className="h-6 w-6 text-primary"></Mail>
                        </div>
                        <div>
                            <h4 className="font-medium">Email</h4>
                            <a href="mailto:ehti1233@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                                ehti1233@gmail.com
                            </a>
                        </div>
                        <div className="p-3 rounded-full bg-primary/10">
                           <Phone className="h-6 w-6 text-primary"></Phone>
                        </div>
                        <div>
                            <h4 className="font-medium">Phone</h4>
                            <a href="tel:+918825776241" className="text-muted-foreground hover:text-primary transition-colors">
                                +91 8825776241
                            </a>
                        </div>
                         <div className="p-3 rounded-full bg-primary/10">
                           <MapPin className="h-6 w-6 text-primary"></MapPin>
                        </div>
                        <div>
                            <h4 className="font-medium">Location</h4>
                            <a className="text-muted-foreground hover:text-primary transition-colors">
                                Vellore, Tamil Nadu, India
                            </a>
                        </div>
                        
                    </div>
                </div>
                <div className="pt-8">
                    <h4>Connect With Me</h4>
                    <div className="flex space-x-4 justify-center">
                        <a href="" target="_blank" >
                            <Linkedin></Linkedin>
                        </a>
                        <a href="" target="_blank">
                            <Twitter></Twitter>
                        </a>
                        <a href="" target="_blank">
                            <Instagram></Instagram>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-card p-8 rounded-lg shadow-xs ">
                <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                <form className="space-y-6" action="https://formspree.io/f/xpwregkd" method="POST">
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your name</label>
                        <input type="text" id="name" name="name" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="Name" />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Email</label>
                        <input type="email" id="email" name="email" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary" placeholder="email" />
                    </div>
                    
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Your Message</label>
                        <textarea id="message" name="message" required className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none" placeholder="message" />
                    </div>
                    <button type="submit" className={cn("cosmic-button w-full flex items-center justify-center gap-2"

                    )}>
                        Send Message
                        <Send size={16}></Send>
                    </button>
                </form>

            </div>
        </div>
        </div>
       </section>
    )
}