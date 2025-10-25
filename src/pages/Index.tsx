import { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedGradient, setSelectedGradient] = useState(0);

  const gradients = [
    {
      name: 'Океан',
      from: '#0EA5E9',
      via: '#0284C7',
      to: '#1E40AF',
      angle: '135deg'
    },
    {
      name: 'Закат',
      from: '#F97316',
      via: '#EF4444',
      to: '#DC2626',
      angle: '180deg'
    },
    {
      name: 'Аврора',
      from: '#8B5CF6',
      via: '#D946EF',
      to: '#EC4899',
      angle: '90deg'
    },
    {
      name: 'Лес',
      from: '#10B981',
      via: '#059669',
      to: '#047857',
      angle: '45deg'
    }
  ];

  const currentGradient = gradients[selectedGradient];

  return (
    <div className="min-h-screen bg-slate-950 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="text-center space-y-4 animate-fade-in">
          <h1 
            className="text-6xl font-bold bg-gradient-to-r from-[#0EA5E9] via-[#0284C7] to-[#1E40AF] bg-clip-text text-transparent"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            ФОРМАТ
          </h1>
          <p className="text-xl text-slate-400" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
            Градиент как символ современности и динамики
          </p>
        </div>

        <Card 
          className="bg-slate-900 p-24 border-0 shadow-2xl overflow-hidden relative group"
        >
          <div 
            className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-700"
            style={{
              background: `linear-gradient(${currentGradient.angle}, ${currentGradient.from}, ${currentGradient.via}, ${currentGradient.to})`
            }}
          />
          
          <div className="relative flex flex-col items-center justify-center space-y-8">
            <div className="relative">
              <h2 
                className="text-[140px] font-black leading-none select-none transition-all duration-700 group-hover:tracking-wider"
                style={{ 
                  fontFamily: 'Montserrat, sans-serif',
                  background: `linear-gradient(${currentGradient.angle}, ${currentGradient.from}, ${currentGradient.via}, ${currentGradient.to})`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text'
                }}
              >
                ФОРМАТ
              </h2>
              
              <div 
                className="absolute -bottom-4 left-0 right-0 h-2 rounded-full blur-sm transition-all duration-700"
                style={{
                  background: `linear-gradient(90deg, ${currentGradient.from}, ${currentGradient.via}, ${currentGradient.to})`
                }}
              />
            </div>

            <p 
              className="text-lg tracking-[0.4em] uppercase font-light"
              style={{ 
                fontFamily: 'Montserrat, sans-serif',
                background: `linear-gradient(90deg, ${currentGradient.from}, ${currentGradient.to})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              Типография
            </p>
          </div>
        </Card>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {gradients.map((gradient, index) => (
            <Card
              key={index}
              className="bg-slate-900 p-6 cursor-pointer transition-all duration-300 border-0 hover:scale-105 hover:shadow-2xl group"
              onClick={() => setSelectedGradient(index)}
              style={{
                boxShadow: selectedGradient === index ? `0 0 40px ${gradient.from}40` : 'none'
              }}
            >
              <div className="space-y-4">
                <div 
                  className="w-full h-24 rounded-lg transition-all duration-500 group-hover:scale-105"
                  style={{
                    background: `linear-gradient(${gradient.angle}, ${gradient.from}, ${gradient.via}, ${gradient.to})`
                  }}
                />
                <div className="space-y-2">
                  <p 
                    className="text-sm font-semibold"
                    style={{ 
                      fontFamily: 'Montserrat, sans-serif',
                      background: `linear-gradient(90deg, ${gradient.from}, ${gradient.to})`,
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      backgroundClip: 'text'
                    }}
                  >
                    {gradient.name}
                  </p>
                  <div className="flex items-center space-x-1">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: gradient.from }} />
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: gradient.via }} />
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: gradient.to }} />
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-slate-900 p-8 border-0 shadow-xl group hover:shadow-2xl transition-all">
            <div className="space-y-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #0EA5E9, #1E40AF)'
                }}
              >
                <Icon name="TrendingUp" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Динамика
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Плавные цветовые переходы создают эффект движения и прогресса
              </p>
            </div>
          </Card>

          <Card className="bg-slate-900 p-8 border-0 shadow-xl group hover:shadow-2xl transition-all">
            <div className="space-y-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #8B5CF6, #EC4899)'
                }}
              >
                <Icon name="Sparkles" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Современность
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Градиенты — актуальный тренд цифрового дизайна 2025 года
              </p>
            </div>
          </Card>

          <Card className="bg-slate-900 p-8 border-0 shadow-xl group hover:shadow-2xl transition-all">
            <div className="space-y-4">
              <div 
                className="w-12 h-12 rounded-xl flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #10B981, #047857)'
                }}
              >
                <Icon name="Layers" size={24} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                Глубина
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Многослойность градиента символизирует профессиональную печать
              </p>
            </div>
          </Card>
        </div>

        <Card className="bg-slate-900 p-10 border-0 shadow-xl">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white text-center" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Градиентная палитра
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Основной градиент</p>
                  <div className="h-32 rounded-lg" style={{
                    background: 'linear-gradient(135deg, #0EA5E9 0%, #0284C7 50%, #1E40AF 100%)'
                  }} />
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    <div className="space-y-1">
                      <div className="w-full h-8 rounded" style={{ backgroundColor: '#0EA5E9' }} />
                      <p className="text-slate-400 text-center">#0EA5E9</p>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-8 rounded" style={{ backgroundColor: '#0284C7' }} />
                      <p className="text-slate-400 text-center">#0284C7</p>
                    </div>
                    <div className="space-y-1">
                      <div className="w-full h-8 rounded" style={{ backgroundColor: '#1E40AF' }} />
                      <p className="text-slate-400 text-center">#1E40AF</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Дополнительные градиенты</p>
                  <div className="space-y-2">
                    <div className="h-12 rounded-lg" style={{
                      background: 'linear-gradient(90deg, #F97316, #EF4444, #DC2626)'
                    }} />
                    <div className="h-12 rounded-lg" style={{
                      background: 'linear-gradient(90deg, #8B5CF6, #D946EF, #EC4899)'
                    }} />
                    <div className="h-12 rounded-lg" style={{
                      background: 'linear-gradient(90deg, #10B981, #059669, #047857)'
                    }} />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="space-y-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Типографика с градиентом</p>
                  <div className="bg-slate-950 rounded-lg p-6 space-y-4">
                    <h1 
                      className="text-5xl font-black"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        background: 'linear-gradient(135deg, #0EA5E9, #1E40AF)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      ФОРМАТ
                    </h1>
                    <h2 
                      className="text-2xl font-semibold"
                      style={{
                        fontFamily: 'Montserrat, sans-serif',
                        background: 'linear-gradient(90deg, #0EA5E9, #0284C7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text'
                      }}
                    >
                      Типография
                    </h2>
                    <p className="text-sm text-slate-400">
                      Текст с градиентом привлекает внимание и создает премиальное впечатление
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  <p className="text-xs text-slate-500 uppercase tracking-wider">Углы градиента</p>
                  <div className="grid grid-cols-3 gap-2">
                    <div className="space-y-2">
                      <div className="h-16 rounded-lg" style={{
                        background: 'linear-gradient(0deg, #0EA5E9, #1E40AF)'
                      }} />
                      <p className="text-xs text-slate-500 text-center">0°</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 rounded-lg" style={{
                        background: 'linear-gradient(90deg, #0EA5E9, #1E40AF)'
                      }} />
                      <p className="text-xs text-slate-500 text-center">90°</p>
                    </div>
                    <div className="space-y-2">
                      <div className="h-16 rounded-lg" style={{
                        background: 'linear-gradient(135deg, #0EA5E9, #1E40AF)'
                      }} />
                      <p className="text-xs text-slate-500 text-center">135°</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-slate-900 p-10 border-0 shadow-xl overflow-hidden relative">
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              background: 'linear-gradient(135deg, #0EA5E9, #0284C7, #1E40AF)',
              animation: 'gradient 15s ease infinite',
              backgroundSize: '200% 200%'
            }}
          />
          
          <div className="relative space-y-6 text-center">
            <h3 className="text-2xl font-semibold text-white" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              Файлы для скачивания
            </h3>
            <p className="text-sm text-slate-400" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
              Все форматы с сохранением градиентов
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              {['SVG', 'PNG', 'EPS', 'AI'].map((format) => (
                <Button 
                  key={format}
                  className="group relative overflow-hidden"
                  style={{
                    background: 'linear-gradient(135deg, #0EA5E9, #1E40AF)',
                    border: 'none'
                  }}
                >
                  <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Icon name="Download" size={16} className="mr-2 relative z-10" />
                  <span className="relative z-10">{format}</span>
                </Button>
              ))}
            </div>
          </div>
        </Card>

      </div>

      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
      `}</style>
    </div>
  );
};

export default Index;
