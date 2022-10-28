import { createStyles, Container, Group, ActionIcon, Text } from "@mantine/core"
import {
    IconBrandNextjs,
    IconBrandMantine,
    IconBrandFramer,
} from "@tabler/icons"
import { animateScroll as scroll } from "react-scroll"

const useStyles = createStyles((theme) => ({
    footer: {
        marginTop: 120,
        borderTop: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[2]
        }`,
    },

    inner: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: theme.spacing.xl,
        paddingBottom: theme.spacing.xl,

        [theme.fn.smallerThan("xs")]: {
            flexDirection: "column",
        },
    },

    links: {
        [theme.fn.smallerThan("xs")]: {
            marginTop: theme.spacing.md,
        },
    },
}))

function Footer() {
    const { classes } = useStyles()

    return (
        <div className={classes.footer}>
            <Container className={classes.inner}>
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
                        }}
                        style={{ cursor: "pointer" }}
                    >
                        Reactive Shots
                    </Text>
                </Group>

                <Group
                    spacing={0}
                    className={classes.links}
                    position="center"
                    noWrap
                >
                    <Text
                        size="sm"
                        weight={500}
                        color="red"
                        sx={{
                            fontFamily: "Lato",
                        }}
                    >
                        © {new Date().getFullYear()} Reactive Shots
                    </Text>
                </Group>
                <Group spacing={5} position="center">
                    <Text size="sm" weight={500} color="red">
                        Built with {` `}
                    </Text>
                    <Group spacing={5}>
                        <ActionIcon
                            component="a"
                            size="sm"
                            color="red"
                            style={{ marginTop: -2 }}
                            href="https://nextjs.org/"
                        >
                            <IconBrandNextjs />
                        </ActionIcon>
                        {` `}
                        <ActionIcon
                            component="a"
                            size="sm"
                            color="red"
                            style={{ marginTop: -2 }}
                            href="https://mantine.dev/"
                        >
                            <IconBrandMantine />
                        </ActionIcon>
                        {` `}
                        <ActionIcon
                            component="a"
                            size="sm"
                            color="red"
                            style={{ marginTop: -2 }}
                            href="https://www.framer.com/motion"
                        >
                            <IconBrandFramer />
                        </ActionIcon>

                        <Text size="sm" weight={500} color="red">
                            {` `} by {` `}
                        </Text>
                        <Text
                            size="sm"
                            weight={500}
                            color="red"
                            onClick={() => {
                                window.open("https://geethg.com")
                            }}
                            style={{ cursor: "pointer" }}
                        >
                            Geeth Gunnampalli
                        </Text>
                    </Group>
                </Group>
            </Container>
        </div>
    )
}

export default Footer
