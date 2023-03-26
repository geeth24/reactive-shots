import { defineField, defineType } from "sanity"

export default defineType({
    name: "client",
    title: "Client",
    type: "document",
    fields: [
        defineField({
            name: "firstName",
            title: "First Name",
            type: "string",
        }),
        defineField({
            name: "lastName",
            title: "Last Name",
            type: "string",
        }),
        defineField({
            name: "instagram",
            title: "Instagram",
            type: "string",
        }),
        defineField({
            name: "slug",
            title: "Slug",
            type: "slug",
            options: {
                source: (doc) => `${doc.firstName} ${doc.lastName}`,
                maxLength: 96,
            },
        }),
    ],
})
