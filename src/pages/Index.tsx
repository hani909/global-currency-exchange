import { Header } from '@/components/Header';
import { CurrencyConverter } from '@/components/CurrencyConverter';
import { Footer } from '@/components/Footer';
import { BackgroundEffects } from '@/components/BackgroundEffects';

const Index = () => {
  return (
    <main className="min-h-screen relative">
      <BackgroundEffects />
      
      <div className="container mx-auto px-4 py-12 md:py-20">
        <Header />
        <CurrencyConverter />
        <Footer />
      </div>
    </main>
  );
};

export default Index;
