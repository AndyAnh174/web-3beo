interface LogoProps {
    isSticky: boolean;
  }
  
  export default function Logo({ isSticky }: LogoProps) {
    return (
      <div className={`w-full flex justify-center transition-all duration-700 ${
        isSticky 
          ? 'fixed top-0 z-[100] backdrop-blur-md bg-white/95 py-4 shadow-xl border-b border-gray-200/30' 
          : 'relative -mt-32 py-8 z-[100]'
      }`}>
        <div className="flex items-center space-x-4">
          {/* Logo image */}
          <div className="relative">
            <img 
              src="/src/assets/logo/trangtraisongduong.png" 
              alt="Trang Trại Song Dương" 
              className={`transition-all duration-300 ${
                isSticky ? 'h-16 w-16' : 'h-20 w-20'
              } rounded-xl shadow-xl object-contain`}
            />
            {isSticky && (
              <div className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full animate-pulse"></div>
            )}
          </div>
          
          {/* Logo text */}
          <div className="flex flex-col">
            <span className={`font-black text-green-800 transition-all duration-300 ${
              isSticky ? 'text-2xl md:text-3xl' : 'text-3xl md:text-4xl lg:text-5xl'
            } drop-shadow-lg tracking-wide`}>
              TRANG TRẠI SONG DƯƠNG
            </span>
            <span className={`text-green-600 font-semibold transition-all duration-300 ${
              isSticky ? 'text-sm opacity-80' : 'text-base md:text-lg opacity-100'
            } drop-shadow-md`}>
              Mang tâm chất lượng Việt
            </span>
          </div>
        </div>
      </div>
    );
  }