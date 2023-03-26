import { defineField, defineType } from "sanity"

export default defineType({
    name: "location",
    title: "Location",
    type: "document",
    fields: [
        defineField({
            name: "name",
            title: "Location Name",
            type: "string",
        }),
    ],
})
