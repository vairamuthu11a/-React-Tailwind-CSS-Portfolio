


export default function Contact(){
    const config ={
        email:'vairamuthu14v@gmail.com',
        phone:'+919942367127'
    }
  return <section id="contact" className="flex flex-col   bg-secondary px-5 py-32 text-white"> 
  
  <div className="flex flex-col items-center">
   
    <h1 className="text-4xl text-white border-b-4 border-[#2b2d77] w-[140px] mb-5 font-bold">Contact</h1>
    <p className="pb-5">if you want to discuss more details, please Contact me </p>
    <p className="py-2"><span className="font-bold">Email : </span><a href="mailto:vairamuthu14v@gmail.com">{config.email} </a></p>
    <p className="py-2"><span className="font-bold">Mobile : </span>{config.phone} </p>
    
  </div>
  </section>
}