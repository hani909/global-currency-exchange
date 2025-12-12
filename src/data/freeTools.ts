export interface FreeTool {
  id: string;
  name: string;
  category: string;
  description: string;
  features: string[];
  icon: string;
}

export const freeToolsData: FreeTool[] = [
  // PDF Tools
  { id: 'pdf-to-word', name: 'PDF to Word', category: 'PDF Tools', description: 'Convert PDF documents to editable Word files instantly', features: ['Fast conversion', 'Preserve formatting', 'Batch processing', 'Free unlimited use'], icon: 'FileText' },
  { id: 'word-to-pdf', name: 'Word to PDF', category: 'PDF Tools', description: 'Transform Word documents into professional PDFs', features: ['High quality output', 'Maintain styles', 'Secure conversion', 'No watermarks'], icon: 'FileText' },
  { id: 'pdf-to-ppt', name: 'PDF to PPT', category: 'PDF Tools', description: 'Convert PDFs to PowerPoint presentations', features: ['Editable slides', 'Keep graphics', 'Quick export', 'Multiple formats'], icon: 'Presentation' },
  { id: 'ppt-to-pdf', name: 'PPT to PDF', category: 'PDF Tools', description: 'Turn presentations into PDF format', features: ['Preserve animations info', 'High resolution', 'Compact size', 'Universal format'], icon: 'Presentation' },
  { id: 'compress-pdf', name: 'Compress PDF', category: 'PDF Tools', description: 'Reduce PDF file size without quality loss', features: ['Smart compression', 'Adjustable quality', 'Fast processing', 'Secure files'], icon: 'FileArchive' },
  { id: 'merge-pdf', name: 'Merge PDF', category: 'PDF Tools', description: 'Combine multiple PDFs into one document', features: ['Drag & drop', 'Reorder pages', 'Unlimited files', 'Instant merge'], icon: 'Files' },
  { id: 'split-pdf', name: 'Split PDF', category: 'PDF Tools', description: 'Separate PDF pages into individual files', features: ['Select pages', 'Custom ranges', 'Bulk split', 'Easy download'], icon: 'Scissors' },

  // Image Tools
  { id: 'image-compressor', name: 'Image Compressor', category: 'Image Tools', description: 'Compress images while maintaining quality', features: ['Smart compression', 'Multiple formats', 'Batch processing', 'Preview before save'], icon: 'Image' },
  { id: 'image-resizer', name: 'Image Resizer', category: 'Image Tools', description: 'Resize images to any dimension', features: ['Custom dimensions', 'Aspect ratio lock', 'Preset sizes', 'High quality'], icon: 'Maximize' },
  { id: 'jpg-to-png', name: 'JPG to PNG', category: 'Image Tools', description: 'Convert JPG images to PNG format', features: ['Lossless conversion', 'Transparency support', 'Batch convert', 'Fast processing'], icon: 'ImagePlus' },
  { id: 'background-remover', name: 'Background Remover', category: 'Image Tools', description: 'Remove backgrounds from images instantly', features: ['AI-powered', 'Precise edges', 'Transparent output', 'Multiple formats'], icon: 'Eraser' },

  // Video Tools
  { id: 'youtube-to-notes', name: 'YouTube to Notes', category: 'Video Tools', description: 'Extract notes and summaries from YouTube videos', features: ['AI transcription', 'Key points extraction', 'Formatted notes', 'Export options'], icon: 'Youtube' },
  { id: 'compress-video', name: 'Compress Video', category: 'Video Tools', description: 'Reduce video file size efficiently', features: ['Quality presets', 'Fast encoding', 'Multiple formats', 'Batch compression'], icon: 'Video' },
  { id: 'trim-cut-video', name: 'Trim/Cut Video', category: 'Video Tools', description: 'Cut and trim videos with precision', features: ['Frame accurate', 'Multiple cuts', 'Preview mode', 'Quick export'], icon: 'Scissors' },
  { id: 'mp4-to-mp3', name: 'MP4 to MP3', category: 'Video Tools', description: 'Extract audio from video files', features: ['High quality audio', 'Bitrate options', 'Fast extraction', 'Batch process'], icon: 'Music' },

  // AI/Text Tools
  { id: 'summarizer', name: 'Summarizer', category: 'AI/Text Tools', description: 'Generate concise summaries of long texts', features: ['AI-powered', 'Adjustable length', 'Key points', 'Multiple languages'], icon: 'FileText' },
  { id: 'ai-text-humanizer', name: 'AI Text Humanizer', category: 'AI/Text Tools', description: 'Make AI-generated text sound natural', features: ['Natural tone', 'Style options', 'Grammar check', 'Plagiarism free'], icon: 'User' },
  { id: 'plagiarism-checker', name: 'Plagiarism Checker', category: 'AI/Text Tools', description: 'Check content for plagiarism', features: ['Deep scan', 'Source detection', 'Detailed report', 'Multiple sources'], icon: 'Search' },
  { id: 'rewriter', name: 'Rewriter', category: 'AI/Text Tools', description: 'Rewrite content with different styles', features: ['Multiple modes', 'Tone adjustment', 'Vocabulary enhancement', 'Instant rewrite'], icon: 'RefreshCw' },
  { id: 'grammar-corrector', name: 'Grammar Corrector', category: 'AI/Text Tools', description: 'Fix grammar and spelling errors', features: ['Real-time check', 'Suggestions', 'Style guide', 'Multi-language'], icon: 'CheckCircle' },

  // Utility Tools
  { id: 'currency-converter', name: 'Currency Converter', category: 'Utility Tools', description: 'Convert between world currencies', features: ['Real-time rates', '150+ currencies', 'Historical data', 'Favorites'], icon: 'DollarSign' },
  { id: 'unit-converter', name: 'Unit Converter', category: 'Utility Tools', description: 'Convert between various units', features: ['All unit types', 'Quick swap', 'Custom units', 'Favorites'], icon: 'Repeat' },
  { id: 'age-calculator', name: 'Age Calculator', category: 'Utility Tools', description: 'Calculate exact age and milestones', features: ['Precise calculation', 'Upcoming events', 'Multiple formats', 'Timezone aware'], icon: 'Calendar' },
  { id: 'loan-calculator', name: 'Loan Calculator', category: 'Utility Tools', description: 'Calculate loan payments and interest', features: ['EMI calculator', 'Amortization', 'Comparison', 'Export results'], icon: 'Calculator' },
  { id: 'income-calculator', name: 'Income Calculator', category: 'Utility Tools', description: 'Calculate and track income', features: ['Tax estimation', 'Multiple sources', 'Annual projections', 'Reports'], icon: 'TrendingUp' },
  { id: 'expense-calculator', name: 'Expense Calculator', category: 'Utility Tools', description: 'Track and manage expenses', features: ['Categories', 'Budget alerts', 'Visual charts', 'Export data'], icon: 'CreditCard' },
  { id: 'financial-planning-tool', name: 'Financial Planning Tool', category: 'Utility Tools', description: 'Plan your financial future', features: ['Goal setting', 'Savings tracker', 'Investment tips', 'Retirement planning'], icon: 'PiggyBank' },
];

export const freeToolCategories = [
  'PDF Tools',
  'Image Tools', 
  'Video Tools',
  'AI/Text Tools',
  'Utility Tools'
];
