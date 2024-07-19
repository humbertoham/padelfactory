// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources: {
      en: {
        translation: {
          home: 'Home',
          about: 'About Us',
          courts: 'Courts',
          serv: 'Services',
          con: 'Contact Us',
          num: 'Number',
          right: '2024 Padel Factory Courts. All rights reserved.',
          tel:'Phone:',
          quick:'Quick Links',
          vision:'Vision',
          mision:'Mision',
          slogan:'We Create the Court of your Dreams.',
          aboutt:'Padel Factory Courts was born out of a passion for transforming the sport of padel, offering high-quality courts and customized designs that meet the needs and dreams of our clients. With years of experience in the industry, our team of professionals is dedicated to delivering exceptional projects, ensuring satisfaction and excellence in every installation.',
          misiont:'Our mission is to design, build, and maintain the highest quality padel courts, providing our clients with a superior sports experience. We are committed to constant innovation and offering customized solutions that exceed expectations.',
          visiont:'Our vision is to be world leaders in the creation of padel courts, recognized for our quality, innovation, and commitment to customer satisfaction. We aspire to expand our global presence and positively impact the padel community.',
          abouttt:'At Padel Factory Courts, we believe in the importance of attention to detail and constant innovation. From selecting the best materials to implementing the latest construction technologies, every project is an opportunity to exceed industry standards and deliver a product that reflects our commitment to quality.',
          aboutus:'Learn more about Padel Factory Courts, our mission, and the high-quality padel courts we provide.',
          canch:'WE MAKE THE COURT',
          dreams:'of your Dreams',
          soft:'Our most basic version, designed with a lighter structure by using less steel in the ironwork modules, making it a lighter court that is easy to assemble. Ideal for those seeking an economical option without sacrificing functionality and quality of play.', 
          open:'A semi-panoramic court that offers greater visibility for spectators due to its glass ribs at the ends. This option combines robustness with a more open design, providing a better experience for both players and the audience.', 
          master:'A panoramic court that ensures complete visibility of the game from any angle. Designed to offer the best viewing experience, this court is perfect for events and competitions where quality and game clarity are essential.', 
          us:'About Us',
          padel:'At Padel Factory Courts, we specialize in the manufacturing and sale of high-quality padel courts. We use top-notch materials and advanced construction techniques to ensure durability and exceptional performance. Whether you are looking to install a single court or multiple courts, our expert team is dedicated to delivering customized solutions that meet your specific needs. Experience the perfect blend of innovation and craftsmanship with Padel Factory Courts.',
        },
      },
      es: {
        translation: {
          home: 'Inicio',
          about: 'Acerca De',
          courts: 'Canchas',
          serv: 'Servicios',
          con: 'Contáctanos',
          num: 'Número',
          right: '2024 Padel Factory Courts. Derechos Reservados.',
          tel:'Teléfono:',
          quick:'Navegación',
          vision:'Visión',
          mision:'Misión',
          slogan:'Hacemos la Cancha de tus Sueños.',
          aboutt:'Padel Factory Courts nació con la pasión de transformar el deporte del padel, ofreciendo canchas de alta calidad y diseños personalizados que se adaptan a las necesidades y sueños de nuestros clientes. Con años de experiencia en la industria, nuestro equipo de profesionales se dedica a entregar proyectos excepcionales, garantizando satisfacción y excelencia en cada instalación.',
          misiont:'Nuestra misión es diseñar, construir y mantener canchas de padel de la más alta calidad, proporcionando a nuestros clientes una experiencia deportiva superior. Nos comprometemos a innovar constantemente y a ofrecer soluciones personalizadas que superen las expectativas.',
          visiont:'Nuestra visión es ser líderes mundiales en la creación de canchas de padel, reconocidos por nuestra calidad, innovación y compromiso con la satisfacción del cliente. Aspiramos a expandir nuestra presencia global y a influir positivamente en la comunidad del padel.',
          abouttt:'En Padel Factory Courts, creemos en la importancia de la atención al detalle y la innovación constante. Desde la selección de los mejores materiales hasta la implementación de las últimas tecnologías en construcción, cada proyecto es una oportunidad para superar los estándares de la industria y ofrecer un producto que refleje nuestro compromiso con la calidad.',
          aboutus:'Conozca más sobre Padel Factory Courts, nuestra misión y las canchas de pádel de alta calidad que ofrecemos.',
          canch:'HACEMOS LA CANCHA',
          dreams:'de tus Sueños',
          soft:'Nuestra versión más básica, diseñada con una estructura de herrería que utiliza menos acero en los módulos, lo que resulta en una cancha más ligera y fácil de montar. Ideal para quienes buscan una opción económica sin sacrificar la funcionalidad y calidad del juego.',
          open:'Cancha semi panorámica que ofrece una mayor visibilidad para los espectadores gracias a sus costillas de cristal en las cabeceras. Esta opción combina robustez y un diseño más abierto, permitiendo una mejor experiencia tanto para los jugadores como para el público.',
          master:'Cancha panorámica que garantiza una visibilidad completa del juego desde cualquier ángulo. Diseñada para ofrecer la mejor experiencia de visualización, esta cancha es perfecta para eventos y competiciones donde la calidad y la claridad del juego son esenciales.',
          us:'Sobre Nosotros',
          padel:'En Padel Factory Courts, somos especialistas en la fabricación y venta de canchas de padel de alta calidad. Utilizamos materiales de primera clase y tecnología avanzada para asegurar que cada cancha cumpla con los estándares más altos de durabilidad y rendimiento. Ya sea que estés buscando instalar una cancha en tu club, comunidad o residencia privada, ofrecemos soluciones personalizadas que se adaptan a tus necesidades y espacio. Nuestro compromiso es proporcionar canchas que no solo mejoren la experiencia de juego, sino que también resistan el paso del tiempo y las condiciones climáticas adversas',
        
        
        },
      },
    },
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;