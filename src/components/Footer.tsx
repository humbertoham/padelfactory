'use client'
import { useTranslation } from 'react-i18next';
import '../app/i18n'; // Import the i18n configuration





export default function Footer() {
    const { t } = useTranslation();
    return (
    <>
 

  
    <footer className="bg-white text-black py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img src="./images/logo.svg" alt="Padel Factory" className="w-32 mb-4" />
          <p className="text-gray-500">{t('slogan')}</p>
        </div>
        {/* About Section */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('about')}</h3>
          <p className="text-gray-500">{t('aboutus')}</p>
        </div>
        {/* Navigation Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('quick')}</h3>
          <ul className="space-y-2">
            <li><a href="#" className="text-gray-500 hover:text-white transition duration-300">{t('home')}</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition duration-300">{t('about')}</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition duration-300">{t('courts')}</a></li>
            <li><a href="#" className="text-gray-500 hover:text-white transition duration-300">{t('serv')}</a></li>

            <li><a href="#" className="text-gray-500 hover:text-white transition duration-300">{t('con')}</a></li>
          </ul>
        </div>
        {/* Contact Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">{t('con')}</h3>
          <ul className="space-y-2">
            <li className="text-gray-500">Email: contacto@padelfactorycourts.com</li>
            <li className="text-gray-500">{t('tel')} +52 1 221 159 1113</li>
          </ul>
        </div>
      </div>
      <div className="container mx-auto text-center mt-8 text-gray-600">
        &copy; {t('right')}
      </div>
    </footer>


    </>
    );
  }
  