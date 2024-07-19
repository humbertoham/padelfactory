
'use client'
import { useTranslation } from 'react-i18next';
import '../app/i18n'; // Import the i18n configuration




export default function Hero() {
    const { t } = useTranslation();
  return (
  <>
   <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
      >
        <source src="/videos/padel-court.mp4" type="video/mp4" />
        Tu navegador no soporta la reproducción de videos.
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center w-full h-full text-center text-white bg-black bg-opacity-50">
        <h1 className="text-6xl font-bold hro">{t('canch')}</h1>
        <p className="qiwt "> {t('dreams')}</p>
      </div>
    </div>
  </>
  );
}
