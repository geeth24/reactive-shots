import { useState } from "react"
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
} from "@mantine/core"
import { useDisclosure } from "@mantine/hooks"
import { IconBrandInstagram, IconSun, IconMoonStars } from "@tabler/icons"
// import { MantineLogo } from "@mantine/ds"

import { Link, animateScroll as scroll } from "react-scroll"

const useStyles = createStyles((theme) => ({
    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        height: 56,

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

        [theme.fn.largerThan("sm")]: {
            display: "none",
        },
    },

    links: {
        width: 260,

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
                color: "red",
            }).background,
            color: theme.fn.variant({
                variant: "light",
                color: "red",
            }).color,
        },
    },
}))

interface NavbarProps {
    links: { link: string; label: string }[]
}

export function Navbar({ links }: NavbarProps) {
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

    return (
        <Header
            height={56}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                right: 0,
                zIndex: 999,
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
                {/* <MantineLogo size={28} /> */}
                <Group spacing={5} position="center">
                    <Text
                        size="xl"
                        weight={700}
                        color="red"
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
                        color={dark ? "gray" : "red"}
                    >
                        <IconBrandInstagram size={18} stroke={1.5} />
                    </ActionIcon>
                    <ActionIcon
                        size="lg"
                        color="red"
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
