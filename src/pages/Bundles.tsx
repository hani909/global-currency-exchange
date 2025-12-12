import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { BundleCard } from "@/components/BundleCard";
import { bundlesData } from "@/data/bundles";

export default function Bundles() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <div className="orb orb-purple w-96 h-96 top-20 -left-48 fixed" />
      <div className="orb orb-pink w-80 h-80 bottom-20 -right-40 fixed" />
      
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="font-display text-5xl font-bold mb-4">
              Student <span className="neon-text">Bundles</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Save big with our curated tool bundles. Perfect for students, freelancers, and professionals.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {bundlesData.map((bundle, i) => (
              <BundleCard key={bundle.id} bundle={bundle} index={i} />
            ))}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
