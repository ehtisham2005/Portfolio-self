import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Send,
} from "lucide-react";
import { cn } from "../lib/utils";

export const ContactSection = () => {
  return (
    <section
      id="Contact"
      className="py-24 px-4 relative bg-secondary/30"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities
          to be part of your vision. Feel free to reach out and I'll get back to you
          as soon as possible.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          
          <div className="flex flex-col items-center space-y-10 text-center">
            <h3 className="text-2xl font-semibold">
              Contact Information
            </h3>

            <div className="flex items-start gap-4 text-left">
              <div className="p-3 rounded-full bg-primary/10">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a
                  href="mailto:ehti1233@gmail.com"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  ehti1233@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left">
              <div className="p-3 rounded-full bg-primary/10">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a
                  href="tel:+918825776241"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +91 8825776241
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4 text-left">
              <div className="p-3 rounded-full bg-primary/10">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">
                  Vellore, Tamil Nadu, India
                </p>
              </div>
            </div>

            <div className="pt-6">
              <h4 className="font-medium mb-4">
                Connect With Me
              </h4>
              <div className="flex justify-center gap-6">
                <a className="hover:text-primary transition-colors" href = "https://www.linkedin.com/in/mohammed-ehtishaam-t-52846a315?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                  <Linkedin />
                </a>
                <a className="hover:text-primary transition-colors" href = "https://www.instagram.com/ehtiishaamm?igsh=OHg2bGxzc3Q5ZmNn">
                  <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-sm">
            <h3 className="text-2xl font-semibold mb-6 text-center">
              Send a Message
            </h3>

            <form
              className="space-y-6"
              action="https://formspree.io/f/xpwregkd"
              method="POST"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Name"
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="Email"
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Message"
                  className="w-full px-4 py-3 rounded-md border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              <button
                type="submit"
                className={cn(
                  "cosmic-button w-full flex items-center justify-center gap-2"
                )}
              >
                Send Message
                <Send size={30} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};
