import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  MapPin,
  Users,
  Award,
  Globe,
  Calendar,
  Linkedin,
  Twitter,
  Mail,
  Building,
  Target,
  Heart,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";

export default function Company() {
  const [activeTab, setActiveTab] = useState("about");

  const team = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      bio: "Former AWS VP with 15+ years in cloud infrastructure. Led teams that saved $2B+ in cloud costs.",
      image: "👩‍💼",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Marcus Rodriguez",
      role: "CTO & Co-Founder",
      bio: "Ex-Google engineer specializing in AI/ML optimization. PhD in Computer Science from Stanford.",
      image: "👨‍💻",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "Emily Johnson",
      role: "VP of Engineering",
      bio: "Former Microsoft Azure architect. Expert in multi-cloud optimization and security.",
      image: "👩‍🔬",
      linkedin: "#",
      twitter: "#",
    },
    {
      name: "David Kim",
      role: "Head of Customer Success",
      bio: "Former Salesforce executive with 12+ years in customer success and cloud adoption.",
      image: "👨‍💼",
      linkedin: "#",
      twitter: "#",
    },
  ];

  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Customer First",
      description:
        "Every decision we make starts with our customers' success in mind.",
      color: "from-blue-500 to-cyan-600",
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Transparency",
      description:
        "We believe in honest communication and transparent pricing.",
      color: "from-purple-500 to-indigo-600",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation",
      description:
        "Continuously pushing the boundaries of cloud optimization technology.",
      color: "from-green-500 to-teal-600",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description:
        "Working together to solve complex cloud infrastructure challenges.",
      color: "from-orange-500 to-red-600",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Company Founded",
      description:
        "Started by cloud veterans with a vision to democratize cloud optimization.",
    },
    {
      year: "2020",
      title: "First $100M Saved",
      description:
        "Reached our first major milestone in customer cost savings.",
    },
    {
      year: "2021",
      title: "Series A Funding",
      description: "Raised $25M to accelerate product development and growth.",
    },
    {
      year: "2022",
      title: "500+ Customers",
      description: "Reached 500 enterprise customers across 40+ countries.",
    },
    {
      year: "2023",
      title: "$2B+ Total Savings",
      description:
        "Achieved $2 billion in cumulative cost savings for our customers.",
    },
    {
      year: "2024",
      title: "AI-Powered Platform",
      description:
        "Launched next-generation AI optimization platform with predictive capabilities.",
    },
  ];

  const offices = [
    {
      city: "San Francisco",
      address: "123 Market Street, CA 94105",
      type: "Headquarters",
      employees: 150,
    },
    {
      city: "New York",
      address: "456 Broadway, NY 10013",
      type: "East Coast Office",
      employees: 80,
    },
    {
      city: "London",
      address: "789 Oxford Street, W1D 2HX",
      type: "EMEA Office",
      employees: 60,
    },
    {
      city: "Singapore",
      address: "321 Orchard Road, 238866",
      type: "APAC Office",
      employees: 40,
    },
  ];

  const stats = [
    { label: "Employees", value: "330+", icon: <Users className="w-6 h-6" /> },
    {
      label: "Countries",
      value: "45+",
      icon: <Globe className="w-6 h-6" />,
    },
    {
      label: "Customers",
      value: "500+",
      icon: <Building className="w-6 h-6" />,
    },
    {
      label: "Founded",
      value: "2019",
      icon: <Calendar className="w-6 h-6" />,
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
              About CloudonePro
            </h1>
            <p className="text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              We're on a mission to make cloud optimization accessible to every
              organization, helping them save costs while improving performance.
            </p>

            {/* Company Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="text-cloudone-purple-accent mb-2">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-cloudone-navy mb-1">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Navigation Tabs */}
        <nav className="px-6 mb-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex justify-center space-x-8 bg-white rounded-2xl p-2 shadow-lg">
              {["about", "team", "values", "history"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab
                      ? "bg-cloudone-purple-accent text-white"
                      : "text-gray-600 hover:text-cloudone-purple-accent"
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Tab Content */}
        <section className="px-6 pb-20">
          <div className="max-w-6xl mx-auto">
            {activeTab === "about" && (
              <div className="space-y-12">
                {/* Mission Statement */}
                <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
                  <h2 className="text-3xl font-bold text-cloudone-navy mb-6">
                    Our Mission
                  </h2>
                  <p className="text-xl text-gray-600 leading-relaxed max-w-4xl mx-auto">
                    To democratize cloud optimization through AI-powered
                    technology, making it accessible for organizations of all
                    sizes to achieve maximum efficiency and cost savings in
                    their cloud infrastructure.
                  </p>
                </div>

                {/* Offices */}
                <div>
                  <h2 className="text-3xl font-bold text-center text-cloudone-navy mb-12">
                    Global Presence
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {offices.map((office, index) => (
                      <div
                        key={index}
                        className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <MapPin className="w-5 h-5 text-cloudone-purple-accent" />
                          <h3 className="text-xl font-bold text-cloudone-navy">
                            {office.city}
                          </h3>
                        </div>
                        <p className="text-gray-600 mb-2">{office.type}</p>
                        <p className="text-sm text-gray-500 mb-3">
                          {office.address}
                        </p>
                        <div className="flex items-center gap-2 text-cloudone-green">
                          <Users className="w-4 h-4" />
                          <span className="font-medium">
                            {office.employees} employees
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === "team" && (
              <div>
                <h2 className="text-3xl font-bold text-center text-cloudone-navy mb-12">
                  Leadership Team
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {team.map((member, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex items-start gap-6">
                        <div className="text-6xl">{member.image}</div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-cloudone-navy mb-1">
                            {member.name}
                          </h3>
                          <p className="text-cloudone-purple-accent font-medium mb-3">
                            {member.role}
                          </p>
                          <p className="text-gray-600 mb-4">{member.bio}</p>
                          <div className="flex gap-3">
                            <a
                              href={member.linkedin}
                              className="text-cloudone-purple-accent hover:text-cloudone-navy transition-colors"
                            >
                              <Linkedin className="w-5 h-5" />
                            </a>
                            <a
                              href={member.twitter}
                              className="text-cloudone-purple-accent hover:text-cloudone-navy transition-colors"
                            >
                              <Twitter className="w-5 h-5" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "values" && (
              <div>
                <h2 className="text-3xl font-bold text-center text-cloudone-navy mb-12">
                  Our Values
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {values.map((value, index) => (
                    <div
                      key={index}
                      className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
                    >
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                      >
                        {value.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-cloudone-navy mb-4">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === "history" && (
              <div>
                <h2 className="text-3xl font-bold text-center text-cloudone-navy mb-12">
                  Our Journey
                </h2>
                <div className="space-y-8">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className="flex items-start gap-8 bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      <div className="flex-shrink-0">
                        <div className="w-16 h-16 bg-gradient-to-r from-cloudone-purple-accent to-pink-500 rounded-xl flex items-center justify-center text-white font-bold text-lg">
                          {milestone.year}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-cloudone-navy mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-gray-600">{milestone.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-20 bg-cloudone-navy text-white text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Join Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              Help us democratize cloud optimization and make a real impact on
              how organizations manage their cloud infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                className="bg-cloudone-green hover:bg-cloudone-green/80 text-white px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => (window.location.href = "/")}
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact Us
              </Button>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-cloudone-navy px-8 py-4 text-lg font-semibold rounded-xl"
                onClick={() => (window.location.href = "/")}
              >
                View Careers
              </Button>
            </div>
          </div>
        </section>
      </div>
    </CustomCursor>
  );
}
