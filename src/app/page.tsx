// import Image from "next/image";
import SideBar from '@/app/component/SideBar/SideBar';
import {HeroSection} from '@/app/component/HeroSection/HeroSection';
import  Cards  from '@/app/component/Cards/Cards'
import {HowItWorks} from '@/app/component/HowItWorks/HowItWorks'
import RegisterForm from '@/app/component/RegisterForm/RegisterForm';
// import Footer from '@/app/component/Footer/Footer';
import { Testnomial } from '@/app/component/Tesnomial/Testnomial';



export default function Home() {
  return (
   <div>
    
    <HeroSection/>
    <Cards/>
    <HowItWorks/>
    <RegisterForm/>
  
    
    <Testnomial/>
   
    
   </div>
  );
}
