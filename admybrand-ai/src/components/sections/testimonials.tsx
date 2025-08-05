"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Solutions",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=150&h=150&fit=crop&crop=face",
    content: "ADmyBRAND AI Suite transformed our marketing strategy completely. We saw a 300% increase in lead quality and our conversion rates doubled within the first quarter.",
    rating: 5,
    metric: "300% increase in lead quality"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "CEO",
    company: "InnovateLab",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "The AI-powered content generation is incredible. It understands our brand voice perfectly and creates campaigns that resonate with our audience. Game-changing technology!",
    rating: 5,
    metric: "85% time saved on content creation"
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "Growth Marketing Manager",
    company: "ScaleUp Ventures",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "The analytics and insights provided by ADmyBRAND are unmatched. We can now predict customer behavior and optimize our campaigns in real-time.",
    rating: 5,
    metric: "250% ROI improvement"
  },
  {
    id: 4,
    name: "David Thompson",
    role: "Digital Marketing Lead",
    company: "GrowthCorp",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
    content: "Implementation was seamless and the support team is outstanding. The automation features freed up our team to focus on strategy rather than repetitive tasks.",
    rating: 5,
    metric: "40 hours saved per week"
  },
  {
    id: 5,
    name: "Lisa Park",
    role: "Brand Manager",
    company: "Luxe Brands",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face",
    content: "The multi-channel integration is phenomenal. Managing our campaigns across all platforms from one dashboard has revolutionized our workflow.",
    rating: 5,
    metric: "90% reduction in campaign setup time"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Marketing VP",
    company: "FutureTech Inc",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
    content: "ROI tracking and attribution modeling in ADmyBRAND helped us optimize our budget allocation. We're now getting 4x better results with the same spend.",
    rating: 5,
    metric: "4x better budget efficiency"
  }
]

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setIsAutoPlaying(false)
  }

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false)
  }

  // Calculate visible testimonials (show 3 on desktop, 1 on mobile)
  const getVisibleTestimonials = () => {
    const visibleCount = 3
    const result = []
    for (let i = 0; i < visibleCount; i++) {
      const index = (currentIndex + i) % testimonials.length
      result.push({ ...testimonials[index], position: i })
    }
    return result
  }

  return (
    <section className="section-padding bg-gradient-to-br from-gray-900 to-blue-900 text-white" ref={ref}>
      <div className="container-width">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What Our Customers
            <span className="text-gradient bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent"> Say</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Join thousands of satisfied customers who have transformed their marketing with ADmyBRAND AI Suite.
          </p>
        </motion.div>

        {/* Desktop View - 3 testimonials */}
        <div className="hidden md:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <AnimatePresence mode="wait">
              {getVisibleTestimonials().map((testimonial, index) => (
                <motion.div
                  key={`${testimonial.id}-${currentIndex}`}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card className="h-full glass border-white/20 text-white hover:border-white/40 transition-all duration-300">
                    <CardContent className="p-8">
                      <div className="mb-6">
                        <Quote className="w-8 h-8 text-yellow-300 mb-4" />
                        <p className="text-white/90 leading-relaxed mb-6">
                          "{testimonial.content}"
                        </p>
                        <div className="flex items-center mb-4">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                          ))}
                        </div>
                        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3 mb-6">
                          <p className="text-sm text-yellow-300 font-semibold">
                            {testimonial.metric}
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-white">{testimonial.name}</h4>
                          <p className="text-sm text-white/70">{testimonial.role}</p>
                          <p className="text-sm text-white/70">{testimonial.company}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile View - 1 testimonial */}
        <div className="md:hidden mb-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="glass border-white/20 text-white">
                <CardContent className="p-8">
                  <div className="text-center">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-20 h-20 rounded-full mx-auto mb-6 object-cover"
                    />
                    <Quote className="w-8 h-8 text-yellow-300 mx-auto mb-4" />
                    <p className="text-white/90 leading-relaxed mb-6 text-lg">
                      "{testimonials[currentIndex].content}"
                    </p>
                    <div className="flex items-center justify-center mb-4">
                      {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-300 fill-current" />
                      ))}
                    </div>
                    <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-lg p-3 mb-6">
                      <p className="text-sm text-yellow-300 font-semibold">
                        {testimonials[currentIndex].metric}
                      </p>
                    </div>
                    <h4 className="font-semibold text-white mb-1">{testimonials[currentIndex].name}</h4>
                    <p className="text-sm text-white/70">{testimonials[currentIndex].role}</p>
                    <p className="text-sm text-white/70">{testimonials[currentIndex].company}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4">
          <Button
            variant="glass"
            size="icon"
            onClick={prevTestimonial}
            className="border-white/20 hover:border-white/40"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          <div className="flex space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-white'
                    : 'bg-white/30 hover:bg-white/50'
                }`}
              />
            ))}
          </div>

          <Button
            variant="glass"
            size="icon"
            onClick={nextTestimonial}
            className="border-white/20 hover:border-white/40"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
            <div className="text-white/70 text-sm">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">10K+</div>
            <div className="text-white/70 text-sm">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-white/70 text-sm">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">24/7</div>
            <div className="text-white/70 text-sm">Support</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials