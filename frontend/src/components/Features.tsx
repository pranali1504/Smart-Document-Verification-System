import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Zap,
  Shield,
  CheckCircle,
  FileSearch,
  Scan,
  Database,
  Lock,
  Clock
} from "lucide-react";

const steps = [
  {
    icon: FileSearch,
    title: "Upload Document",
    description: "Drag & drop your certificate or scan QR code with camera",
    time: "5 seconds"
  },
  {
    icon: Scan,
    title: "OCR Analysis",
    description: "AI extracts key information and detects tampering",
    time: "15 seconds"
  },
  {
    icon: Database,
    title: "Cross-Verification",
    description: "Match against institutional databases and registries",
    time: "10 seconds"
  },
  {
    icon: CheckCircle,
    title: "Instant Result",
    description: "Get comprehensive validation report with confidence score",
    time: "2 seconds"
  }
];

const features = [
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "End-to-end encryption with government-approved protocols",
    badge: "256-bit SSL"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Complete verification in under 30 seconds",
    badge: "< 30s"
  },
  {
    icon: Lock,
    title: "Privacy Protected",
    description: "Data anonymization and GDPR compliant processing",
    badge: "GDPR"
  },
  {
    icon: Clock,
    title: "24/7 Available",
    description: "Round-the-clock verification service",
    badge: "Always On"
  }
];

export function Features() {
  return (
    <section className="py-20 bg-[#020617] text-white">
      <div className="container">

        {/* Heading */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-400/20">
            How It Works
          </Badge>

          <h2 className="text-4xl font-bold mb-4">
            Verification Made Simple
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-powered platform verifies academic credentials in four simple steps
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-8 mb-20 relative">

          {steps.map((step, index) => (
            <div key={index} className="relative text-center">

              {/* FIXED CONNECTOR LINE */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-6 left-[60%] w-[80%] h-[2px] bg-cyan-500/30 z-0" />
              )}

              <Card className="bg-white/5 border border-white/10 backdrop-blur-md hover:border-cyan-400/40 transition-all duration-300 rounded-xl">
                <CardContent className="p-6">

                  {/* ICON */}
                  <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-500/20 flex items-center justify-center">
                    <step.icon className="h-6 w-6 text-cyan-400" />
                  </div>

                  <h3 className="font-semibold mb-2 text-white">
                    {step.title}
                  </h3>

                  {/* FIXED GREY TEXT */}
                  <p className="text-sm text-gray-400 mb-3">
                    {step.description}
                  </p>

                  <Badge className="text-xs bg-white/10 text-gray-300 border border-white/10">
                    <Clock className="h-3 w-3 mr-1" />
                    {step.time}
                  </Badge>

                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* SECOND SECTION */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-500/10 text-cyan-400 border-cyan-400/20">
            Why Choose Us
          </Badge>

          <h2 className="text-4xl font-bold">
            Built for Trust & Reliability
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

          {features.map((feature, index) => (
            <Card
              key={index}
              className="bg-white/5 border border-white/10 hover:border-cyan-400/40 transition-all duration-300 rounded-xl"
            >
              <CardContent className="p-6 text-center">

                <div className="w-14 h-14 rounded-full bg-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-7 w-7 text-cyan-400" />
                </div>

                <Badge className="mb-2 text-xs bg-white/10 text-gray-300 border border-white/10">
                  {feature.badge}
                </Badge>

                <h3 className="font-semibold mb-2 text-white">
                  {feature.title}
                </h3>

                {/* FIXED GREY */}
                <p className="text-sm text-gray-400">
                  {feature.description}
                </p>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}