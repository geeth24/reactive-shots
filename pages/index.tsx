import { Hero } from "../components/Hero"
import dynamic from "next/dynamic"
import { Suspense } from "react"
import { Navbar } from "../components/Navbar"
import { Contact } from "../components/Contact"
import { Footer } from "../components/Footer"

const Gallery = dynamic(
    () => import("../components/Gallery").then((mod) => mod.Gallery),
    {
        ssr: false,
    }
)
export default function Home() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Navbar
                    links={[
                        { link: "home", label: "Home" },
                        { link: "gallery", label: "Gallery" },
                        { link: "contact", label: "Contact" },
                    ]}
                />
                <Hero />
                <Gallery />
                <Contact />
                <Footer />
            </Suspense>
        </>
    )
}
