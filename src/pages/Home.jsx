import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import hero from "../assets/banner.jpg";
import about1 from "../assets/about1.jpg";
import about2 from "../assets/about2.jpg";
import about3 from "../assets/about3.jpg";
import hero1 from "../assets/trixhero1.jpg";
import hero2 from "../assets/trixhero2.jpg";
import hero3 from "../assets/trixhero3.png";


function Home() {
    const [showButtons, setShowButtons] = useState(false);
    const [currentImage, setCurrentImage] = useState(0);
    const [currentHero, setCurrentHero] = useState(0);

    const aboutImages = [about1, about2, about3];
    const heroImages = [hero, hero1, hero2, hero3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prev) => {
                if (prev >= aboutImages.length) {
                    return 0;
                }
                return prev + 1;
            });
        }, 5000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentHero((prev) => (prev + 1) % heroImages.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [heroImages.length]);

    return (
        <>
            <Navbar />

            <section
                className="relative h-screen pt-20 overflow-hidden">
                <motion.div
                    key={currentHero}
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${heroImages[currentHero]})`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1.5 }}
                />

                {/* Gray Overlay */}
                <div className="absolute inset-0 bg-gray-800/70"></div>

                {/* Hero Content */}
                <div className="relative z-10 flex h-full items-center justify-center">
                    <motion.div
                        className="text-center text-white px-8"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-3xl md:text-4xl font-medium uppercase leading-tight">
                            CREATIVE DIGITAL AGENCY BASED IN GHANA
                        </h1>

                        {/* <p className="mt-6 text-xl md:text-xl max-w-xl mx-auto font-light">
                            We help you turn your ideas into reality with
                            creative designs and smart solutions.
                        </p> */}

                        {/* <motion.button onClick={() => setShowButtons(!showButtons)}
                            className="mt-8 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-md font-semibold transition"
                            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} >
                            START
                        </motion.button> */}

                        <motion.div
                            className="mt-16 flex w-full max-w-6xl mx-auto justify-between items-start gap-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="text-center">
                                <h3 className="text-lg md:text-xl font-semibold text-white hover:text-red-400 transition cursor-pointer">
                                    Bulk Printing
                                </h3>
                                <p className="mt-2 text-sm text-gray-300 max-w-[180px]">
                                    Learn who we are and what drives our creative vision.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg md:text-xl font-semibold text-white hover:text-red-400 transition cursor-pointer">
                                   Coperate Designs
                                </h3>
                                <p className="mt-2 text-sm text-gray-300 max-w-[180px]">
                                    Explore the digital services we provide for businesses.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg md:text-xl font-semibold text-white hover:text-red-400 transition cursor-pointer">
                                    Social Media Manangement
                                </h3>
                                <p className="mt-2 text-sm text-gray-300 max-w-[180px]">
                                    Discover some of our featured creative and branding work.
                                </p>
                            </div>

                            <div className="text-center">
                                <h3 className="text-lg md:text-xl font-semibold text-white hover:text-red-400 transition cursor-pointer">
                                    Contact
                                </h3>
                                <p className="mt-2 text-sm text-gray-300 max-w-[180px]">
                                    Let's discuss your next project and bring it to life.
                                </p>
                            </div>
                        </motion.div>

                    </motion.div>
                </div>
            </section>

            {/* ABOUT SECTION */}
            <section className="w-full bg-white">
                <div className="flex flex-col lg:flex-row min-h-[550px]">

                    {/* Left Side - Images */}
                    <div className="lg:w-3/5 h-[400px] lg:h-[650px] overflow-hidden">
                        <div className="relative w-full h-full overflow-hidden">
                            <motion.div
                                className="flex h-full"
                                animate={{
                                    x: `-${currentImage * 100}%`,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                            >
                                {[...aboutImages, aboutImages[0]].map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-full flex-shrink-0"
                                        style={{ minWidth: "100%" }}
                                    >
                                        <img
                                            src={image}
                                            alt={`About ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>

                    {/* Right Side - Text */}
                    <div className="lg:w-2/5 flex items-center px-8 lg:px-16 py-16">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                About Us
                            </h2>

                            <p className="mt-8 text-gray-600 leading-8">
                                Your paragraph goes here...
                            </p>

                            <p className="mt-6 text-gray-600 leading-8">
                                Your second paragraph goes here...
                            </p>
                        </div>
                    </div>

                </div>
            </section>
            {/* OUR WORK */}
            <section className="w-full bg-white">
                <div className="flex flex-col lg:flex-row min-h-[550px]">
                    {/* Left Side - Text */}
                    <div className="lg:w-2/5 flex items-center px-8 lg:px-16 py-16">
                        <div>
                            <h2 className="text-4xl font-bold text-gray-900">
                                About Us
                            </h2>

                            <p className="mt-8 text-gray-600 leading-8">
                                Your paragraph goes here...
                            </p>

                            <p className="mt-6 text-gray-600 leading-8">
                                Your second paragraph goes here...
                            </p>
                        </div>
                    </div>
                    {/* Right Side - Images */}
                    <div className="lg:w-3/5 h-[400px] lg:h-[650px] overflow-hidden">
                        <div className="relative w-full h-full overflow-hidden">
                            <motion.div
                                className="flex h-full"
                                animate={{
                                    x: `-${currentImage * 100}%`,
                                }}
                                transition={{
                                    duration: 1,
                                    ease: "easeInOut",
                                }}
                            >
                                {[...aboutImages, aboutImages[0]].map((image, index) => (
                                    <div
                                        key={index}
                                        className="w-full h-full flex-shrink-0"
                                        style={{ minWidth: "100%" }}
                                    >
                                        <img
                                            src={image}
                                            alt={`About ${index + 1}`}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}

export default Home;