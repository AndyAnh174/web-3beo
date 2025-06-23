export default function VideoSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Khám phá <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Trang trại
            </span> của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Xem video giới thiệu về quy trình sản xuất và những sản phẩm chất lượng cao tại Trang Trại Song Dương
          </p>
        </div>

        {/* Video container */}
        <div className="relative max-w-5xl mx-auto">
          <div className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full opacity-60 blur-xl"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full opacity-40 blur-xl"></div>
            
            {/* Facebook Video iframe */}
            <iframe
              className="relative z-10 w-full h-full"
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fwww.facebook.com%2Ftrangtraisongduong%2Fvideos%2F512563855052424%2F&show_text=false&width=560&t=0"
              title="Trang Trại Song Dương - Video giới thiệu"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              allowFullScreen
              style={{ border: 'none', overflow: 'hidden' }}
              scrolling="no"
              frameBorder="0"
            ></iframe>
          </div>

          {/* Farm stats */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">100% Sạch</h3>
              <p className="text-gray-600">Sản phẩm hữu cơ</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">500+</h3>
              <p className="text-gray-600">Khách hàng tin tưởng</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">24/7</h3>
              <p className="text-gray-600">Giao hàng nhanh chóng</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}