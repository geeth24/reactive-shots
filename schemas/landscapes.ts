import { defineField, defineType } from "sanity"

export default defineType({
    name: "landscapes",
    title: "Landscapes",
    type: "document",
    fields: [
        defineField({
            name: "landscapeName",
            title: "Landscape Name",
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
            name: "landscape",
            title: "Landscape",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
})
