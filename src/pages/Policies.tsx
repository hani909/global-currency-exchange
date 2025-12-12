import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export default function Policies() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="font-display text-5xl font-bold mb-12 text-center neon-text">Policies</h1>

          <section id="privacy" className="glass-card p-8 mb-8">
            <h2 className="font-display text-2xl font-bold mb-4 text-primary">Privacy Policy</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
              <p>At AI MANIA, we are committed to protecting your privacy. This policy explains how we collect, use, and safeguard your personal information.</p>
              <p><strong>Information We Collect:</strong> We may collect personal information such as your name, email address, and payment information when you use our services.</p>
              <p><strong>How We Use Your Information:</strong> We use your information to provide and improve our services, process transactions, and communicate with you.</p>
              <p><strong>Data Security:</strong> We implement appropriate security measures to protect your personal information from unauthorized access.</p>
            </div>
          </section>

          <section id="terms" className="glass-card p-8 mb-8">
            <h2 className="font-display text-2xl font-bold mb-4 text-primary">Terms & Conditions</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
              <p>By accessing and using AI MANIA, you agree to be bound by these Terms & Conditions.</p>
              <p><strong>Use of Services:</strong> You agree to use our services only for lawful purposes and in accordance with these terms.</p>
              <p><strong>Account Responsibility:</strong> You are responsible for maintaining the confidentiality of your account credentials.</p>
              <p><strong>Intellectual Property:</strong> All content and materials on AI MANIA are protected by intellectual property laws.</p>
            </div>
          </section>

          <section id="refund" className="glass-card p-8">
            <h2 className="font-display text-2xl font-bold mb-4 text-primary">Refund Policy</h2>
            <div className="prose prose-invert max-w-none text-muted-foreground space-y-4">
              <p>We want you to be satisfied with your purchase. If you are not completely happy, we offer the following refund policy:</p>
              <p><strong>Eligibility:</strong> Refund requests must be made within 7 days of purchase for monthly subscriptions.</p>
              <p><strong>Process:</strong> To request a refund, contact our support team at support@aimania.com with your order details.</p>
              <p><strong>Exceptions:</strong> Some products may have specific refund terms that differ from this general policy.</p>
            </div>
          </section>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
