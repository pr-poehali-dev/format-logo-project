import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const variants = [
    {
      name: 'Градиент',
      bg: 'bg-white',
      gradientFrom: '#0EA5E9',
      gradientTo: '#1E40AF',
      text: 'text-slate-800',
      subtitle: 'text-slate-600'
    },
    {
      name: 'Монохром',
      bg: 'bg-slate-900',
      gradientFrom: '#FFFFFF',
      gradientTo: '#94A3B8',
      text: 'text-white',
      subtitle: 'text-slate-300'
    },
    {
      name: 'Инверсия',
      bg: 'bg-gradient-to-br from-[#0EA5E9] to-[#1E40AF]',
      gradientFrom: '#FFFFFF',
      gradientTo: '#FFFFFF',
      text: 'text-white',
      subtitle: 'text-white/80'
    }
  ];

  const currentVariant = variants[selectedVariant];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="text-center space-y-3 animate-fade-in">
          <h1 className="text-5xl font-semibold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Логотип типографии
          </h1>
          <p className="text-lg text-slate-600" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            Абстрактный символ творчества и современности
          </p>
        </div>

        <Card 
          className={`${currentVariant.bg} p-20 transition-all duration-500 border-0 shadow-xl`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="flex flex-col items-center justify-center space-y-10">
            
            <div className="relative">
              <svg 
                viewBox="0 0 200 200" 
                className={`w-48 h-48 transition-transform duration-700 ${isHovered ? 'scale-110 rotate-12' : 'scale-100 rotate-0'}`}
              >
                <defs>
                  <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: currentVariant.gradientFrom, stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: currentVariant.gradientTo, stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                
                <path
                  d="M 100 20 Q 150 40 160 80 Q 170 120 140 150 Q 110 180 70 160 Q 30 140 40 100 Q 50 60 100 20 Z"
                  fill="url(#logoGradient)"
                  opacity="0.9"
                  className="transition-all duration-700"
                />
                
                <circle
                  cx="100"
                  cy="80"
                  r="25"
                  fill="url(#logoGradient)"
                  opacity="0.6"
                  className={`transition-all duration-700 ${isHovered ? 'translate-x-2' : ''}`}
                />
                
                <path
                  d="M 60 120 Q 100 100 140 120 Q 120 150 100 145 Q 80 150 60 120 Z"
                  fill="url(#logoGradient)"
                  opacity="0.7"
                />
              </svg>
            </div>

            <div className="text-center space-y-4">
              <h2 
                className={`text-6xl font-bold ${currentVariant.text} tracking-tight`}
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                ФОРМАТ
              </h2>
              <p className={`text-sm ${currentVariant.subtitle} uppercase tracking-[0.3em]`} 
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Творческая типография
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-6">
          {variants.map((variant, index) => (
            <Card
              key={index}
              className={`${variant.bg} p-8 cursor-pointer transition-all duration-300 border-0 hover:scale-105 ${
                selectedVariant === index ? 'ring-2 ring-[#0EA5E9] shadow-xl' : 'shadow-md'
              }`}
              onClick={() => setSelectedVariant(index)}
            >
              <div className="flex flex-col items-center space-y-4">
                <svg viewBox="0 0 80 80" className="w-16 h-16">
                  <defs>
                    <linearGradient id={`mini-gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: variant.gradientFrom, stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: variant.gradientTo, stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  <path
                    d="M 40 10 Q 60 16 64 32 Q 68 48 56 60 Q 44 72 28 64 Q 12 56 16 40 Q 20 24 40 10 Z"
                    fill={`url(#mini-gradient-${index})`}
                    opacity="0.9"
                  />
                </svg>
                <p className={`text-xs ${variant.text} font-medium uppercase tracking-wider`} 
                   style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {variant.name}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] to-[#1E40AF] flex items-center justify-center">
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Творчество
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                Плавные органические формы символизируют креативность и свободу выражения
              </p>
            </div>
          </Card>

          <Card className="bg-white p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#1E40AF] to-[#0EA5E9] flex items-center justify-center">
                <Icon name="Zap" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Динамика
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                Асимметричная композиция создает ощущение движения и развития
              </p>
            </div>
          </Card>

          <Card className="bg-white p-8 border-0 shadow-lg hover:shadow-xl transition-shadow">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0EA5E9] via-[#1E40AF] to-[#0EA5E9] flex items-center justify-center">
                <Icon name="Award" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Современность
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                Градиентная заливка отражает актуальные тренды цифрового дизайна
              </p>
            </div>
          </Card>
        </div>

        <Card className="bg-white p-10 border-0 shadow-lg">
          <div className="space-y-8">
            <h3 className="text-3xl font-semibold text-slate-800 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Символика
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9] mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Органические формы
                    </h4>
                    <p className="text-sm text-slate-600" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Плавные кривые линии символизируют творческий подход к печати
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-[#1E40AF] mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Многослойность
                    </h4>
                    <p className="text-sm text-slate-600" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Наложение элементов отражает технологию многоцветной печати
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-2 h-2 rounded-full bg-[#0EA5E9] mt-2"></div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Градиентные переходы
                    </h4>
                    <p className="text-sm text-slate-600" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Плавная смена цветов демонстрирует качество цветопередачи
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-slate-50 to-blue-50 p-12 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 200 200" className="w-64 h-64">
                  <defs>
                    <linearGradient id="symbolGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: '#0EA5E9', stopOpacity: 1 }} />
                      <stop offset="100%" style={{ stopColor: '#1E40AF', stopOpacity: 1 }} />
                    </linearGradient>
                  </defs>
                  
                  <path
                    d="M 100 20 Q 150 40 160 80 Q 170 120 140 150 Q 110 180 70 160 Q 30 140 40 100 Q 50 60 100 20 Z"
                    fill="url(#symbolGradient)"
                    opacity="0.9"
                  />
                  
                  <circle cx="100" cy="80" r="25" fill="url(#symbolGradient)" opacity="0.6" />
                  
                  <path
                    d="M 60 120 Q 100 100 140 120 Q 120 150 100 145 Q 80 150 60 120 Z"
                    fill="url(#symbolGradient)"
                    opacity="0.7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-[#0EA5E9] to-[#1E40AF] p-10 border-0 shadow-xl">
          <div className="space-y-6 text-center">
            <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Файлы для скачивания
            </h3>
            <p className="text-sm text-white/80" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
              Все форматы с сохранением градиентов
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur">
                <Icon name="Download" size={16} className="mr-2" />
                SVG
              </Button>
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur">
                <Icon name="Download" size={16} className="mr-2" />
                PNG
              </Button>
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur">
                <Icon name="Download" size={16} className="mr-2" />
                EPS
              </Button>
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30 backdrop-blur">
                <Icon name="Download" size={16} className="mr-2" />
                AI
              </Button>
            </div>
          </div>
        </Card>

        <div className="bg-white rounded-lg p-8 shadow-lg border-0">
          <p className="text-xs text-slate-400 text-center mb-4 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            ИИ-концепт
          </p>
          <img 
            src="https://cdn.poehali.dev/projects/f5e8afe5-8b08-4867-8418-b357290294d3/files/86353eae-2d35-4aa6-8168-375805facacd.jpg"
            alt="Абстрактный креативный концепт логотипа"
            className="w-full h-auto rounded-lg"
          />
        </div>

      </div>
    </div>
  );
};

export default Index;
