import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import { Leva, useControls } from 'leva';
import { Suspense } from 'react';
import Button from '../components/Button';
import CanvasLoader from '../components/Loading';
import { HackerRoom } from './../components/HackerRoom';

function Hero() {

    const controls = useControls('HackerRoom', {
        positionX: {
            value: 0.1, // Default position X.
            min: -10,
            max: 10,
        },
        positionY: {
            value: -7.1, // Default position Y
            min: -10,
            max: 10,
        },
        positionZ: {
            value: 2.5, // Default position Z
            min: -10,
            max: 10,
        },
        scale: {
            value: 0.1, // Default scale
            min: 0.1,
            max: 10,
        },
        rotationX: {
            value: 0.0, // Default rotation X in radians
            min: -Math.PI,
            max: Math.PI,
        },
        rotationY: {
            value: -3.14, // Default rotation Y in radians (approximately -π)
            min: -Math.PI,
            max: Math.PI,
        },
        rotationZ: {
            value: 0.0, // Default rotation Z in radians
            min: -Math.PI,
            max: Math.PI,
        }
    });

    return (
        <section className="min-h-screen w-full flex flex-col relative">
            <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 gap-3">
                <p className="text-white sm:text-4xl md:text-5xl xl:text-6xl text-center text-3xl">
                    Hi, I am Sparsh <span className="waving-hand">👋</span>
                </p>
                <p className="text-white sm:text-5xl md:text-6xl xl:text-7xl text-center text-4xl font-bold text-gray-400">
                    Building Products & Brands
                </p>
            </div>
            <div className="w-full h-full absolute inset-0">
                <Leva />
                <Canvas className="w-full h-full mt-44">
                    <Suspense fallback={<CanvasLoader />}>
                        <PerspectiveCamera makeDefault position={[0, 0, 30]} />
                        <HackerRoom
                            position={[controls.positionX, controls.positionY, controls.positionZ]}
                            rotation={[controls.rotationX, controls.rotationY, controls.rotationZ]}
                            scale={[controls.scale, controls.scale, controls.scale]} // Ensure uniform scaling
                        />
                        <ambientLight intensity={1} />
                        <directionalLight position={[10, 10, 10]} intensity={0.5} />
                    </Suspense>
                </Canvas>

                <div className='absolute bottom-7 left-0 right-0 w-full z-10 x-space'>
                    <a href="#contact" className='w-fit'>
                        <Button name="Let's work together" isBeam containerClass="sm:w-fit sm:min-w-96" />
                    </a>

                </div>
            </div>
        </section>
    );
}

export default Hero;
