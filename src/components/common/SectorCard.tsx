import React from 'react';
import { Sector } from '../../types';
import { useNavigation } from '../../context/NavigationContext';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';

interface SectorCardProps {
  sector: Sector;
  variant?: 'featured' | 'standard' | 'compact';
}

export const SectorCard: React.FC<SectorCardProps> = ({ sector }) => {
  const { navigate } = useNavigation();

  return (
    <div 
      className="group relative rounded-2xl overflow-hidden bg-white border border-stone-200 shadow-sm hover:shadow-lg hover:border-stone-300 transition-all duration-300 flex flex-col justify-between"
    >
      {/* Sector Imagery Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-stone-100">
        <img 
          src={sector.image} 
          alt={`Arise Hope Group - ${sector.title}`} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-out"
          loading="lazy"
        />

        {/* Subtle Gradient Shadow for Contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />

        {/* Top Badges */}
        <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-md text-[10px] font-mono font-bold tracking-wider uppercase bg-[#101B35]/90 text-white backdrop-blur-xs">
            SECTOR {String(sector.number).padStart(2, '0')}
          </span>

          <span className="text-[10px] font-sans font-medium px-2 py-0.5 rounded bg-white/90 text-stone-700 backdrop-blur-xs shadow-xs">
            {sector.imageType === 'ai-generated' ? 'Conglomerate Asset' : 'Engineering Model'}
          </span>
        </div>

        {/* Sector Tagline on Bottom of Image */}
        <div className="absolute bottom-3 left-3.5 right-3.5">
          <span className="text-xs font-semibold text-white drop-shadow-sm line-clamp-1">
            {sector.tagline}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-serif font-bold text-[#101B35] group-hover:text-[#FF8A00] transition-colors leading-snug">
            {sector.title}
          </h3>

          <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed line-clamp-3">
            {sector.shortDescription}
          </p>

          {/* Official Core Activities Checklist */}
          <div className="mt-4 pt-3.5 border-t border-stone-100 space-y-1.5">
            <span className="text-[10px] font-sans uppercase tracking-wider text-stone-400 font-bold block mb-1">
              Official Mandate:
            </span>
            {sector.officialActivities.slice(0, 3).map((activity, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-stone-700">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF8A00] shrink-0" />
                <span className="truncate">{activity}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Action Link to Dedicated Page */}
        <div className="mt-5 pt-3.5 border-t border-stone-100">
          <button
            onClick={() => navigate(`/businesses/${sector.id}`)}
            className="w-full py-2.5 px-3.5 rounded-lg bg-stone-50 hover:bg-[#101B35] text-[#101B35] hover:text-white border border-stone-200 hover:border-[#101B35] text-xs font-semibold transition-all flex items-center justify-between group/btn"
          >
            <span>Explore Sector Capabilities</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-[#FF8A00] group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};
