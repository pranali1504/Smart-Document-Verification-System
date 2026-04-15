import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Shield, FileSearch, CheckCircle, Zap, ArrowRight } from "lucide-react";
import { ScanSearch } from "lucide-react";
import heroImage from "@/assets/DocVer2.jpeg";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Document Verification"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#020617]/95 via-[#020617]/85 to-[#020617]/95" />
      </div>

      {/* LEFT FLOATING ICONS */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
          <Shield className="h-6 w-6 text-white" />
        </div>
      </div>

      <div
        className="absolute bottom-40 left-20 animate-float"
        style={{ animationDelay: "4s" }}
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
          <Zap className="h-6 w-6 text-blue-400" />
        </div>
      </div>

      {/* RIGHT TICK */}
      <div
        className="absolute top-40 right-20 animate-float"
        style={{ animationDelay: "2s" }}
      >
        <div className="p-3 rounded-full bg-white/10 backdrop-blur-sm">
          <CheckCircle className="h-6 w-6 text-cyan-400" />
        </div>
      </div>

      {/* MAIN GRID */}
      <div className="relative z-10 container mx-auto grid md:grid-cols-2 gap-12 items-center px-6 md:px-12 lg:px-20">

        {/* LEFT CONTENT */}
        <div className="space-y-6 text-white md:pl-16 lg:pl-24">

          <Badge className="bg-white/10 text-white border border-white/20 backdrop-blur-md px-5 py-2 mt-6">
            <Shield className="h-4 w-4 mr-2" />
            Developed By Team VeriTrust
          </Badge>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Authenticate Document
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Credentials
            </span>
            <span className="block">Instantly</span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 max-w-xl">
            OCR + registry verification + cryptographic proofs in a single workflow.
            Protect document integrity with government-grade security.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/verify">
              <Button className="px-8 py-6 text-lg font-semibold bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <FileSearch className="h-5 w-5 mr-2" />
                Verify Document Now
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </Link>

            <Link to="/help">
              <Button className="px-8 py-6 text-lg bg-white/5 border border-white/20 text-white backdrop-blur-sm">
                Learn How It Works
              </Button>
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 pt-2 text-gray-300">
            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Bank-Grade Security</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>Instant Results</span>
            </div>

            <div className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span>24/7 Available</span>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE (SCAN ANIMATION) */}
        <div className="relative hidden md:flex items-center justify-center">

          <div className="relative w-40 h-40 rounded-full border border-cyan-400/30 bg-cyan-500/5 flex items-center justify-center overflow-hidden">

            {/* Icon */}
            <ScanSearch className="text-cyan-400 w-10 h-10 z-10" />

            {/* Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/70 animate-scan"></div>

          </div>

        </div>

      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 w-full h-20 bg-gradient-to-t from-[#020617]" />
    </section>
  );
}