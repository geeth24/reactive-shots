import React, { useEffect } from "react"
//@ts-ignore
// import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"
// import "lightgallery.js/dist/css/lightgallery.css"
import { Container, Tabs, Text } from "@mantine/core"
import { motion } from "framer-motion"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import LightGallery from "lightgallery/react"
import Image from "next/image"
import { Cars, Events, Landscapes, Portraits } from "../typings"
import { urlFor } from "../sanity"

import "lightbox.js-react/dist/index.css"
// @ts-ignore
import { SlideshowLightbox, initLightboxJS } from "lightbox.js-react"
interface Props {
    portraits: Portraits[]
    landscapes: Landscapes[]
    cars: Cars[]
    events: Events[]
}

function Gallery({ portraits, landscapes, cars, events }: Props) {
    const onInit = () => {
        // console.log("lightGallery has been initialized")
    }

    useEffect(() => {
        initLightboxJS("Insert License key", "individual")
    })

    return (
        <Container size="lg" id="gallery" mb="xl" pt={50}>
            <Tabs defaultValue="portrait" color="blue">
                <Tabs.List position="center">
                    <Tabs.Tab value="event">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <Text
                                size="xl"
                                weight={700}
                                color="blue"
                                sx={{
                                    fontFamily: "Black mud",
                                }}
                                // transform="uppercase"
                            >
                                Event
                            </Text>
                        </motion.div>
                    </Tabs.Tab>

                    <Tabs.Tab value="portrait">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <Text
                                size="xl"
                                weight={700}
                                color="blue"
                                sx={{
                                    fontFamily: "Black mud",
                                }}
                                // transform="uppercase"
                            >
                                Portrait
                            </Text>
                        </motion.div>
                    </Tabs.Tab>
                    <Tabs.Tab value="landscape">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <Text
                                size="xl"
                                weight={700}
                                color="blue"
                                sx={{
                                    fontFamily: "Black mud",
                                }}
                                // transform="uppercase"
                            >
                                Landscape
                            </Text>
                        </motion.div>
                    </Tabs.Tab>
                    <Tabs.Tab value="car">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                            viewport={{ once: true, amount: 0.8 }}
                        >
                            <Text
                                size="xl"
                                weight={700}
                                color="blue"
                                sx={{
                                    fontFamily: "Black mud",
                                }}
                                // transform="uppercase"
                            >
                                Car
                            </Text>
                        </motion.div>
                    </Tabs.Tab>
                </Tabs.List>
                <Tabs.Panel value="event" pt="xs">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <LightGallery
                            onInit={onInit}
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            licenseKey="YOUR_KEY"
                            download={false}
                            elementClassNames="custom-wrapper-class2"
                        >
                            {events
                                .sort((a, b) => {
                                    const dateA = new Date(a.date)
                                    const dateB = new Date(b.date)
                                    return dateA.getTime() - dateB.getTime()
                                })
                                .reverse()
                                .map((item, i) => (
                                    <motion.a
                                        href={urlFor(item.event).url()}
                                        data-sub-html={`<h4>${item.eventName}</h4>`}
                                        key={i + 1}
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: (i * 0.05) / 2,
                                            duration: 0.5,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.8,
                                        }}
                                    >
                                        <Image
                                            src={urlFor(item.event).url()}
                                            alt={item.eventName}
                                            width={400}
                                            height={200}
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </motion.a>
                                ))}
                        </LightGallery>
                        {/* <SlideshowLightbox
                            lightboxIdentifier="lightbox1"
                            framework="next"
                            images={events.map((item) => [
                                {
                                    src: urlFor(item.event).url(),
                                    alt: item.eventName,
                                },
                            ])}
                        >
                            {events
                                .sort((a, b) => {
                                    const dateA = new Date(a.date)
                                    const dateB = new Date(b.date)
                                    return dateA.getTime() - dateB.getTime()
                                })
                                .reverse()
                                .map((item, i) => (
                                    // <motion.a
                                    //     href={urlFor(item.event).url()}
                                    //     data-sub-html={`<h4>${item.eventName}</h4>`}
                                    //     key={i + 1}
                                    //     initial={{ y: 50, opacity: 0 }}
                                    //     whileInView={{ y: 0, opacity: 1 }}
                                    //     transition={{
                                    //         delay: (i * 0.05) / 2,
                                    //         duration: 0.5,
                                    //     }}
                                    //     viewport={{
                                    //         once: true,
                                    //         amount: 0.8,
                                    //     }}
                                    // >
                                    <Image
                                        src={urlFor(item.event).url()}
                                        alt={item.eventName}
                                        width={400}
                                        height={200}
                                        style={{
                                            objectFit: "cover",
                                            objectPosition: "center",
                                            width: "100%",
                                            height: "100%",
                                        }}
                                        data-lightboxjs="lightbox1"
                                    />
                                    // </motion.a>
                                ))}
                        </SlideshowLightbox> */}
                    </motion.div>
                </Tabs.Panel>
                <Tabs.Panel value="landscape" pt="xs">
                    <motion.div
                    // initial={{ opacity: 0, y: 100 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    // viewport={{ once: true, amount: 0.8 }}
                    >
                        <LightGallery
                            onInit={onInit}
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            licenseKey="YOUR_KEY"
                            download={false}
                            elementClassNames="custom-wrapper-class"
                        >
                            {landscapes
                                .sort((a, b) => {
                                    const dateA = new Date(a.date)
                                    const dateB = new Date(b.date)
                                    return dateA.getTime() - dateB.getTime()
                                })
                                .reverse()
                                .map((item, i) => (
                                    <motion.a
                                        href={urlFor(item.landscape).url()}
                                        data-sub-html={`<h4>${item.location.name}</h4>`}
                                        key={i + 1}
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: (i * 0.05) / 2,
                                            duration: 0.5,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.8,
                                        }}
                                    >
                                        <Image
                                            src={urlFor(item.landscape).url()}
                                            alt={item.landscapeName}
                                            width={400}
                                            height={200}
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </motion.a>
                                ))}
                        </LightGallery>
                    </motion.div>
                </Tabs.Panel>

                <Tabs.Panel value="portrait" pt="xs">
                    <motion.div
                    // initial={{ opacity: 0, y: 100 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    // viewport={{ once: true, amount: 0.8 }}
                    >
                        <LightGallery
                            onInit={onInit}
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            licenseKey="YOUR_KEY"
                            download={false}
                            elementClassNames="custom-wrapper-class2"
                        >
                            {portraits
                                .sort((a, b) => {
                                    const dateA = new Date(a.date)
                                    const dateB = new Date(b.date)
                                    return dateA.getTime() - dateB.getTime()
                                })
                                .reverse()
                                .map((item, i) => (
                                    <motion.a
                                        href={urlFor(item.portrait).url()}
                                        data-sub-html={`<h4>${
                                            item.client.firstName
                                        } ${item.client.lastName}</h4>
                                       <a href="https://www.instagram.com/${
                                           item.client.instagram === "None"
                                               ? ""
                                               : item.client.instagram
                                       }
                                       
                                       " target="_blank" rel="noopener noreferrer" style="text-decoration: none;">${
                                           item.client.instagram === "None"
                                               ? ""
                                               : "@" + item.client.instagram
                                       }</a>
                                        `}
                                        key={i + 1}
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: (i * 0.05) / 2,
                                            duration: 0.5,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.8,
                                        }}
                                    >
                                        <Image
                                            src={urlFor(item.portrait).url()}
                                            alt={item.client.firstName}
                                            width={200}
                                            height={400}
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </motion.a>
                                ))}
                        </LightGallery>
                    </motion.div>
                </Tabs.Panel>
                <Tabs.Panel value="car" pt="xs">
                    <motion.div
                    // initial={{ opacity: 0, y: 100 }}
                    // whileInView={{ opacity: 1, y: 0 }}
                    // transition={{ duration: 0.5 }}
                    // viewport={{ once: true, amount: 0.8 }}
                    >
                        <LightGallery
                            onInit={onInit}
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            licenseKey="YOUR_KEY"
                            download={false}
                            elementClassNames="custom-wrapper-class"
                        >
                            {cars
                                .sort((a, b) => {
                                    const dateA = new Date(a.date)
                                    const dateB = new Date(b.date)
                                    return dateA.getTime() - dateB.getTime()
                                })
                                .reverse()
                                .map((item, i) => (
                                    <motion.a
                                        href={urlFor(item.car).url()}
                                        data-sub-html={`<h4>${item.carName} (${item.carModelYear})</h4> <p>${item.client.firstName} ${item.client.lastName}</p>`}
                                        key={i + 1}
                                        initial={{ y: 50, opacity: 0 }}
                                        whileInView={{ y: 0, opacity: 1 }}
                                        transition={{
                                            delay: (i * 0.05) / 2,
                                            duration: 0.5,
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.8,
                                        }}
                                    >
                                        <Image
                                            src={urlFor(item.car).url()}
                                            alt={item.carName}
                                            width={400}
                                            height={200}
                                            style={{
                                                objectFit: "cover",
                                                objectPosition: "center",
                                                width: "100%",
                                                height: "100%",
                                            }}
                                        />
                                    </motion.a>
                                ))}
                        </LightGallery>
                    </motion.div>
                </Tabs.Panel>
            </Tabs>
        </Container>
    )
}

export default Gallery
