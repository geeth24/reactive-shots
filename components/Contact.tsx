import {
    Paper,
    Text,
    TextInput,
    Textarea,
    Button,
    Group,
    SimpleGrid,
    createStyles,
    Container,
    LoadingOverlay,
} from "@mantine/core"
import axios from "axios"
import React from "react"
import { showNotification } from "@mantine/notifications"
import { motion } from "framer-motion"

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan("sm")

    return {
        root: {
            // backgroundColor:
            //     theme.colorScheme === "dark"
            //         ? theme.colors.dark[5]
            //         : theme.colors.gray[0],
            padding: theme.spacing.xl,
            width: "100%",
        },

        conatiner: {},
        wrapper: {
            display: "flex",
            backgroundColor:
                theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.white,
            borderRadius: theme.radius.lg,
            padding: 4,
            border: `1px solid ${
                theme.colorScheme === "dark"
                    ? theme.colors.dark[8]
                    : theme.colors.gray[2]
            }`,

            [BREAKPOINT]: {
                flexDirection: "column",
            },
        },

        form: {
            boxSizing: "border-box",
            flex: 1,
            padding: theme.spacing.xl,
            paddingLeft: theme.spacing.xl * 2,
            borderLeft: 0,

            [BREAKPOINT]: {
                padding: theme.spacing.md,
                paddingLeft: theme.spacing.md,
            },
        },

        fields: {
            marginTop: -12,
        },

        fieldInput: {
            flex: 1,

            "& + &": {
                marginLeft: theme.spacing.md,

                [BREAKPOINT]: {
                    marginLeft: 0,
                    marginTop: theme.spacing.md,
                },
            },
        },

        fieldsGroup: {
            display: "flex",

            [BREAKPOINT]: {
                flexDirection: "column",
            },
        },

        title: {
            marginBottom: theme.spacing.xl * 1.5,
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,

            [BREAKPOINT]: {
                marginBottom: theme.spacing.xl,
            },
        },

        control: {
            [BREAKPOINT]: {
                flex: 1,
            },
        },
    }
})

function Contact() {
    const { classes } = useStyles()

    const [name, setName] = React.useState("")
    const [email, setEmail] = React.useState("")
    const [subject, setSubject] = React.useState("")
    const [message, setMessage] = React.useState("")
    const [isSubmitting, setIsSubmitting] = React.useState(false)

    const handleSubmit = async (e: { preventDefault: () => void }) => {
        e.preventDefault()
        if (name === "" || email === "" || message === "") {
            showNotification({
                title: "Error",
                message: "Please fill out all fields",
                color: "blue",
                radius: "md",
            })

            return
        } else {
            setIsSubmitting(true)
            showNotification({
                title: "Sending",
                message: "Please wait...",
                color: "blue",
                radius: "md",
            })
            await axios.post(
                "https://mailer.geethg.com/reactiveshots/send",
                new URLSearchParams({
                    name: name,
                    email: email,
                    subject: subject,
                    message: message,
                }),
                {
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                }
            )
            showNotification({
                title: "Success",
                message: "Your message has been sent",
                color: "green",
                radius: "md",
            })

            setIsSubmitting(false)

            setName("")
            setEmail("")
            setSubject("")
            setMessage("")
        }
    }

    return (
        <div className={classes.root} id="contact">
            <Container size="md" mb="lg" className={classes.conatiner}>
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <Text
                        size={25}
                        weight={700}
                        // transform="uppercase"
                        align="center"
                        style={{ fontFamily: "Blackmud" }}
                        color="blue"
                        mb="md"
                    >
                        Contact
                    </Text>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true, amount: 0.8 }}
                >
                    <div style={{ position: "relative" }}>
                        <LoadingOverlay
                            visible={isSubmitting}
                            overlayBlur={2}
                            loaderProps={{ color: "blue", variant: "dots" }}
                        />
                        <Paper shadow="md" radius="lg">
                            <div className={classes.wrapper}>
                                <form
                                    className={classes.form}
                                    onSubmit={(event) => event.preventDefault()}
                                >
                                    <Text
                                        size="lg"
                                        weight={700}
                                        className={classes.title}
                                    >
                                        Get in touch
                                    </Text>

                                    <div className={classes.fields}>
                                        <SimpleGrid
                                            cols={2}
                                            breakpoints={[
                                                { maxWidth: "sm", cols: 1 },
                                            ]}
                                        >
                                            <TextInput
                                                label="Your name"
                                                placeholder="Your name"
                                                value={name}
                                                onChange={(event) =>
                                                    setName(
                                                        event.currentTarget
                                                            .value
                                                    )
                                                }
                                            />
                                            <TextInput
                                                label="Your email"
                                                placeholder="hello@reactiveshots.com"
                                                required
                                                value={email}
                                                onChange={(event) =>
                                                    setEmail(
                                                        event.currentTarget
                                                            .value
                                                    )
                                                }
                                            />
                                        </SimpleGrid>

                                        <TextInput
                                            mt="md"
                                            label="Subject"
                                            placeholder="Subject"
                                            value={subject}
                                            onChange={(event) =>
                                                setSubject(
                                                    event.currentTarget.value
                                                )
                                            }
                                        />

                                        <Textarea
                                            mt="md"
                                            label="Your message"
                                            placeholder="Please include all relevant information"
                                            minRows={3}
                                            required
                                            value={message}
                                            onChange={(event) =>
                                                setMessage(
                                                    event.currentTarget.value
                                                )
                                            }
                                        />

                                        <Group position="right" mt="md">
                                            <Button
                                                type="submit"
                                                className={classes.control}
                                                onClick={handleSubmit}
                                            >
                                                Send message
                                            </Button>
                                        </Group>
                                    </div>
                                </form>
                            </div>
                        </Paper>
                    </div>
                </motion.div>
            </Container>
        </div>
    )
}

export default Contact
