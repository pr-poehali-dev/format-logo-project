import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);

  const variants = [
    {
      name: 'Светлый',
      bg: 'bg-white',
      logo: 'border-[#0EA5E9]',
      text: 'text-slate-800',
      accent: 'text-[#0EA5E9]'
    },
    {
      name: 'Темный',
      bg: 'bg-slate-900',
      logo: 'border-white',
      text: 'text-white',
      accent: 'text-white'
    },
    {
      name: 'Синий',
      bg: 'bg-[#0EA5E9]',
      logo: 'border-white',
      text: 'text-white',
      accent: 'text-white'
    }
  ];

  const currentVariant = variants[selectedVariant];

  return (
    <div className="min-h-screen bg-slate-50 p-8">
      <div className="max-w-6xl mx-auto space-y-16">
        
        <div className="text-center space-y-2 animate-fade-in">
          <h1 className="text-4xl font-light text-slate-800 tracking-wide" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Логотип типографии
          </h1>
          <p className="text-sm text-slate-500 uppercase tracking-widest" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            Минимализм и геометрия
          </p>
        </div>

        <Card className={`${currentVariant.bg} p-20 transition-all duration-500 border-0 shadow-sm`}>
          <div className="flex flex-col items-center justify-center space-y-12">
            
            <div className="relative group">
              <svg viewBox="0 0 200 80" className="w-64 h-auto">
                <rect 
                  x="10" y="10" width="60" height="60" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className={`${currentVariant.logo.replace('border-', 'text-')} transition-all duration-300 group-hover:stroke-[3]`}
                />
                <line 
                  x1="90" y1="20" x2="90" y2="60" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className={currentVariant.logo.replace('border-', 'text-')}
                />
                <line 
                  x1="110" y1="40" x2="140" y2="40" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className={currentVariant.logo.replace('border-', 'text-')}
                />
                <circle 
                  cx="170" cy="40" r="20" 
                  fill="none" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  className={currentVariant.logo.replace('border-', 'text-')}
                />
              </svg>
            </div>

            <div className="text-center space-y-3">
              <h2 
                className={`text-5xl font-light ${currentVariant.text} tracking-[0.2em] uppercase`}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}
              >
                Формат
              </h2>
              <div className={`h-px w-32 mx-auto ${currentVariant.logo.replace('border-', 'bg-')}`}></div>
              <p className={`text-xs ${currentVariant.text} opacity-60 uppercase tracking-[0.4em]`} 
                 style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Типография
              </p>
            </div>
          </div>
        </Card>

        <div className="grid grid-cols-3 gap-4">
          {variants.map((variant, index) => (
            <Card
              key={index}
              className={`${variant.bg} p-6 cursor-pointer transition-all duration-300 border-0 ${
                selectedVariant === index ? 'ring-1 ring-slate-300 shadow-lg' : 'shadow-sm hover:shadow-md'
              }`}
              onClick={() => setSelectedVariant(index)}
            >
              <div className="flex flex-col items-center space-y-3">
                <div className={`w-12 h-12 border ${variant.logo}`}></div>
                <p className={`text-xs ${variant.text} uppercase tracking-wider`} 
                   style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  {variant.name}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-white p-8 border-0 shadow-sm">
            <div className="space-y-4">
              <div className="w-10 h-10 border-2 border-[#0EA5E9]"></div>
              <h3 className="text-lg font-light text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Геометрия
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Чистые линии и базовые формы создают универсальный символ
              </p>
            </div>
          </Card>

          <Card className="bg-white p-8 border-0 shadow-sm">
            <div className="space-y-4">
              <div className="w-10 h-px bg-[#0EA5E9]"></div>
              <h3 className="text-lg font-light text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Простота
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Минимум деталей для максимальной узнаваемости
              </p>
            </div>
          </Card>

          <Card className="bg-white p-8 border-0 shadow-sm">
            <div className="space-y-4">
              <div className="w-10 h-10 rounded-full border-2 border-[#0EA5E9]"></div>
              <h3 className="text-lg font-light text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Гармония
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Баланс между формами и пустым пространством
              </p>
            </div>
          </Card>
        </div>

        <Card className="bg-white p-10 border-0 shadow-sm">
          <div className="space-y-8">
            <h3 className="text-2xl font-light text-slate-800 text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Построение логотипа
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="bg-slate-50 p-8 flex items-center justify-center">
                  <svg viewBox="0 0 100 100" className="w-32 h-32">
                    <rect x="10" y="10" width="80" height="80" fill="none" stroke="#CBD5E1" strokeWidth="1" strokeDasharray="2,2" />
                    <rect x="20" y="20" width="60" height="60" fill="none" stroke="#0EA5E9" strokeWidth="2" />
                    <circle cx="50" cy="50" r="3" fill="#0EA5E9" />
                  </svg>
                </div>
                <p className="text-xs text-slate-500 text-center uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Модульная сетка
                </p>
              </div>

              <div className="space-y-4">
                <div className="bg-slate-50 p-8 flex items-center justify-center">
                  <div className="space-y-2 text-center">
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-8 h-8 bg-[#0EA5E9]"></div>
                      <span className="text-xs text-slate-600 font-mono">#0EA5E9</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-8 h-8 bg-[#1E40AF]"></div>
                      <span className="text-xs text-slate-600 font-mono">#1E40AF</span>
                    </div>
                    <div className="flex items-center justify-center space-x-4">
                      <div className="w-8 h-8 border-2 border-slate-300 bg-white"></div>
                      <span className="text-xs text-slate-600 font-mono">#FFFFFF</span>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-slate-500 text-center uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Цветовая палитра
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-slate-900 p-10 border-0 shadow-sm">
          <div className="space-y-6 text-center">
            <h3 className="text-xl font-light text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Файлы для скачивания
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-2xl mx-auto">
              <Button variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white/20">
                <Icon name="Download" size={14} className="mr-2" />
                <span className="text-xs">SVG</span>
              </Button>
              <Button variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white/20">
                <Icon name="Download" size={14} className="mr-2" />
                <span className="text-xs">PNG</span>
              </Button>
              <Button variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white/20">
                <Icon name="Download" size={14} className="mr-2" />
                <span className="text-xs">EPS</span>
              </Button>
              <Button variant="outline" className="bg-transparent hover:bg-white/10 text-white border-white/20">
                <Icon name="Download" size={14} className="mr-2" />
                <span className="text-xs">AI</span>
              </Button>
            </div>
          </div>
        </Card>

        <div className="bg-white rounded p-6 shadow-sm">
          <p className="text-xs text-slate-400 text-center mb-4 uppercase tracking-wider" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            ИИ-концепт
          </p>
          <img 
            src="https://cdn.poehali.dev/projects/f5e8afe5-8b08-4867-8418-b357290294d3/files/652d2aa2-b32a-4c9f-8e1b-18799c227560.jpg"
            alt="Минималистичный концепт логотипа"
            className="w-full h-auto rounded"
          />
        </div>

      </div>
    </div>
  );
};

export default Index;
