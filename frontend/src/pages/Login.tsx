import { useState } from "react";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, ArrowLeft, CheckCircle } from "lucide-react";
import heroImage from "@/assets/DocVer2.jpeg";

export default function Login() {

  // ✅ THIS IS THE MAIN FIX
  const [isRegister, setIsRegister] = useState(false);

  return (
    <div className="min-h-screen grid lg:grid-cols-2">

      {/* LEFT SIDE */}
      <div className="relative hidden lg:block">
        <img src={heroImage} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/80 to-blue-900/90" />

        <div className="absolute inset-0 flex flex-col justify-center px-16 text-white space-y-6">

          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">DocuShield</h1>
              <p className="text-white/70 text-sm">Team VeriTrust</p>
            </div>
          </div>

          <h2 className="text-4xl font-bold">
            Secure Academic Verification
          </h2>

          <p className="text-white/80 max-w-md">
            Join thousands of institutions and verifiers using the most trusted certificate validation platform.
          </p>

          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <CheckCircle className="text-emerald-400" /> Authorized Platform
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-emerald-400" /> Professional-Grade Security
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="text-emerald-400" /> Upto 99.7% Accuracy Rate
            </div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex items-center justify-center bg-[#020617] px-6">
        <div className="w-full max-w-md">

          <Link to="/" className="flex items-center text-blue-300 mb-6 hover:text-white">
            <ArrowLeft className="mr-2" />
            Back to Home
          </Link>

          <Card className="bg-[#020817] border border-cyan-500/20">
            <CardContent className="p-6 space-y-6">

              {/* ICON */}
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
                <Shield className="text-white" />
              </div>

              {/* HEADING */}
              <div className="text-center space-y-2">
                <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
                  {isRegister ? "Create Account" : "Welcome Back"}
                </h2>

                <p className="text-blue-200/80 text-sm">
                  {isRegister
                    ? "Create your account"
                    : "Sign in to your account or create a new one"}
                </p>
              </div>

              {/* TOGGLE */}
              <div className="flex bg-[#020617] border border-cyan-500/20 rounded-lg p-1">
                <button
                  onClick={() => setIsRegister(false)}
                  className={`flex-1 py-2 rounded-md ${
                    !isRegister ? "bg-white text-black font-medium" : "text-blue-200"
                  }`}
                >
                  Login
                </button>

                <button
                  onClick={() => setIsRegister(true)}
                  className={`flex-1 py-2 rounded-md ${
                    isRegister ? "bg-white text-black font-medium" : "text-blue-200"
                  }`}
                >
                  Register
                </button>
              </div>

              {/* ✅ LOGIN FORM */}
              {!isRegister ? (
                <>
                  <div className="space-y-2">
                    <label className="text-sm text-blue-200">Email Address</label>
                    <Input
                      placeholder="Enter your email"
                      className="bg-[#020617] border border-cyan-500/20 text-white"
                    />
                  </div>

                  <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
                    Send Verification Code
                  </Button>
                </>
              ) : (
                /* ✅ REGISTER FORM */
                <>
                  <div className="grid grid-cols-2 gap-3">
                    <Input placeholder="First Name" className="bg-[#020617] border border-cyan-500/20 text-white"/>
                    <Input placeholder="Last Name" className="bg-[#020617] border border-cyan-500/20 text-white"/>
                  </div>

                  <Input placeholder="Email Address" className="bg-[#020617] border border-cyan-500/20 text-white"/>

                  <Input placeholder="Password" type="password" className="bg-[#020617] border border-cyan-500/20 text-white"/>

                  <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500 text-white">
                   Create Account
                  </Button>
                </>
              )}

              {/* HELP */}
              <p className="text-center text-sm text-blue-300">
                Need help?{" "}
                <Link to="/help" className="text-cyan-400 hover:underline cursor-pointer">
                  Contact Support
                </Link>
              </p>

            </CardContent>
          </Card>

          {/* FOOTER */}
          <p className="text-center text-xs text-blue-300 mt-6">
            By continuing, you agree to our{" "}
            <Link to="/terms" className="text-cyan-400 hover:underline">
              Terms of Service
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="text-cyan-400 hover:underline">
              Privacy Policy
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}