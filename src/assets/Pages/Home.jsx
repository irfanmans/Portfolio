import { useTypewriter } from "react-simple-typewriter";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import Button from "../Components/Button/index.jsx";
import ProfileImages from "../images/profile-img.png";

export default function Home() {
    const [typeEffect] = useTypewriter({
        words: ["Front End Developer", "UI UX Design", "React Developer"],
        loop: {},
        typeSpeed: 80,
        deleteSpeed: 80,
    });
    return (
        <>
            <article className="px-10 pt-12">
                <div className="text-white">
                    <span className="font-dancingScript tracking-wide">Hi, There...</span>
                    <h1 className="text-2xl font-bold mt-4">
                        <span className="text-yellow-500">Irfan Mulya</span>
                    </h1>
                    <span>Iam into {typeEffect}</span>
                    <p className="mt-4 font-extralight">
                        Halo, perkenalkan, saya <span className="font-bold">Irfan Mulya</span>, seorang Front-End Web Developer yang bersemangat untuk menciptakan pengalaman pengguna web yang menarik dan responsif.
                    </p>
                </div>
                <Button className="py-2 px-3 bg-indigo-600 mt-4 rounded-md text-white font-light text-sm">Baca Selengkapnya</Button>
                <div className="flex gap-4 text-2xl mt-5 text-white">
                    <a href="https://www.instagram.com/irfaannnmly/" target="_blank" className="p-2 bg-yellow-600 rounded-md hover:bg-white hover:text-yellow-600">
                        <FaInstagram />
                    </a>
                    <a href="https://www.linkedin.com/in/irfan-mulya-19508b257/" target="_blank" className="p-2 bg-yellow-600 rounded-md hover:bg-white hover:text-yellow-600">
                        <FaLinkedin />
                    </a>
                </div>
                <div className="">
                    <img src={ProfileImages} className="max-w-72 mx-auto rounded-full " alt="" />
                </div>
            </article>
        </>
    );
}
