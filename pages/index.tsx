import dynamic from "next/dynamic"
import { Suspense } from "react"

const Hero = dynamic(
    () => import("../components/Hero").then((mod) => mod.Hero),
    { ssr: false }
)

export default function Home() {
    return (
        <>
            <Suspense fallback={<div>Loading...</div>}>
                <Hero />
            </Suspense>
        </>
    )
}
