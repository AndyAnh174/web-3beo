export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <img 
                src="/src/assets/logo/trangtraisongduong.png" 
                alt="Trang Trại Song Dương" 
                className="w-12 h-12 rounded-xl object-contain"
              />
              <div>
                <h3 className="text-2xl font-bold">TRANG TRẠI SONG DƯƠNG</h3>
                <p className="text-gray-400 text-sm">Mạng tâm chất lượng Việt</p>
              </div>
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Chuyên cung cấp các sản phẩm nông sản sạch, chất lượng cao được trồng theo 
              phương pháp hữu cơ, đảm bảo an toàn cho sức khỏe gia đình Việt.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.facebook.com/trangtraisongduong" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a href="tel:0909994042" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 bg-gray-800 hover:bg-green-600 rounded-full flex items-center justify-center transition-colors duration-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Sản phẩm</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Rau xanh hữu cơ</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Trái cây tươi</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Nông sản khô</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Gia vị thiên nhiên</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors duration-300">Combo gia đình</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Liên hệ</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>090 999 40 42</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>@trangtraisongduong</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-300">
                <svg className="w-5 h-5 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p>Trang trại SINH THÁI Song Dương</p>
                  <p>Tỉnh Bình Dương, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Trang Trại Song Dương. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Chính sách đổi trả
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-300">
                Chứng nhận chất lượng
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-50"
      >
        <svg className="w-6 h-6 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </footer>
  );
} 