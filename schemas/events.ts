import { defineField, defineType } from "sanity"

export default defineType({
    name: "events",
    title: "Events",
    type: "document",
    fields: [
        defineField({
            name: "eventImageName",
            title: "Event Image Name",
            type: "string",
        }),
        defineField({
            name: "eventName",
            title: "Event Name",
            type: "string",
        }),
        defineField({
            name: "date",
            title: "Date",
            type: "date",
        }),
        defineField({
            name: "event",
            title: "Event",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
})
