import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  ArrowLeft,
  BarChart3,
  DollarSign,
  TrendingDown,
  Server,
  Activity,
  Cloud,
  Zap,
  Settings,
  RefreshCw,
  Download,
  Filter,
} from "lucide-react";
import { Link } from "react-router-dom";
import CustomCursor from "@/components/CustomCursor";

export default function Platform() {
  const [activeTab, setActiveTab] = useState("overview");
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [costSavings, setCostSavings] = useState(18000);
  const [activeRegion, setActiveRegion] = useState("us-east-1");

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setCostSavings((prev) => prev + Math.floor(Math.random() * 100));
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => setIsRefreshing(false), 2000);
  };

  const tabs = [
    {
      id: "overview",
      label: "Overview",
      icon: <BarChart3 className="w-4 h-4" />,
    },
    {
      id: "costs",
      label: "Cost Analysis",
      icon: <DollarSign className="w-4 h-4" />,
    },
    {
      id: "resources",
      label: "Resources",
      icon: <Server className="w-4 h-4" />,
    },
    {
      id: "monitoring",
      label: "Monitoring",
      icon: <Activity className="w-4 h-4" />,
    },
    {
      id: "optimization",
      label: "Optimization",
      icon: <Zap className="w-4 h-4" />,
    },
  ];

  const regions = ["us-east-1", "us-west-2", "eu-west-1", "ap-southeast-1"];

  const metrics = [
    {
      title: "Monthly Savings",
      value: `$${costSavings.toLocaleString()}`,
      change: "+15.3%",
      trending: "up",
      color: "from-green-500 to-emerald-600",
    },
    {
      title: "Resources Optimized",
      value: "847",
      change: "+23.1%",
      trending: "up",
      color: "from-blue-500 to-cyan-600",
    },
    {
      title: "Cost Reduction",
      value: "42%",
      change: "+2.1%",
      trending: "up",
      color: "from-purple-500 to-indigo-600",
    },
    {
      title: "Active Deployments",
      value: "156",
      change: "+8.7%",
      trending: "up",
      color: "from-orange-500 to-red-600",
    },
  ];

  const activityData = [
    {
      time: "2 min ago",
      action: "Auto-scaling triggered for EC2 instances",
      status: "success",
    },
    {
      time: "5 min ago",
      action: "Cost optimization applied to RDS cluster",
      status: "success",
    },
    {
      time: "12 min ago",
      action: "Unused S3 buckets identified and archived",
      status: "warning",
    },
    {
      time: "18 min ago",
      action: "Load balancer configuration optimized",
      status: "success",
    },
    {
      time: "25 min ago",
      action: "Reserved instance recommendations generated",
      status: "info",
    },
  ];

  const costChart = [
    { month: "Jan", original: 45000, optimized: 27000 },
    { month: "Feb", original: 48000, optimized: 28800 },
    { month: "Mar", original: 52000, optimized: 29120 },
    { month: "Apr", original: 47000, optimized: 26320 },
    { month: "May", original: 51000, optimized: 28560 },
    { month: "Jun", original: 49000, optimized: 27440 },
  ];

  const renderOverview = () => (
    <div className="space-y-8">
      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-medium text-gray-600">
                {metric.title}
              </h3>
              <div
                className={`w-3 h-3 rounded-full bg-gradient-to-r ${metric.color} opacity-75 group-hover:opacity-100`}
              />
            </div>
            <div className="flex items-end justify-between">
              <div>
                <div
                  className={`text-3xl font-bold bg-gradient-to-r ${metric.color} bg-clip-text text-transparent`}
                >
                  {metric.value}
                </div>
                <div className="flex items-center gap-1 mt-1">
                  <TrendingDown className="w-4 h-4 text-green-500" />
                  <span className="text-sm text-green-600 font-medium">
                    {metric.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Cost Trend Chart */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">Cost Trends</h3>
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </Button>
          </div>
          <div className="space-y-4">
            {costChart.map((data, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="w-12 text-sm font-medium text-gray-600">
                  {data.month}
                </div>
                <div className="flex-1 relative">
                  <div className="h-8 bg-gray-100 rounded-lg overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-400 to-red-500 rounded-lg"
                      style={{ width: `${(data.original / 60000) * 100}%` }}
                    />
                    <div
                      className="h-full bg-gradient-to-r from-green-400 to-green-500 rounded-lg -mt-8"
                      style={{ width: `${(data.optimized / 60000) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="text-sm font-medium text-gray-600 w-20">
                  ${data.optimized.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Live Activity Feed */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-800">
              Live Activity
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-gray-600">Live</span>
            </div>
          </div>
          <div className="space-y-4 max-h-64 overflow-y-auto">
            {activityData.map((activity, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-3 hover:bg-gray-50 rounded-lg transition-colors"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${
                    activity.status === "success"
                      ? "bg-green-500"
                      : activity.status === "warning"
                        ? "bg-yellow-500"
                        : "bg-blue-500"
                  }`}
                />
                <div className="flex-1">
                  <p className="text-sm text-gray-800">{activity.action}</p>
                  <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCostAnalysis = () => (
    <div className="space-y-8">
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <h3 className="text-2xl font-semibold mb-6">Cost Breakdown Analysis</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl">
            <div className="text-3xl font-bold text-blue-600 mb-2">$45,230</div>
            <div className="text-gray-600">Current Month</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
            <div className="text-3xl font-bold text-green-600 mb-2">
              $27,138
            </div>
            <div className="text-gray-600">Optimized Cost</div>
          </div>
          <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
            <div className="text-3xl font-bold text-purple-600 mb-2">
              $18,092
            </div>
            <div className="text-gray-600">Total Savings</div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <CustomCursor>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-6">
              <Link
                to="/"
                className="flex items-center gap-3 text-gray-600 hover:text-cloudone-purple-accent transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back</span>
              </Link>
              <div className="flex items-center">
                <span className="text-cloudone-navy text-xl font-bold">
                  Cloudone
                </span>
                <span className="text-cloudone-green text-xl font-bold">
                  Pro
                </span>
                <span className="ml-2 text-gray-400">Dashboard</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <select
                value={activeRegion}
                onChange={(e) => setActiveRegion(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cloudone-purple-accent"
              >
                {regions.map((region) => (
                  <option key={region} value={region}>
                    {region}
                  </option>
                ))}
              </select>
              <Button
                variant="outline"
                size="sm"
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="flex items-center gap-2"
              >
                <RefreshCw
                  className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
                />
                Refresh
              </Button>
              <Button
                size="sm"
                className="bg-cloudone-purple-accent hover:bg-cloudone-purple-accent/80"
              >
                <Settings className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <nav className="bg-white border-b border-gray-200 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="flex space-x-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-4 border-b-2 font-medium transition-colors ${
                    activeTab === tab.id
                      ? "border-cloudone-purple-accent text-cloudone-purple-accent"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-6">
          {activeTab === "overview" && renderOverview()}
          {activeTab === "costs" && renderCostAnalysis()}
          {activeTab === "resources" && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Resource Management
              </h3>
              <p className="text-gray-600">
                Resource optimization tools and monitoring dashboard.
              </p>
            </div>
          )}
          {activeTab === "monitoring" && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                Real-time Monitoring
              </h3>
              <p className="text-gray-600">
                Live performance metrics and system health indicators.
              </p>
            </div>
          )}
          {activeTab === "optimization" && (
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-semibold mb-6">
                AI-Powered Optimization
              </h3>
              <p className="text-gray-600">
                Intelligent recommendations and automated optimizations.
              </p>
            </div>
          )}
        </main>
      </div>
    </CustomCursor>
  );
}
