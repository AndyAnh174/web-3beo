import { useEffect, useState } from 'react';

interface Slide {
  url: string;
  title: string;
  description: string;
}

const titles = [
  'Rau xanh tươi ngon',
  'Quy trình canh tác hiện đại',
  'Sản phẩm chất lượng cao',
  'Trang trại xanh sạch đẹp',
  'Phục vụ tận tâm',
  'Nông sản tươi sạch',
  'Canh tác bền vững',
  'Kiểm tra chất lượng',
  'Công nghệ hiện đại',
  'Đa dạng sản phẩm',
  'An toàn thực phẩm',
  'Chăm sóc cây trồng',
  'Thu hoạch đúng thời điểm',
  'Đóng gói và bảo quản',
  'Giao hàng tận nơi',
  'Cam kết chất lượng',
];

const descriptions = [
  'Rau được trồng theo phương pháp hữu cơ, đảm bảo an toàn cho sức khỏe',
  'Áp dụng công nghệ tiên tiến trong việc chăm sóc và thu hoạch',
  'Cam kết mang đến những sản phẩm tươi ngon và an toàn nhất',
  'Môi trường canh tác trong lành, thân thiện với thiên nhiên',
  'Đội ngũ nhân viên chuyên nghiệp, tận tâm phục vụ khách hàng',
  'Sản phẩm được thu hoạch hàng ngày, đảm bảo độ tươi ngon tối đa',
  'Phương pháp canh tác thân thiện môi trường, bảo vệ đất và nước',
  'Quy trình kiểm soát chất lượng nghiêm ngặt từ gieo trồng đến thu hoạch',
  'Ứng dụng công nghệ 4.0 trong nông nghiệp để tối ưu năng suất',
  'Cung cấp nhiều loại rau củ quả tươi ngon theo mùa vụ',
  'Tuân thủ nghiêm ngặt các tiêu chuẩn an toàn thực phẩm quốc tế',
  'Đội ngũ kỹ thuật viên giàu kinh nghiệm chăm sóc cây trồng 24/7',
  'Thu hoạch vào thời điểm thích hợp để đảm bảo chất lượng tốt nhất',
  'Quy trình đóng gói chuyên nghiệp, bảo quản tươi ngon lâu dài',
  'Dịch vụ giao hàng nhanh chóng, đảm bảo sản phẩm tươi ngon',
  'Luôn đặt chất lượng và sự hài lòng của khách hàng lên hàng đầu',
];

export const images: Slide[] = titles.map((title, index) => ({
  url: `/public/slides/${index + 1}.jpg`,
  title,
  description: descriptions[index],
}));


export default function ImageCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isPlaying]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Những <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent">
              Sản phẩm
            </span> nổi bật
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Khám phá những sản phẩm nông sản sạch và chất lượng cao được sản xuất tại Trang Trại Song Dương
          </p>
        </div>

        {/* Carousel container */}
        <div className="relative max-w-6xl mx-auto">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl bg-gray-800">
            {/* Images */}
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                  index === currentIndex ? 'opacity-100' : 'opacity-0'
                }`}
              >
                <div className="w-full h-full relative">
                  <img
                    src={image.url}
                    alt={image.title}
                    className="w-full h-full object-cover object-center"
                    style={{
                      aspectRatio: '16/9',
                      objectFit: 'cover',
                      objectPosition: 'center center'
                    }}
                    onError={(e) => {
                      console.error(`Failed to load image: ${image.url}`);
                      e.currentTarget.style.backgroundColor = '#374151';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                  
                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <div className="max-w-4xl">
                      <h3 className="text-3xl font-bold mb-2 drop-shadow-lg">{image.title}</h3>
                      <p className="text-lg text-gray-200 drop-shadow-md">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation arrows */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            {/* Play/Pause button */}
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 z-10"
            >
              {isPlaying ? (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              )}
            </button>
          </div>

          {/* Indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-green-500 scale-125' 
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4 w-full bg-gray-700 rounded-full h-1">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-1 rounded-full transition-all duration-300 ease-linear"
              style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
