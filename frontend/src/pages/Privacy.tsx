import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Lock, Eye, UserCheck } from "lucide-react";

export default function Privacy() {
  const user = null;

  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <div className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Header */}
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center mx-auto">
              <Shield className="h-10 w-10 text-white" />
            </div>

            <h1 className="text-4xl font-display font-bold text-white">
              Privacy Policy
            </h1>

            <p className="text-xl text-blue-200">
              How we protect and handle your personal information
            </p>

            <Badge className="bg-cyan-500/20 text-cyan-300 border border-cyan-400/30">
              Last updated: December 2026
            </Badge>
          </div>

          {/* Content */}
          <div className="space-y-6">

            {/* Card 1 */}
            <Card className="bg-[#020817] border border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Lock className="h-5 w-5 text-cyan-400" />
                  <span>Data Collection</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="prose max-w-none text-blue-100 leading-relaxed">
                <p>
                  The DocuShield platform by Team VeriTrust collects
                  only the necessary information required to verify Document
                  credentials and maintain system security.
                </p>

                <h4 className="text-cyan-300 font-semibold mt-4">
                  Information We Collect:
                </h4>

                <ul className="text-blue-100 marker:text-cyan-400">
                  <li>Document images/files uploaded for verification</li>
                  <li>Account information (name, email, role, institution)</li>
                  <li>Verification history and audit logs</li>
                  <li>
                    Technical information (IP address, browser type, usage
                    patterns)
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 2 */}
            <Card className="bg-[#020817] border border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Eye className="h-5 w-5 text-cyan-400" />
                  <span>How We Use Your Data</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="prose max-w-none text-blue-100 leading-relaxed">
                <h4 className="text-cyan-300 font-semibold">
                  Primary Uses:
                </h4>

                <ul className="text-blue-100 marker:text-cyan-400">
                  <li>
                    Authenticating academic credentials against institutional
                    databases
                  </li>
                  <li>Maintaining verification audit trails for compliance</li>
                  <li>Improving system accuracy and security measures</li>
                  <li>Providing customer support and technical assistance</li>
                  <li>
                    Generating aggregated statistics for educational insights
                  </li>
                </ul>

                <p>
                  We never sell, rent, or share personal information with third
                  parties for commercial purposes.
                </p>
              </CardContent>
            </Card>

            {/* Card 3 */}
            <Card className="bg-[#020817] border border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <Shield className="h-5 w-5 text-cyan-400" />
                  <span>Data Security</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="prose max-w-none text-blue-100 leading-relaxed">
                <h4 className="text-cyan-300 font-semibold">
                  Security Measures:
                </h4>

                <ul className="text-blue-100 marker:text-cyan-400">
                  <li>
                    <strong className="text-white">Encryption:</strong> All data transmitted using TLS 1.3 encryption
                  </li>
                  <li>
                    <strong className="text-white">Storage:</strong> Data encrypted at rest using AES-256
                  </li>
                  <li>
                    <strong className="text-white">Access Control:</strong> Role-based access with multi-factor authentication
                  </li>
                  <li>
                    <strong className="text-white">Monitoring:</strong> 24/7 security monitoring and intrusion detection
                  </li>
                  <li>
                    <strong className="text-white">Compliance:</strong> Follows government cybersecurity guidelines
                  </li>
                </ul>
              </CardContent>
            </Card>

            {/* Card 4 */}
            <Card className="bg-[#020817] border border-cyan-500/20">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <UserCheck className="h-5 w-5 text-cyan-400" />
                  <span>Your Rights</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="prose max-w-none text-blue-100 leading-relaxed">
                <p>
                  Under applicable data protection laws, you have the following
                  rights:
                </p>

                <ul className="text-blue-100 marker:text-cyan-400">
                  <li>
                    <strong className="text-white">Access:</strong> Request copies of your personal data
                  </li>
                  <li>
                    <strong className="text-white">Rectification:</strong> Correct inaccurate or incomplete data
                  </li>
                  <li>
                    <strong className="text-white">Erasure:</strong> Request deletion of your personal data
                  </li>
                  <li>
                    <strong className="text-white">Portability:</strong> Receive your data in a structured format
                  </li>
                  <li>
                    <strong className="text-white">Object:</strong> Object to processing of your personal data
                  </li>
                </ul>

                <p>
                  To exercise these rights, contact us at privacy@docushield.com
                </p>
              </CardContent>
            </Card>

            {/* Contact */}
            <Card className="bg-[#020817] border border-cyan-500/20">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4 text-white">
                  Contact Information
                </h3>

                <p className="text-blue-200">
                  For privacy-related questions or concerns, contact our Data
                  Protection Officer:
                </p>

                <div className="mt-4 space-y-2 text-blue-100">
                  <p>
                    <strong className="text-white">Email:</strong> privacy@docushield.com
                  </p>
                  <p>
                    <strong className="text-white">Phone:</strong> +91-651-XXX-XXXX
                  </p>
                  <p>
                    <strong className="text-white">Address:</strong> Team VeriTrust,
                    Pune
                  </p>
                </div>
              </CardContent>
            </Card>

          </div>
        </div>
      </div>
    </div>
  );
}