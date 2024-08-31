import ResumeImg from "../assets/Resumeimg.jpg";



export default function Resume() {

  const config ={
    link: 'https://vairamuthu.tiiny.site'
  }
    

  return <section id="resume" className="flex flex-col md:flex-row bg-ternary px-5">
    <div className="py-5 md:w-1/2 flex justify-center md:justify-end">
      <img className="h-[300px] px-10" src={ResumeImg} />
    </div>
    <div className="md:w-1/2 flex justify-center">
      <div className="flex flex-col justify-center text-white">
        <h1 className="text-4xl  border-b-4 border-[#5551E3] w-[140px] mb-5 font-bold">Resume</h1>
        <p className="md:pb-5 pb-3 pe-3">You can view my resume <a className="btn" target="_blank" href={config.link}>Download</a></p>

      </div>
    </div>
  </section>
}