import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  TrendingUp, 
  Users, 
  FileCheck, 
  AlertTriangle,
  Building2,
  Clock
} from "lucide-react";

interface CounterProps {
  end: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", prefix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <span className="font-display font-bold text-3xl text-white">
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: FileCheck,
    label: "Documents Verified",
    value: 125000,
    suffix: "+",
    change: "+12%",
    trend: "up"
  },
  {
    icon: Users,
    label: "Active Verifiers",
    value: 2500,
    suffix: "+",
    change: "+8%",
    trend: "up"
  },
  {
    icon: Building2,
    label: "Registered Institutions",
    value: 180,
    change: "+5 this month",
    trend: "up"
  },
  {
    icon: AlertTriangle,
    label: "Fraud Detection Rate",
    value: 98,
    suffix: "%",
    change: "Industry leading",
    trend: "up"
  },
  {
    icon: Clock,
    label: "Avg. Verification Time",
    value: 28,
    suffix: "s",
    change: "-15% faster",
    trend: "up"
  },
  {
    icon: TrendingUp,
    label: "Accuracy Score",
    value: 99,
    suffix: ".7%",
    change: "Best in class",
    trend: "up"
  }
];

export function Stats() {
  return (
    <section className="py-20 bg-[#020617] text-white">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-400/20">
            Live Statistics
          </Badge>

          <h2 className="text-4xl font-bold mb-4">
            Trusted by Thousands Daily
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-time insights from our verification platform
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 rounded-xl"
            >
              <CardContent className="p-6">

                {/* Top */}
                <div className="flex items-start justify-between mb-4">

                  <div className="w-12 h-12 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  <Badge className="text-xs bg-white/10 text-green-400 border border-white/10">
                    {stat.change}
                  </Badge>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <Counter 
                    end={stat.value} 
                    suffix={stat.suffix}
                    duration={2000 + index * 200}
                  />

                  <p className="text-sm font-medium text-gray-400">
                    {stat.label}
                  </p>
                </div>

              </CardContent>
            </Card>
          ))}

        </div>
      </div>
    </section>
  );
}