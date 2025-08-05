"use client"

import { motion } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Check, Star, Zap, Crown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import PricingCalculator from "@/components/interactive/pricing-calculator"

const pricingPlans = [
  {
    name: "Starter",
    icon: Zap,
    price: 29,
    yearlyPrice: 290,
    description: "Perfect for small businesses and startups",
    badge: null,
    features: [
      "Up to 5 AI-generated campaigns",
      "Basic analytics dashboard",
      "Email support",
      "2 social media integrations",
      "Standard templates",
      "1 user account"
    ],
    limitations: [
      "Advanced AI features",
      "Custom integrations",
      "Priority support"
    ]
  },
  {
    name: "Professional",
    icon: Star,
    price: 79,
    yearlyPrice: 790,
    description: "Ideal for growing businesses",
    badge: "Most Popular",
    features: [
      "Unlimited AI-generated campaigns",
      "Advanced analytics & insights",
      "Priority email & chat support",
      "10+ platform integrations",
      "Custom templates & branding",
      "Up to 5 user accounts",
      "A/B testing capabilities",
      "Custom audience segmentation"
    ],
    limitations: [
      "Enterprise-level security",
      "Dedicated account manager"
    ]
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: 199,
    yearlyPrice: 1990,
    description: "For large organizations with advanced needs",
    badge: "Best Value",
    features: [
      "Everything in Professional",
      "Enterprise-grade security",
      "Dedicated account manager",
      "Custom AI model training",
      "Unlimited integrations",
      "White-label solutions",
      "Advanced API access",
      "24/7 phone support",
      "Unlimited user accounts",
      "Custom reporting"
    ],
    limitations: []
  }
]

const Pricing = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [isYearly, setIsYearly] = useState(false)
  const [showCalculator, setShowCalculator] = useState(false)

  return (
    <section className="section-padding bg-gradient-to-br from-blue-50 to-purple-50" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-4">
            Choose Your
            <span className="text-gradient"> Success Plan</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Flexible pricing options designed to scale with your business growth and marketing ambitions.
          </p>

          {/* Billing toggle */}
          <div className="flex items-center justify-center space-x-4 mb-8">
            <span className={`text-sm font-medium ${!isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Monthly
            </span>
            <motion.button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                isYearly ? 'bg-blue-600' : 'bg-gray-200'
              }`}
              whileTap={{ scale: 0.95 }}
            >
              <motion.span
                className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  isYearly ? 'translate-x-6' : 'translate-x-1'
                }`}
                layout
              />
            </motion.button>
            <span className={`text-sm font-medium ${isYearly ? 'text-gray-900' : 'text-gray-500'}`}>
              Yearly
              <Badge variant="success" className="ml-2 text-xs">Save 17%</Badge>
            </span>
          </div>

          {/* Calculator Toggle */}
          <div className="flex justify-center space-x-4">
            <Button
              variant={!showCalculator ? "default" : "outline"}
              onClick={() => setShowCalculator(false)}
            >
              Standard Plans
            </Button>
            <Button
              variant={showCalculator ? "default" : "outline"}
              onClick={() => setShowCalculator(true)}
            >
              Custom Calculator
            </Button>
          </div>
        </motion.div>

        {/* Standard Plans */}
        {!showCalculator && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative ${plan.badge === "Most Popular" ? 'transform scale-105' : ''}`}
              >
                {plan.badge && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                    <Badge 
                      variant={plan.badge === "Most Popular" ? "default" : "info"}
                      className="px-4 py-1 text-sm font-semibold"
                    >
                      {plan.badge}
                    </Badge>
                  </div>
                )}
                
                <Card className={`h-full relative overflow-hidden ${
                  plan.badge === "Most Popular" 
                    ? 'border-2 border-blue-500 shadow-2xl' 
                    : 'border border-gray-200 shadow-lg'
                }`}>
                  <CardHeader className={`text-center pb-8 ${
                    plan.badge === "Most Popular" 
                      ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' 
                      : ''
                  }`}>
                    <div className={`w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4 ${
                      plan.badge === "Most Popular" 
                        ? 'bg-white/20' 
                        : 'bg-gradient-to-r from-blue-500 to-purple-500'
                    }`}>
                      <plan.icon className={`w-8 h-8 ${
                        plan.badge === "Most Popular" ? 'text-white' : 'text-white'
                      }`} />
                    </div>
                    
                    <CardTitle className={`text-2xl font-bold mb-2 ${
                      plan.badge === "Most Popular" ? 'text-white' : 'text-gray-900'
                    }`}>
                      {plan.name}
                    </CardTitle>
                    
                    <p className={`text-sm mb-6 ${
                      plan.badge === "Most Popular" ? 'text-white/90' : 'text-gray-600'
                    }`}>
                      {plan.description}
                    </p>
                    
                    <div className="space-y-2">
                      <div className={`text-5xl font-bold ${
                        plan.badge === "Most Popular" ? 'text-white' : 'text-gray-900'
                      }`}>
                        ${isYearly ? plan.yearlyPrice : plan.price}
                        <span className={`text-lg font-normal ${
                          plan.badge === "Most Popular" ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          /{isYearly ? 'year' : 'month'}
                        </span>
                      </div>
                      {isYearly && (
                        <p className={`text-sm ${
                          plan.badge === "Most Popular" ? 'text-white/80' : 'text-gray-500'
                        }`}>
                          ${(plan.price * 12 - plan.yearlyPrice)} saved annually
                        </p>
                      )}
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-6">
                    <Button 
                      className={`w-full ${
                        plan.badge === "Most Popular"
                          ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                          : 'bg-gray-900 hover:bg-gray-800'
                      }`}
                      size="lg"
                    >
                      Start {plan.name} Plan
                    </Button>

                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Everything included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        )}

        {/* Interactive Calculator */}
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <PricingCalculator />
          </motion.div>
        )}

        {/* Enterprise contact */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass p-8 rounded-2xl bg-gradient-to-r from-gray-900/5 to-blue-900/5 border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Need a Custom Solution?
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For enterprise clients with unique requirements, we offer custom pricing 
              and tailored solutions to meet your specific needs.
            </p>
            <Button variant="outline" size="lg" className="font-semibold">
              Contact Sales Team
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Pricing