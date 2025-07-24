import React, { useState, useEffect } from "react";
import {
  TrendingDown,
  TrendingUp,
  DollarSign,
  Server,
  Activity,
  Cloud,
  ChevronDown,
  BarChart3,
  RefreshCw,
  AlertTriangle,
  CheckCircle,
  Zap,
} from "lucide-react";

const InteractiveDashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState("30d");
  const [animatedValues, setAnimatedValues] = useState({
    totalCost: 0,
    savings: 0,
    resources: 0,
    efficiency: 0,
  });
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [selectedMetric, setSelectedMetric] = useState("totalCost");
  const [liveUpdates, setLiveUpdates] = useState(true);
  const [realtimeData, setRealtimeData] = useState({
    activeOptimizations: 12,
    pendingActions: 3,
    successfulOptimizations: 147,
  });

  const timeframes = [
    { value: "7d", label: "7 Days" },
    { value: "30d", label: "30 Days" },
    { value: "90d", label: "90 Days" },
    { value: "1y", label: "1 Year" },
  ];

  const finalValues = {
    totalCost: 84720,
    savings: 23450,
    resources: 1247,
    efficiency: 94,
  };

  // Real-time data updates
  useEffect(() => {
    if (!liveUpdates) return;

    const realtimeInterval = setInterval(() => {
      setRealtimeData((prev) => ({
        activeOptimizations:
          prev.activeOptimizations + Math.floor(Math.random() * 3 - 1),
        pendingActions: Math.max(
          0,
          prev.pendingActions + Math.floor(Math.random() * 3 - 1),
        ),
        successfulOptimizations:
          prev.successfulOptimizations + Math.floor(Math.random() * 2),
      }));

      // Slightly update final values for dynamic effect
      setAnimatedValues((prev) => ({
        totalCost: prev.totalCost + Math.floor(Math.random() * 200 - 100),
        savings: prev.savings + Math.floor(Math.random() * 50 - 25),
        resources: prev.resources + Math.floor(Math.random() * 10 - 5),
        efficiency: Math.min(
          100,
          Math.max(85, prev.efficiency + Math.floor(Math.random() * 2 - 1)),
        ),
      }));
    }, 5000); // Update every 5 seconds

    return () => clearInterval(realtimeInterval);
  }, [liveUpdates]);

  useEffect(() => {
    // Animate values on load
    const duration = 2000; // 2 seconds
    const steps = 60;
    let step = 0;

    const interval = setInterval(() => {
      step++;
      const progress = step / steps;
      const easeOut = 1 - Math.pow(1 - progress, 3);

      setAnimatedValues({
        totalCost: Math.floor(finalValues.totalCost * easeOut),
        savings: Math.floor(finalValues.savings * easeOut),
        resources: Math.floor(finalValues.resources * easeOut),
        efficiency: Math.floor(finalValues.efficiency * easeOut),
      });

      if (step >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);

    return () => clearInterval(interval);
  }, [selectedTimeframe]);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
      // Trigger re-animation
      setAnimatedValues({
        totalCost: 0,
        savings: 0,
        resources: 0,
        efficiency: 0,
      });
    }, 1000);
  };

  const costData = [
    { month: "Jan", cost: 92000, optimized: 72000 },
    { month: "Feb", cost: 88000, optimized: 69000 },
    { month: "Mar", cost: 94000, optimized: 71000 },
    { month: "Apr", cost: 89000, optimized: 66000 },
    { month: "May", cost: 91000, optimized: 68000 },
    { month: "Jun", cost: 87000, optimized: 64000 },
  ];

  const usageData = [
    { service: "EC2", usage: 78, cost: 28450 },
    { service: "S3", usage: 45, cost: 12340 },
    { service: "RDS", usage: 92, cost: 18720 },
    { service: "Lambda", usage: 34, cost: 5890 },
    { service: "CloudFront", usage: 67, cost: 8420 },
  ];

  return (
    <div className="bg-white rounded-2xl border border-gray-200 shadow-2xl overflow-hidden">
      {/* Dashboard Header */}
      <div className="bg-cloudone-navy p-6 text-white">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-2 h-12 bg-cloudone-green rounded-full animate-pulse"></div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-1 text-white">
                Cost Optimization Dashboard
              </h3>
              <div className="flex items-center gap-4 text-sm md:text-base">
                <p className="text-gray-300">
                  Real-time multi-cloud cost analytics & insights
                </p>
                <div className="flex items-center gap-2">
                  <div
                    className={`w-2 h-2 rounded-full ${liveUpdates ? "bg-green-400 animate-pulse" : "bg-gray-400"}`}
                  ></div>
                  <span className="text-gray-300 text-xs">
                    {liveUpdates ? "Live" : "Paused"}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setLiveUpdates(!liveUpdates)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                liveUpdates
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-gray-600 hover:bg-gray-700 text-white"
              }`}
            >
              {liveUpdates ? "Live" : "Paused"}
            </button>

            <button
              onClick={handleRefresh}
              disabled={isRefreshing}
              className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors"
            >
              <RefreshCw
                className={`w-4 h-4 ${isRefreshing ? "animate-spin" : ""}`}
              />
            </button>

            <span className="text-gray-300 text-sm font-medium hidden md:block">
              Time Range:
            </span>
            <div className="relative min-w-[140px]">
              <select
                value={selectedTimeframe}
                onChange={(e) => setSelectedTimeframe(e.target.value)}
                className="w-full bg-cloudone-green hover:bg-cloudone-green/80 border border-cloudone-green/50 rounded-lg px-4 py-2.5 text-white appearance-none cursor-pointer clickable transition-colors duration-300 font-medium text-sm md:text-base"
              >
                {timeframes.map((tf) => (
                  <option
                    key={tf.value}
                    value={tf.value}
                    className="text-gray-800 bg-white"
                  >
                    {tf.label}
                  </option>
                ))}
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 pointer-events-none text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Status Bar */}
      <div className="bg-gradient-to-r from-cloudone-green to-teal-500 px-6 py-3">
        <div className="flex items-center justify-between text-white text-sm">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4" />
              <span>
                Active Optimizations: {realtimeData.activeOptimizations}
              </span>
            </div>
            <div className="flex items-center gap-2">
              <AlertTriangle className="w-4 h-4" />
              <span>Pending Actions: {realtimeData.pendingActions}</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4" />
              <span>Successful: {realtimeData.successfulOptimizations}</span>
            </div>
          </div>
          <div className="text-xs opacity-75">
            Last updated: {new Date().toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="p-6 grid grid-cols-2 md:grid-cols-4 gap-4 bg-gray-50">
        <div
          className={`bg-white rounded-lg p-4 border hover:shadow-lg transition-all duration-300 cursor-pointer ${
            selectedMetric === "totalCost"
              ? "ring-2 ring-cloudone-purple-accent shadow-lg"
              : ""
          }`}
          onClick={() => setSelectedMetric("totalCost")}
        >
          <div className="flex items-center justify-between mb-3">
            <DollarSign className="w-8 h-8 text-red-500" />
            <TrendingDown className="w-4 h-4 text-green-500" />
          </div>
          <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
            ${animatedValues.totalCost.toLocaleString()}
          </div>
          <div className="text-xs md:text-sm text-gray-600 leading-tight">
            Total Monthly Cost
          </div>
          {selectedMetric === "totalCost" && (
            <div className="mt-2 text-xs text-cloudone-purple-accent font-medium">
              ↗ Selected for detailed view
            </div>
          )}
        </div>

        <div
          className={`bg-white rounded-lg p-4 border hover:shadow-lg transition-all duration-300 cursor-pointer ${
            selectedMetric === "savings"
              ? "ring-2 ring-cloudone-purple-accent shadow-lg"
              : ""
          }`}
          onClick={() => setSelectedMetric("savings")}
        >
          <div className="flex items-center justify-between mb-3">
            <TrendingDown className="w-8 h-8 text-green-500" />
            <span className="text-green-500 text-xs md:text-sm font-semibold">
              -27.7%
            </span>
          </div>
          <div className="text-xl md:text-2xl font-bold text-green-600 mb-1">
            ${animatedValues.savings.toLocaleString()}
          </div>
          <div className="text-xs md:text-sm text-gray-600 leading-tight">
            Monthly Savings
          </div>
          {selectedMetric === "savings" && (
            <div className="mt-2 text-xs text-cloudone-purple-accent font-medium">
              ↗ Selected for detailed view
            </div>
          )}
        </div>

        <div
          className={`bg-white rounded-lg p-4 border hover:shadow-lg transition-all duration-300 cursor-pointer ${
            selectedMetric === "resources"
              ? "ring-2 ring-cloudone-purple-accent shadow-lg"
              : ""
          }`}
          onClick={() => setSelectedMetric("resources")}
        >
          <div className="flex items-center justify-between mb-3">
            <Server className="w-8 h-8 text-blue-500" />
            <TrendingUp className="w-4 h-4 text-blue-500" />
          </div>
          <div className="text-xl md:text-2xl font-bold text-gray-800 mb-1">
            {animatedValues.resources.toLocaleString()}
          </div>
          <div className="text-xs md:text-sm text-gray-600 leading-tight">
            Active Resources
          </div>
          {selectedMetric === "resources" && (
            <div className="mt-2 text-xs text-cloudone-purple-accent font-medium">
              ↗ Selected for detailed view
            </div>
          )}
        </div>

        <div
          className={`bg-white rounded-lg p-4 border hover:shadow-lg transition-all duration-300 cursor-pointer ${
            selectedMetric === "efficiency"
              ? "ring-2 ring-cloudone-purple-accent shadow-lg"
              : ""
          }`}
          onClick={() => setSelectedMetric("efficiency")}
        >
          <div className="flex items-center justify-between mb-3">
            <Activity className="w-8 h-8 text-cloudone-green" />
            <span className="text-cloudone-green text-xs md:text-sm font-semibold">
              +12%
            </span>
          </div>
          <div className="text-xl md:text-2xl font-bold text-cloudone-green mb-1">
            {animatedValues.efficiency}%
          </div>
          <div className="text-xs md:text-sm text-gray-600 leading-tight">
            Efficiency Score
          </div>
          {selectedMetric === "efficiency" && (
            <div className="mt-2 text-xs text-cloudone-purple-accent font-medium">
              ↗ Selected for detailed view
            </div>
          )}
        </div>
      </div>

      {/* Charts Section */}
      <div className="p-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Cost Trend Chart */}
        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <BarChart3 className="w-5 h-5" />
            Cost Optimization Trend
          </h4>
          <div className="h-48 flex items-end justify-between gap-2">
            {costData.map((data, index) => (
              <div
                key={data.month}
                className="flex-1 flex flex-col items-center gap-1"
              >
                <div className="flex flex-col items-center gap-1 w-full">
                  {/* Optimized cost bar */}
                  <div
                    className="w-full bg-cloudone-green rounded-t transition-all duration-1000 hover:opacity-80 cursor-pointer clickable"
                    style={{
                      height: `${(data.optimized / 100000) * 100}px`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  />
                  {/* Original cost bar */}
                  <div
                    className="w-full bg-red-300 transition-all duration-1000 hover:opacity-80 cursor-pointer clickable"
                    style={{
                      height: `${((data.cost - data.optimized) / 100000) * 100}px`,
                      animationDelay: `${index * 0.1}s`,
                    }}
                  />
                </div>
                <span className="text-xs text-gray-600 mt-1">{data.month}</span>
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-4 mt-4 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-cloudone-green rounded"></div>
              <span>Optimized</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-red-300 rounded"></div>
              <span>Original</span>
            </div>
          </div>
        </div>

        {/* Service Usage */}
        <div className="bg-white border rounded-lg p-4">
          <h4 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
            <Cloud className="w-5 h-5" />
            Service Usage & Costs
          </h4>
          <div className="space-y-3">
            {usageData.map((service, index) => (
              <div
                key={service.service}
                className="flex items-center justify-between p-2 rounded hover:bg-gray-50 transition-colors clickable"
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-3 h-3 rounded-full"
                    style={{ backgroundColor: `hsl(${index * 60}, 70%, 50%)` }}
                  ></div>
                  <span className="font-medium text-gray-700">
                    {service.service}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <div className="w-20 bg-gray-200 rounded-full h-2">
                      <div
                        className="h-2 rounded-full bg-cloudone-purple-accent transition-all duration-1000"
                        style={{
                          width: `${service.usage}%`,
                          animationDelay: `${index * 0.1}s`,
                        }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 w-10">
                      {service.usage}%
                    </span>
                  </div>
                  <span className="font-semibold text-gray-800 w-20 text-right">
                    ${service.cost.toLocaleString()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row gap-3 sm:justify-between sm:items-center">
        <div className="flex items-center gap-4 text-sm text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            Live data updated {Math.floor(Math.random() * 5) + 1} minutes ago
          </div>
          <div className="text-xs text-gray-500">
            Next optimization: {Math.floor(Math.random() * 15) + 5} min
          </div>
        </div>
        <div className="flex gap-2">
          <button
            className="px-4 py-2 bg-cloudone-green text-white rounded-lg hover:bg-cloudone-green/80 transition-colors clickable flex items-center gap-2"
            onClick={() =>
              alert("Exporting detailed cost optimization report...")
            }
          >
            <BarChart3 className="w-4 h-4" />
            Export Report
          </button>
          <button
            className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors clickable"
            onClick={() => window.open("/platform", "_blank")}
          >
            View Full Dashboard
          </button>
        </div>
      </div>
    </div>
  );
};

export default InteractiveDashboard;
