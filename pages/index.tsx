// import { Hero } from "../components/Hero"
import { Loader } from "@mantine/core"
// import dynamic from "next/dynamic"
// import { Suspense } from "react"
import Contact from "../components/Contact"
import Gallery from "../components/Gallery"
import HeroComp from "../components/Hero"
import Pricing from "../components/Pricing"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { GetServerSideProps } from "next"
import { sanityClient } from "../sanity"
import { Cars, Events, Hero, Landscapes, Portraits } from "../typings"
import Head from "next/head"

interface Props {
    portraits: Portraits[]
    landscapes: Landscapes[]
    cars: Cars[]
    events: Events[]
    hero: Hero[]
}

export default function Home({
    portraits,
    landscapes,
    cars,
    events,
    hero,
}: Props) {
    const renderLoader = () => {
        return (
            <div style={{ height: "100vh" }}>
                <div
                    style={{
                        position: "absolute",
                        top: "50%",
                        left: "50%",
                        transform: "translate(-50%, -50%)",
                    }}
                >
                    <Loader size="lg" />
                </div>
            </div>
        )
    }
    return (
        <>
            {/* <Suspense fallback={renderLoader()}> */}
            <div>
                <Head>
                    <title>
                        Reactive Shots | Professional Photography Services
                    </title>
                </Head>
                <Navbar
                    links={[
                        { link: "home", label: "Home" },
                        { link: "gallery", label: "Gallery" },
                        { link: "pricing", label: "Pricing" },
                        { link: "contact", label: "Contact" },
                    ]}
                />
                <HeroComp hero={hero} />
                <Gallery
                    portraits={portraits}
                    landscapes={landscapes}
                    cars={cars}
                    events={events}
                />
                <Pricing />
                <Contact />
                <Footer />
            </div>
            {/* </Suspense> */}
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const query = `
{
    "hero": *[_type == 'hero']{
    _id,
    order,
    heroImage,
    },
      "events": *[_type == 'events']{
    _id,
    eventName,
    date,
    event,
},
     "portraits": *[_type == 'portraits']{
  _id,
    portraitName,
    date,
    location->{
      name
    },
    client->{
      _id,
      firstName,
      lastName,
      instagram,
       slug{
              current
            },
    },
  portrait
    
},
  "landscapes": *[_type == 'landscapes']{
    _id,
    landscapeName,
    date,
    location->{
        name
    },
    landscape
} ,

  "cars": *[_type == 'cars']{
    _id,
    carName,
    carModelYear,
    date,
    client->{
        _id,
        firstName,
        lastName,
    },
    car
} 
 

}  
`

    const data = await sanityClient.fetch(query)

    return {
        props: {
            portraits: data.portraits,
            landscapes: data.landscapes,
            cars: data.cars,
            events: data.events,
            hero: data.hero,
        },
    }
}
