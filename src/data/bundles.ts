export interface Bundle {
  id: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  period: string;
  tools: string[];
  features: string[];
  icon: string;
  popular?: boolean;
}

export const bundlesData: Bundle[] = [
  {
    id: 'seo-bundle',
    name: 'SEO Tools Bundle',
    description: 'Complete SEO toolkit for dominating search rankings',
    price: 149,
    originalPrice: 299,
    period: 'month',
    tools: ['Semrush', 'Ubersuggest', 'Moz Pro', 'Answer The Public', 'Storybase', 'Long-tail Keyword Tools'],
    features: ['Full keyword research', 'Competitor analysis', 'Backlink monitoring', 'Site audits', 'Rank tracking', 'Content optimization'],
    icon: 'Search',
    popular: true
  },
  {
    id: 'design-bundle',
    name: 'Graphic Design Tools Bundle',
    description: 'Everything you need for stunning visual designs',
    price: 49,
    originalPrice: 99,
    period: 'month',
    tools: ['Canva Pro', 'Crello (VistaCreate Pro)', 'PicMonkey', 'Prezi'],
    features: ['Unlimited designs', 'Premium templates', 'Brand kit', 'Background remover', 'Team collaboration', 'Presentation tools'],
    icon: 'Palette',
    popular: true
  },
  {
    id: 'content-bundle',
    name: 'Content Writing Bundle',
    description: 'AI-powered writing tools for perfect content',
    price: 79,
    originalPrice: 159,
    period: 'month',
    tools: ['DeepL Pro', 'Grammarly Premium', 'Writesonic', 'Copymatic'],
    features: ['Unlimited writing', 'Translation support', 'Grammar & style check', 'AI content generation', 'Plagiarism detection', 'SEO optimization'],
    icon: 'Feather'
  },
  {
    id: 'education-bundle',
    name: 'Education Bundle',
    description: 'Learn anything with premium courses and resources',
    price: 99,
    originalPrice: 249,
    period: 'month',
    tools: ['LinkedIn Learning', 'Coursera Plus', 'Udemy Business', 'Skillshare Premium'],
    features: ['Unlimited courses', 'Certificates included', 'Download for offline', 'Learning paths', 'Expert instructors', 'Progress tracking'],
    icon: 'GraduationCap',
    popular: true
  }
];
