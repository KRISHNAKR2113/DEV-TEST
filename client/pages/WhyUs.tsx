import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  CheckCircle,
  TrendingUp,
  Shield,
  Zap,
  Users,
  Award,
  Globe,
} from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";

export default function WhyUs() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [hoveredStat, setHoveredStat] = useState<number | null>(null);

  const features = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "40% Cost Reduction",
      description:
        "Our AI-powered optimization reduces your cloud costs by an average of 40% without compromising performance.",
      detail:
        "Advanced machine learning algorithms continuously analyze your usage patterns and automatically optimize resource allocation.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description:
        "Bank-grade security with SOC 2 Type II compliance and end-to-end encryption.",
      detail:
        "Multi-layered security architecture with real-time threat detection and automated response systems.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-time Monitoring",
      description:
        "24/7 monitoring with instant alerts and automated remediation for optimal performance.",
      detail:
        "Proactive monitoring system that prevents issues before they impact your business operations.",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Expert Support",
      description:
        "Dedicated cloud experts available round-the-clock to help optimize your infrastructure.",
      detail:
        "Our certified cloud architects provide personalized guidance and best practices implementation.",
    },
  ];

  const stats = [
    {
      value: "500+",
      label: "Enterprise Clients",
      color: "from-blue-500 to-purple-600",
    },
    {
      value: "99.9%",
      label: "Uptime Guarantee",
      color: "from-green-500 to-teal-600",
    },
    {
      value: "$2.8B+",
      label: "Total Savings",
      color: "from-orange-500 to-red-600",
    },
    { value: "45+", label: "Countries", color: "from-purple-500 to-pink-600" },
  ];

  const benefits = [
    "Multi-cloud support across 15+ platforms",
    "AI-powered cost optimization",
    "Real-time analytics and insights",
    "Automated scaling and resource management",
    "24/7 expert support and monitoring",
    "Enterprise-grade security and compliance",
  ];

  return (
    <CustomCursor>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Header */}
        <header className="bg-cloudone-navy px-6 py-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <Link
              to="/"
              className="flex items-center gap-4 text-white hover:text-cloudone-green transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="text-xl font-bold">Back to Home</span>
            </Link>
            <div className="flex items-center">
              <span className="text-white text-2xl font-bold">Cloudone</span>
              <span className="text-cloudone-green text-2xl font-bold">
                Pro
              </span>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="px-6 py-20 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cloudone-navy to-cloudone-purple-accent bg-clip-text text-transparent">
              Why Choose CloudonePro?
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Experience the difference with our revolutionary cloud
              optimization platform that's trusted by Fortune 500 companies
              worldwide.
            </p>

            {/* Animated Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={`relative p-6 bg-white rounded-2xl shadow-lg transition-all duration-500 cursor-pointer ${
                    hoveredStat === index ? "scale-110 shadow-2xl" : ""
                  }`}
                  onMouseEnter={() => setHoveredStat(index)}
                  onMouseLeave={() => setHoveredStat(null)}
                >
                  <div
                    className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                  {hoveredStat === index && (
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-10 rounded-2xl`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Features Section */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cloudone-navy">
              Powerful Features That Set Us Apart
            </h2>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Feature List */}
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-xl cursor-pointer transition-all duration-300 ${
                      activeFeature === index
                        ? "bg-cloudone-purple-accent text-white shadow-2xl"
                        : "bg-gray-50 hover:bg-gray-100"
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <div
                        className={`p-2 rounded-lg ${
                          activeFeature === index
                            ? "bg-white/20"
                            : "bg-cloudone-purple-accent text-white"
                        }`}
                      >
                        {feature.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{feature.title}</h3>
                    </div>
                    <p
                      className={`${activeFeature === index ? "text-white/90" : "text-gray-600"}`}
                    >
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>

              {/* Feature Detail */}
              <div className="bg-gradient-to-br from-cloudone-navy to-cloudone-purple-accent p-8 rounded-2xl text-white">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                    {features[activeFeature].icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">
                    {features[activeFeature].title}
                  </h3>
                  <p className="text-white/90 text-lg leading-relaxed">
                    {features[activeFeature].detail}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-cloudone-green">
                    Key Benefits:
                  </h4>
                  {benefits.slice(0, 3).map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-cloudone-green" />
                      <span className="text-white/90">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Grid */}
        <section className="px-6 py-20 bg-gradient-to-br from-blue-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cloudone-navy">
              Complete Benefits Overview
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cloudone-green to-teal-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <CheckCircle className="w-6 h-6 text-white" />
                    </div>
                    <span className="font-semibold text-cloudone-navy group-hover:text-cloudone-purple-accent transition-colors duration-300">
                      {benefit}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-cloudone-navy text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Cloud Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already saving millions with
              CloudonePro.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-cloudone-green hover:bg-cloudone-green/80 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => (window.location.href = "/")}
              >
                Start Free Trial
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cloudone-navy px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => (window.location.href = "/platform")}
              >
                View Platform
              </Button>
            </div>
          </div>
        </section>
      </div>
    </CustomCursor>
  );
}
