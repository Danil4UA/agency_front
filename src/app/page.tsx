"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { PlayCircle, MessageCircle } from 'lucide-react';
import SuccessDialog from '@/components/SuccessDialog';
import TelegramMessageForm from '@/components/TelegramMessageForm';

export default function Home() {
  const [showVideo, setShowVideo] = useState(false);
  const [isTelegramFormOpen, setIsTelegramFormOpen] = useState(false);
  const [isSuccessDialogOpened, setIsSuccessDialogOpened] = useState(false);

  const handleVideoClick = () => {
    setShowVideo(true);
  };

  const handleButtonClick = () => {
    setIsTelegramFormOpen(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          
          <div className="text-center mb-12">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              КАК НАШИ ЛИДГЕН ПРОЕКТЫ <br />
              <span className="text-orange-500">ПОЛУЧАЮТ СТАБИЛЬНЫЙ</span>  <br />
              ПОТОК КВАЛ КЛИЕНТОВ? <br />
              <Badge variant="destructive" className="text-lg md:text-2xl lg:text-3xl px-3 py-1 md:px-4 md:py-2 bg-orange-500 hover:bg-orange-600">
                ROMI - 250% +
              </Badge>
            </h1>
          </div>

          <Card className="mb-8 overflow-hidden shadow-xl">
            <CardContent className="p-0">
              <div className="relative">
                <div className="aspect-video bg-gradient-to-r from-gray-800 to-gray-900">
                  {!showVideo ? (
                    <div className="flex items-center justify-center h-full">
                      <div className="text-center">
                        <PlayCircle 
                          className="w-16 h-16 text-orange-500 mx-auto mb-2 cursor-pointer hover:text-orange-400 transition-colors" 
                          onClick={handleVideoClick}
                        />
                        <p className="text-white text-sm">Жми видео и узнай 👆</p>
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
            </CardContent>
          </Card>

          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              РАССКАЖИ О СВОЕМ ПРОЕКТЕ <br />
              И ПОЛУЧИ РЕШЕНИЯ УЖЕ НА ПЕРВОМ ЗВОНКЕ!
            </h2>
            
            <Button 
              size="lg" 
              className="cursor-pointer bg-orange-500 hover:bg-orange-600 text-white px-12 py-8 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              onClick={handleButtonClick}
            >
              <MessageCircle className="w-6 h-6 mr-3" />
              Связаться в Telegram
            </Button>
          </div>
        </div>
      </div>
      <TelegramMessageForm
        isOpen={isTelegramFormOpen}
        setIsOpen={setIsTelegramFormOpen}
      />
      <SuccessDialog 
        isOpen={isSuccessDialogOpened}
        setIsOpen={setIsSuccessDialogOpened}
        onClose={() => setIsSuccessDialogOpened(false)}
        title="Спасибо за ваше обращение. Мы с вами свяжемся в ближайшее время"
      />
    </div>
  );
}