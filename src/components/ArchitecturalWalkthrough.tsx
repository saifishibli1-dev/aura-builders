import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX, Compass, Eye, ChevronLeft, ChevronRight, Sparkles, MapPin } from 'lucide-react';

interface RoomScene {
  id: string;
  chapter: string;
  roomName: string;
  tagline: string;
  orientation: string;
  lighting: string;
  temperature: string;
  dimensions: string;
  image: string;
  hotspots: {
    top: string;
    left: string;
    title: string;
    description: string;
  }[];
}

const ROOMS: RoomScene[] = [
  {
    id: 'living',
    chapter: '01 / LIVING',
    roomName: 'THE LIVING SPACE',
    tagline: 'WHERE THE DAY GATHERS.',
    orientation: 'SW 214° Lake Washington Vista',
    lighting: 'Late Afternoon Soft Diffused · 2,800K',
    temperature: '71.5°F Hydronic In-Slab',
    dimensions: '38\' × 24\' with 14\' Clear Ceilings',
    image: '/src/assets/images/interior_living_space_1790156546780.jpg',
    hotspots: [
      {
        top: '45%',
        left: '28%',
        title: 'Board-Formed Concrete Hearth',
        description: 'Poured with 6-inch rough-sawn Douglas Fir boards, cured 45 days for rich wood-grain texture transfer.'
      },
      {
        top: '60%',
        left: '72%',
        title: 'Rift-Cut White Oak Paneling',
        description: 'Micro-perforated acoustic panels with concealed NRC 0.85 sound-absorbing mineral wool.'
      }
    ]
  },
  {
    id: 'dining',
    chapter: '02 / DINING',
    roomName: 'THE DINING ROOM',
    tagline: 'MADE FOR LONG TABLES, UNDER LOW LIGHT.',
    orientation: 'W 270° Courtyard Alignment',
    lighting: 'Concealed Architectural Cove · 2,400K',
    temperature: '70.8°F Radiant Perimeter',
    dimensions: '22\' × 18\' Seating 14 Guests',
    image: '/src/assets/images/luxury_kitchen_craft_1790156558887.jpg',
    hotspots: [
      {
        top: '55%',
        left: '42%',
        title: 'Calacatta Belgia Honed Marble',
        description: 'Quarter-matched 3cm marble slabs with hand-honed matte finish and anti-stain oleophobic sealer.'
      },
      {
        top: '32%',
        left: '68%',
        title: 'Concealed Ventilation Plenum',
        description: 'Zero-reveal continuous slot linear diffuser engineered for silent air delivery under 22 dBA.'
      }
    ]
  },
  {
    id: 'kitchen',
    chapter: '03 / KITCHEN',
    roomName: 'THE KITCHEN',
    tagline: 'HONEST MATERIALS, QUIET FUNCTION.',
    orientation: 'NW 315° Native Pine Grove',
    lighting: 'Task Illumination 98 CRI High-Fidelity',
    temperature: '70.0°F Zoned Climate',
    dimensions: '26\' × 20\' Culinary Laboratory',
    image: '/src/assets/images/luxury_kitchen_craft_1790156558887.jpg',
    hotspots: [
      {
        top: '58%',
        left: '52%',
        title: 'Waterfall Monolith Island',
        description: '14-foot continuous mitered stone waterfall with bookmatched veining flowing seamlessly to the floor.'
      },
      {
        top: '40%',
        left: '80%',
        title: 'Custom Integrated Millwork',
        description: 'Fumed European oak tall cabinetry housing integrated Sub-Zero refrigeration with touch-to-open servo motors.'
      }
    ]
  },
  {
    id: 'suite',
    chapter: '04 / SUITE',
    roomName: 'PRIMARY SUITE',
    tagline: 'A ROOM THAT HOLDS THE MORNING.',
    orientation: 'E 095° Sunrise Salish Sea',
    lighting: 'Motorized Blackout Lutron System',
    temperature: '67.0°F Circadian Night Mode',
    dimensions: '24\' × 22\' Cantilevered Corner',
    image: '/src/assets/images/interior_living_space_1790156546780.jpg',
    hotspots: [
      {
        top: '48%',
        left: '35%',
        title: 'Acoustic Linen Wall Upholstery',
        description: 'Belgian natural linen stretched over acoustic sub-battens for whisper-level ambient isolation.'
      },
      {
        top: '65%',
        left: '75%',
        title: 'Zero-Sightline Glass Corner',
        description: 'Structural silicone-glazed 90-degree glass corner eliminating heavy corner posts for unobstructed horizon views.'
      }
    ]
  },
  {
    id: 'bath',
    chapter: '05 / THE BATH',
    roomName: 'THE BATH',
    tagline: 'STONE, WATER, STILLNESS.',
    orientation: 'N 010° Private Bamboo Zen Atrium',
    lighting: 'Indirect Floor Wash · 2,700K',
    temperature: '74.0°F Warm Stone Floors',
    dimensions: '20\' × 16\' Wet Spa Room',
    image: '/src/assets/images/primary_bath_spa_1790156569510.jpg',
    hotspots: [
      {
        top: '50%',
        left: '45%',
        title: 'Sculptural Monolithic Tub',
        description: 'Carved from a single 4,200 lb block of solid basalt stone with integrated floor overflow trench.'
      },
      {
        top: '38%',
        left: '65%',
        title: 'Roman Classico Travertine',
        description: 'Continuous vein-cut travertine slabs waterproofed with dual elastomeric membrane systems.'
      }
    ]
  },
  {
    id: 'view',
    chapter: '06 / THE CANTILEVER',
    roomName: 'THE GRAND VIEW',
    tagline: 'UNCOMPROMISING HORIZONS.',
    orientation: 'SW 220° Open Sound & Coastal Range',
    lighting: 'Twilight Natural Dusk Glow',
    temperature: '68.0°F Infratech Radiant Terraces',
    dimensions: '75-Foot Cantilevered Pool Deck',
    image: '/src/assets/images/outdoor_cantilever_pool_1790156631784.jpg',
    hotspots: [
      {
        top: '62%',
        left: '38%',
        title: 'Negative-Edge Reflection Basin',
        description: 'Black pebble-finish infinity pool with perimeter surge tank that mirrors sunset clouds without ripple vibration.'
      },
      {
        top: '40%',
        left: '75%',
        title: 'Box-Girder Steel Cantilever',
        description: '34-foot cantilevered architectural steel moment frame anchored to bedrock with post-tensioned rock anchors.'
      }
    ]
  }
];

export const ArchitecturalWalkthrough: React.FC = () => {
  const [activeIdx, setActiveIdx] = useState<number>(0);
  const [selectedHotspot, setSelectedHotspot] = useState<number | null>(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState<boolean>(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const oscRef = useRef<OscillatorNode | null>(null);
  const gainRef = useRef<GainNode | null>(null);

  const currentRoom = ROOMS[activeIdx];

  // Synthesized Ambient Audio Generator (Web Audio API)
  const toggleAudio = () => {
    if (!isAudioPlaying) {
      try {
        const AudioContextClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
        const ctx = new AudioContextClass();
        audioCtxRef.current = ctx;

        // Subtle ambient harmonic drone (root 110Hz A2 + warm detuned subtle warmth)
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(110, ctx.currentTime);

        // Low volume subtle ambient presence
        gain.gain.setValueAtTime(0.01, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.04, ctx.currentTime + 3);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start();

        oscRef.current = osc;
        gainRef.current = gain;
        setIsAudioPlaying(true);
      } catch {
        // audio context blocked or not supported
      }
    } else {
      if (gainRef.current && audioCtxRef.current) {
        gainRef.current.gain.exponentialRampToValueAtTime(0.0001, audioCtxRef.current.currentTime + 1);
        setTimeout(() => {
          oscRef.current?.stop();
          audioCtxRef.current?.close();
          setIsAudioPlaying(false);
        }, 1000);
      } else {
        setIsAudioPlaying(false);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (audioCtxRef.current && audioCtxRef.current.state !== 'closed') {
        try {
          audioCtxRef.current.close();
        } catch {
          // ignore
        }
      }
    };
  }, []);

  const nextRoom = () => {
    setSelectedHotspot(null);
    setActiveIdx((prev) => (prev + 1) % ROOMS.length);
  };

  const prevRoom = () => {
    setSelectedHotspot(null);
    setActiveIdx((prev) => (prev - 1 + ROOMS.length) % ROOMS.length);
  };

  return (
    <section className="relative w-full min-h-screen bg-[#08090c] text-white flex flex-col justify-between overflow-hidden">
      {/* Top Architectural Header */}
      <div className="relative z-20 w-full px-6 py-5 flex items-center justify-between border-b border-white/10 bg-black/40 backdrop-blur-md">
        <div className="flex items-center gap-3">
          <span className="text-xs font-mono uppercase tracking-widest text-[#c4a47c] flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5" />
            Continuous Spatial Walkthrough
          </span>
          <span className="text-neutral-500">·</span>
          <span className="text-xs text-neutral-400 font-mono hidden sm:inline">
            A residence unfolding in one continuous sequence
          </span>
        </div>

        <div className="flex items-center gap-4">
          {/* Ambient Tone Toggle */}
          <button
            onClick={toggleAudio}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-sm border text-xs font-mono transition-all cursor-pointer ${
              isAudioPlaying
                ? 'bg-[#c4a47c]/20 border-[#c4a47c] text-[#c4a47c]'
                : 'bg-white/5 border-white/10 text-neutral-400 hover:text-white'
            }`}
            title="Toggle subtle architectural ambient sound"
          >
            {isAudioPlaying ? <Volume2 className="w-3.5 h-3.5" /> : <VolumeX className="w-3.5 h-3.5" />}
            <span className="hidden md:inline">{isAudioPlaying ? 'Ambient: 432Hz Calm' : 'Ambient: Muted'}</span>
          </button>

          <span className="text-xs font-mono text-neutral-400">
            {activeIdx + 1} / {ROOMS.length}
          </span>
        </div>
      </div>

      {/* Main Full-Viewport Spatial Camera View */}
      <div className="relative flex-1 w-full h-[65vh] sm:h-[75vh] flex items-center justify-center overflow-hidden">
        {/* Background Room Photograph with subtle scale transition */}
        <div 
          key={currentRoom.id}
          className="absolute inset-0 transition-all duration-1000 ease-out transform scale-100 hover:scale-[1.01]"
        >
          <img
            src={currentRoom.image}
            alt={currentRoom.roomName}
            className="w-full h-full object-cover filter brightness-[0.75] contrast-[1.05]"
            referrerPolicy="no-referrer"
          />
          {/* Subtle cinematic vignette */}
          <div className="absolute inset-0 bg-radial from-transparent via-[#08090c]/40 to-[#08090c]/90 pointer-events-none" />
        </div>

        {/* Interactive Material Hotspots */}
        {currentRoom.hotspots.map((hotspot, idx) => {
          const isSelected = selectedHotspot === idx;
          return (
            <div
              key={idx}
              className="absolute z-20"
              style={{ top: hotspot.top, left: hotspot.left }}
            >
              <button
                onClick={() => setSelectedHotspot(isSelected ? null : idx)}
                className="group relative flex items-center justify-center w-8 h-8 rounded-full bg-white/20 hover:bg-[#c4a47c] backdrop-blur-md border border-white/60 text-white hover:text-black transition-all cursor-pointer shadow-2xl"
                aria-label={hotspot.title}
              >
                <span className="w-2 h-2 rounded-full bg-white group-hover:bg-black transition-colors" />
                <span className="absolute -inset-1 rounded-full border border-white/40 animate-ping opacity-60" />
              </button>

              {/* Hotspot detail popover */}
              {isSelected && (
                <div className="absolute left-10 top-0 w-64 p-3.5 rounded-sm bg-[#0e1013]/95 border border-[#c4a47c]/60 shadow-2xl backdrop-blur-md text-left z-30 animate-fade-in">
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#c4a47c] mb-1 flex items-center gap-1">
                    <Sparkles className="w-3 h-3" /> Material Detail
                  </div>
                  <div className="text-xs font-semibold text-white mb-1">{hotspot.title}</div>
                  <div className="text-[11px] text-neutral-300 leading-relaxed">{hotspot.description}</div>
                  <button
                    onClick={() => setSelectedHotspot(null)}
                    className="mt-2 text-[10px] text-neutral-400 hover:text-white underline cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              )}
            </div>
          );
        })}

        {/* Cinematic Room Typography (Centered, matches Video 2 exact style) */}
        <div className="relative z-10 text-center px-6 max-w-4xl pointer-events-none select-none">
          <div className="inline-block text-xs font-mono uppercase tracking-widest text-[#c4a47c] mb-3 px-3 py-1 bg-black/60 backdrop-blur-sm border border-white/10 rounded-sm">
            {currentRoom.chapter}
          </div>
          <h2 className="text-4xl sm:text-6xl lg:text-7xl font-display font-extrabold tracking-tight text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
            {currentRoom.roomName}
          </h2>
          <p className="mt-3 text-sm sm:text-lg font-serif-luxury tracking-widest uppercase text-neutral-200 drop-shadow-md">
            {currentRoom.tagline}
          </p>
        </div>

        {/* Room Architectural Data Card (Bottom Left Overlay) */}
        <div className="absolute bottom-6 left-6 z-20 hidden md:block max-w-xs bg-black/70 backdrop-blur-md border border-white/10 p-3.5 rounded-sm text-xs font-mono">
          <div className="text-[#c4a47c] uppercase tracking-wider text-[10px] mb-2 flex items-center gap-1.5">
            <MapPin className="w-3 h-3" /> Architectural Coordinates
          </div>
          <div className="space-y-1 text-neutral-300 text-[11px]">
            <div><span className="text-neutral-500">Axis:</span> {currentRoom.orientation}</div>
            <div><span className="text-neutral-500">Illum:</span> {currentRoom.lighting}</div>
            <div><span className="text-neutral-500">Scale:</span> {currentRoom.dimensions}</div>
            <div><span className="text-neutral-500">HVAC:</span> {currentRoom.temperature}</div>
          </div>
        </div>

        {/* Left/Right Spatial Nav Arrows */}
        <button
          onClick={prevRoom}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 border border-white/10 hover:border-white/40 text-white transition-all cursor-pointer"
          aria-label="Previous room"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextRoom}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-black/40 hover:bg-black/80 border border-white/10 hover:border-white/40 text-white transition-all cursor-pointer"
          aria-label="Next room"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Spatial Navigation Ribbon */}
      <div className="relative z-20 w-full bg-[#0b0d10] border-t border-white/10 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4 overflow-x-auto no-scrollbar">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-400 shrink-0 hidden lg:block">
            Spatial Journey:
          </div>
          <div className="flex items-center gap-2 sm:gap-3 w-full justify-between">
            {ROOMS.map((room, idx) => {
              const isActive = activeIdx === idx;
              return (
                <button
                  key={room.id}
                  onClick={() => {
                    setSelectedHotspot(null);
                    setActiveIdx(idx);
                  }}
                  className={`flex-1 py-2 px-2.5 rounded-sm border text-left transition-all cursor-pointer ${
                    isActive
                      ? 'bg-white/10 border-[#c4a47c] text-white shadow-lg'
                      : 'bg-white/[0.02] border-white/5 text-neutral-500 hover:border-white/20 hover:text-neutral-300'
                  }`}
                >
                  <div className="text-[10px] font-mono truncate">{room.chapter}</div>
                  <div className="text-xs font-medium truncate text-white">{room.roomName}</div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
