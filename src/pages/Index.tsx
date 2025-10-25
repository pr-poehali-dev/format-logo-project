import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  const variants = [
    {
      name: 'Основной',
      bg: 'bg-white',
      logo: 'text-[#0EA5E9]',
      text: 'text-[#1E40AF]'
    },
    {
      name: 'Синий фон',
      bg: 'bg-[#0EA5E9]',
      logo: 'text-white',
      text: 'text-white'
    },
    {
      name: 'Темный',
      bg: 'bg-[#1E40AF]',
      logo: 'text-[#0EA5E9]',
      text: 'text-white'
    }
  ];

  const currentVariant = variants[selectedVariant];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="text-center space-y-4 animate-fade-in">
          <h1 className="text-5xl font-bold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Логотип типографии
          </h1>
          <p className="text-xl text-slate-600">
            Современный дизайн с чистыми формами
          </p>
        </div>

        <Card className={`${currentVariant.bg} p-16 transition-all duration-500 shadow-2xl hover:shadow-3xl`}>
          <div className="flex flex-col items-center justify-center space-y-8">
            
            <div className="relative group">
              <div className={`w-32 h-32 ${currentVariant.logo} transition-all duration-300 group-hover:scale-110`}>
                <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                  <rect x="10" y="10" width="35" height="35" rx="4" />
                  <rect x="55" y="10" width="35" height="35" rx="4" opacity="0.7" />
                  <rect x="10" y="55" width="35" height="35" rx="4" opacity="0.7" />
                  <rect x="55" y="55" width="35" height="35" rx="4" opacity="0.4" />
                </svg>
              </div>
            </div>

            <h2 
              className={`text-6xl font-bold ${currentVariant.text} transition-colors duration-300`}
              style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.05em' }}
            >
              ФОРМАТ
            </h2>

            <p className={`text-lg ${currentVariant.text} opacity-70`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Полиграфические услуги
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {variants.map((variant, index) => (
            <Card
              key={index}
              className={`${variant.bg} p-8 cursor-pointer transition-all duration-300 hover:scale-105 ${
                selectedVariant === index ? 'ring-4 ring-[#0EA5E9] shadow-xl' : 'shadow-md'
              }`}
              onClick={() => setSelectedVariant(index)}
            >
              <div className="flex flex-col items-center space-y-4">
                <div className={`w-16 h-16 ${variant.logo}`}>
                  <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
                    <rect x="10" y="10" width="35" height="35" rx="4" />
                    <rect x="55" y="10" width="35" height="35" rx="4" opacity="0.7" />
                    <rect x="10" y="55" width="35" height="35" rx="4" opacity="0.7" />
                    <rect x="55" y="55" width="35" height="35" rx="4" opacity="0.4" />
                  </svg>
                </div>
                <p className={`text-sm font-semibold ${variant.text}`} style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {variant.name}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <Card className="bg-white p-8 shadow-lg">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              О логотипе
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Square" size={24} className="text-[#0EA5E9]" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Геометрия
                  </h4>
                  <p className="text-sm text-slate-600">
                    Четыре квадрата символизируют разные форматы печати
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Palette" size={24} className="text-[#0EA5E9]" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Цвет
                  </h4>
                  <p className="text-sm text-slate-600">
                    Синяя палитра передает надежность и профессионализм
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Icon name="Sparkles" size={24} className="text-[#0EA5E9]" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Стиль
                  </h4>
                  <p className="text-sm text-slate-600">
                    Минималистичный дизайн с акцентом на чистоту форм
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-gradient-to-r from-[#0EA5E9] to-[#1E40AF] p-8 shadow-xl">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Файлы для скачивания
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Icon name="Download" size={16} className="mr-2" />
                SVG
              </Button>
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Icon name="Download" size={16} className="mr-2" />
                PNG
              </Button>
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Icon name="Download" size={16} className="mr-2" />
                EPS
              </Button>
              <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                <Icon name="Download" size={16} className="mr-2" />
                AI
              </Button>
            </div>
          </div>
        </Card>

        <div className="bg-white rounded-lg p-8 shadow-lg">
          <img 
            src="https://cdn.poehali.dev/projects/f5e8afe5-8b08-4867-8418-b357290294d3/files/2c06d3ef-2174-460d-89a1-ad3ed7235fc2.jpg"
            alt="Логотип Формат - концепт"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Index;
