import Hero from "@/components/sections/hero"
import Features from "@/components/sections/features"
import Pricing from "@/components/sections/pricing"
import Testimonials from "@/components/sections/testimonials"
import FAQ from "@/components/sections/faq"
import Footer from "@/components/sections/footer"
import ContactForm from "@/components/forms/contact-form"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      
      {/* Contact Section */}
      <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
        <div className="container-width">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of businesses already transforming their marketing with ADmyBRAND AI Suite. 
              Let's discuss how we can help you achieve your goals.
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
      
      <FAQ />
      <Footer />
    </main>
  )
}
