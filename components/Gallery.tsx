import React, { useEffect } from "react"
import { Button, Container, Grid, Tabs, Text, Title } from "@mantine/core"
import { motion } from "framer-motion"

import Image from "next/image"
import { Cars, Events, Landscapes, Portraits } from "../typings"
import { urlFor } from "../sanity"
import GallerySection from "./GallerySection"

// @ts-ignore
interface Props {
    portraits: Portraits[]
    landscapes: Landscapes[]
    cars: Cars[]
    events: Events[]
}

function Gallery({ portraits, landscapes, cars, events }: Props) {
    return (
        <div id="gallery" style={{ overflow: "hidden" }}>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <GallerySection
                    images={portraits
                        .sort((a, b) => {
                            const dateA = new Date(a.date)
                            const dateB = new Date(b.date)
                            return dateA.getTime() - dateB.getTime()
                        })

                        .reverse()
                        .slice(0, 4)
                        .sort((a, b) => {
                            //file name
                            const nameA = a.portraitName.toUpperCase()
                            const nameB = b.portraitName.toUpperCase()
                            if (nameA < nameB) {
                                return -1
                            }
                            if (nameA > nameB) {
                                return 1
                            }
                            return 0
                        })
                        .map((item, i) => (
                            <Grid.Col md={6} lg={3} key={i}>
                                <Image
                                    src={urlFor(item.portrait).url()}
                                    alt={item.portraitName}
                                    width={400}
                                    height={200}
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    key={i}
                                />
                            </Grid.Col>
                        ))}
                    title="Portrait"
                    subtitle="Single / Couple Shoots, Family Shoots, Prom Shoots, Graduation Shoots"
                />
            </motion.div>
            <motion.div
                initial={{ x: 100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <GallerySection
                    images={events
                        .sort((a, b) => {
                            const dateA = new Date(a.date)
                            const dateB = new Date(b.date)
                            return dateA.getTime() - dateB.getTime()
                        })

                        .reverse()
                        .slice(0, 4)
                        .sort((a, b) => {
                            //file name
                            const nameA = a.eventName.toUpperCase()
                            const nameB = b.eventName.toUpperCase()
                            if (nameA < nameB) {
                                return -1
                            }
                            if (nameA > nameB) {
                                return 1
                            }
                            return 0
                        })
                        .map((item, i) => (
                            <Grid.Col md={6} lg={3} key={i}>
                                <Image
                                    src={urlFor(item.event).url()}
                                    alt={item.eventName}
                                    width={4000}
                                    height={6000}
                                    style={{
                                        objectFit: "cover",
                                        objectPosition: "center",
                                        width: "100%",
                                        height: "100%",
                                    }}
                                    key={i}
                                />
                            </Grid.Col>
                        ))}
                    title="Event"
                    subtitle="House Warming, Gradution Parties, Indian Festivals, Birthday Parties"
                />
            </motion.div>
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.3 }}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            >
                <GallerySection
                    images={cars
                        .sort((a, b) => {
                            const dateA = new Date(a.date)
                            const dateB = new Date(b.date)
                            return dateA.getTime() - dateB.getTime()
                        })

                        .reverse()
                        .slice(0, 4)
                        .sort((a, b) => {
                            //file name
                            const nameA = a.carName.toUpperCase()
                            const nameB = b.carName.toUpperCase()
                            if (nameA < nameB) {
                                return -1
                            }
                            if (nameA > nameB) {
                                return 1
                            }
                            return 0
                        })
                        .map((item, i) => (
                            <Grid.Col md={6} lg={3} key={i}>
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
                                    key={i}
                                />
                            </Grid.Col>
                        ))}
                    title="Car"
                    subtitle="Car Shoots, Car + Model Shoots"
                />
            </motion.div>
        </div>
    )
}

export default Gallery
