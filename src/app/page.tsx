import Image from "next/image";

export default function Home() {
  return (
  <>
  <div className=" text-center justify-center p-20 mt-24">
  <Image className="m-auto" src="./images/logo.svg" width={1000} height={1000} alt="Padel Factory Courts"/>

  <h1 className="mt-14 txt font-bold text-4xl ">Coming soon...</h1>
  
  </div>
  
  </>
  );
}
