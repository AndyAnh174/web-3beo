export default function Cover() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-600 via-green-500 to-emerald-500 opacity-90 z-10"></div>
      
      {/* Background pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICA8ZGVmcz4KICAgIDxwYXR0ZXJuIGlkPSJncmlkIiB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHBhdHRlcm5Vbml0cz0idXNlclNwYWNlT25Vc2UiPgogICAgICA8cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiIHN0cm9rZS13aWR0aD0iMSIvPgogICAgPC9wYXR0ZXJuPgogIDwvZGVmcz4KICA8cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIiAvPgo8L3N2Zz4=')] opacity-20"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 flex items-center justify-center h-full text-center text-white px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-white to-gray-200 bg-clip-text text-transparent">
            TRANG TRẠI SONG DƯƠNG
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Mạng tâm chất lượng Việt - Nơi cung cấp các sản phẩm nông nghiệp sạch và chất lượng cao
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-green-700 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Khám phá sản phẩm
            </button>
            <button className="px-8 py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-green-700 transition-all duration-300 transform hover:scale-105">
              Liên hệ đặt hàng
            </button>
          </div>
        </div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white bg-opacity-10 rounded-full animate-pulse z-15"></div>
      <div className="absolute top-40 right-20 w-16 h-16 bg-white bg-opacity-10 rounded-full animate-pulse delay-300 z-15"></div>
      <div className="absolute bottom-20 left-20 w-24 h-24 bg-white bg-opacity-10 rounded-full animate-pulse delay-700 z-15"></div>
      <div className="absolute bottom-40 right-10 w-12 h-12 bg-white bg-opacity-10 rounded-full animate-pulse delay-500 z-15"></div>
    </div>
  );
}