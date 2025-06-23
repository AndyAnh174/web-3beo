import { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

    return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Liên hệ <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              với chúng tôi
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Đặt hàng ngay để nhận được những sản phẩm nông sản tươi ngon và chất lượng nhất
          </p>
        </div>

        {/* Contact Information Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Quick Contact */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 border border-green-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Thông tin liên hệ</h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Hotline</h4>
                  <p className="text-gray-600">090 999 40 42</p>
                  <p className="text-sm text-gray-500">Hỗ trợ 24/7</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
        <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Facebook</h4>
                  <p className="text-gray-600">@trangtraisongduong</p>
                  <p className="text-sm text-gray-500">Theo dõi fanpage để cập nhật tin tức</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-600 to-emerald-600 rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
        </div>
        <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Địa chỉ trang trại</h4>
                  <p className="text-gray-600">Trang trại SINH THÁI Song Dương</p>
                  <p className="text-gray-600">Tỉnh Bình Dương, Việt Nam</p>
                </div>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Vị trí trang trại</h3>
            <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3913.4026047134357!2d106.8970153757396!3d11.231765250628477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174bfe8bb65ce97%3A0x18e977c53f264f91!2zVHJhbmcgdHLhuqFpIFNJTkggVEjDgUkgU29uZyBExrDGoW5n!5e0!3m2!1svi!2s!4v1750644477041!5m2!1svi!2s" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Trang trái SINH THÁI Song Dương - Bình Dương"
              ></iframe>
            </div>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                Trang trại SINH THÁI Song Dương - Bình Dương
              </p>
              <a 
                href="https://maps.google.com/?q=Trang%20tr%E1%BA%A1i%20SINH%20TH%C3%81I%20Song%20D%C6%B0%C6%A1ng"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center mt-2 text-green-600 hover:text-green-700 font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Xem trên Google Maps
              </a>
            </div>
          </div>

          {/* Social Media */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Theo dõi chúng tôi</h3>
            
            <div className="space-y-4">
              <a
                href="https://www.facebook.com/trangtraisongduong"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-3 bg-green-50 hover:bg-green-100 p-4 rounded-lg transition-all duration-300 group"
              >
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </div>
                <span className="font-medium text-gray-700 group-hover:text-green-600 text-sm">Facebook</span>
              </a>

              <div className="bg-green-50 p-4 rounded-lg">
                <div className="flex items-center space-x-3 mb-2">
                  <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                    </svg>
                  </div>
                  <span className="font-medium text-gray-700">Zalo & WhatsApp</span>
                </div>
                <p className="text-gray-600 ml-11">090 999 40 42</p>
              </div>
            </div>
          </div>
        </div>

        {/* Order Form Section */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Đặt hàng trực tuyến</h3>
            
            {isSubmitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Cảm ơn bạn!</h4>
                <p className="text-gray-600">Đơn hàng của bạn đã được gửi thành công. Chúng tôi sẽ liên hệ sớm nhất có thể.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder="Nhập họ và tên"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                      placeholder="090 999 40 42"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400"
                    placeholder="Nhập địa chỉ email"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Sản phẩm cần đặt / Ghi chú *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 placeholder-gray-400 resize-none"
                    placeholder="Vui lòng mô tả sản phẩm bạn muốn đặt..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-4 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-700 focus:ring-4 focus:ring-green-500/20 transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center">
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                      Đang gửi...
                    </div>
                  ) : (
                    'Gửi đặt hàng'
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
    );
  }
  