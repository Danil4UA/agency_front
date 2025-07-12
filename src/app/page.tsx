"use client";

import React, { useState } from 'react';
import { CheckCircle, MessageCircle, Play, Star } from 'lucide-react';
import TelegramMessageForm from '@/components/TelegramMessageForm';

export default function Home() {
  const [isTelegramFormOpen, setIsTelegramFormOpen] = useState(false);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleButtonClick = () => {
    setIsTelegramFormOpen(true);
  };

  const handleVideoPlay = () => {
    setIsVideoPlaying(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Star className="w-4 h-4 mr-2" />
              Проверено на 100+ проектах
            </div>
            
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              КАК НАШИ ЛИДГЕН ПРОЕКТЫ <br />
              <span className="text-orange-500">ПОЛУЧАЮТ СТАБИЛЬНЫЙ</span> <br />
              ПОТОК КВАЛ КЛИЕНТОВ?
            </h1>
            
            <div className="inline-block bg-orange-500 text-white text-lg md:text-2xl lg:text-3xl px-6 py-3 rounded-xl font-bold shadow-lg transform -rotate-2 hover:rotate-0 transition-transform duration-300">
              ROMI - 250% +
            </div>
          </div>
           <div className="mb-12 overflow-hidden shadow-2xl rounded-2xl">
            <div className="relative">
              <div className="aspect-video bg-gradient-to-r from-gray-800 to-gray-900">
                {!isVideoPlaying ? (
                  <div 
                    className="absolute inset-0 flex items-center justify-center cursor-pointer group"
                    onClick={handleVideoPlay}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
                      <img 
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&h=720&q=80"
                        alt="Превью видео"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="relative z-10 bg-white/90 backdrop-blur-sm rounded-full p-6 group-hover:bg-white group-hover:scale-110 transition-all duration-300 shadow-xl">
                      <Play className="w-12 h-12 text-orange-500 ml-1" fill="currentColor" />
                    </div>
                    
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <h3 className="text-xl md:text-2xl font-bold mb-2">
                        Реальный кейс: От 0 до 250% ROMI за 3 месяца
                      </h3>
                      <p className="text-gray-200 text-sm md:text-base">
                        Узнайте, как мы помогли проекту увеличить продажи в 3.5 раза
                      </p>
                    </div>
                  </div>
                ) : (
                  <iframe
                    width="100%"
                    height="100%"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&controls=1&rel=0"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                )}
              </div>
            </div>
          </div>
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              РАССКАЖИ О СВОЕМ ПРОЕКТЕ
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              И ПОЛУЧИ РЕШЕНИЯ УЖЕ НА ПЕРВОМ ЗВОНКЕ!
            </p>
            
            <div className="space-y-4">
              <button 
                className="bg-orange-500 hover:bg-orange-600 text-white px-12 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 flex items-center justify-center mx-auto"
                onClick={handleButtonClick}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Связаться в Telegram
              </button>
              
              <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                <span className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                  Ответ в течение 30 минут
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <TelegramMessageForm
        isOpen={isTelegramFormOpen}
        setIsOpen={setIsTelegramFormOpen}
      />
    </div>
  );
}