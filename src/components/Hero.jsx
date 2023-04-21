import { motion } from 'framer-motion';
import {styles} from '../styles';
import me from '../assets/me.jpg';
import linkedinLogo from '../assets/logo1.png';
import githubLogo from '../assets/logo2.png';
import mediumLogo from '../assets/logo3.png';
import cv from '../assets/CVsalih.pdf'; // import your CV file

const Hero = () => {

  const handleDownloadCV = () => {
    window.open(cv, '_blank'); // open the PDF file in a new tab
  }

  return (
    <section className="relative w-full h-screen mx-auto">
      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className="flex flex-col justify-center items-center mt-5">
          <img src={me} alt="me" className="rounded-full w-64 h-68 border-4 border-blue-500" style={{ borderColor: "rgb(0, 204, 2550)" }} />

          <div className="w-5 h-5 rounded-full bg-[#046380]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>Hi, I'm <span className="text-[#047e80]">Salih</span></h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>I analyze data, visualize <br className="sm:block hidden" />
          it and turn them into meaningful <br className="sm:block hidden" /> information with appropriate 
          dashboards!
          </p>
          <button className="bg-[#047e80] text-white py-2 px-4 rounded mt-4" /*onClick={handleDownloadCV}*/ >Download My CV!</button> {/* add the download button */}
        </div>
      </div>
      <div className="absolute xs:bottom-60 bottom-32 w-full flex flex-col items-center">
        <h2 className="text-white-100 mb-4">You can follow me on these platforms also!</h2>
        <div className="flex justify-center items-center gap-4">
          <a href="https://www.linkedin.com/in/salih-abdullah-kilic/">
            <img src={linkedinLogo} alt="LinkedIn" className="w-25 h-24" />
          </a>
          <a href="https://github.com/Salih2000?tab=repositories/">
            <img src={githubLogo} alt="GitHub" className="w-25 h-24" />
          </a>
          <a href="https://medium.com/">
            <img src={mediumLogo} alt="Medium" className="w-25 h-24" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero;
