import React from "react"
import { Grid, Container, Title } from "@mantine/core"
import { urlFor } from "../sanity"

interface Props {
    images: any
    title: string
    subtitle: string
}

function GallerySection({ images, title, subtitle }: Props) {
    return (
        <Grid
            grow
            gutter={1}
            sx={{
                height: "100vh",
                position: "relative",
                overflow: "hidden",
            }}
            mt={1}
        >
            <div
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "100vh",
                    background:
                        "linear-gradient(180deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,1) 100%)",
                    zIndex: 10,
                }}
            ></div>
            {images}
            <Container
                sx={{
                    zIndex: 20,
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    position: "absolute",
                    textAlign: `${title === "Event" ? "right" : "left"}`,
                    width: "100%",
                }}
            >
                <Title
                    weight={700}
                    sx={(theme) => ({
                        fontFamily: "Blackmud",
                        color: theme.colors.blue[5],
                        fontSize: "2.5rem",
                        marginBottom: theme.spacing.md,
                        lineHeight: 2,

                        [theme.fn.smallerThan("xs")]: {
                            fontSize: "2rem",
                        },

                        [theme.fn.largerThan("lg")]: {
                            fontSize: "3rem",
                        },
                    })}
                >
                    {title} <br /> Photography
                </Title>
                <Title
                    weight={700}
                    // color="white"
                    sx={(theme) => ({
                        fontFamily: "Lato",
                        fontSize: "3rem",
                        marginBottom: "1rem",

                        [theme.fn.smallerThan("md")]: {
                            fontSize: "2.5rem",
                        },

                        [theme.fn.largerThan("lg")]: {
                            fontSize: "3.5rem",
                        },
                        color: "transparent",
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        backgroundImage: `linear-gradient(180deg, rgba(255,255,255,1) 0%, rgba(255,255,255,0.2) 100%)`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        overflow: "hidden",
                    })}
                >
                    {subtitle.split(",").map((line) => (
                        <div key={line}>
                            {line}
                            <br />
                        </div>
                    ))}
                </Title>
            </Container>
        </Grid>
    )
}

export default GallerySection
