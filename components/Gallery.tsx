import React from "react"
//@ts-ignore
import { LightgalleryProvider, LightgalleryItem } from "react-lightgallery"
import "lightgallery.js/dist/css/lightgallery.css"
import { Container, Grid, Image, Tabs, Text } from "@mantine/core"
import { motion } from "framer-motion"

interface GalleryProps {
    image: string
    title: string
    url: string
}
const PhotoItem = ({ image, title, url }: GalleryProps) => (
    <div>
        <LightgalleryItem group="any" src={image}>
            <Image src={image} alt={title} />
        </LightgalleryItem>
    </div>
)
export function Gallery() {
    return (
        <LightgalleryProvider
            lightgallerySettings={
                {
                    // settings: https://sachinchoolur.github.io/lightgallery.js/docs/api.html
                }
            }
            galleryClassName="my_custom_classname"
        >
            <Container size="lg">
                <Tabs defaultValue="landscape" color="red">
                    <Tabs.List position="center">
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
                        {/* <Tabs.Tab value="event">
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                Event
                            </motion.div>
                        </Tabs.Tab> */}
                    </Tabs.List>
                    <Tabs.Panel value="landscape" pt="xs">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Grid>
                                {[...Array(11)].map((_, i) => (
                                    <Grid.Col key={i} span={4}>
                                        <PhotoItem
                                            key={i}
                                            image={`/landscape/Landscape${
                                                i + 1
                                            }.jpeg`}
                                            title="Landscape"
                                            url="/landscape"
                                        />
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </motion.div>
                    </Tabs.Panel>

                    <Tabs.Panel value="portrait" pt="xs">
                        <motion.div
                            initial={{ opacity: 0, y: 100 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <Grid>
                                {[...Array(22)].map((_, i) => (
                                    <Grid.Col key={i} span={4}>
                                        <PhotoItem
                                            key={i}
                                            image={`/portrait/Portrait${
                                                i + 1
                                            }.jpeg`}
                                            title="Portrait"
                                            url="/portrait"
                                        />
                                    </Grid.Col>
                                ))}
                            </Grid>
                        </motion.div>
                    </Tabs.Panel>
                </Tabs>
            </Container>
        </LightgalleryProvider>
    )
}
