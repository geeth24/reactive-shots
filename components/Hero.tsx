import {
    createStyles,
    Container,
    Title,
    Text,
    BackgroundImage,
    Image,
} from "@mantine/core"
import { useRef } from "react"
import { Carousel } from "@mantine/carousel"
import Autoplay from "embla-carousel-autoplay"
import { motion } from "framer-motion"
import { Hero } from "../typings"
import { urlFor } from "../sanity"
interface HeroProps {
    hero: Hero[]
}
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
        fontFamily: "Blackmud, sans-serif",
        lineHeight: 1.1,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 40,
            lineHeight: 1.2,
        },
    },

    subtitle: {
        color: theme.white,
        fontSize: 30,
        fontWeight: 400,
        fontFamily: "Black mud, sans-serif",
        lineHeight: 1.1,
        marginTop: theme.spacing.md,

        [theme.fn.smallerThan("sm")]: {
            fontSize: 20,
            lineHeight: 1.2,
        },
    },
}))

function Hero({ hero }: HeroProps) {
    const { classes } = useStyles()
    const autoplay = useRef(Autoplay({ delay: 4000 }))

    const title = "Reactive Shots"
    const subtitle = "Capturing your moment"

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
                {hero
                    .sort((a, b) => a.order - b.order)
                    .map((item, index) => (
                        <Carousel.Slide key={index}>
                            <BackgroundImage
                                className={classes.background}
                                src={urlFor(item.heroImage).url()!}
                                sx={(theme) => ({
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    backgroundImage:
                                        theme.colorScheme === "dark"
                                            ? "linear-gradient(#25262b4a, #1864ab99), url(" +
                                              urlFor(item.heroImage).url() +
                                              ")"
                                            : "linear-gradient(#f8f9fa4a, #339AF099), url(" +
                                              urlFor(item.heroImage).url() +
                                              ")",

                                    height: "100vh",
                                })}
                            ></BackgroundImage>
                        </Carousel.Slide>
                    ))}
            </Carousel>
            <Container className={classes.container}>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    <Image
                        src="/CameraWhite.png"
                        alt="React Shots Logo"
                        width={250}
                        height={250}
                        mb="md"
                    />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.7 }}
                >
                    <Title className={classes.title}>
                        {title.split("").map((char, index) => (
                            <motion.span
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                }}
                            >
                                {char}
                            </motion.span>
                        ))}
                    </Title>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                >
                    <Text className={classes.subtitle}>{subtitle}</Text>
                </motion.div>
            </Container>
        </div>
    )
}

export default Hero
