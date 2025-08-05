"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef } from "react"
import { 
  Brain, 
  Target, 
  BarChart3, 
  Zap, 
  Shield, 
  Globe,
  Users,
  Sparkles
} from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Content Generation",
    description: "Create compelling marketing content with advanced AI that understands your brand voice and target audience.",
    color: "from-blue-500 to-cyan-500"
  },
  {
    icon: Target,
    title: "Precision Targeting",
    description: "Reach the right audience at the right time with our intelligent audience segmentation and behavioral analysis.",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: BarChart3,
    title: "Real-time Analytics",
    description: "Track campaign performance with comprehensive analytics and actionable insights to optimize ROI.",
    color: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Automated Workflows",
    description: "Streamline your marketing processes with intelligent automation that adapts to your business needs.",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Shield,
    title: "Brand Safety",
    description: "Protect your brand reputation with AI-powered content moderation and compliance monitoring.",
    color: "from-red-500 to-rose-500"
  },
  {
    icon: Globe,
    title: "Multi-Channel Integration",
    description: "Seamlessly manage campaigns across all digital platforms from a single, unified dashboard.",
    color: "from-indigo-500 to-purple-500"
  },
  {
    icon: Users,
    title: "Customer Journey Mapping",
    description: "Visualize and optimize every touchpoint in your customer's journey with AI-driven insights.",
    color: "from-teal-500 to-cyan-500"
  },
  {
    icon: Sparkles,
    title: "Predictive Intelligence",
    description: "Anticipate market trends and customer behavior with advanced machine learning algorithms.",
    color: "from-violet-500 to-purple-500"
  }
]

const Features = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="section-padding bg-gradient-to-br from-gray-50 to-white" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Powerful Features for
            <span className="text-gradient"> Modern Marketing</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how ADmyBRAND AI Suite transforms your marketing strategy with cutting-edge 
            technology and intelligent automation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                <CardHeader>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl bg-gradient-to-r from-blue-600/10 to-purple-600/10 border border-blue-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Ready to Transform Your Marketing?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of businesses already using ADmyBRAND AI Suite to drive 
              exceptional marketing results.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Explore All Features
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features