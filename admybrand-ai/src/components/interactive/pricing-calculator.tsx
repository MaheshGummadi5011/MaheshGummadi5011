"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calculator, Check, ArrowRight } from "lucide-react"

interface PricingInputs {
  campaignsPerMonth: number
  teamMembers: number
  integrations: number
  isAnnual: boolean
}

const PricingCalculator = () => {
  const [inputs, setInputs] = useState<PricingInputs>({
    campaignsPerMonth: 10,
    teamMembers: 3,
    integrations: 5,
    isAnnual: false
  })

  const [selectedAddons, setSelectedAddons] = useState<string[]>([])

  const basePricing = {
    starter: { monthly: 29, annual: 290, maxCampaigns: 5, maxUsers: 1, maxIntegrations: 2 },
    professional: { monthly: 79, annual: 790, maxCampaigns: Infinity, maxUsers: 5, maxIntegrations: 10 },
    enterprise: { monthly: 199, annual: 1990, maxCampaigns: Infinity, maxUsers: Infinity, maxIntegrations: Infinity }
  }

  const addons = [
    { id: "priority-support", name: "Priority Support", price: 25, description: "24/7 priority support" },
    { id: "custom-training", name: "Custom AI Training", price: 150, description: "Train AI with your specific data" },
    { id: "white-label", name: "White-label Solution", price: 300, description: "Remove branding, add yours" },
    { id: "advanced-analytics", name: "Advanced Analytics", price: 50, description: "Enhanced reporting & insights" }
  ]

  const getRecommendedPlan = () => {
    if (inputs.campaignsPerMonth <= 5 && inputs.teamMembers <= 1 && inputs.integrations <= 2) {
      return 'starter'
    } else if (inputs.teamMembers <= 5 && inputs.integrations <= 10) {
      return 'professional'
    } else {
      return 'enterprise'
    }
  }

  const calculatePrice = (plan: keyof typeof basePricing) => {
    const planPricing = basePricing[plan]
    let price = inputs.isAnnual ? planPricing.annual : planPricing.monthly

    // Add extra user costs for starter and professional
    if (plan === 'starter' && inputs.teamMembers > 1) {
      price += (inputs.teamMembers - 1) * 15 * (inputs.isAnnual ? 12 : 1)
    } else if (plan === 'professional' && inputs.teamMembers > 5) {
      price += (inputs.teamMembers - 5) * 15 * (inputs.isAnnual ? 12 : 1)
    }

    // Add addon costs
    selectedAddons.forEach(addonId => {
      const addon = addons.find(a => a.id === addonId)
      if (addon) {
        price += addon.price * (inputs.isAnnual ? 12 : 1)
      }
    })

    return price
  }

  const recommendedPlan = getRecommendedPlan()

  const sliderConfig = [
    {
      label: "Campaigns per month",
      key: "campaignsPerMonth" as keyof PricingInputs,
      min: 1,
      max: 100,
      step: 1,
      value: inputs.campaignsPerMonth
    },
    {
      label: "Team members",
      key: "teamMembers" as keyof PricingInputs,
      min: 1,
      max: 50,
      step: 1,
      value: inputs.teamMembers
    },
    {
      label: "Integrations needed",
      key: "integrations" as keyof PricingInputs,
      min: 1,
      max: 20,
      step: 1,
      value: inputs.integrations
    }
  ]

  const toggleAddon = (addonId: string) => {
    setSelectedAddons(prev => 
      prev.includes(addonId) 
        ? prev.filter(id => id !== addonId)
        : [...prev, addonId]
    )
  }

  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="flex items-center justify-center mb-6">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
            <Calculator className="w-8 h-8 text-white" />
          </div>
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">
          Interactive Pricing Calculator
        </h3>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Customize your plan based on your specific needs and get an instant price estimate.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Configuration Panel */}
        <Card className="border-0 shadow-xl">
          <CardHeader>
            <CardTitle>Configure Your Needs</CardTitle>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Billing Toggle */}
            <div className="flex items-center justify-between">
              <span className="font-medium">Billing Period</span>
              <div className="flex items-center space-x-3">
                <span className={`text-sm ${!inputs.isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setInputs(prev => ({ ...prev, isAnnual: !prev.isAnnual }))}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    inputs.isAnnual ? 'bg-blue-600' : 'bg-gray-200'
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      inputs.isAnnual ? 'translate-x-6' : 'translate-x-1'
                    }`}
                  />
                </button>
                <span className={`text-sm ${inputs.isAnnual ? 'text-gray-900 font-medium' : 'text-gray-500'}`}>
                  Annual
                  <Badge variant="success" className="ml-2 text-xs">Save 17%</Badge>
                </span>
              </div>
            </div>

            {/* Sliders */}
            {sliderConfig.map((config) => (
              <div key={config.key} className="space-y-3">
                <div className="flex justify-between items-center">
                  <label className="font-medium text-gray-700">{config.label}</label>
                  <span className="text-lg font-bold text-blue-600">{config.value}</span>
                </div>
                <input
                  type="range"
                  min={config.min}
                  max={config.max}
                  step={config.step}
                  value={config.value}
                  onChange={(e) => setInputs(prev => ({ 
                    ...prev, 
                    [config.key]: parseInt(e.target.value) 
                  }))}
                  className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                />
                <div className="flex justify-between text-xs text-gray-500">
                  <span>{config.min}</span>
                  <span>{config.max}+</span>
                </div>
              </div>
            ))}

            {/* Add-ons */}
            <div className="space-y-3">
              <h4 className="font-medium text-gray-700">Optional Add-ons</h4>
              <div className="space-y-2">
                {addons.map((addon) => (
                  <div key={addon.id} className="flex items-center space-x-3">
                    <input
                      type="checkbox"
                      id={addon.id}
                      checked={selectedAddons.includes(addon.id)}
                      onChange={() => toggleAddon(addon.id)}
                      className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                    />
                    <label htmlFor={addon.id} className="flex-1">
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="font-medium">{addon.name}</span>
                          <p className="text-sm text-gray-500">{addon.description}</p>
                        </div>
                        <span className="text-sm font-medium text-gray-700">
                          +${addon.price}/{inputs.isAnnual ? 'year' : 'month'}
                        </span>
                      </div>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Results Panel */}
        <div className="space-y-6">
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Recommended Plan
                <Badge variant="info">Best Match</Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 capitalize mb-2">
                  {recommendedPlan} Plan
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-2">
                  ${calculatePrice(recommendedPlan)}
                  <span className="text-lg font-normal text-gray-500">
                    /{inputs.isAnnual ? 'year' : 'month'}
                  </span>
                </div>
                {inputs.isAnnual && (
                  <p className="text-sm text-green-600">
                    Save ${(calculatePrice(recommendedPlan) / 12 * 12) - calculatePrice(recommendedPlan)} annually
                  </p>
                )}
              </div>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>Up to {basePricing[recommendedPlan].maxCampaigns === Infinity ? 'unlimited' : basePricing[recommendedPlan].maxCampaigns} campaigns</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{basePricing[recommendedPlan].maxUsers === Infinity ? 'Unlimited' : `Up to ${basePricing[recommendedPlan].maxUsers}`} team members</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span>{basePricing[recommendedPlan].maxIntegrations === Infinity ? 'Unlimited' : `Up to ${basePricing[recommendedPlan].maxIntegrations}`} integrations</span>
                </div>
                {selectedAddons.map(addonId => {
                  const addon = addons.find(a => a.id === addonId)
                  return addon ? (
                    <div key={addonId} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-blue-500" />
                      <span>{addon.name}</span>
                    </div>
                  ) : null
                })}
              </div>

              <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                Start {recommendedPlan} Plan
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </CardContent>
          </Card>

          {/* All Plans Comparison */}
          <Card className="border-0 shadow-xl">
            <CardHeader>
              <CardTitle>Compare All Plans</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(basePricing).map(([planName, planData]) => (
                  <div key={planName} className={`p-4 rounded-lg border-2 transition-all ${
                    planName === recommendedPlan 
                      ? 'border-blue-500 bg-blue-50' 
                      : 'border-gray-200 hover:border-gray-300'
                  }`}>
                    <div className="flex justify-between items-center">
                      <div>
                        <h4 className="font-semibold capitalize">{planName}</h4>
                        <p className="text-sm text-gray-500">
                          ${calculatePrice(planName as keyof typeof basePricing)}/{inputs.isAnnual ? 'year' : 'month'}
                        </p>
                      </div>
                      {planName === recommendedPlan && (
                        <Badge variant="info" className="text-xs">Recommended</Badge>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default PricingCalculator