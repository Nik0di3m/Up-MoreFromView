import { AnimatePresence, motion } from 'framer-motion'
import Image from 'next/image'

const Home = () => {
    const animation = {
        visible: {
            opacity: 1,
            y: 0,
        },
        hidden: {
            opacity: 0,
            y: 40,
        },
    }
    return (
        <div className="lg:bg-hero-pattern bg-cover h-screen flex flex-col w-screen lg:pl-24">
            <div className="relative w-full h-3/4 md:h-1/2 lg:hidden">
                <Image
                    src="/bg_image.jpg"
                    alt="sdf"
                    layout="fill"
                    objectFit="cover"
                />
            </div>
            <AnimatePresence exitBeforeEnter>
                <motion.div
                    variants={animation}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 0.7 }}
                    className="bg-[#00c35b] flex flex-col px-7 py-3 lg:w-1/2 2xl:w-1/3 h-auto lg:space-y-10 lg:my-auto"
                >
                    <h1 className="text-[#1d1d19] text-2xl lg:text-4xl font-extrabold">
                        EKOPARK
                    </h1>
                    <h1 className="text-3xl font-extrabold lg:text-5xl text-white">
                        Nowy etap inwestycji U Przybyszewskiego
                    </h1>
                    <h2 className="text-xl font-medium lg:text-3xl text-white my-2">
                        Wybierz jako pierwszy!
                    </h2>
                    <form className="flex flex-col space-y-[1px] lg:space-y-3">
                        <div className="space-y-[1px] lg:flex lg:space-y-0 lg:space-x-3">
                            <input
                                type="text"
                                placeholder="Imię i nazwisko"
                                required
                                className="w-full h-8 px-2 bg-white placeholder-green-600/90 outline-none text-green-600"
                            />
                            <input
                                type="text"
                                placeholder="Telefon"
                                required
                                className="w-full h-8 px-2 bg-white placeholder-green-600/90 outline-none text-green-600"
                            />
                            <input
                                type="text"
                                placeholder="Adres e-mail"
                                required
                                className="w-full h-8 px-2 bg-white placeholder-green-600/90 outline-none text-green-600"
                            />
                        </div>
                        <textarea
                            placeholder="Powiedz nam, jakiego mieszkania szukasz?"
                            className="resize-none h-20 lg:h-36 px-2 placeholder-green-600/90 outline-none text-green-600"
                        ></textarea>
                        <div className="flex items-start justify-between lg:justify-start lg:space-x-2 py-2">
                            <input type="checkbox" />
                            <span className="text-xs w-[90%] text-white font-medium">
                                Zgadzam się na przetwarzanie danych osobowych w
                                celu udzielenia odpowiedzi. Zapoznałem się z
                                informacją o przetwarzaniu danych osobowych.
                            </span>
                        </div>
                        <div className="flex items-start justify-between lg:justify-start lg:space-x-2  py-2">
                            <input type="checkbox" />
                            <span className="text-xs w-[90%] text-white font-medium">
                                Zgoda na przetwarzanie danych osobowych w celu
                                otrzymywania infromacji marketingowych.
                                Zapoznałem się z informacją o przetwarzaniu
                                danych osobowych.
                            </span>
                        </div>
                        <button className="w-32 h-10 text-white font-black text-lg mx-auto bg-black hover:scale-105 active:scale-95 duration-100">
                            WYŚLIJ
                        </button>
                    </form>
                </motion.div>
            </AnimatePresence>
        </div>
    )
}

export default Home
