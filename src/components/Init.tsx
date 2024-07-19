
'use client'
import { useTranslation } from 'react-i18next';
import '../app/i18n'; // Import the i18n configuration





export default function Init() {
    const { t } = useTranslation();
    return (
      <>
          
          <div className="  max-w-6xl mx-auto mb-10 text-gray-600 grid grid-cols-1 md:grid-cols-2 ">
            
          <div className=" md:ml-16 max-w-70 md:my-20 mb-0 mt-16  md:px-0 md:py-0  px-10 flex flex-col"> 
            
            <img src="./images/init.JPG" className="rounded-3xl"/>
          
          
          
          </div>

          <div className="md:ml-16 ml-0 max-w-70 md:my-20 mb-0 mt-16  md:px-0 md:py-0  px-10 flex flex-col"> 
          <h1 className="font-bold text-4xl text-gray-900">Padel Factory Courts</h1>
          <p className="my-10">{t('padel')}</p>
        
          <div>
          
          </div>
          </div>


</div>
  

      
      
      </>
    )
  }
  