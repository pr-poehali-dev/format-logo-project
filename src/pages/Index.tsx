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
      text: 'text-[#0EA5E9]',
      subtitle: 'text-[#1E40AF]'
    },
    {
      name: 'Синий фон',
      bg: 'bg-[#0EA5E9]',
      text: 'text-white',
      subtitle: 'text-white'
    },
    {
      name: 'Темный',
      bg: 'bg-[#1E40AF]',
      text: 'text-[#0EA5E9]',
      subtitle: 'text-white'
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
            Типографский дизайн с акцентом на шрифтах
          </p>
        </div>

        <Card className={`${currentVariant.bg} p-16 transition-all duration-500 shadow-2xl`}>
          <div className="flex flex-col items-center justify-center space-y-6">
            
            <div className="relative group">
              <h2 
                className={`text-[120px] font-black ${currentVariant.text} transition-all duration-300 group-hover:tracking-wider leading-none select-none`}
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  letterSpacing: '-0.05em',
                  fontWeight: 900
                }}
              >
                ФОРМАТ
              </h2>
              <div className={`absolute -bottom-2 left-0 right-0 h-1 ${currentVariant.text.replace('text-', 'bg-')} opacity-30`}></div>
            </div>

            <p className={`text-xl tracking-[0.3em] ${currentVariant.subtitle} opacity-80 uppercase`} 
               style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
              Типография
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
                <h3 
                  className={`text-4xl font-black ${variant.text}`}
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif',
                    letterSpacing: '-0.03em'
                  }}
                >
                  ФОРМАТ
                </h3>
                <p className={`text-xs font-semibold ${variant.subtitle} uppercase tracking-wider`} 
                   style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {variant.name}
                </p>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-white p-8 shadow-lg">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Концепция
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon name="Type" size={24} className="text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Типографика
                    </h4>
                    <p className="text-sm text-slate-600">
                      Крупные жирные буквы подчеркивают экспертность в печати
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
                    <Icon name="Layers" size={24} className="text-[#0EA5E9]" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-700 mb-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Кернинг
                    </h4>
                    <p className="text-sm text-slate-600">
                      Плотное расположение букв создает единую форму
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <Card className="bg-white p-8 shadow-lg">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Применение
              </h3>
              
              <div className="space-y-4">
                <div className="border-2 border-slate-200 rounded-lg p-4 hover:border-[#0EA5E9] transition-colors">
                  <p className="text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Визитки
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Минимальный размер</span>
                    <span className="text-xs font-semibold text-[#0EA5E9]">20 мм</span>
                  </div>
                </div>

                <div className="border-2 border-slate-200 rounded-lg p-4 hover:border-[#0EA5E9] transition-colors">
                  <p className="text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Вывески
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Читаемость</span>
                    <span className="text-xs font-semibold text-[#0EA5E9]">До 50 м</span>
                  </div>
                </div>

                <div className="border-2 border-slate-200 rounded-lg p-4 hover:border-[#0EA5E9] transition-colors">
                  <p className="text-sm font-semibold text-slate-700 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Цифровые носители
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-slate-500">Форматы</span>
                    <span className="text-xs font-semibold text-[#0EA5E9]">PNG, SVG</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        <Card className="bg-white p-8 shadow-lg">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Типографская иерархия
            </h3>
            
            <div className="space-y-6">
              <div className="border-l-4 border-[#0EA5E9] pl-6 py-2">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Заголовок H1</p>
                <h1 className="text-5xl font-black text-[#0EA5E9]" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '-0.03em' }}>
                  ФОРМАТ
                </h1>
              </div>

              <div className="border-l-4 border-[#1E40AF] pl-6 py-2">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Подзаголовок H2</p>
                <h2 className="text-3xl font-bold text-[#1E40AF]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Типография полного цикла
                </h2>
              </div>

              <div className="border-l-4 border-slate-300 pl-6 py-2">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Основной текст</p>
                <p className="text-base text-slate-700" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  Современная типография с широким спектром услуг печати
                </p>
              </div>

              <div className="border-l-4 border-slate-200 pl-6 py-2">
                <p className="text-xs text-slate-500 uppercase tracking-wider mb-2">Вспомогательный текст</p>
                <p className="text-sm text-slate-500 tracking-wide uppercase" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Типография
                </p>
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
          <h3 className="text-xl font-bold text-slate-800 mb-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            Референс ИИ-концепта
          </h3>
          <img 
            src="https://cdn.poehali.dev/projects/f5e8afe5-8b08-4867-8418-b357290294d3/files/bbd87ea6-4404-4a4b-9b80-aa7cb50162b5.jpg"
            alt="Логотип Формат - типографский концепт"
            className="w-full h-auto rounded-lg shadow-md"
          />
        </div>

      </div>
    </div>
  );
};

export default Index;
