import { defineField, defineType } from "sanity"

export default defineType({
    name: "portraits",
    title: "Portraits",
    type: "document",
    fields: [
        defineField({
            name: "portraitName",
            title: "Portrait Name",
            type: "string",
        }),
        defineField({
            name: "location",
            title: "Location",
            type: "reference",
            to: { type: "location" },
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
        }),
        defineField({
            name: "client",
            title: "Client",
            type: "reference",
            to: { type: "client" },
        }),
        defineField({
            name: "portrait",
            title: "Portrait",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
})
