export interface PaidTool {
  id: string;
  name: string;
  planName: string;
  category: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  icon: string;
  popular?: boolean;
}

export const paidToolsData: PaidTool[] = [
  // AI TOOLS
  { id: 'recraft-ai', name: 'Recraft.ai', planName: 'Pro Plan', category: 'AI Tools', price: 29, period: 'month', description: 'Advanced AI image generation and editing platform', features: ['Unlimited generations', 'High resolution exports', 'Style customization', 'Commercial license', 'Priority support'], icon: 'Sparkles', popular: true },
  { id: 'ideogram-ai', name: 'Ideogram.ai', planName: 'Plus Plan', category: 'AI Tools', price: 39, period: 'month', description: 'Create stunning AI artwork with text rendering', features: ['Text-to-image', 'Typography AI', 'Unlimited creations', 'API access', 'Team collaboration'], icon: 'Palette' },
  { id: 'cephalon-ai', name: 'Cephalon.ai', planName: 'Premium', category: 'AI Tools', price: 49, period: 'month', description: 'Enterprise-grade AI assistant platform', features: ['Custom AI models', 'Data integration', 'Analytics dashboard', 'White-label option', 'Dedicated support'], icon: 'Brain' },
  { id: 'heygen-ai', name: 'HeyGen.ai', planName: 'Ultra Plan', category: 'AI Tools', price: 89, period: 'month', description: 'AI video generation with realistic avatars', features: ['Unlimited videos', '100+ avatars', '40+ languages', 'Custom avatars', 'API access'], icon: 'Video', popular: true },
  { id: 'magic-copy-ai', name: 'Magic Copy AI', planName: 'Pro Plan', category: 'AI Tools', price: 35, period: 'month', description: 'AI-powered copywriting assistant', features: ['Unlimited copy', '50+ templates', 'Brand voice', 'Team seats', 'Integrations'], icon: 'FileEdit' },
  { id: 'midjourney', name: 'Midjourney.com', planName: 'Standard', category: 'AI Tools', price: 30, period: 'month', description: 'Industry-leading AI image generation', features: ['Fast GPU hours', 'Unlimited relaxed', 'Private mode', 'Community access', 'Style tuning'], icon: 'Wand2', popular: true },
  { id: 'runway-ml', name: 'Runway ML', planName: 'Pro', category: 'AI Tools', price: 76, period: 'month', description: 'Professional AI video editing suite', features: ['Gen-2 access', 'Unlimited exports', '4K resolution', 'Green screen AI', 'Motion tracking'], icon: 'Film' },
  { id: 'bolt-new', name: 'Bolt.new', planName: 'AI Pro', category: 'AI Tools', price: 25, period: 'month', description: 'AI-powered web development platform', features: ['Unlimited projects', 'AI coding', 'Instant deploy', 'Custom domains', 'Team access'], icon: 'Zap' },
  { id: 'kling-ai', name: 'Kling AI', planName: 'Pro / Premium', category: 'AI Tools', price: 59, period: 'month', description: 'Advanced AI video generation', features: ['Long-form videos', 'High quality', 'Fast rendering', 'API access', 'Priority queue'], icon: 'Clapperboard' },
  { id: 'playht', name: 'PlayHT', planName: 'Unlimited Plan', category: 'AI Tools', price: 99, period: 'month', description: 'Realistic AI voice generation', features: ['Unlimited characters', '900+ voices', 'Voice cloning', 'Commercial use', 'API access'], icon: 'Volume2' },
  { id: 'midjourney-x5', name: 'Midjourney X5', planName: 'Advanced', category: 'AI Tools', price: 60, period: 'month', description: 'Enhanced Midjourney with extra features', features: ['Mega GPU hours', 'Stealth mode', 'Priority support', 'Exclusive styles', 'Early access'], icon: 'Star' },
  { id: 'deepl-pro', name: 'DeepL Pro', planName: 'Advanced', category: 'AI Tools', price: 25, period: 'month', description: 'Professional AI translation service', features: ['Unlimited text', 'Document translation', 'Glossaries', 'API access', 'Team management'], icon: 'Languages' },
  { id: 'novatech-ai', name: 'NovaTech.ai', planName: 'Mine Plan', category: 'AI Tools', price: 45, period: 'month', description: 'AI automation and workflow platform', features: ['Workflow builder', 'AI agents', 'Integrations', 'Analytics', 'Custom triggers'], icon: 'Cpu' },
  { id: 'clidmy-pro', name: 'Clidmy Pro', planName: 'Professional', category: 'AI Tools', price: 19, period: 'month', description: 'AI link management and analytics', features: ['Unlimited links', 'Custom domains', 'Deep analytics', 'Team access', 'API'], icon: 'Link' },
  { id: 'leonardo-ai', name: 'Leonardo.ai', planName: 'Artisan', category: 'AI Tools', price: 48, period: 'month', description: 'Creative AI image generation platform', features: ['25000 tokens/mo', 'Train models', 'Canvas editor', 'Motion', 'API access'], icon: 'Brush', popular: true },
  { id: 'cursor-ai', name: 'Cursor.ai', planName: 'Pro', category: 'AI Tools', price: 20, period: 'month', description: 'AI-first code editor', features: ['Unlimited completions', 'GPT-4 access', 'Codebase chat', 'Custom rules', 'Team sync'], icon: 'Code2' },
  { id: 'heygen-com', name: 'HeyGen.com', planName: 'Creator', category: 'AI Tools', price: 48, period: 'month', description: 'Video avatar creation platform', features: ['15 credits/mo', '120+ avatars', 'Voice cloning', 'Templates', 'Brand kit'], icon: 'Users' },
  { id: 'peoplecity-ai', name: 'PeopleCity.ai', planName: 'Pro Plan', category: 'AI Tools', price: 39, period: 'month', description: 'AI-powered HR and team management', features: ['AI hiring', 'Team analytics', 'Culture tools', 'Integrations', 'Reports'], icon: 'Building2' },
  { id: 'promeaiability', name: 'PromeAiAbility', planName: 'Enterprise', category: 'AI Tools', price: 55, period: 'month', description: 'AI accessibility and automation suite', features: ['Full automation', 'Accessibility AI', 'Custom flows', 'White label', 'Support'], icon: 'Accessibility' },
  { id: 'janitor-ai', name: 'JanitorAI', planName: 'Premium', category: 'AI Tools', price: 15, period: 'month', description: 'AI chatbot and character platform', features: ['Unlimited chats', 'Custom characters', 'Memory', 'NSFW filter control', 'API'], icon: 'Bot' },
  { id: 'writesonic-ai', name: 'Writesonic.ai', planName: 'Professional', category: 'AI Tools', price: 49, period: 'month', description: 'AI writing and content platform', features: ['Unlimited words', 'Chatsonic', 'SEO tools', 'Team access', 'API'], icon: 'Feather' },
  { id: 'chromly-ai', name: 'Chromly.ai', planName: 'Pro', category: 'AI Tools', price: 29, period: 'month', description: 'AI browser automation', features: ['Unlimited automations', 'Cloud execution', 'Scheduling', 'Webhooks', 'Support'], icon: 'Globe' },
  { id: 'copymatic-ai', name: 'Copymatic.ai', planName: 'Pro', category: 'AI Tools', price: 29, period: 'month', description: 'AI copywriting automation', features: ['Unlimited content', '90+ tools', 'Bulk generation', 'Plagiarism check', 'API'], icon: 'PenTool' },

  // DESIGN TOOLS
  { id: 'envato-elements', name: 'Envato Elements', planName: 'Individual', category: 'Design Tools', price: 33, period: 'month', description: 'Unlimited creative assets downloads', features: ['Unlimited downloads', 'Millions of assets', 'Commercial license', 'Templates', 'Fonts'], icon: 'Layers', popular: true },
  { id: 'canva-pro', name: 'Canva Pro', planName: 'Pro', category: 'Design Tools', price: 15, period: 'month', description: 'Professional design platform', features: ['Brand Kit', 'Magic resize', 'Background remover', 'Premium content', 'Scheduler'], icon: 'Layout', popular: true },
  { id: 'filmora-pro', name: 'Filmora Pro', planName: 'Annual', category: 'Design Tools', price: 68, period: 'year', description: 'Professional video editing software', features: ['Advanced editing', 'Motion tracking', 'Color grading', 'Audio tools', 'Export 4K'], icon: 'Film' },
  { id: 'vistacreate-pro', name: 'VistaCreate Pro', planName: 'Pro', category: 'Design Tools', price: 13, period: 'month', description: 'Graphic design platform', features: ['Brand kit', 'Resize magic', 'Background remover', 'Unlimited storage', 'Templates'], icon: 'Palette' },
  { id: 'storyblocks', name: 'Storyblocks', planName: 'Unlimited', category: 'Design Tools', price: 30, period: 'month', description: 'Stock video and audio library', features: ['Unlimited downloads', '4K footage', 'Music library', 'After Effects', 'Commercial use'], icon: 'VideoIcon' },
  { id: 'vecteezy-pro', name: 'Vecteezy Pro', planName: 'Unlimited', category: 'Design Tools', price: 14, period: 'month', description: 'Vector graphics and stock assets', features: ['Unlimited downloads', 'Vectors', 'Photos', 'Videos', 'Commercial license'], icon: 'Shapes' },
  { id: 'hexa-com', name: 'Hexa.com', planName: 'Creator', category: 'Design Tools', price: 25, period: 'month', description: '3D design and modeling platform', features: ['3D templates', 'AR preview', 'Export formats', 'Collaboration', 'Cloud storage'], icon: 'Box' },
  { id: 'apptouch', name: 'AppTouch', planName: 'Premium Design', category: 'Design Tools', price: 35, period: 'month', description: 'Mobile app design toolkit', features: ['UI kits', 'Prototyping', 'Design system', 'Export code', 'Team sync'], icon: 'Smartphone' },

  // CONTENT WRITING & LANGUAGE
  { id: 'deepl-pro-writing', name: 'DeepL Pro', planName: 'Advanced', category: 'Content Writing & Language', price: 25, period: 'month', description: 'Professional translation with writing tools', features: ['Unlimited text', 'Document translation', 'Write assistant', 'Glossaries', 'API'], icon: 'Languages' },
  { id: 'writesonic-writing', name: 'Writesonic.ai', planName: 'Professional', category: 'Content Writing & Language', price: 49, period: 'month', description: 'Complete AI writing suite', features: ['Unlimited words', 'Article writer', 'Paraphraser', 'Summarizer', 'SEO tools'], icon: 'Feather' },
  { id: 'copymatic-writing', name: 'Copymatic.ai', planName: 'Pro', category: 'Content Writing & Language', price: 29, period: 'month', description: 'Automated content creation', features: ['Unlimited copy', 'Blog generator', 'Ad copy', 'Product descriptions', 'Bulk tools'], icon: 'PenTool' },

  // MARKETING, CRM & PRODUCTIVITY
  { id: 'mailchimp', name: 'Mailchimp', planName: 'Standard', category: 'Marketing & Productivity', price: 20, period: 'month', description: 'Email marketing and automation', features: ['10K emails/mo', 'Automation', 'Templates', 'Analytics', 'Landing pages'], icon: 'Mail' },
  { id: 'linkedin-premium', name: 'LinkedIn Premium', planName: 'Business', category: 'Marketing & Productivity', price: 60, period: 'month', description: 'Professional networking premium', features: ['InMail credits', 'Profile views', 'Learning courses', 'Insights', 'Open profile'], icon: 'Linkedin' },
  { id: 'tradingview', name: 'TradingView', planName: 'Premium', category: 'Marketing & Productivity', price: 60, period: 'month', description: 'Advanced trading charts and analysis', features: ['8 charts/layout', 'Real-time data', 'Custom indicators', 'Alerts', 'No ads'], icon: 'LineChart', popular: true },
  { id: 'super-sneak', name: 'Super Sneak → Gmark.com', planName: 'Pro', category: 'Marketing & Productivity', price: 35, period: 'month', description: 'Social media growth toolkit', features: ['Analytics', 'Scheduling', 'Competitor tracking', 'Reports', 'Team access'], icon: 'TrendingUp' },
  { id: 'pytube', name: 'Pytube.com', planName: 'Unlimited', category: 'Marketing & Productivity', price: 19, period: 'month', description: 'YouTube analytics and tools', features: ['Unlimited tracking', 'SEO tools', 'Thumbnail tester', 'Analytics', 'Competitor data'], icon: 'Youtube' },
  { id: 'ahrefs', name: 'Ahrefs', planName: 'Lite', category: 'Marketing & Productivity', price: 99, period: 'month', description: 'SEO tools and backlink analysis', features: ['Site explorer', 'Keyword research', 'Site audit', 'Rank tracker', 'Content explorer'], icon: 'Search', popular: true },
  { id: 'seo-site-checkup', name: 'SEO Site Checkup', planName: 'Webmaster', category: 'Marketing & Productivity', price: 30, period: 'month', description: 'Comprehensive SEO analysis', features: ['Unlimited reports', 'Site monitoring', 'Competitor analysis', 'Keyword tracking', 'White label'], icon: 'CheckSquare' },

  // VIDEO, AUDIO & VOICE
  { id: 'capcut-pro', name: 'CapCut Pro', planName: 'Pro', category: 'Video & Audio Tools', price: 14, period: 'month', description: 'Professional video editing app', features: ['No watermark', 'Cloud storage', 'Premium effects', 'Export 4K', 'Priority support'], icon: 'Video', popular: true },
  { id: 'filmora-pro-video', name: 'Filmora Pro', planName: 'Perpetual', category: 'Video & Audio Tools', price: 80, period: 'lifetime', description: 'Advanced video editing suite', features: ['Lifetime access', 'All effects', 'Motion graphics', 'Audio tools', 'Updates'], icon: 'Film' },
  { id: 'playht-voice', name: 'PlayHT', planName: 'Unlimited', category: 'Video & Audio Tools', price: 99, period: 'month', description: 'AI voice generation platform', features: ['Unlimited characters', '900+ voices', 'Voice cloning', 'Commercial rights', 'API access'], icon: 'Mic' },
  { id: 'vodev', name: 'VO.dev', planName: 'Premium', category: 'Video & Audio Tools', price: 45, period: 'month', description: 'Voice-over and audio tools', features: ['Unlimited projects', 'AI enhancement', 'Noise removal', 'Export formats', 'Cloud sync'], icon: 'AudioLines' },
  { id: 'runway-combo', name: 'Midjourney + Runway', planName: 'Combo', category: 'Video & Audio Tools', price: 99, period: 'month', description: 'Ultimate AI creative bundle', features: ['Both platforms', 'Priority access', 'Extended limits', 'Shared credits', 'Support'], icon: 'Sparkles' },

  // SECURITY & PRIVACY
  { id: 'surfshark', name: 'Surfshark VPN', planName: '2-Year', category: 'Security & Privacy', price: 60, period: '2 years', description: 'Fast and secure VPN service', features: ['Unlimited devices', '100 countries', 'CleanWeb', 'Kill switch', 'MultiHop'], icon: 'Shield' },
  { id: 'avast-premium', name: 'Avast Premium', planName: 'Security', category: 'Security & Privacy', price: 70, period: 'year', description: 'Complete antivirus protection', features: ['Real-time protection', 'Ransomware shield', 'Firewall', 'Sandbox', 'VPN'], icon: 'ShieldCheck' },
  { id: 'stealth-writer', name: 'Stealth Writer', planName: 'AI Detection Removal', category: 'Security & Privacy', price: 25, period: 'month', description: 'AI content humanization', features: ['Bypass AI detection', 'Natural rewriting', 'Plagiarism check', 'Bulk processing', 'API'], icon: 'Eye' },
  { id: 'turnitin', name: 'Turnitin', planName: 'AI Detection', category: 'Security & Privacy', price: 35, period: 'month', description: 'Plagiarism and AI detection', features: ['AI detection', 'Plagiarism scan', 'Detailed reports', 'Source matching', 'Export options'], icon: 'FileSearch' },

  // CLOUD STORAGE & DATA
  { id: 'google-ai-ultra-50tb', name: 'Google AI Ultra', planName: '50TB', category: 'Cloud Storage & Data', price: 250, period: 'month', description: 'Massive cloud storage with AI', features: ['50TB storage', 'Gemini Ultra', 'Google One benefits', 'Family sharing', 'Priority support'], icon: 'Cloud' },
  { id: 'google-one-2tb', name: 'Google One', planName: '2TB', category: 'Cloud Storage & Data', price: 10, period: 'month', description: 'Google cloud storage plan', features: ['2TB storage', 'Family sharing', 'VPN access', 'Google experts', 'Extra benefits'], icon: 'HardDrive' },
  { id: 'gemini-google-one', name: 'Gemini Pro + Google One', planName: '2TB (15 months)', category: 'Cloud Storage & Data', price: 150, period: 'one-time', description: 'AI + storage bundle deal', features: ['Gemini Pro access', '2TB for 15 months', 'VPN included', 'Premium support', 'Early features'], icon: 'Sparkles' },
  { id: 'google-ai-ultra-1mo', name: 'Google AI Ultra', planName: '1 Month Trial', category: 'Cloud Storage & Data', price: 20, period: 'month', description: 'Try Google AI Ultra features', features: ['Full AI access', 'Limited storage', 'All features', 'Cancel anytime', 'Upgrade option'], icon: 'Gem' },

  // DEVELOPMENT & PROGRAMMING
  { id: 'cursor-dev', name: 'Cursor.ai', planName: 'Pro Developer', category: 'Development Tools', price: 20, period: 'month', description: 'AI-powered code editor', features: ['GPT-4 access', 'Codebase indexing', 'Auto-complete', 'Chat with code', 'Team features'], icon: 'Code2' },
  { id: 'bolt-dev', name: 'Bolt.new', planName: 'AI Pro', category: 'Development Tools', price: 25, period: 'month', description: 'AI full-stack development', features: ['Unlimited projects', 'AI assistance', 'Deploy instantly', 'Custom domains', 'Collaboration'], icon: 'Zap' },
  { id: 'novatech-dev', name: 'NovaTech.ai', planName: 'Developer', category: 'Development Tools', price: 45, period: 'month', description: 'AI development automation', features: ['Code generation', 'Testing AI', 'CI/CD integration', 'Documentation', 'Support'], icon: 'Terminal' },
  { id: 'writesonic-api', name: 'Writesonic API', planName: 'Developer', category: 'Development Tools', price: 99, period: 'month', description: 'AI content API access', features: ['1M words/mo', 'All endpoints', 'Priority queue', 'Dedicated support', 'SLA'], icon: 'Webhook' },

  // FINANCE / TRADING
  { id: 'tradingview-finance', name: 'TradingView', planName: 'Premium+', category: 'Finance & Trading', price: 60, period: 'month', description: 'Professional trading platform', features: ['Real-time data', 'Custom strategies', 'Unlimited alerts', 'Priority data', 'API access'], icon: 'CandlestickChart' },

  // MISC / MULTI-UTILITY
  { id: 'chatgpt-team', name: 'ChatGPT', planName: 'Team (3 seats)', category: 'Multi-Utility Tools', price: 90, period: 'month', description: 'ChatGPT team workspace', features: ['3 user seats', 'GPT-4 access', 'Shared workspace', 'Admin controls', 'Higher limits'], icon: 'MessageSquare', popular: true },
  { id: 'scribush', name: 'Scribush', planName: 'Pro', category: 'Multi-Utility Tools', price: 19, period: 'month', description: 'AI writing and editing assistant', features: ['Unlimited edits', 'Grammar check', 'Style suggestions', 'Plagiarism scan', 'Export options'], icon: 'Edit3' },
  { id: 'storyblocks-multi', name: 'Storyblocks', planName: 'Business', category: 'Multi-Utility Tools', price: 45, period: 'month', description: 'Creative assets for teams', features: ['Unlimited downloads', 'Team seats', '4K content', 'Music library', 'Templates'], icon: 'Film' },
  { id: 'pytube-unlimited', name: 'Pytube Unlimited', planName: 'Creator', category: 'Multi-Utility Tools', price: 29, period: 'month', description: 'Complete YouTube toolkit', features: ['Unlimited analysis', 'Bulk tools', 'Scheduling', 'Competitor data', 'API access'], icon: 'Youtube' },
];

export const paidToolCategories = [
  'AI Tools',
  'Design Tools',
  'Content Writing & Language',
  'Marketing & Productivity',
  'Video & Audio Tools',
  'Security & Privacy',
  'Cloud Storage & Data',
  'Development Tools',
  'Finance & Trading',
  'Multi-Utility Tools'
];
