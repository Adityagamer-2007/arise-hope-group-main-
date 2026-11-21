import React from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  subtitle: string;
  breadcrumbs: { label: string; path?: string }[];
  accentColor?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  subtitle,
  breadcrumbs,
  accentColor = '#FF8A00'
}) => {
  const { navigate } = useNavigation();

  return (
    <div className="relative pt-24 sm:pt-32 pb-12 sm:pb-16 bg-gradient-to-b from-[#F1F2F4] via-[#F8F7F3] to-[#F8F7F3] border-b border-stone-200 overflow-hidden">
      {/* Subtle Corporate Grid */}
      <div className="absolute inset-0 bg-corporate-grid opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-1.5 sm:gap-2 text-xs font-sans text-stone-500 mb-4 sm:mb-5 flex-wrap">
          {breadcrumbs.map((crumb, idx) => (
            <React.Fragment key={idx}>
              {crumb.path ? (
                <button
                  onClick={() => navigate(crumb.path!)}
                  className="hover:text-[#101B35] transition-colors"
                >
                  {crumb.label}
                </button>
              ) : (
                <span className="text-[#101B35] font-semibold">{crumb.label}</span>
              )}
              {idx < breadcrumbs.length - 1 && (
                <ChevronRight className="w-3.5 h-3.5 text-stone-400 shrink-0" />
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Category Tag */}
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-sans font-bold tracking-wider uppercase mb-3.5 bg-white border border-stone-200 text-[#101B35] shadow-xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF8A00]" />
          <span>{badge}</span>
        </div>

        {/* Editorial Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#101B35] tracking-tight leading-[1.15] max-w-4xl">
          {title}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-stone-600 max-w-3xl leading-relaxed font-sans">
          {subtitle}
        </p>

      </div>
    </div>
  );
};
