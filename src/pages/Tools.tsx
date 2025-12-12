import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SearchBar } from "@/components/SearchBar";
import { CategoryFilter } from "@/components/CategoryFilter";
import { ToolTypeToggle } from "@/components/ToolTypeToggle";
import { FreeToolCard } from "@/components/FreeToolCard";
import { PaidToolCard } from "@/components/PaidToolCard";
import { freeToolsData, freeToolCategories } from "@/data/freeTools";
import { paidToolsData, paidToolCategories } from "@/data/paidTools";

export default function Tools() {
  const [searchParams] = useSearchParams();
  const initialType = searchParams.get("type") === "paid" ? "paid" : "free";
  
  const [toolType, setToolType] = useState<"free" | "paid">(initialType);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const categories = toolType === "free" ? freeToolCategories : paidToolCategories;
  const tools = toolType === "free" ? freeToolsData : paidToolsData;

  const filtered = useMemo(() => {
    return tools.filter((tool) => {
      const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) ||
        tool.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = !category || tool.category === category;
      return matchesSearch && matchesCategory;
    });
  }, [tools, search, category]);

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <div className="grid-pattern fixed inset-0 pointer-events-none" />
      <div className="orb orb-purple w-96 h-96 top-20 -left-48 fixed" />
      <div className="orb orb-cyan w-80 h-80 bottom-20 -right-40 fixed" />
      
      <Navbar />
      
      <main className="relative z-10 pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="font-display text-5xl font-bold mb-4">
              {toolType === "free" ? <span className="text-accent">Free</span> : <span className="neon-text">Premium</span>} Tools
            </h1>
            <p className="text-muted-foreground text-lg">
              {toolType === "free" ? "Powerful tools at zero cost" : "Professional-grade AI solutions"}
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
            <ToolTypeToggle value={toolType} onChange={(v) => { setToolType(v); setCategory(""); }} />
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div className="mb-8 overflow-x-auto pb-2 scrollbar-hide">
            <CategoryFilter categories={categories} selected={category} onChange={setCategory} />
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((tool, i) =>
              toolType === "free" ? (
                <FreeToolCard key={tool.id} tool={tool as any} index={i} />
              ) : (
                <PaidToolCard key={tool.id} tool={tool as any} index={i} />
              )
            )}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">No tools found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
