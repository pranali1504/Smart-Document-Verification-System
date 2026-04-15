import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Shield, ArrowLeft, CheckCircle, Mail } from "lucide-react";
import heroImage from "@/assets/DocVer2.jpeg";

export default function Login() {
  const navigate = useNavigate();

  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [otpSent, setOtpSent] = useState(false);

  const [cooldown, setCooldown] = useState(0);

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (cooldown > 0) {
      const timer = setTimeout(() => setCooldown(cooldown - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [cooldown]);

  const API_BASE_URL = "http://localhost:5000";

  // ================= LOGIN =================

  const handleSendOTP = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/users/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      if (data.success) {
        setOtpSent(true);
        setCooldown(30);
      }
    } catch (err: any) {
      alert(err.message || "Error sending OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResendOTP = async () => {
    if (cooldown > 0) return;

    try {
      const res = await fetch(`${API_BASE_URL}/api/users/send-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();

      if (data.success) {
        setCooldown(30);
      }
    } catch {
      alert("Failed to resend OTP");
    }
  };

  const handleVerifyOtp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/users/verify-otp`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, otp }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      if (data.success) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        navigate("/dashboard");
      }
    } catch (err: any) {
      alert(err.message || "Verification failed");
    } finally {
      setLoading(false);
    }
  };

  // ================= REGISTER =================

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.message);

      if (data.success) {
        localStorage.setItem("authToken", data.token);
        localStorage.setItem("userInfo", JSON.stringify(data.user));
        navigate("/dashboard");
      }
    } catch (err: any) {
      alert(err.message || "Registration failed");
    } finally {
      setLoading(false);
    }
  };

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

    {/* BACK TO HOME */}
    <Link
      to="/"
      className="flex items-center text-blue-300 mb-6 hover:text-white"
    >
      <ArrowLeft className="mr-2 h-4 w-4" />
      Back to Home
    </Link>

    <Card className="bg-[#020817] border border-cyan-500/20 shadow-xl">
      <CardContent className="p-8 space-y-6">

        {/* ICON */}
        <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
          <Shield className="text-white" />
        </div>

        {/* HEADING */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-cyan-400">
            {isRegister ? "Create Account" : "Welcome Back"}
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            {isRegister
              ? "Create your account"
              : "Sign in to your account or create a new one"}
          </p>
        </div>

        {/* TOGGLE */}
        <div className="flex bg-[#020617] border border-cyan-500/20 rounded-full p-1">
          <button
            onClick={() => {
              setIsRegister(false);
              setOtpSent(false);
            }}
            className={`flex-1 py-2 rounded-full text-sm ${
              !isRegister
                ? "bg-white text-black font-medium"
                : "text-blue-200"
            }`}
          >
            Login
          </button>

          <button
            onClick={() => setIsRegister(true)}
            className={`flex-1 py-2 rounded-full text-sm ${
              isRegister
                ? "bg-white text-black font-medium"
                : "text-blue-200"
            }`}
          >
            Register
          </button>
        </div>

        {/* ================= LOGIN ================= */}
        {!isRegister && (
          <>
            {!otpSent ? (
              <form onSubmit={handleSendOTP} className="space-y-4">

                {/* EMAIL */}
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="pl-10 bg-[#020617] border border-cyan-500/20 text-white"
                  />
                </div>

                {/* SEND OTP */}
                <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500">
                  {loading ? "Sending..." : "Send Verification Code"}
                </Button>

              </form>
            ) : (
              <form onSubmit={handleVerifyOtp} className="space-y-4">

                {/* OTP INPUT */}
                <Input
                  value={otp}
                  onChange={(e) => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  className="bg-[#020617] border border-cyan-500/20 text-white"
                />

                {/* VERIFY + BACK */}
                <div className="flex gap-3">
                  <Button className="flex-1 bg-green-500 hover:bg-green-600">
                    {loading ? "Verifying..." : "Verify Code"}
                  </Button>

                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setOtpSent(false)}
                  >
                    Back
                  </Button>
                </div>

                {/* RESEND */}
                <p
                  className={`text-center text-sm ${
                    cooldown > 0
                      ? "text-gray-500 cursor-not-allowed"
                      : "text-cyan-400 cursor-pointer hover:underline"
                  }`}
                  onClick={handleResendOTP}
                >
                  {cooldown > 0
                    ? `Resend in ${cooldown}s`
                    : "Resend Code"}
                </p>

              </form>
            )}
          </>
        )}

        {/* ================= REGISTER ================= */}
        {isRegister && (
          <form onSubmit={handleRegister} className="space-y-4">

            <div className="grid grid-cols-2 gap-3">
              <Input
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-[#020617] border border-cyan-500/20 text-white"
              />
              <Input
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-[#020617] border border-cyan-500/20 text-white"
              />
            </div>

            <Input
              placeholder="Email Address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-[#020617] border border-cyan-500/20 text-white"
            />

            <Input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-[#020617] border border-cyan-500/20 text-white"
            />

            <Button className="w-full bg-gradient-to-r from-cyan-400 to-blue-500">
              {loading ? "Creating..." : "Create Account"}
            </Button>

          </form>
        )}

        {/* NEED HELP + TERMS */}
        <div className="text-center space-y-3 pt-2">

  {/* NEED HELP */}
  <p
    onClick={() => navigate("/help")}
    className="text-sm text-cyan-400 cursor-pointer hover:underline"
  >
    Need help? Contact Support
  </p>

  {/* TERMS */}
  <p className="text-xs text-gray-400">
    By continuing, you agree to our{" "}

    <span
      onClick={() => navigate("/terms")}
      className="text-cyan-400 cursor-pointer hover:underline"
    >
      Terms of Service
    </span>{" "}
    and{" "}

    <span
      onClick={() => navigate("/privacy")}
      className="text-cyan-400 cursor-pointer hover:underline"
    >
      Privacy Policy
    </span>
  </p>

</div>

      </CardContent>
    </Card>

  </div>
</div>  
    </div>
  );
}