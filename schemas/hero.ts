import { defineField, defineType } from "sanity"

export default defineType({
    name: "hero",
    title: "Hero",
    type: "document",
    fields: [
        defineField({
            name: "heroImageName",
            title: "Hero Image Name",
            type: "string",
        }),
        defineField({
            name: "order",
            title: "Order",
            type: "number",
        }),
        defineField({
            name: "heroImage",
            title: "Hero Image",
            type: "image",
            options: {
                hotspot: true,
            },
        }),
    ],
})
