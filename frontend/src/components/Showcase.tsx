import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Smartphone, 
  Globe, 
  Zap, 
  ArrowRight,
  CheckCircle
} from "lucide-react";
import verificationUI from "@/assets/verification-ui.jpg";
import securityFeatures from "@/assets/security-features.jpg";

const integrations = [
  { name: "REST API", desc: "Complete programmatic access" },
  { name: "Webhooks", desc: "Real-time event notifications" },
  { name: "Bulk Upload", desc: "Process thousands at once" },
  { name: "QR Codes", desc: "Instant mobile verification" },
  { name: "Blockchain", desc: "Immutable audit trail" },
  { name: "Single Sign-On", desc: "Enterprise authentication" }
];

export function Showcase() {
  return (
    <section className="py-20 bg-[#020617] text-white">
      <div className="container">
        
        <div className="text-center mb-16">
          <Badge variant="secondary" className="mb-4">Platform Preview</Badge>
          <h2 className="text-4xl font-display font-bold mb-6">
            See It In Action
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Experience the most advanced document verification interface
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <Badge className="bg-cyan-500/10 text-cyan-400 border-cyan-400/20">
              Verification Workspace
            </Badge>
            <h3 className="text-3xl font-display font-bold">
              Three-Pane Verification
            </h3>
            <p className="text-lg text-gray-400">
              Upload, analyze, and validate in one seamless workflow. Our interface 
              guides you through each step with real-time feedback and confidence scoring.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Smart OCR Extraction</p>
                  <p className="text-sm text-gray-400">Automatically identify and extract key certificate fields</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Visual Anomaly Detection</p>
                  <p className="text-sm text-gray-400">Highlight suspicious elements with bounding boxes</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-5 w-5 text-success mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Instant Validation</p>
                  <p className="text-sm text-gray-400">Cross-reference with institutional databases</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Try Demo
              <ArrowRight className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>

          <div className="relative">
            <div className="glass-card rounded-2xl overflow-hidden shadow-elegant">
              <img 
                src={verificationUI}
                alt="Verification Interface"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}