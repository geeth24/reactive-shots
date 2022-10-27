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
import { LazyLoadComponent } from "react-lazy-load-image-component"

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
    const autoplay = useRef(Autoplay({ delay: 2000 }))

    return (
        <div className={classes.root}>
            <LazyLoadComponent>
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
                        },
                    }}
                >
                    <Carousel.Slide>
                        <BackgroundImage
                            className={classes.background}
                            src="/RSLogo.jpg"
                            sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage:
                                    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/RSLogo.jpg')",
                                height: "100vh",
                            }}
                        ></BackgroundImage>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <BackgroundImage
                            className={classes.background}
                            src="/IMG_0501.jpg"
                            sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage:
                                    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/IMG_0501.jpg')",
                                height: "100vh",
                            }}
                        ></BackgroundImage>
                    </Carousel.Slide>

                    <Carousel.Slide>
                        <BackgroundImage
                            className={classes.background}
                            src="/Vegas-10.jpg"
                            sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage:
                                    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/Vegas-10.jpg')",
                                height: "100vh",
                            }}
                        ></BackgroundImage>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <BackgroundImage
                            className={classes.background}
                            src="/No Prom-107.jpg"
                            sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage:
                                    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/No Prom-107.jpg')",
                                height: "100vh",
                            }}
                        ></BackgroundImage>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <BackgroundImage
                            className={classes.background}
                            src="/photographer/ReactShots 4-min.jpg"
                            sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage:
                                    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/photographer/ReactShots 4-min.jpg')",
                                height: "100vh",
                            }}
                        ></BackgroundImage>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <BackgroundImage
                            className={classes.background}
                            src="/photographer/ReactShots 15-min.jpg"
                            sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage:
                                    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/photographer/ReactShots 15-min.jpg')",
                                height: "100vh",
                            }}
                        ></BackgroundImage>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <BackgroundImage
                            className={classes.background}
                            src="/photographer/ReactShots 24-min.jpg"
                            sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage:
                                    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/photographer/ReactShots 24-min.jpg')",
                                height: "100vh",
                            }}
                        ></BackgroundImage>
                    </Carousel.Slide>
                    <Carousel.Slide>
                        <BackgroundImage
                            className={classes.background}
                            src="/photographer/ReactShots 25-min.jpg"
                            sx={{
                                backgroundSize: "cover",
                                backgroundPosition: "center",
                                backgroundImage:
                                    "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/photographer/ReactShots 25-min.jpg')",
                                height: "100vh",
                            }}
                        ></BackgroundImage>
                    </Carousel.Slide>
                </Carousel>
                <Container className={classes.container}>
                    <Title className={classes.title}>Reactive Shots</Title>
                    <Text className={classes.subtitle}>
                        Event, Portrait, and Landscape Photography
                    </Text>
                </Container>
            </LazyLoadComponent>
        </div>
    )
}
