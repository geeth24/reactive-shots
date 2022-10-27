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
} from "@mantine/core"

const useStyles = createStyles((theme) => {
    const BREAKPOINT = theme.fn.smallerThan("sm")

    return {
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

export function Contact() {
    const { classes } = useStyles()

    return (
        <Container size="md" mt="lg" mb="lg" id="contact">
            <Text
                size={25}
                weight={700}
                transform="uppercase"
                align="center"
                style={{ fontFamily: "Carter One, sans-serif" }}
                color="red"
            >
                Contact
            </Text>

            <Paper shadow="md" radius="lg">
                <div className={classes.wrapper}>
                    <form
                        className={classes.form}
                        onSubmit={(event) => event.preventDefault()}
                    >
                        <Text size="lg" weight={700} className={classes.title}>
                            Get in touch
                        </Text>

                        <div className={classes.fields}>
                            <SimpleGrid
                                cols={2}
                                breakpoints={[{ maxWidth: "sm", cols: 1 }]}
                            >
                                <TextInput
                                    label="Your name"
                                    placeholder="Your name"
                                />
                                <TextInput
                                    label="Your email"
                                    placeholder="hello@reactiveshots.com"
                                    required
                                />
                            </SimpleGrid>

                            <TextInput
                                mt="md"
                                label="Subject"
                                placeholder="Subject"
                                required
                            />

                            <Textarea
                                mt="md"
                                label="Your message"
                                placeholder="Please include all relevant information"
                                minRows={3}
                            />

                            <Group position="right" mt="md">
                                <Button
                                    type="submit"
                                    className={classes.control}
                                >
                                    Send message
                                </Button>
                            </Group>
                        </div>
                    </form>
                </div>
            </Paper>
        </Container>
    )
}
