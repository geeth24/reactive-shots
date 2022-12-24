import { useEffect, useState } from "react"
import {
    createStyles,
    Header,
    Group,
    ActionIcon,
    Container,
    Burger,
    Transition,
    Paper,
    Text,
    useMantineColorScheme,
    Image,
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconBrandInstagram, IconSun, IconMoonStars } from "@tabler/icons"
// import { MantineLogo } from "@mantine/ds"
import { motion } from "framer-motion"

import { Link, animateScroll as scroll } from "react-scroll"

const useStyles = createStyles((theme) => ({
    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 56,
        maxWidth: 1200,

        [theme.fn.smallerThan("sm")]: {
            justifyContent: "flex-start",
        },
    },

    dropdown: {
        position: "absolute",
        top: 60,
        left: 0,
        right: 0,
        zIndex: 999,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: "hidden",
        marginTop: -5,

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    links: {
        // width: 260,

        [theme.fn.smallerThan("sm")]: {
            display: "none",
        },
    },

    social: {
        width: 260,

        [theme.fn.smallerThan("sm")]: {
            width: "auto",
            marginLeft: "auto",
        },
    },

    burger: {
        marginRight: theme.spacing.md,

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    link: {
        display: "block",
        lineHeight: 1,
        padding: "8px 12px",
        borderRadius: theme.radius.sm,
        textDecoration: "none",
        color:
            theme.colorScheme === "dark"
                ? theme.colors.dark[0]
                : theme.colors.gray[7],

        fontSize: theme.fontSizes.sm,
        fontWeight: 500,

        "&:hover": {
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[6]
                    : theme.colors.gray[0],
        },

        [theme.fn.smallerThan("sm")]: {
            borderRadius: 0,
            padding: theme.spacing.md,
        },
    },

    linkActive: {
        "&, &:hover": {
            backgroundColor: theme.fn.variant({
                variant: "light",
                color: "blue",
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: "blue",
            }).color,
        },
    },
}))

interface NavbarProps {
    links: { link: string; label: string }[]
}

function Navbar({ links }: NavbarProps) {
    const [opened, { toggle }] = useDisclosure(false)
    const [active, setActive] = useState(links[0].link)
    const { classes, cx } = useStyles()

    const items = links.map((link) => (
        <Link
            key={link.link}
            to={link.link}
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            className={cx(
                classes.link,
                active === link.link && classes.linkActive
            )}
            onClick={() => {
                setActive(link.link)
                toggle()
            }}
            style={{ cursor: "pointer" }}
        >
            {link.label}
        </Link>
    ))

    const { colorScheme, toggleColorScheme } = useMantineColorScheme()
    const dark = colorScheme === "dark"

    const [heroVisible, setHeroVisible] = useState(true)

    useEffect(() => {
        //if scroll position is hitting id="gallery" then set heroVisible to false
        const handleScroll = () => {
            const gallery = document.getElementById("gallery")
            if (gallery) {
                const galleryTop = gallery.getBoundingClientRect().top
                if (galleryTop < 50) {
                    setHeroVisible(false)
                    console.log("heroVisible", heroVisible)
                } else {
                    setHeroVisible(true)
                    console.log("heroVisible", heroVisible)
                }
            }
        }

        //add event listener to window
        window.addEventListener("scroll", handleScroll)
    }, [])

    return (
        <Header
            height={56}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
                backdropFilter: "blur(15px)",
                backgroundColor: dark ? "#25262bc2" : "#f8f9fac2",
                WebkitBackdropFilter: "blur(15px)",
            }}
        >
            <Container className={classes.inner}>
                <Burger
                    opened={opened}
                    onClick={toggle}
                    size="sm"
                    className={classes.burger}
                />

                <Group className={classes.links} spacing={5}>
                    {items}
                </Group>
                <Transition
                    transition="pop-top-right"
                    duration={200}
                    mounted={opened}
                >
                    {(styles) => (
                        <Paper
                            className={classes.dropdown}
                            withBorder
                            style={styles}
                        >
                            {items}
                        </Paper>
                    )}
                </Transition>

                {!heroVisible && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <Group
                            spacing={5}
                            position="center"
                            sx={{
                                // marginLeft: 10,
                                marginRight: 20,
                            }}
                        >
                            <Image
                                src={dark ? "/Camera.png" : "/CameraLight.png"}
                                width={25}
                                height={25}
                                alt="Picture of the Reactive Shots Logo"
                            />
                            <Text
                                size="xl"
                                weight={700}
                                color="blue"
                                sx={{
                                    fontFamily: "Carter One",
                                }}
                                transform="uppercase"
                                onClick={() => {
                                    scroll.scrollToTop()
                                    setActive(links[0].link)
                                }}
                                style={{ cursor: "pointer" }}
                            >
                                Reactive Shots
                            </Text>
                        </Group>
                    </motion.div>
                )}

                <Group
                    spacing={0}
                    className={classes.social}
                    position="right"
                    noWrap
                >
                    <ActionIcon
                        size="lg"
                        component="a"
                        href="https://instagram.com/reactiveshots"
                        //open in new tab
                        target="_blank"
                        rel="noopener noreferrer"
                        color={dark ? "gray" : "blue"}
                    >
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        color="blue"
                        onClick={() => toggleColorScheme()}
                        title="Toggle color scheme"
                    >
                        {dark ? (
                            <IconSun size={18} />
                        ) : (
                            <IconMoonStars size={18} />
                        )}
                    </ActionIcon>
                </Group>
            </Container>
        </Header>
    )
}

export default Navbar
