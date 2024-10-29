import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Router } from "next/router";

//  export const metadata: Metadata = {
//   title: "Main-Page"
      
     

 
export default function mainPage() {
  return <div className="grid justify-center center bg-gray-100">
    <h1 className="font-sans text-4xl not-italic font-bold tracking-tight mt-10">A smarter way to budgeting , saving, and investing.</h1>
  <h3 className="font-sans text-xl not-italic font-normal mt-6" >Simplifying budgeting, saving, and investing to help you reach your financial goals.</h3>

  <Link  href="/budget"><button  className="bg-blue-700 text-slate-100 my-10 text-lg px-4 py-3 mx-12 rounded-lg shadow-2xl shadow-black" >Get Started</button></Link>
  
  
  <Image className="my-10" src="/balance.jpg" width={500} height={800} alt=""></Image>

  <h1 className="font-sans text-3xl not-italic font-bold tracking-tight my-10">Spend Guard is your all-in-one Financial Tool</h1>
  
  <div className="rounded-lg bg-sky-100 mx-0 border-solid shadow shadow-blue-500/50">
  <Image className="my-10 ml-5" src="/budgeting.jpg" width={70} height={70} alt=""></Image>
    <h2 className="font-sans text-xl not-italic font-bold">Smart Budgeting</h2>
    <h3>Leverage AI- driven insights to create a budget that aligns with your lifestyle and financial goals.</h3>
  </div>

  <div className="rounded-lg bg-sky-100 mx-0 my-5 border-solid shadow shadow-blue-500/50">
  <Image className="my-10" src="/plans.jpg" width={70} height={70} alt=""></Image>
    <h2 className="font-sans text-xl not-italic font-bold">Customizable Plans</h2>
    <h3>Choose from savings-heavy, investment-heavy, or balanced plans to tailor your financial strategy.</h3>
  </div>

  <div className="rounded-lg bg-sky-100 mx-0 my-5 border-solid shadow shadow-blue-500/50">
  <Image className="my-10" src="/insights.jpg" width={70} height={70} alt=""></Image>
    <h2 className="font-sans text-xl not-italic font-bold">Real-Time Insights</h2>
    <h3>Track your spending and savings with real-time updates and analytics.</h3>
  </div>

  <div className="my-10">
    <p className="font-sans text-lg not-italic font-light">FOR YOUR FUTURE</p>
    <h1 className="font-sans text-3xl not-italic font-bold tracking-tight">Better financial management</h1>
    <p className="mb-8">Manage effectively your finances with spend guard budgeting while exploring other features to give you inform decisions on your finances. </p>
    <Image src="/my-budget.jpg" width={200} height={200} alt=""></Image>
  </div>

  <div className="h-screen w-full justify-center items-center">
    <h1>Get started with Spend Guard in 4 easy steps</h1>
    <ul className=" grid shadow-xl rounded-xl px-2.5 relative">
      <li className="py-0 px-5 max-w-full row-auto text-center relative my-3">
        <span className="h-16 w-16 rounded-full font-extrabold text-3xl mx-auto my-0 relative z-10 float-start border-solid bg-slate-500 content-center text-slate-200">1</span>
        <span>Select Get Started</span> <br/>
        <Link href="/budget"><button className="bg-blue-700 text-slate-100 my-10 text-lg px-12 py-3 mx-20 rounded-lg shadow-2xl shadow-black justify-center">Get Started</button></Link>
        </li>
      <li className="py-0 px-5 max-w-full row-auto text-center relative my-3">
        <span className="h-16 w-16 rounded-full font-extrabold text-3xl mx-auto my-0 relative z-10 float-start border-solid bg-slate-500 content-center text-slate-200">2</span>
        <span>Fill out the form</span>
        <p>Enter basic details of your finances to tailor your experience based on your focus.</p>
      </li>
      <li className="py-0 px-5 max-w-full row-auto text-center relative my-3">
        <span className="h-16 w-16 rounded-full font-extrabold text-3xl mx-auto my-0 relative z-10 float-start border-solid bg-slate-500 content-center text-slate-200 content-none">3</span>
        <span>See your budget</span>
        <p>See Ai driven metrics and result based on the information you provided</p>
      </li>
      <li className="py-0 px-5 max-w-full row-auto text-center relative my-3">
        <span className="h-16 w-16 rounded-full font-extrabold text-3xl mx-auto my-0 relative z-10 float-start border-solid bg-slate-500 content-center text-slate-200" >4</span>
        <span>Download the budget plan</span>
        <p>Get a copy of your result, for easy reference for future use.</p>
      </li>
    </ul>
  </div>

  <div className=" bg-slate-950 grid justify-center items-center text-slate-50">
    <h1 className="font-sans text-3xl not-italic font-bold ">Ready to Transform Your Finances?</h1>
    <Link href="/budget"><button  className="bg-blue-700 text-slate-100 my-10 text-lg px-12 py-3 mx-20 rounded-lg shadow-2xl shadow-black justify-center" >Get Started</button></Link>
  </div>
  
  </div>
  

}

