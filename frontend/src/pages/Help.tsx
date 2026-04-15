import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  HelpCircle,
  FileSearch,
  Shield,
  Zap,
  MessageCircle,
  ExternalLink,
  BookOpen,
} from "lucide-react";

const faqs = [
  {
    question: "How do I verify an academic certificate?",
    answer:
      "Simply upload your certificate (PDF, JPG, or PNG) to our verification page, or scan the QR code if available. Our AI-powered system will extract key information, cross-verify with institutional databases, and provide you with a comprehensive verification report within seconds.",
  },
  {
    question: "What types of documents can be verified?",
    answer:
      "We support verification of degree certificates, diplomas, mark sheets, transcripts, and other academic credentials issued by authorized educational institutions.",
  },
  {
    question: "How accurate is the verification process?",
    answer:
      "Our platform maintains a 99.7% accuracy rate using advanced OCR, machine learning algorithms, and real-time database verification. All results include confidence scores and detailed analysis.",
  },
  {
    question: "Is my personal data secure?",
    answer:
      "Yes, we use bank-grade encryption and follow strict data privacy protocols. Your documents are processed securely and not stored permanently unless you choose to save them in your account.",
  },
  {
    question: "How long does verification take?",
    answer:
      "Most verifications complete within 30 seconds. Complex cases requiring manual review may take up to 2-3 business days.",
  },
];

export default function Help() {
  return (
    <div className="min-h-screen bg-[#020617] text-white">
      <Navbar />

      <div className="container py-8">
        <div className="max-w-4xl mx-auto space-y-8">

          {/* Header */}
          <div className="text-center space-y-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center mx-auto">
              <HelpCircle className="h-10 w-10 text-white" />
            </div>

            <h1 className="text-4xl font-bold text-white">
              Help Center
            </h1>

            <p className="text-xl text-blue-200 max-w-2xl mx-auto">
              Get help with document verification, account management, and platform features
            </p>
          </div>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { title: "API Docs", icon: BookOpen },
              { title: "Verification Guide", icon: FileSearch },
              { title: "Security", icon: Shield },
              { title: "Status", icon: Zap },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-[#0a0f1c] border border-white/10 hover:border-cyan-500 transition"
              >
                <CardContent className="p-4 text-center">
                  <item.icon className="h-8 w-8 text-cyan-400 mx-auto mb-3" />

                  <h3 className="font-medium mb-2 text-white">
                    {item.title}
                  </h3>

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full text-blue-200 hover:bg-white/10"
                  >
                    <ExternalLink className="h-3 w-3 mr-2" />
                    Open
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* FAQ */}
          <Card className="bg-[#0a0f1c] border border-white/10">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2 text-white">
                <HelpCircle className="h-5 w-5 text-cyan-400" />
                <span className="font-semibold">FAQs</span>
              </CardTitle>
            </CardHeader>

            <CardContent>
              <Accordion type="single" collapsible className="space-y-2">
                {faqs.map((faq, index) => (
                  <AccordionItem
                    key={index}
                    value={`item-${index}`}
                    className="border border-white/10 rounded-lg px-4 bg-[#020617]"
                  >
                    <AccordionTrigger className="text-left text-white">
                      {faq.question}
                    </AccordionTrigger>

                    <AccordionContent className="text-blue-200 leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          {/* Contact */}
          <div className="grid lg:grid-cols-2 gap-6">

            {/* Form */}
            <Card className="bg-[#0a0f1c] border border-white/10">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2 text-white">
                  <MessageCircle className="h-5 w-5 text-cyan-400" />
                  <span>Contact Support</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <Input
                  placeholder="First Name"
                  className="bg-[#020617] border-white/10 text-white"
                />
                <Input
                  placeholder="Last Name"
                  className="bg-[#020617] border-white/10 text-white"
                />
                <Input
                  placeholder="Email"
                  className="bg-[#020617] border-white/10 text-white"
                />
                <Textarea
                  placeholder="Message..."
                  className="bg-[#020617] border-white/10 text-white"
                />

                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Info */}
            <Card className="bg-[#0a0f1c] border border-white/10">
              <CardHeader>
                <CardTitle className="text-white">
                  Get in Touch
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4 text-blue-200">
                <p>Email: support@docushield.com</p>
                <p>Phone: +91-XXX-XXXX</p>
                <p>Location: Pune, India</p>

                <Badge className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-3 py-1 rounded-full">
                  System Operational
                </Badge>
              </CardContent>
            </Card>

          </div>

        </div>
      </div>
    </div>
  );
}