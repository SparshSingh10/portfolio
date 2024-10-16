import { Center, OrbitControls } from '@react-three/drei';
import { Canvas } from "@react-three/fiber";
import { Suspense, useState } from 'react';
import DemoComputer from '../components/DemoComputer.jsx';
import CanvasLoader from '../components/Loading.jsx';
import { myProjects } from '../constants/index.js';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const projectCount = myProjects.length;
function Project() {
  const [index,setIndex]=useState(0);

  const handleNavigate=(direction)=>{
     setIndex((ind)=>{
      if(direction=='previous')
          return ind===0 ? projectCount-1:ind-1;
        else
        return ind===projectCount-1 ? 0:ind+1;
     });
  }
  useGSAP(() => {
    gsap.fromTo(`.animatedText`, { opacity: 0 }, { opacity: 1, duration: 1, stagger: 0.2, ease: 'power2.inOut' });
  }, [index]);

  const currentProject = myProjects[index];

  return (
    <>
      <section className="c-space my-20">
        <p className="head-text">My Selected Work</p>

        <div className="grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full">
          <div className="flex flex-col gap-5 sm:p-10 py-10 px-5 shadow-2xl shadow-black-200 relative">
            <div className="absolute top-0 right-0">
              <img src={currentProject.spotlight} alt="spotlight" className="w-full h-96 object-cover rounded-xl" />
            </div>

            <div className="p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg">
              <img className="w-10 h-10 shadow-sm" src={currentProject.logo} alt="logo" />
            </div>

            <div className="flex flex-col gap-5 text-white my-5">
              <p>{currentProject.title}</p>
              <p>{currentProject.desc}</p>
              <p>{currentProject.subdesc}</p>
            </div>

            <div className="flex justify-between flex-wrap gap-5">
              <div className="flex items-center gap-3">
                <div><img src={currentProject.tags[0].path} alt="Tag 1" /></div>
                <div><img src={currentProject.tags[1].path} alt="Tag 2" /></div>
                <div><img src={currentProject.tags[2].path} alt="Tag 3" /></div>
              </div>
              <a className="flex items-center gap-2 cursor-pointer text-white-600" href={currentProject.href} target="_blank" rel="noreferrer"> <p>Check Live Site</p> <img src="/assets/arrow-up.png" alt="arrow" className="w-3 h-3" /></a>
            </div>

            {/* Keep arrow buttons inside the same flex container */}
            <div className="flex justify-between items-center mt-7">
              <button className="arrow-btn" onClick={()=>handleNavigate('previous')}>
                <img src="/assets/left-arrow.png" alt="left arrow" />
              </button>
              <button className="arrow-btn" onClick={()=> handleNavigate('next')}>
                <img src="/assets/right-arrow.png" alt="right arrow" />
              </button>
            </div>
          </div>

          <div className="border border-black-300 bg-black-200 rounded-lg h-96 md:h-full">
            <Canvas>
              <ambientLight intensity={Math.PI} />
              <directionalLight position={[10, 10, 5]} />
              <Center>
                <Suspense fallback={<CanvasLoader />}>
                  <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>
                    <DemoComputer texture={currentProject.texture} />
                  </group>
                </Suspense>
                <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
              </Center>
            </Canvas>
          </div>
        </div>
      </section>

    </>
  )
}
export default Project

