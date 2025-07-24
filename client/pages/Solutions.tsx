import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Cloud,
  Shield,
  Zap,
  Users,
  Building,
  Rocket,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";

export default function Solutions() {
  const [activeSolution, setActiveSolution] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const solutions = [
    {
      icon: <Building className="w-8 h-8" />,
      title: "Enterprise Cloud Management",
      description:
        "Comprehensive multi-cloud management for large enterprises with complex infrastructure needs.",
      features: [
        "Multi-cloud orchestration",
        "Enterprise-grade security",
        "Compliance automation",
        "Advanced analytics",
      ],
      benefits: "Reduce operational costs by 45% while ensuring 99.9% uptime",
      color: "from-blue-600 to-purple-600",
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Startup Acceleration Package",
      description:
        "Fast-track your startup's cloud journey with automated scaling and cost optimization.",
      features: [
        "Auto-scaling solutions",
        "Pay-as-you-grow pricing",
        "DevOps automation",
        "24/7 expert support",
      ],
      benefits:
        "Scale efficiently while keeping infrastructure costs under 15% of revenue",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Financial Services Cloud",
      description:
        "Specialized cloud solutions for banks, fintech, and financial institutions.",
      features: [
        "SOC 2 Type II compliance",
        "PCI DSS certification",
        "Real-time fraud detection",
        "Regulatory reporting",
      ],
      benefits:
        "Maintain compliance while reducing infrastructure costs by 35%",
      color: "from-orange-500 to-red-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Healthcare Cloud Platform",
      description:
        "HIPAA-compliant cloud infrastructure designed for healthcare providers.",
      features: [
        "HIPAA compliance",
        "Patient data security",
        "Disaster recovery",
        "Interoperability support",
      ],
      benefits:
        "Secure patient data while improving operational efficiency by 40%",
      color: "from-purple-500 to-pink-600",
    },
  ];

  const industries = [
    {
      name: "Financial Services",
      icon: "🏦",
      clients: "150+",
      savings: "$500M+",
    },
    { name: "Healthcare", icon: "🏥", clients: "80+", savings: "$200M+" },
    { name: "E-commerce", icon: "🛒", clients: "200+", savings: "$300M+" },
    { name: "SaaS", icon: "💻", clients: "120+", savings: "$180M+" },
    { name: "Manufacturing", icon: "🏭", clients: "90+", savings: "$150M+" },
    { name: "Education", icon: "🎓", clients: "110+", savings: "$120M+" },
  ];

  const features = [
    {
      title: "Multi-Cloud Strategy",
      description:
        "Seamlessly manage AWS, Azure, GCP, and more from one platform",
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      title: "AI-Powered Optimization",
      description:
        "Machine learning algorithms continuously optimize your infrastructure",
      icon: <Zap className="w-6 h-6" />,
    },
    {
      title: "Security First",
      description: "Enterprise-grade security with real-time threat detection",
      icon: <Shield className="w-6 h-6" />,
    },
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
              Tailored Cloud Solutions
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Discover industry-specific cloud solutions designed to meet your
              unique business requirements and regulatory standards.
            </p>
          </div>
        </section>

        {/* Solutions Grid */}
        <section className="px-6 py-20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cloudone-navy">
              Industry-Specific Solutions
            </h2>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Solutions List */}
              <div className="space-y-4">
                {solutions.map((solution, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-2xl cursor-pointer transition-all duration-500 ${
                      activeSolution === index
                        ? "bg-white shadow-2xl scale-105"
                        : "bg-white/70 hover:bg-white/90 shadow-lg"
                    }`}
                    onClick={() => setActiveSolution(index)}
                  >
                    <div className="flex items-start gap-4">
                      <div
                        className={`p-3 rounded-xl bg-gradient-to-r ${solution.color} text-white`}
                      >
                        {solution.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-cloudone-navy mb-2">
                          {solution.title}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          {solution.description}
                        </p>
                        {activeSolution === index && (
                          <div className="space-y-2">
                            {solution.features.map((feature, idx) => (
                              <div
                                key={idx}
                                className="flex items-center gap-2"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500" />
                                <span className="text-sm text-gray-700">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Solution Detail */}
              <div className="sticky top-8">
                <div
                  className={`bg-gradient-to-br ${solutions[activeSolution].color} p-8 rounded-2xl text-white h-full`}
                >
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-6">
                      {solutions[activeSolution].icon}
                    </div>
                    <h3 className="text-3xl font-bold mb-4">
                      {solutions[activeSolution].title}
                    </h3>
                    <p className="text-white/90 text-lg mb-6">
                      {solutions[activeSolution].description}
                    </p>
                  </div>

                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="font-bold text-lg mb-3">Key Benefits</h4>
                    <p className="text-white/90">
                      {solutions[activeSolution].benefits}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-bold text-lg">Core Features</h4>
                    {solutions[activeSolution].features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-white/80" />
                        <span className="text-white/90">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full mt-8 bg-white text-cloudone-navy hover:bg-white/90 font-semibold py-3"
                    onClick={() => (window.location.href = "/platform")}
                  >
                    View Solution Demo
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cloudone-navy">
              Trusted Across Industries
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-4">{industry.icon}</div>
                    <h3 className="text-xl font-bold text-cloudone-navy mb-3">
                      {industry.name}
                    </h3>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Clients:</span>
                        <span className="font-semibold text-cloudone-purple-accent">
                          {industry.clients}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-gray-600">Total Savings:</span>
                        <span className="font-semibold text-cloudone-green">
                          {industry.savings}
                        </span>
                      </div>
                    </div>
                    {hoveredCard === index && (
                      <div className="mt-4 pt-4 border-t border-gray-200">
                        <Button
                          size="sm"
                          variant="outline"
                          className="w-full group-hover:bg-cloudone-purple-accent group-hover:text-white group-hover:border-cloudone-purple-accent"
                        >
                          Learn More
                        </Button>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Overview */}
        <section className="px-6 py-20 bg-gradient-to-br from-cloudone-navy to-cloudone-purple-accent text-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16">
              Platform Capabilities
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="text-center p-8 bg-white/10 rounded-2xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mx-auto mb-6">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/90">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6 text-cloudone-navy">
              Ready to Transform Your Industry?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Let us design a custom solution that fits your specific industry
              requirements and compliance needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-cloudone-green hover:bg-cloudone-green/80 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => (window.location.href = "/")}
              >
                Schedule Consultation
              </Button>
              <Button
                variant="outline"
                className="border-cloudone-navy text-cloudone-navy hover:bg-cloudone-navy hover:text-white px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => (window.location.href = "/platform")}
              >
                View Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </CustomCursor>
  );
}
