import { Global } from "@mantine/core"

export function CustomFonts() {
    return (
        <Global
            styles={(theme) => [
                {
                    "@font-face": {
                        fontFamily: "Lato",
                        src: `url('/fonts/Lato-Bold.ttf') format('truetype')`,
                        fontWeight: 700,
                        fontStyle: "normal",
                    },
                },
                {
                    "@font-face": {
                        fontFamily: "Lato",
                        src: `url('/fonts/Lato-Regular.ttf') format('truetype')`,
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                {
                    "@font-face": {
                        fontFamily: "Carter One",
                        src: `url('/fonts/CarterOne-Regular.ttf') format('truetype')`,
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },

                {
                    "@font-face": {
                        fontFamily: "Blackmud",
                        src: `url('/fonts/Blackmud-VGoOx.ttf') format('truetype')`,
                        fontWeight: 400,
                        fontStyle: "normal",
                    },
                },
                //disable scrollbars
                {
                    "::-webkit-scrollbar": {
                        width: 0,
                        height: 0,
                    },
                },
                {
                    ".custom-wrapper-class": {
                        display: "grid",
                        gridTemplateColumns: "repeat(3, 1fr)",
                        gridGap: "1rem",

                        "@media (max-width: 768px)": {
                            gridTemplateColumns: "repeat(2, 1fr)",
                        },
                    },
                    ".custom-wrapper-class2": {
                        display: "grid",
                        gridTemplateColumns: "repeat(4, 1fr)",
                        gridGap: "1rem",

                        "@media (max-width: 768px)": {
                            gridTemplateColumns: "repeat(3, 1fr)",
                        },
                    },
                    ".custom-wrapper-class3": {
                       width: "100%",
                       height: "100%",
                    },
                },
                {
                    ".active": {
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
                {
                    ".my-masonry-grid": {
                        display: "flex",
                        marginLeft: "-30px",
                        width: "auto",
                    },
                    ".my-masonry-grid_column": {
                        paddingLeft: "30px",
                        backgroundClip: "padding-box",
                    },
                    ".my-masonry-grid_column > div": {
                        marginBottom: "30px",
                        background: "white",
                        borderRadius: "5px",
                        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
                    },
                },
            ]}
        />
    )
}
