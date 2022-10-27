import { Hero } from "../components/Hero"
import dynamic from "next/dynamic"
import { Suspense } from "react"

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
                <Hero />
                <Gallery />
            </Suspense>
        </>
    )
}
