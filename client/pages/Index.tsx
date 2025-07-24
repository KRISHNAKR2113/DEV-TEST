import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import {
  Users,
  Menu,
  X,
  Sparkles,
  Zap,
  Shield,
  BarChart3,
  Cpu,
  Database,
  LogIn,
  Phone,
  Settings,
} from "lucide-react";
import { AWSLogo, AzureLogo, GCPLogo } from "@/components/CloudLogos";
import CustomCursor from "@/components/CustomCursor";
import InteractiveDashboard from "@/components/InteractiveDashboard";
import { useTheme } from "@/contexts/ThemeContext";
import { Link } from "react-router-dom";

export default function Index() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

    return (
    <CustomCursor>
      <div className={`min-h-screen transition-colors duration-300 ${theme === 'dark' ? 'bg-black text-white' : 'bg-white text-black'}`}>
                {/* Enhanced Navigation Header */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 transition-all duration-500 ${
            isScrolled
              ? 'bg-black shadow-lg backdrop-blur-lg'
              : 'bg-transparent'
          }`}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center">
              <div className="flex items-center">
                <span className={`text-2xl font-bold transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : isScrolled ? 'text-white' : 'text-black'
                } brand-cloudone`}>Cloudone</span>
                <span className="text-2xl font-bold brand-pro" style={{ color: '#92D050' }}>Pro</span>
              </div>
            </div>

            {/* Centered Desktop Navigation */}
            <div className="hidden md:flex items-center justify-center flex-1 mx-8">
              <div className="flex items-center space-x-8">
                <Link
                  to="/#about"
                  className={`hover:text-red-500 transition-all duration-300 relative group clickable py-2 font-medium ${
                    theme === 'dark' ? 'text-white' : isScrolled ? 'text-white' : 'text-black'
                  }`}
                >
                  About
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/why-us"
                  className={`hover:text-red-500 transition-all duration-300 relative group clickable py-2 font-medium ${
                    theme === 'dark' ? 'text-white' : isScrolled ? 'text-white' : 'text-black'
                  }`}
                >
                  Why Us?
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/platform"
                  className={`hover:text-red-500 transition-all duration-300 relative group clickable py-2 font-medium ${
                    theme === 'dark' ? 'text-white' : isScrolled ? 'text-white' : 'text-black'
                  }`}
                >
                  Services
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/solutions"
                  className={`hover:text-red-500 transition-all duration-300 relative group clickable py-2 font-medium ${
                    theme === 'dark' ? 'text-white' : isScrolled ? 'text-white' : 'text-black'
                  }`}
                >
                  Solutions
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
                <Link
                  to="/#contact"
                  className={`flex items-center space-x-2 hover:text-red-500 transition-all duration-300 cursor-pointer clickable group py-2 relative font-medium ${
                    theme === 'dark' ? 'text-white' : isScrolled ? 'text-white' : 'text-black'
                  }`}
                >
                  <span>Contact Us</span>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-red-500 to-red-300 transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </div>
            </div>

            {/* Right Side Actions */}
            <div className="flex items-center space-x-4">
                            <Link
                to="/login"
                className="hidden md:flex items-center space-x-2 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-all duration-300 cursor-pointer clickable group font-medium"
                style={{ backgroundColor: 'rgba(146, 213, 5, 1)' }}
              >
                <LogIn className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                <span>Login </span>
                            </Link>

              {/* Mobile Menu Button */}
              <button
                className={`md:hidden hover:text-red-500 transition-colors duration-300 ${
                  theme === 'dark' ? 'text-white' : isScrolled ? 'text-white' : 'text-black'
                }`}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

                    {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className={`md:hidden mt-4 pb-4 backdrop-blur-lg rounded-lg border transition-all duration-300 ${
              theme === 'dark'
                ? 'bg-black/90 border-gray-800'
                : 'bg-white/90 border-gray-200'
            }`}>
              <div className="flex flex-col space-y-4 p-4">
                <Link
                  to="/#about"
                  className={`hover:text-red-500 transition-colors font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </Link>
                <Link
                  to="/why-us"
                  className={`hover:text-red-500 transition-colors font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Why Us?
                </Link>
                <Link
                  to="/platform"
                  className={`hover:text-red-500 transition-colors font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Services
                </Link>
                <Link
                  to="/solutions"
                  className={`hover:text-red-500 transition-colors font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  Solutions
                </Link>
                <Link
                  to="/#contact"
                  className={`flex items-center space-x-2 hover:text-red-500 transition-colors cursor-pointer font-medium ${
                    theme === 'dark' ? 'text-white' : 'text-black'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  <span>Contact Us</span>
                </Link>
                                <Link
                  to="/login"
                  className="flex items-center space-x-2 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors cursor-pointer font-medium w-fit"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <LogIn className="w-4 h-4" />
                  <span>Login </span>
                </Link>
              </div>
            </div>
          )}
        </nav>

                {/* Hero Section */}
        <section
          className={`px-4 md:px-6 py-20 md:py-32 relative overflow-hidden min-h-screen flex items-center ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-black via-gray-900 to-black'
              : 'bg-gradient-to-br from-gray-50 via-white to-gray-100'
          }`}
        >
          {/* Enhanced Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className={`absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-red-500/10' : 'bg-red-500/5'
            }`}></div>
            <div className={`absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-blue-500/10' : 'bg-blue-500/5'
            }`}></div>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-3xl ${
              theme === 'dark' ? 'bg-gray-800/20' : 'bg-gray-200/30'
            }`}></div>
          </div>

          <div className="max-w-7xl mx-auto text-center relative z-10 px-4">
            <div className="mb-8">
              <span className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                theme === 'dark'
                  ? 'bg-red-500/10 border border-red-500/20'
                  : 'bg-red-50 border border-red-200'
              }`}
                style={{ color: 'rgba(146, 213, 5, 1)' }}
              >
                🚀 Next-Generation Cloud Solutions
              </span>
            </div>

                        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 max-w-6xl mx-auto leading-tight tracking-tight flex flex-col" style={{ fontFamily: 'Inter, ui-sans-serif, system-ui' }}>
              <span className={`animate-fade-in-up text-gradient-subtle font-semibold ${
                theme === 'dark' ? 'text-white' : 'text-gray-900'
              }`}
                style={{ margin: '0 auto' }}
              >
                Enabling seamless everyday
              </span>
                            <span
                className="bg-clip-text text-transparent font-semibold animate-fade-in-up"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  color: 'rgba(0, 0, 0, 0)',
                  animationDelay: "0.2s",
                  margin: '0 auto'
                }}
              >
                multi-cloud services
              </span>
              <span
                className={`animate-fade-in-up text-gradient-subtle font-semibold ${
                  theme === 'dark' ? 'text-white' : 'text-gray-900'
                }`}
                style={{ animationDelay: "0.4s", margin: '0 auto' }}
              >
                with informed predictive intelligence
              </span>
                            <span
                className="bg-clip-text text-transparent font-semibold animate-fade-in-up"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 1)',
                  color: 'rgba(0, 0, 0, 0)',
                  animationDelay: "0.6s",
                  margin: '0 auto'
                }}
              >
                for optimized business operations
              </span>
            </h1>

            <p
              className={`text-xl md:text-2xl font-normal mb-16 max-w-4xl mx-auto leading-relaxed animate-fade-in-up text-gradient-primary ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
              }`}
              style={{
                animationDelay: "0.8s",
                fontFamily: 'Inter, ui-sans-serif, system-ui',
                fontWeight: '400',
                letterSpacing: '-0.025em'
              }}
            >
              Transform your cloud infrastructure with AI-powered insights and
              reduce costs by up to <span className="font-bold" style={{ color: 'rgba(146, 213, 5, 1)' }}>40%</span> while maintaining peak performance
              across all your cloud platforms.
            </p>

            {/* Enhanced Interactive Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 max-w-6xl mx-auto">
              {/* AI-Powered Card */}
              <div className="group relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 hover:bg-white/30 transition-all duration-300 cursor-pointer clickable hover:scale-105 transform-gpu">
                <div className="relative">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-blue-500/30" style={{ backgroundColor: 'rgba(146, 213, 5, 1)' }}>
                      <Zap className="w-8 h-8 text-white animate-pulse" />
                    </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      AI-Powered Optimization
                    </h3>
                    <p className="text-white mb-4 leading-relaxed">
                      Automatically optimize your cloud resources with machine
                      learning algorithms that adapt in real-time
                    </p>
                    <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300" style={{ color: 'rgba(146, 213, 5, 1)' }}>
                      <span>Learn More</span>
                      <div className="w-2 h-2 rounded-full group-hover:animate-bounce" style={{ backgroundColor: 'rgba(146, 213, 5, 1)' }} />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-600/10 to-blue-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Analytics Card */}
              <div className="group relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 hover:bg-white/30 transition-all duration-300 cursor-pointer clickable hover:scale-105 transform-gpu">
                <div className="relative">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:-rotate-12 transition-all duration-500 shadow-lg shadow-green-500/30" style={{ backgroundColor: 'rgba(146, 213, 5, 1)' }}>
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-green-600 transition-colors duration-300">
                      Real-time Analytics
                    </h3>
                    <p className="text-white mb-4 leading-relaxed">
                      Monitor your cloud costs and performance metrics with live
                      dashboards and intelligent alerts
                    </p>
                    <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300" style={{ color: 'rgba(146, 213, 5, 1)' }}>
                      <span>View Dashboard</span>
                      <div className="w-2 h-2 rounded-full group-hover:animate-bounce" style={{ backgroundColor: 'rgba(146, 213, 5, 1)' }} />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-teal-600/10 to-green-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>

              {/* Security Card */}
              <div className="group relative bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 hover:bg-white/30 transition-all duration-300 cursor-pointer clickable hover:scale-105 transform-gpu">
                <div className="relative">
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg shadow-orange-500/30" style={{ backgroundColor: 'rgba(146, 213, 5, 1)' }}>
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                                        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-600 transition-colors duration-300">
                      Enterprise Security
                    </h3>
                    <p className="text-white mb-4 leading-relaxed">
                      Bank-grade security with SOC 2 compliance automation and
                      zero-trust architecture
                    </p>
                    <div className="flex items-center gap-2 font-semibold group-hover:gap-4 transition-all duration-300" style={{ color: 'rgba(146, 213, 5, 1)' }}>
                      <span>Security Details</span>
                      <div className="w-2 h-2 rounded-full group-hover:animate-bounce" style={{ backgroundColor: 'rgba(146, 213, 5, 1)' }} />
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-red-600/10 to-orange-700/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </div>
            </div>

            {/* Enhanced CTA Button */}
            <div className="relative inline-block group mt-8">
              <Button
                                className="relative px-10 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-300 transform-gpu clickable group overflow-hidden"
                                style={{
                  background:
                    "linear-gradient(90deg, #671F43 0%, #2E5489 100%)",
                  boxShadow:
                    "0 8px 25px rgba(103, 31, 67, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)",
                  transform: "translateY(0px)",
                  padding: "20px 40px",
                  lineHeight: "20px",
                }}
                onMouseEnter={(e) => {
                  const btn = e.currentTarget;
                  btn.style.transform = "translateY(-3px) scale(1.02)";
                  btn.style.background =
                    "linear-gradient(90deg, #92D050 0%, #713DFF 100%)";
                  btn.style.boxShadow =
                    "0 12px 35px rgba(146, 208, 80, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)";
                }}
                onMouseLeave={(e) => {
                  const btn = e.currentTarget;
                  btn.style.transform = "translateY(0px) scale(1)";
                  btn.style.background =
                    "linear-gradient(90deg, #671F43 0%, #2E5489 100%)";
                  btn.style.boxShadow =
                    "0 8px 25px rgba(103, 31, 67, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)";
                }}
                onMouseDown={(e) => {
                  const btn = e.currentTarget;
                  btn.style.transform = "translateY(-1px) scale(1.01)";
                }}
                onMouseUp={(e) => {
                  const btn = e.currentTarget;
                  btn.style.transform = "translateY(-3px) scale(1.02)";
                }}
              >
                                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/15 to-white/0 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-800 ease-out" />

                {/* Button content */}
                <span className="relative z-10 flex items-center gap-3">
                  <svg
                    className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 10V3L4 14h7v7l9-11h-7z"
                    />
                  </svg>
                  <span className="font-semibold tracking-normal">
                    Start Free Demo
                  </span>
                  <svg
                    className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </span>

                {/* Subtle highlight line */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-white/20 rounded-t-xl" />
              </Button>

                            {/* Professional drop shadow */}
              <div
                className="absolute inset-0 bg-gray-900/15 rounded-xl blur-sm opacity-50 group-hover:opacity-70 transition-all duration-300"
                style={{
                  transform: "translateY(6px) scale(0.95)",
                  zIndex: -1,
                }}
              />
            </div>
          </div>
        </section>

        {/* Insights Section */}
        <section
          className="px-4 md:px-6 py-16 md:py-20 relative overflow-hidden"
          id="platform"
          style={{ backgroundColor: 'rgba(0, 0, 0, 1)' }}
        >
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-cloudone-navy/5 rounded-full blur-2xl"></div>
            <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-cloudone-purple-accent/5 rounded-full blur-2xl"></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 group clickable">
                <span className="bg-gradient-to-r from-gray-800 via-cloudone-purple-accent to-gray-800 bg-clip-text text-transparent group-hover:from-cloudone-green group-hover:via-cloudone-purple-accent group-hover:to-cloudone-green transition-all duration-500">
                  All the Insights That Drive Smarter Cloud Decisions
                </span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-cloudone-green to-cloudone-purple-accent mx-auto rounded-full opacity-70"></div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {[
                {
                  title: "Cost Trend Analyzer",
                  description:
                    "Track and analyze your cloud spending patterns over time to identify cost optimization opportunities.",
                  bgPattern:
                    "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  iconPath: "M3 3v18h18M9 17l4-4 4 4 4-6",
                  iconViewBox: "0 0 24 24",
                },
                {
                  title: "Service Performance Monitor",
                  description:
                    "Monitor the performance metrics of your cloud services in real-time for optimal efficiency.",
                  bgPattern:
                    "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
                  iconPath: "M13 2L3 14h9l-1 8 10-12h-9l1-8z",
                  iconViewBox: "0 0 24 24",
                },
                {
                  title: "Peak Efficiency Tracker",
                  description:
                    "Identify peak usage periods and optimize resource allocation for maximum efficiency.",
                  bgPattern:
                    "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
                  iconPath:
                    "M22 12a10 10 0 1 1-20 0 10 10 0 0 1 20 0zm-10-8v8l4 4",
                  iconViewBox: "0 0 24 24",
                },
                {
                  title: "Resource Overlap Detector",
                  description:
                    "Detect redundant resources across multiple cloud platforms to eliminate waste.",
                  bgPattern:
                    "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
                  iconPath:
                    "M21 21l-4.35-4.35M19 11a8 8 0 1 1-16 0 8 8 0 0 1 16 0z",
                  iconViewBox: "0 0 24 24",
                },
                {
                  title: "AI-Powered Cost Intelligence",
                  description:
                    "Leverage artificial intelligence to predict future costs and suggest optimizations.",
                  bgPattern:
                    "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
                  iconPath:
                    "M12 2L2 7v10c0 5.55 3.84 9.74 9 9 5.16-.74 9-4.45 9-10V7l-10-5z",
                  iconViewBox: "0 0 24 24",
                },
                {
                  title: "Optimization Opportunity Finder",
                  description:
                    "Automatically discover and recommend cost-saving opportunities across your infrastructure.",
                  bgPattern:
                    "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)",
                  iconPath: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
                  iconViewBox: "0 0 24 24",
                },
              ].map((insight, index) => (
                <div
                  key={index}
                  className="relative bg-cloudone-dark-card border border-cloudone-card-border rounded-xl p-6 text-white hover:border-cloudone-purple-accent/30 transition-all duration-500 hover:shadow-lg hover:shadow-cloudone-purple-accent/10 backdrop-blur-sm group overflow-hidden clickable"
                >
                  {/* Interactive background pattern */}
                  <div
                    className="absolute inset-0 opacity-5 group-hover:opacity-15 transition-opacity duration-500"
                    style={{ background: insight.bgPattern }}
                  />

                  {/* Icon and title */}
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-8 h-8 group-hover:scale-110 transition-transform duration-300">
                        <svg
                          viewBox={insight.iconViewBox}
                          className="w-full h-full stroke-white stroke-2 fill-none"
                        >
                          <path d={insight.iconPath} />
                        </svg>
                      </div>
                      <h3 className="text-xl font-semibold group-hover:text-cloudone-green transition-colors duration-300">
                        {insight.title}
                      </h3>
                    </div>
                    <p className="text-cloudone-card-text leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                      {insight.description}
                    </p>
                  </div>

                  {/* Hover effect overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-cloudone-green/5 to-cloudone-purple-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Dashboard Section */}
        <section className="px-4 md:px-6 py-16 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'rgba(146, 213, 5, 1)' }}>
                Live Cost Optimization Dashboard
              </h2>
              <p className="text-lg max-w-3xl mx-auto" style={{ color: 'rgba(255, 255, 255, 1)' }}>
                Experience real-time cloud cost monitoring and optimization
                insights across all your cloud platforms with our interactive
                dashboard.
              </p>
            </div>
            <div
              className="animate-fade-in-up"
              style={{ animationDelay: "0.3s" }}
            >
              <InteractiveDashboard />
            </div>
          </div>
        </section>

        {/* About CloudonePro Section */}
        <section className="px-4 md:px-6 py-20 md:py-28 bg-cloudone-navy relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cloudone-green/10 rounded-full blur-3xl animate-pulse"></div>
            <div
              className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-cloudone-purple-accent/10 rounded-full blur-3xl animate-pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
          <div className="max-w-7xl mx-auto relative z-10">
                        <div className="text-center mb-20">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">
                Transforming Cloud Economics{" "}
                <span className="text-cloudone-green">Worldwide</span>
              </h2>
              <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                The world's most trusted multi-cloud cost optimization platform,
                powering smarter cloud decisions for Fortune 500 companies and
                innovative startups across 45+ countries.
              </p>
            </div>

            {/* Key Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-20">
              {[
                {
                  value: "$2.8B+",
                  label: "Total Cost Savings",
                  description: "Generated for our customers worldwide",
                  bgGradient:
                    "linear-gradient(135deg, #92D050 0%, #6BB635 100%)",
                },
                {
                  value: "40%",
                  label: "Average Cost Reduction",
                  description: "Typical savings achieved by enterprises",
                  bgGradient:
                    "linear-gradient(135deg, #92D050 0%, #6BB635 100%)",
                },
                {
                  value: "15+",
                  label: "Cloud Platforms",
                  description: "Comprehensive multi-cloud support",
                  bgGradient:
                    "linear-gradient(135deg, #92D050 0%, #6BB635 100%)",
                },
                {
                  value: "500+",
                  label: "Enterprise Clients",
                  description: "Fortune 500 companies trust us",
                  bgGradient:
                    "linear-gradient(135deg, #92D050 0%, #6BB635 100%)",
                },
                {
                  value: "99.9%",
                  label: "Uptime Guarantee",
                  description: "Enterprise-grade reliability",
                  bgGradient:
                    "linear-gradient(135deg, #92D050 0%, #6BB635 100%)",
                },
                {
                  value: "24/7",
                  label: "Global Support",
                  description: "Round-the-clock expert assistance",
                  bgGradient:
                    "linear-gradient(135deg, #92D050 0%, #6BB635 100%)",
                },
                {
                  value: "45+",
                  label: "Countries Served",
                  description: "Worldwide deployment coverage",
                  bgGradient:
                    "linear-gradient(135deg, #92D050 0%, #6BB635 100%)",
                },
                {
                  value: "1B+",
                  label: "Resources Monitored",
                  description: "Daily cloud resource analysis",
                  bgGradient:
                    "linear-gradient(135deg, #92D050 0%, #6BB635 100%)",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center hover:bg-white/15 transition-all duration-300 group clickable hover:scale-105"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300"
                    style={{ background: stat.bgGradient }}
                  >
                    <span className="text-white font-bold text-lg">
                      {index + 1}
                    </span>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold mb-2 text-cloudone-green transition-colors duration-300">
                    {stat.value}
                  </div>
                  <div className="text-white font-semibold text-sm mb-2">
                    {stat.label}
                  </div>
                  <div className="text-gray-300 text-xs leading-relaxed">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Interactive Features Showcase */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
              {/* Interactive Cost Calculator */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 group hover:bg-white/15 transition-all duration-300 clickable">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-cloudone-green rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Cost Calculator
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Estimate your potential savings with our interactive cost
                  optimization calculator.
                </p>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Current Monthly Spend</span>
                    <span className="text-cloudone-green font-bold">
                      $45,000
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-white/10">
                    <span className="text-gray-300">Optimized Spend</span>
                    <span className="text-cloudone-green font-bold">
                      $27,000
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-white font-semibold">
                      Monthly Savings
                    </span>
                    <span className="text-2xl font-bold text-cloudone-green">
                      $18,000
                    </span>
                  </div>
                </div>
              </div>

              {/* Live Metrics Feed */}
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-8 group hover:bg-white/15 transition-all duration-300 clickable">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: 'rgba(146, 213, 5, 1)' }}>
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13 10V3L4 14h7v7l9-11h-7z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Live Metrics
                  </h3>
                </div>
                <p className="text-gray-300 mb-6">
                  Real-time insights from our global optimization network.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">
                      Resources Optimized Today:
                    </span>
                    <span className="text-cloudone-green font-bold">
                      847,293
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <span className="text-gray-300">Active Deployments:</span>
                    <span className="text-cloudone-green font-bold">
                      12,847
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div
                      className="w-2 h-2 bg-purple-400 rounded-full animate-pulse"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <span className="text-gray-300">Savings This Hour:</span>
                    <span className="text-cloudone-green font-bold">
                      $156,789
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

                {/* Enhanced Footer */}
        <footer
          className={`px-4 md:px-6 py-16 md:py-20 relative overflow-hidden ${
            theme === 'dark'
              ? 'bg-black border-t border-gray-800'
              : 'bg-gray-900 text-white'
          }`}
        >
          {/* Background decoration */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-32 bg-red-500/5 blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
              {/* Newsletter Signup */}
              <div className="md:col-span-2">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">
                  Stay Updated
                </h3>
                <p className="text-gray-400 mb-6 text-base md:text-lg leading-relaxed">
                  Get the latest insights on cloud cost optimization and industry trends delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    placeholder="Enter your email address"
                    className={`flex-1 px-4 py-3 rounded-lg text-base h-12 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-red-500 ${
                      theme === 'dark'
                        ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-500'
                        : 'bg-gray-800 border border-gray-600 text-white placeholder-gray-400'
                    }`}
                  />
                  <Button className="text-white px-6 py-3 text-base whitespace-nowrap h-12 flex items-center justify-center rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-red-500/25" style={{ backgroundColor: 'rgba(146, 213, 5, 1)' }}>
                    Subscribe
                  </Button>
                </div>
              </div>

              {/* Navigation Links */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">
                  Platform
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/why-us"
                    className="block text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    Why Us?
                  </Link>
                  <Link
                    to="/platform"
                    className="block text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    Services
                  </Link>
                  <Link
                    to="/solutions"
                    className="block text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    Solutions
                  </Link>
                  <Link
                    to="/#contact"
                    className="block text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    Contact Us
                  </Link>
                </div>
              </div>

              {/* Company & Pricing */}
              <div>
                <h3 className="text-lg font-bold mb-4 text-white">
                  Company
                </h3>
                <div className="space-y-3">
                  <Link
                    to="/pricing"
                    className="block hover:text-red-300 transition-colors duration-300 font-semibold"
                    style={{ color: 'rgba(146, 213, 5, 1)' }}
                  >
                    Pricing Plans
                  </Link>
                  <Link
                    to="/company"
                    className="block text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    About Us
                  </Link>
                  <Link
                    to="/company"
                    className="block text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    Careers
                  </Link>
                  <Link
                    to="/company"
                    className="block text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </Link>
                  <Link
                    to="/company"
                    className="block text-gray-400 hover:text-red-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center mb-4 md:mb-0">
                <span className="text-white text-2xl font-bold">Cloudone</span>
                <span className="text-2xl font-bold" style={{ color: 'rgba(146, 213, 5, 1)' }}>Pro</span>
                <span className="ml-3 text-gray-500 text-sm">
                  | Next-Gen Cloud Solutions
                </span>
              </div>
              <div className="flex items-center space-x-6">
                <p className="text-gray-400 text-sm">
                  © 2025 CloudonePro. All rights reserved.
                </p>
                <div className="flex items-center space-x-1" />
              </div>
            </div>
          </div>
        </footer>
      </div>
    </CustomCursor>
  );
}
