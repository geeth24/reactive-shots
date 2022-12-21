import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    Button,
} from "@mantine/core"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

const pricingData = [
    {
        title: "Package 1",
        description: [
            {
                title: "1 Hour Photoshoot",
            },
            {
                title: "1 Location",
            },
            {
                title: "20 Edited Images",
            },
            {
                title: "1 Revision",
            },
        ],
        price: "$75",
    },
    {
        title: "Package 2",
        description: [
            {
                title: "Min 3 Hours Photoshoot",
            },
            {
                title: "Event/Party",
            },
            {
                title: "Unlimited Images",
            },
            {
                title: "2 Revision",
            },
        ],
        price: "$60/hr",
        bestValue: true,
    },
    {
        title: "Package 3",
        description: [
            {
                title: "3 Hours Photoshoot",
            },
            {
                title: "2 Location",
            },
            {
                title: "50 Edited Images",
            },
            {
                title: "2 Revision",
            },
        ],
        price: "$300",
    },
]

const useStyles = createStyles((theme) => ({
    root: {
        backgroundColor:
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[0],
        padding: theme.spacing.xl,
        width: "100%",
    },
    title: {
        fontSize: 34,
        fontWeight: 900,
        [theme.fn.smallerThan("sm")]: {
            fontSize: 24,
        },
    },

    description: {
        maxWidth: 600,
        margin: "auto",

        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
            marginLeft: "auto",
            marginRight: "auto",
        },
    },

    card: {
        border: `1px solid ${
            theme.colorScheme === "dark"
                ? theme.colors.dark[5]
                : theme.colors.gray[1]
        }`,
        maxWidth: 400,
        transition: "all 0.3s ease-in-out",

        //hover
        "&:hover": {
            transform: "scale(1.05)",
            transition: "all 0.3s ease-in-out",
        },
    },

    cardTitle: {
        "&::after": {
            content: '""',
            display: "block",
            backgroundColor: theme.fn.primaryColor(),
            width: 45,
            height: 2,
            marginTop: theme.spacing.sm,
        },
    },
}))

function Pricing() {
    const router = useRouter()
    const { p } = router.query
    const pricing = p

    const { classes, theme } = useStyles()
    var pricingVarients

    if (pricing === undefined) {
        pricingVarients = pricingData.map((feature, i) => (
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: i * 0.1,
                    duration: 0.5,
                }}
                key={feature.title}
                viewport={{ once: true, amount: 0.8 }}
            >
                <Card
                    shadow="md"
                    radius="md"
                    className={classes.card}
                    p="xl"
                    //if best value, change color and add badge
                    sx={{
                        backgroundColor:
                            feature.bestValue === true
                                ? theme.colors.blue[9]
                                : "inherit",
                        border:
                            feature.bestValue === true
                                ? "none"
                                : `1px solid ${
                                      theme.colorScheme === "dark"
                                          ? theme.colors.dark[5]
                                          : theme.colors.gray[1]
                                  }`,

                        transform:
                            feature.bestValue === true
                                ? "scale(1.10)"
                                : "inherit",

                        transition: "all 0.3s ease-in-out",

                        //hover
                        "&:hover": {
                            transform:
                                feature.bestValue === true
                                    ? "scale(1.15)"
                                    : "scale(1.05)",
                            transition: "all 0.3s ease-in-out",
                        },
                        zIndex: feature.bestValue === true ? 1 : "inherit",
                    }}
                >
                    <SimpleGrid
                        cols={2}
                        spacing="sm"
                        breakpoints={[{ maxWidth: "lg", cols: 1 }]}
                        //reverse order if best value
                        sx={{
                            display: "flex",
                            flexDirection:
                                feature.bestValue === true
                                    ? "column-reverse"
                                    : "column",
                        }}
                    >
                        <Container>
                            <Text
                                size="lg"
                                weight={500}
                                className={classes.cardTitle}
                                mt="md"
                                sx={{
                                    color:
                                        feature.bestValue === true
                                            ? theme.colorScheme === "dark"
                                                ? "#fff"
                                                : "#fff"
                                            : "inherit",

                                    "&::after": {
                                        backgroundColor:
                                            feature.bestValue === true
                                                ? theme.colorScheme === "dark"
                                                    ? "#fff"
                                                    : "#fff"
                                                : theme.fn.primaryColor(),
                                    },
                                }}
                            >
                                {feature.title}
                            </Text>
                            <Text size="sm" color="dimmed" mt="sm">
                                {feature.description.map((item) => (
                                    <div key={item.title}>
                                        <Text
                                            size="sm"
                                            color="dimmed"
                                            mt="sm"
                                            sx={{
                                                color:
                                                    feature.bestValue === true
                                                        ? theme.colorScheme ===
                                                          "dark"
                                                            ? "#fff"
                                                            : "#fff"
                                                        : "inherit",
                                                "&::before": {
                                                    content: '"✓"',
                                                    color:
                                                        feature.bestValue ===
                                                        true
                                                            ? theme.colorScheme ===
                                                              "dark"
                                                                ? theme.colors
                                                                      .blue[1]
                                                                : theme.colors
                                                                      .blue[1]
                                                            : "inherit",
                                                    marginRight:
                                                        0.5 * theme.spacing.xs,
                                                },
                                            }}
                                        >
                                            {item.title}
                                        </Text>
                                    </div>
                                ))}
                            </Text>
                        </Container>
                        <Container
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                // size={50}
                                weight={500}
                                // className={classes.title}
                                mt="md"
                                sx={{
                                    color:
                                        feature.bestValue === true
                                            ? theme.colorScheme === "dark"
                                                ? "#fff"
                                                : "#fff"
                                            : "inherit",

                                    fontSize:
                                        feature.bestValue === true ? 45 : 50,

                                    "@media (max-width: 600px)": {
                                        fontSize:
                                            feature.bestValue === true
                                                ? 35
                                                : 45,
                                    },
                                }}
                            >
                                {feature.price}
                            </Text>
                        </Container>
                    </SimpleGrid>
                </Card>
            </motion.div>
        ))
    } else {
        //return empty div
        pricingVarients = (
            <motion.div
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{
                    delay: 0.1,
                    duration: 0.5,
                }}
                viewport={{ once: true, amount: 0.8 }}
            >
                <Card shadow="md" radius="md" className={classes.card} p="xl">
                    <Text
                        size="lg"
                        weight={500}
                        className={classes.cardTitle}
                        mt="md"
                    >
                        Ask Geeth for Pricing
                    </Text>
                    <Text size="sm" color="dimmed" mt="sm">
                        Looks like you are a friend or family member of Geeth.
                        Geeth does custom pricing for friends and family. Please
                        contact him for your custom quote. <br />
                        Please do not share this page with anyone else. To share
                        information about Reactive Shots, please use the button
                        below.
                    </Text>
                    <Button
                        mt="xl"
                        variant="outline"
                        color="blue"
                        onClick={() => {
                            navigator.share({
                                title: "Reactive Shots",
                                text: "Check out Reactive Shots!",
                                url: "https://reactiveshots.com",
                            })
                        }}
                    >
                        Trying to share this page? Click here!
                    </Button>
                </Card>
            </motion.div>
        )
    }

    return (
        <div className={classes.root} id="pricing">
            <Container size="lg" py="xl" mb="xl" pt={50}>
                <Group position="center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true, amount: 0.8 }}
                    >
                        <Text
                            size={25}
                            weight={700}
                            color="blue"
                            sx={{
                                fontFamily: "Carter One",
                            }}
                            transform="uppercase"
                        >
                            Pricing
                        </Text>
                    </motion.div>
                </Group>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <Text
                        color="dimmed"
                        className={classes.description}
                        align="center"
                        mt="md"
                    >
                        I offer a variety of pricing options to fit your needs.
                    </Text>
                </motion.div>
                <SimpleGrid
                    cols={pricing === undefined ? 3 : 1}
                    spacing="xl"
                    mt={50}
                    breakpoints={[{ maxWidth: "lg", cols: 1 }]}
                  
                >
                    {pricingVarients}
                </SimpleGrid>
            </Container>
        </div>
    )
}

export default Pricing
