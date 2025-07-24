import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  Check,
  Star,
  Zap,
  Crown,
  Rocket,
  Calculator,
  HelpCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";

export default function Pricing() {
  const [billingCycle, setBillingCycle] = useState<"monthly" | "annual">(
    "monthly",
  );
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null);
  const [customCloudSpend, setCustomCloudSpend] = useState(50000);

  const plans = [
    {
      id: "starter",
      name: "Starter",
      icon: <Rocket className="w-6 h-6" />,
      description: "Perfect for startups and small teams",
      monthlyPrice: 299,
      annualPrice: 2390, // 20% discount
      features: [
        "Up to 5 cloud accounts",
        "Basic cost optimization",
        "Email support",
        "Monthly reports",
        "Standard integrations",
        "Up to $50K cloud spend",
      ],
      limitations: ["Limited to AWS and Azure", "Basic analytics"],
      popular: false,
      color: "from-blue-500 to-cyan-600",
    },
    {
      id: "professional",
      name: "Professional",
      icon: <Star className="w-6 h-6" />,
      description: "Ideal for growing businesses",
      monthlyPrice: 799,
      annualPrice: 6392, // 20% discount
      features: [
        "Up to 20 cloud accounts",
        "Advanced AI optimization",
        "Priority support (24/7)",
        "Weekly reports & alerts",
        "All cloud integrations",
        "Up to $500K cloud spend",
        "Custom dashboards",
        "API access",
      ],
      limitations: [],
      popular: true,
      color: "from-purple-500 to-indigo-600",
    },
    {
      id: "enterprise",
      name: "Enterprise",
      icon: <Crown className="w-6 h-6" />,
      description: "For large organizations",
      monthlyPrice: 2499,
      annualPrice: 19992, // 20% discount
      features: [
        "Unlimited cloud accounts",
        "Enterprise AI optimization",
        "Dedicated support team",
        "Real-time monitoring",
        "All integrations + custom",
        "Unlimited cloud spend",
        "Advanced analytics",
        "White-label options",
        "SLA guarantees",
        "Custom training",
      ],
      limitations: [],
      popular: false,
      color: "from-orange-500 to-red-600",
    },
  ];

  const calculateSavings = (plan: (typeof plans)[0]) => {
    const currentPrice =
      billingCycle === "monthly" ? plan.monthlyPrice : plan.annualPrice / 12;
    const potentialSavings = customCloudSpend * 0.3; // 30% average savings
    const roi = ((potentialSavings - currentPrice) / currentPrice) * 100;
    return { potentialSavings, roi };
  };

  const faqs = [
    {
      question: "How quickly can I see cost savings?",
      answer:
        "Most customers see initial savings within 24-48 hours of setup, with full optimization typically achieved within 2 weeks.",
    },
    {
      question: "Do you support all major cloud providers?",
      answer:
        "Yes, we support AWS, Azure, Google Cloud, and 12+ other major cloud providers with our comprehensive integration suite.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No setup fees for any plan. We offer free onboarding and migration assistance for all customers.",
    },
    {
      question: "Can I change plans anytime?",
      answer:
        "Absolutely! You can upgrade or downgrade your plan at any time. Changes take effect immediately.",
    },
    {
      question: "What about data security?",
      answer:
        "We're SOC 2 Type II certified with enterprise-grade encryption. Your data is always secure and never shared.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Choose the perfect plan for your organization. All plans include
              our core optimization features with no hidden fees.
            </p>

            {/* Billing Toggle */}
            <div className="flex items-center justify-center gap-4 mb-12">
              <span
                className={`font-medium ${billingCycle === "monthly" ? "text-cloudone-purple-accent" : "text-gray-500"}`}
              >
                Monthly
              </span>
              <button
                onClick={() =>
                  setBillingCycle(
                    billingCycle === "monthly" ? "annual" : "monthly",
                  )
                }
                className="relative w-16 h-8 bg-gray-300 rounded-full transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-cloudone-purple-accent/20"
                style={{
                  backgroundColor:
                    billingCycle === "annual" ? "#713DFF" : "#D1D5DB",
                }}
              >
                <div
                  className="absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300"
                  style={{
                    transform:
                      billingCycle === "annual"
                        ? "translateX(32px)"
                        : "translateX(0)",
                  }}
                />
              </button>
              <span
                className={`font-medium ${billingCycle === "annual" ? "text-cloudone-purple-accent" : "text-gray-500"}`}
              >
                Annual
                <span className="ml-2 bg-cloudone-green text-white text-xs px-2 py-1 rounded-full">
                  Save 20%
                </span>
              </span>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="px-6 pb-20">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => {
                const { potentialSavings, roi } = calculateSavings(plan);
                const price =
                  billingCycle === "monthly"
                    ? plan.monthlyPrice
                    : plan.annualPrice / 12;

                return (
                  <div
                    key={plan.id}
                    className={`relative bg-white rounded-2xl shadow-xl transition-all duration-300 ${
                      plan.popular
                        ? "scale-105 ring-4 ring-cloudone-purple-accent/20"
                        : "hover:scale-105"
                    } ${selectedPlan === plan.id ? "ring-4 ring-cloudone-green/30" : ""}`}
                    onClick={() => setSelectedPlan(plan.id)}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-cloudone-purple-accent to-pink-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}

                    <div className="p-8">
                      {/* Plan Header */}
                      <div className="text-center mb-8">
                        <div
                          className={`w-16 h-16 bg-gradient-to-r ${plan.color} rounded-xl flex items-center justify-center mx-auto mb-4 text-white`}
                        >
                          {plan.icon}
                        </div>
                        <h3 className="text-2xl font-bold text-cloudone-navy mb-2">
                          {plan.name}
                        </h3>
                        <p className="text-gray-600 mb-4">{plan.description}</p>
                        <div className="text-4xl font-bold text-cloudone-navy">
                          ${price.toLocaleString()}
                          <span className="text-lg text-gray-500 font-normal">
                            /month
                          </span>
                        </div>
                        {billingCycle === "annual" && (
                          <p className="text-sm text-cloudone-green mt-2">
                            $
                            {(
                              (plan.monthlyPrice - price) *
                              12
                            ).toLocaleString()}{" "}
                            saved annually
                          </p>
                        )}
                      </div>

                      {/* ROI Calculator */}
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 mb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <Calculator className="w-4 h-4 text-green-600" />
                          <span className="text-sm font-semibold text-green-800">
                            Potential Monthly Savings
                          </span>
                        </div>
                        <div className="text-2xl font-bold text-green-700">
                          ${potentialSavings.toLocaleString()}
                        </div>
                        <div className="text-sm text-green-600">
                          ROI: {roi.toFixed(0)}%
                        </div>
                      </div>

                      {/* Features */}
                      <div className="space-y-3 mb-8">
                        {plan.features.map((feature, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Check className="w-5 h-5 text-cloudone-green flex-shrink-0" />
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                        {plan.limitations.map((limitation, index) => (
                          <div
                            key={index}
                            className="flex items-center gap-3 opacity-60"
                          >
                            <div className="w-5 h-5 border border-gray-300 rounded flex-shrink-0" />
                            <span className="text-gray-500">{limitation}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <Button
                        className={`w-full py-3 font-semibold rounded-xl transition-all duration-300 ${
                          plan.popular
                            ? "bg-gradient-to-r from-cloudone-purple-accent to-pink-500 hover:shadow-2xl text-white"
                            : selectedPlan === plan.id
                              ? "bg-cloudone-green text-white"
                              : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                        }`}
                        onClick={() => (window.location.href = "/")}
                      >
                        {selectedPlan === plan.id
                          ? "Selected Plan"
                          : "Choose Plan"}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ROI Calculator Section */}
        <section className="px-6 py-20 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 text-cloudone-navy">
              Calculate Your Savings
            </h2>
            <p className="text-xl text-gray-600 mb-12">
              See how much you could save with CloudonePro optimization
            </p>

            <div className="bg-gradient-to-br from-cloudone-navy to-cloudone-purple-accent rounded-2xl p-8 text-white">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-lg font-medium mb-4">
                    Current Monthly Cloud Spend
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="500000"
                    step="1000"
                    value={customCloudSpend}
                    onChange={(e) =>
                      setCustomCloudSpend(Number(e.target.value))
                    }
                    className="w-full h-2 bg-white/20 rounded-lg appearance-none cursor-pointer"
                  />
                  <div className="text-center mt-4">
                    <span className="text-3xl font-bold">
                      ${customCloudSpend.toLocaleString()}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <div className="text-lg font-medium mb-4">
                    Estimated Monthly Savings
                  </div>
                  <div className="text-4xl font-bold text-cloudone-green mb-2">
                    ${(customCloudSpend * 0.3).toLocaleString()}
                  </div>
                  <div className="text-lg">
                    Annual Savings:{" "}
                    <span className="font-bold">
                      ${(customCloudSpend * 0.3 * 12).toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="px-6 py-20">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-16 text-cloudone-navy">
              Frequently Asked Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                    className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="font-semibold text-cloudone-navy">
                      {faq.question}
                    </span>
                    <HelpCircle
                      className={`w-5 h-5 text-cloudone-purple-accent transition-transform ${
                        openFaq === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === index && (
                    <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-cloudone-navy text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Start Saving?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of companies already optimizing their cloud costs
              with CloudonePro.
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
                Schedule Demo
              </Button>
            </div>
          </div>
        </section>
      </div>
    </CustomCursor>
  );
}
