'use client'
import { useTranslation } from 'react-i18next';
import '../app/i18n'; // Import the i18n configuration




export default function Us() {
    const { t } = useTranslation();
    return (
      <>
          
          <div className="  max-w-6xl text-gray-600 mx-auto bg-zinc-200 usb rounded-3xl my-10 p-5  grid grid-cols-1 md:grid-cols-2 ">
          <div className=" md:ml-16 max-w-70 md:my-20 mb-0 sm:mt-0 mt-16 md:px-0 md:py-0  px-10 flex flex-col"> 
          <h1 className="font-bold text-4xl text-white">{t('us')}</h1>
          <p className='my-10 text-gray-300' >{t('aboutt')}</p>
          <p className='text-gray-300'>{t('abouttt')}</p>
          </div>
          <div className=" md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto sm:px-0 md:px-5 md:py-0 pb-5 flex flex-col"> 
            
            <img src="./images/us2.jpeg" className="rounded-3xl"/>
          
          
          
          </div>

       


</div>

<div className="  max-w-6xl mx-auto rounded-3xl mt-10  grid grid-cols-1 md:grid-cols-2 ">
<div className=" md:ml-16 max-w-70 md:my-20 mb-0 mt-16 mx-auto  md:px-5 md:py-0 pb-5  px-10 flex flex-col"> 
            
            <img src="./images/vision.JPG" className="rounded-3xl"/>
          
          
          
          </div>

          <div className=" md:ml-16 max-w-70 md:mt-20 mb-0 mt-16 md:px-0 md:py-0 text-gray-600 px-10 flex flex-col"> 
          <h1 className="font-bold text-4xl text-gray-900">{t('mision')}</h1>
          <p className="my-10">{t('misiont')}</p>
          <h1 className="font-bold text-4xl text-gray-900">{t('vision')}</h1>
          <p className="my-10">{t('visiont')}</p>
          </div>
         
       


</div>


  
      
      
      
      </>
    )
  }
  