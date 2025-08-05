"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { Accordion } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { MessageCircle, HelpCircle } from "lucide-react"

const faqData = [
  {
    question: "What is ADmyBRAND AI Suite and how does it work?",
    answer: "ADmyBRAND AI Suite is a comprehensive AI-powered marketing platform that automates content creation, audience targeting, and campaign optimization. It uses advanced machine learning algorithms to analyze your brand, understand your audience, and generate personalized marketing content that drives results."
  },
  {
    question: "How quickly can I see results after implementing ADmyBRAND?",
    answer: "Most customers see initial improvements within the first 2-4 weeks of implementation. However, significant results typically become apparent within 30-60 days as the AI learns more about your brand and audience preferences. Some clients have reported up to 300% improvement in lead quality within the first quarter."
  },
  {
    question: "Is my data secure with ADmyBRAND AI Suite?",
    answer: "Absolutely. We employ enterprise-grade security measures including end-to-end encryption, SOC 2 compliance, and GDPR adherence. Your data is stored in secure, geographically distributed data centers with 99.9% uptime guarantee. We never share your data with third parties without explicit consent."
  },
  {
    question: "Can ADmyBRAND integrate with my existing marketing tools?",
    answer: "Yes! ADmyBRAND offers seamless integration with over 50+ popular marketing platforms including Google Ads, Facebook Ads, Salesforce, HubSpot, Mailchimp, and many more. Our API allows for custom integrations, and our team can help set up any specific integrations you need."
  },
  {
    question: "What kind of support do you offer?",
    answer: "We provide comprehensive support including 24/7 email support for all plans, live chat for Professional and Enterprise plans, and dedicated account managers for Enterprise customers. We also offer extensive documentation, video tutorials, and regular webinars to help you get the most out of the platform."
  },
  {
    question: "Can I customize the AI to match my brand voice?",
    answer: "Absolutely! One of ADmyBRAND's key features is its ability to learn and adapt to your unique brand voice. You can train the AI with your existing content, set tone preferences, and define brand guidelines. The more you use it, the better it becomes at matching your brand's personality and style."
  },
  {
    question: "What's included in the free trial?",
    answer: "Our 14-day free trial includes full access to all Professional plan features: unlimited AI-generated campaigns, advanced analytics, priority support, and up to 10 platform integrations. No credit card required, and you can upgrade or downgrade at any time."
  },
  {
    question: "How does the pricing work for team accounts?",
    answer: "Each plan includes a specific number of user accounts. The Starter plan includes 1 user, Professional includes up to 5 users, and Enterprise includes unlimited users. Additional users can be added to Starter and Professional plans for $15/month per user."
  },
  {
    question: "Can I cancel my subscription at any time?",
    answer: "Yes, you can cancel your subscription at any time without any cancellation fees. If you cancel, you'll continue to have access to your paid features until the end of your current billing period. We also offer a 30-day money-back guarantee if you're not completely satisfied."
  },
  {
    question: "Do you offer training and onboarding?",
    answer: "Yes! All plans include comprehensive onboarding support. Professional and Enterprise customers receive personalized onboarding sessions, while Enterprise customers get dedicated training workshops. We also provide ongoing training materials, best practices guides, and regular feature updates."
  }
]

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-gradient-to-br from-white to-gray-50" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
              <HelpCircle className="w-8 h-8 text-white" />
            </div>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Frequently Asked
            <span className="text-gradient"> Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about ADmyBRAND AI Suite. Can't find what you're looking for? 
            Our support team is here to help.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Accordion items={faqData} />
          </motion.div>
        </div>

        {/* Contact support section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200">
            <div className="flex items-center justify-center mb-4">
              <MessageCircle className="w-12 h-12 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Our expert support team is available 24/7 to help you get the most out of ADmyBRAND AI Suite. 
              Get personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="font-semibold">
                <MessageCircle className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
              <Button variant="outline" size="lg" className="font-semibold">
                Schedule Demo
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Knowledge base link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-8"
        >
          <p className="text-gray-500">
            Looking for more detailed information? Check out our{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium underline">
              Knowledge Base
            </a>{" "}
            and{" "}
            <a href="#" className="text-blue-600 hover:text-blue-700 font-medium underline">
              Documentation
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ