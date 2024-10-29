import DealForm from "@/components/DealForm";

export default function budget() {
  return <div className="bg-indigo-500 justify-center center">
    <div>
  
    <h1 className="font-sans text-3xl not-italic font-bold tracking-tight ">Welcome to Spend Guard</h1>
    <p  className="mb-8 my-6">Let's get started by setting up your preferences to tailor your budgeting experience.</p>
    </div>
    { <div className="flex mx-auto flex-col items-center justify-center center p-24 bg-slate-50 text-black mx-5 my-7 rounded-lg"><DealForm /></div> }
    
    
    
  </div>

}