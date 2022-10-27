import {
    createStyles,
    Container,
    Title,
    Text,
    BackgroundImage,
} from "@mantine/core"
import { useRef } from "react"
import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
const useStyles = createStyles((theme) => ({
    root: {
        position: "relative",
    },

    background: {
        paddingTop: theme.spacing.xl * 3,
        paddingBottom: theme.spacing.xl * 3,
    },

    container: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,

        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",

        // paddingBottom: theme.spacing.xl * 6,
        zIndex: 1,

        [theme.fn.smallerThan("sm")]: {
            paddingBottom: theme.spacing.xl * 3,
        },
    },

    title: {
        color: theme.white,
        fontSize: 80,
        fontWeight: 400,
        fontFamily: "Carter One, sans-serif",
        lineHeight: 1.1,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 40,
            lineHeight: 1.2,
        },
    },

    subtitle: {
        color: theme.white,
        fontSize: 20,
        fontWeight: 400,
        fontFamily: "Lato, sans-serif",
        lineHeight: 1.1,
        marginTop: theme.spacing.md,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 16,
            lineHeight: 1.2,
        },
    },
}))

export function Hero() {
    const { classes } = useStyles()
    const autoplay = useRef(Autoplay({ delay: 4000 }))

    return (
        <div className={classes.root} id="home">
            <Carousel
                mx="auto"
                height="100vh"
                withIndicators
                plugins={[autoplay.current]}
                onMouseEnter={autoplay.current.stop}
                onMouseLeave={autoplay.current.reset}
                styles={{
                    indicator: {
                        width: 12,
                        height: 4,
                        transition: "width 250ms ease",

                        "&[data-active]": {
                            width: 40,
                        },
                    },
                    control: {
                        "&[data-inactive]": {
                            opacity: 0,
                            cursor: "default",
                        },

                        "@media (max-width: 600px)": {
                            display: "none",
                        },
                    },
                }}
            >
                <Carousel.Slide>
                    <BackgroundImage
                        className={classes.background}
                        src="/RSLogo.jpeg"
                        sx={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/RSLogo.jpeg')",
                            height: "100vh",
                        }}
                    ></BackgroundImage>
                </Carousel.Slide>
                <Carousel.Slide>
                    <BackgroundImage
                        className={classes.background}
                        src="/hero/IMG_0501.jpeg"
                        sx={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero/IMG_0501.jpeg')",
                            height: "100vh",
                        }}
                    ></BackgroundImage>
                </Carousel.Slide>

                <Carousel.Slide>
                    <BackgroundImage
                        className={classes.background}
                        src="/hero/Vegas-10.jpeg"
                        sx={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero/Vegas-10.jpeg')",
                            height: "100vh",
                        }}
                    ></BackgroundImage>
                </Carousel.Slide>
                <Carousel.Slide>
                    <BackgroundImage
                        className={classes.background}
                        src="/hero/No Prom-107.jpeg"
                        sx={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero/No Prom-107.jpeg')",
                            height: "100vh",
                        }}
                    ></BackgroundImage>
                </Carousel.Slide>
                <Carousel.Slide>
                    <BackgroundImage
                        className={classes.background}
                        src="/hero/ReactShots 4-min.jpeg"
                        sx={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero/ReactShots 4-min.jpeg')",
                            height: "100vh",
                        }}
                    ></BackgroundImage>
                </Carousel.Slide>
                <Carousel.Slide>
                    <BackgroundImage
                        className={classes.background}
                        src="/hero/ReactShots 15-min.jpeg"
                        sx={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero/ReactShots 15-min.jpeg')",
                            height: "100vh",
                        }}
                    ></BackgroundImage>
                </Carousel.Slide>
                <Carousel.Slide>
                    <BackgroundImage
                        className={classes.background}
                        src="/hero/ReactShots 24-min.jpeg"
                        sx={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero/ReactShots 24-min.jpeg')",
                            height: "100vh",
                        }}
                    ></BackgroundImage>
                </Carousel.Slide>
                <Carousel.Slide>
                    <BackgroundImage
                        className={classes.background}
                        src="/hero/ReactShots 25-min.jpeg"
                        sx={{
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            backgroundImage:
                                "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/hero/ReactShots 25-min.jpeg')",
                            height: "100vh",
                        }}
                    ></BackgroundImage>
                </Carousel.Slide>
            </Carousel>
            <Container className={classes.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Title className={classes.title}>Reactive Shots</Title>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1 }}
                >
                    <Text className={classes.subtitle}>
                        Event, Portrait, and Landscape Photography
                    </Text>
                </motion.div>
            </Container>
        </div>
    )
}
