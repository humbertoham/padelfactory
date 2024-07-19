'use client';
import { useTranslation } from 'react-i18next';
import '../app/i18n'; // Import the i18n configuration


   
  export default function Court() {
    const { t } = useTranslation();
    return (<>
   <div className="max-w-screen-xl mul  mx-auto p-5 sm:p-10 md:p-16">

   <h2 className="mb-4 text-3xl sm:text-4xl mx-6 text-black text-center font-bold">{t('courts')}</h2>
   <hr
  className="mb-16 h-1 border-t-0 hb bg-black max-w-16 mx-auto" />


<div className="grid grid-cols-1 md:grid-cols-2 col-auto lg:grid-cols-3 gap-10">

    <div className="rounded-3xl  overflow-hidden bg-zinc-100 shadow-lg flex flex-col">
        <a href="/courts#soft"></a>
        <div className="relative"><a href="/courts#soft">
                <img className="w-full"
                    src="./images/image1.png"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
          
        </div>
        <div className="px-6 py-4 bg-zinc-100 mb-auto">
            <a href="/courts#soft"
                className="font-bold text-2xl text-center text-gray-700 pblue transition duration-500 ease-in-out inline-block mb-2">SOFT</a>
            <p className="text-gray-500 text-md">
                {t('soft')}
            </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-zinc-100">
        <a
                href="/courts#soft"
                className=" transition rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold text-white bblue shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>
          
        </div>
    </div>



    <div className="rounded-3xl  overflow-hidden bg-zinc-100 shadow-lg flex flex-col">
        <a href="/courts#open"></a>
        <div className="relative"><a href="/courts#open">
                <img className="w-full"
                    src="./images/image2.png"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 py-4 bg-zinc-100 mb-auto">
            <a href="/courts#open"
                className="font-bold text-2xl text-center text-gray-700 pblue transition duration-500 ease-in-out inline-block mb-2">OPEN</a>
            <p className="text-gray-500 text-md">
            {t('open')}</p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-zinc-100">
        <a
                href="/courts#open"
                className=" transition rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold bblue text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>

            
        </div>
    </div>


    
    <div className="rounded-3xl  overflow-hidden bg-zinc-100 shadow-lg flex flex-col">
        <a href="/courts#master"></a>
        <div className="relative"><a href="/courts#master">
                <img className="w-full"
                    src="./images/image3.png"
                    alt="Sunset in the mountains"/>
                <div
                    className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                </div>
            </a>
        </div>
        <div className="px-6 bg-zinc-100 py-4 mb-auto">
            <a href="/courts#master"
                className="font-bold text-2xl text-center text-gray-700 pblue transition duration-500 ease-in-out inline-block mb-2">MASTER</a>
            <p className="text-gray-500 text-md">
            {t('master')} </p>
        </div>
        <div className="px-6 py-3 flex flex-row items-center justify-between bg-zinc-100">
        <a
                href="/courts#master"
                className=" transition rounded-xl block mx-auto my-3 bt px-3.5 py-2.5 text-md font-semibold bblue text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-"
              >
                Más información
              </a>

           
        </div>
    </div>
   
   


</div>

</div>
      </>
    );
  }