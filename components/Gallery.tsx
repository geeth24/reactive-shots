import React from "react"
//@ts-ignore
// import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"
// import "lightgallery.js/dist/css/lightgallery.css"
import { Container, Image, Tabs, Text } from "@mantine/core"
import { motion } from "framer-motion"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import LightGallery from "lightgallery/react"
import { events, landscapes, portraits } from "./GallaryData"

function Gallery() {
    const onInit = () => {
        console.log("lightGallery has been initialized")
    }

    return (
        <Container size="lg" id="gallery" mb="xl" pt={50}>
            <Tabs defaultValue="portrait" color="red">
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
                                color="red"
                                sx={{
                                    fontFamily: "Carter One",
                                }}
                                transform="uppercase"
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
                                color="red"
                                sx={{
                                    fontFamily: "Carter One",
                                }}
                                transform="uppercase"
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
                                color="red"
                                sx={{
                                    fontFamily: "Carter One",
                                }}
                                transform="uppercase"
                            >
                                Landscape
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
                            elementClassNames="custom-wrapper-class"
                        >
                            {events.map((item, i) => (
                                <motion.a
                                    href={`/event/${item.name}.jpeg`}
                                    data-sub-html={`<h4>${item.event}</h4>`}
                                    key={i + 1}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: i * 0.1,
                                        duration: 0.5,
                                    }}
                                    viewport={{ once: true, amount: 0.8 }}
                                >
                                    <Image
                                        src={`/event/${item.name}.jpeg`}
                                        alt={item.name}
                                    />
                                </motion.a>
                            ))}
                        </LightGallery>
                    </motion.div>
                </Tabs.Panel>
                <Tabs.Panel value="landscape" pt="xs">
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
                            elementClassNames="custom-wrapper-class"
                        >
                            {landscapes.map((item, i) => (
                                <motion.a
                                    href={`/landscape/${item.name}.jpeg`}
                                    data-sub-html={`<h4>${item.location}</h4>`}
                                    key={i + 1}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: i * 0.1,
                                        duration: 0.5,
                                    }}
                                    viewport={{ once: true, amount: 0.8 }}
                                >
                                    <Image
                                        src={`/landscape/${item.name}.jpeg`}
                                        alt={item.name}
                                    />
                                </motion.a>
                            ))}
                        </LightGallery>
                    </motion.div>
                </Tabs.Panel>

                <Tabs.Panel value="portrait" pt="xs">
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
                            elementClassNames="custom-wrapper-class"
                        >
                            {portraits.map((item, i) => (
                                <motion.a
                                    href={`/portrait/${item.name}.jpeg`}
                                    data-sub-html={`<h4>${item.model}</h4>`}
                                    key={i + 1}
                                    initial={{ y: 50, opacity: 0 }}
                                    whileInView={{ y: 0, opacity: 1 }}
                                    transition={{
                                        delay: i * 0.1,
                                        duration: 0.5,
                                    }}
                                    viewport={{ once: true, amount: 0.8 }}
                                >
                                    <Image
                                        src={`/portrait/${item.name}.jpeg`}
                                        alt={item.name}
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
