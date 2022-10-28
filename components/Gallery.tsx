import React from "react"
//@ts-ignore
// import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"
// import "lightgallery.js/dist/css/lightgallery.css"
import { Container, Grid, Image, Tabs, Text } from "@mantine/core"
import { motion } from "framer-motion"
import "lightgallery/css/lightgallery.css"
import "lightgallery/css/lg-zoom.css"
import "lightgallery/css/lg-thumbnail.css"

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail"
import lgZoom from "lightgallery/plugins/zoom"
import LightGallery from "lightgallery/react"

function Gallery() {
    const onInit = () => {
        console.log("lightGallery has been initialized")
    }
    return (
        <Container size="lg" id="gallery" mb="xl">
            <Tabs defaultValue="portrait" color="red">
                <Tabs.List position="center">
                    <Tabs.Tab value="event">
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
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
                    >
                        <LightGallery
                            onInit={onInit}
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            licenseKey="YOUR_KEY"
                            elementClassNames="custom-wrapper-class"
                        >
                            {[...Array(7)].map((_, i) => (
                                <a
                                    href={`/event/Event${i + 1}.jpeg`}
                                    data-sub-html={`<h4>Event ${i + 1}</h4>`}
                                    key={i + 1}
                                >
                                    <Image
                                        src={`/event/Event${i + 1}.jpeg`}
                                        alt="event"
                                    />
                                </a>
                            ))}
                        </LightGallery>
                    </motion.div>
                </Tabs.Panel>
                <Tabs.Panel value="landscape" pt="xs">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <LightGallery
                            onInit={onInit}
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            licenseKey="YOUR_KEY"
                            elementClassNames="custom-wrapper-class"
                        >
                            {[...Array(11)].map((_, i) => (
                                <a
                                    href={`/landscape/Landscape${i + 1}.jpeg`}
                                    data-sub-html={`<h4>Landscape ${
                                        i + 1
                                    }</h4>`}
                                    key={i + 1}
                                >
                                    <Image
                                        src={`/landscape/Landscape${
                                            i + 1
                                        }.jpeg`}
                                        alt="landscape"
                                    />
                                </a>
                            ))}
                        </LightGallery>
                    </motion.div>
                </Tabs.Panel>

                <Tabs.Panel value="portrait" pt="xs">
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <LightGallery
                            onInit={onInit}
                            speed={500}
                            plugins={[lgThumbnail, lgZoom]}
                            licenseKey="YOUR_KEY"
                            elementClassNames="custom-wrapper-class"
                        >
                            {[...Array(12)].map((_, i) => (
                                <a
                                    href={`/portrait/Portrait${i + 1}.jpeg`}
                                    data-sub-html={`<h4>Portrait ${i + 1}</h4>`}
                                    key={i + 1}
                                >
                                    <Image
                                        src={`/portrait/Portrait${i + 1}.jpeg`}
                                        alt="portrait"
                                    />
                                </a>
                            ))}
                        </LightGallery>
                    </motion.div>
                </Tabs.Panel>
            </Tabs>
        </Container>
    )
}

export default Gallery
