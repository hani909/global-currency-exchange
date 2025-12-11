import { Header } from '@/components/Header';
import { CurrencyConverter } from '@/components/CurrencyConverter';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';
import { NavMenu } from '@/components/NavMenu';

export default function Converter() {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <BackgroundEffects />
      <NavMenu />
      
      <div className="relative z-10 container mx-auto px-4 py-12">
        <Header />
        <CurrencyConverter />
        <Footer />
      </div>
    </div>
  );
}